import queryString from "query-string";

import SearchModule from "./modules/search.js";
import TracksModule from "./modules/tracks.js";
import UsersModule from "./modules/users.js";
import PlaylistsModule from "./modules/playlists.js";
import MediaModule from "./modules/media.js";
import DiscoverModule from "./modules/discover.js";

class SoundCloudAPI {
  constructor(options = {}) {
    // Chỉ sử dụng client ID được cung cấp, không có giá trị mặc định
    this.clientId = options.clientId;
    this.baseURL = "https://api-v2.soundcloud.com";
    this.appVersion = options.appVersion || "1753870647";
    this.appLocale = options.appLocale || "en";
    this.autoFetchClientId = options.autoFetchClientId !== false;
    this.clientIdCache = {
      value: this.clientId,
      expirationTime: this.clientId ? Date.now() + 900000 : 0, // Nếu không có clientId, đặt expirationTime = 0 để buộc fetch
    };
    this.clientIdPromise = null; // Track ongoing client ID fetch requests

    this.headers = {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36",
      Accept: "application/json, text/javascript, */*; q=0.01",
      Origin: "https://soundcloud.com",
      Referer: "https://soundcloud.com/",
      "Accept-Language": "en,vi;q=0.9,en-US;q=0.8",
    };

    this.search = new SearchModule(this);
    this.tracks = new TracksModule(this);
    this.users = new UsersModule(this);
    this.playlists = new PlaylistsModule(this);
    this.media = new MediaModule(this);
    this.discover = new DiscoverModule(this);

    // Luôn fetch client ID khi autoFetchClientId là true
    if (this.autoFetchClientId) {
      // Không await ở đây để tránh làm constructor trở thành async
      // this._initClientId();
    }
  }

  async _initClientId() {
    try {
      const newClientId = await this.getClientId(); // Use getClientId to avoid duplication
    } catch (error) {
      console.error(
        "[SOUNDCLOUD] Error initializing client ID:",
        error.message,
      );
    }
  }

  async getClientId() {
    // Nếu không có clientId hoặc cache đã hết hạn, fetch mới
    if (
      this.autoFetchClientId &&
      (!this.clientId || Date.now() > this.clientIdCache.expirationTime)
    ) {
      try {
        // If there's already a fetch in progress, return that promise
        if (this.clientIdPromise) {
          return await this.clientIdPromise;
        }

        // Create a new promise for fetching the client ID
        this.clientIdPromise = this.fetchClientIdFromWeb();

        const newClientId = await this.clientIdPromise;
        if (newClientId) {
          this.clientId = newClientId;
          this.clientIdCache = {
            value: newClientId,
            expirationTime: Date.now() + 180000, // 3 minutes
          };
        }

        // Clear the promise after it's resolved
        this.clientIdPromise = null;
      } catch (error) {
        // Clear the promise if there's an error
        this.clientIdPromise = null;
        console.error("[SOUNDCLOUD] Error fetching client ID:", error.message);
      }
    }

    return this.clientId;
  }

  async fetchClientIdFromWeb() {
    const webURL = "https://www.soundcloud.com/";
    let script = "";

    try {
      // console.log("[SOUNDCLOUD] Fetching client ID from web...");
      // Fetch the main SoundCloud page
      const response = await fetch(webURL, {
        headers: this.headers,
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch SoundCloud page: ${response.status}`);
      }

      const html = await response.text();

      // Extract script URLs
      const scriptUrlRegex =
        /(?!<script crossorigin src=")https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*\.js)(?=">)/g;
      const urls = html.match(scriptUrlRegex) || [];

      if (urls.length === 0) {
        throw new Error("No script URLs found in SoundCloud page");
      }

      // Find the script containing the client ID
      for (let i = urls.length - 1; i >= 0; i--) {
        const scriptUrl = urls[i];
        // console.log(`[SOUNDCLOUD] Checking script: ${scriptUrl}`);

        const scriptResponse = await fetch(scriptUrl, {
          headers: this.headers,
        });

        if (!scriptResponse.ok) continue;

        script = await scriptResponse.text();

        if (script.includes(',client_id:"')) {
          const match = script.match(/,client_id:"(\w+)"/);
          if (match && match[1]) {
            const clientId = match[1];
            // console.log(`[SOUNDCLOUD] Found client ID: ${clientId}`);
            return clientId;
          }
        }
      }

      // Nếu không tìm thấy client ID trong bất kỳ script nào
      throw new Error("Client ID not found in any script");
    } catch (error) {
      console.error(
        "[SOUNDCLOUD] Error in fetchClientIdFromWeb:",
        error.message,
      );
      throw error; // Ném lại lỗi để caller xử lý
    }
  }

  async request(endpoint, params = {}, customBaseURL) {
    // Get the latest client ID before making the request
    const clientId = await this.getClientId();

    if (!clientId) {
      throw new Error(
        "SoundCloud API Error: No client ID available. Please provide a client ID or enable autoFetchClientId.",
      );
    }

    const defaultParams = {
      client_id: clientId,
      app_version: this.appVersion,
      app_locale: this.appLocale,
    };

    const queryParams = queryString.stringify({
      ...defaultParams,
      ...params,
    });
    const url = customBaseURL ? `${customBaseURL}${endpoint}?${queryParams}` 
              : `${this.baseURL}${endpoint}?${queryParams}`;

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: this.headers,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          `SoundCloud API Error: ${response.status} - ${JSON.stringify(errorData)}`,
        );
      }

      return await response.json();
    } catch (error) {
      if (error.name === "AbortError") {
        throw new Error("SoundCloud API Error: Request was aborted");
      } else if (error.name === "TypeError") {
        throw new Error("SoundCloud API Error: Network error");
      } else {
        throw error;
      }
    }
  }
}

export default SoundCloudAPI;
