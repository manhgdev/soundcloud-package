class TracksModule {
  constructor(api) {
    this.api = api;
  }

  getMultiple(ids) {
    if (!Array.isArray(ids)) {
      throw new Error("IDs must be an array");
    }

    return this.api.request("/tracks", {
      ids: ids.join(","),
    });
  }

  /**
   * Lấy bình luận của một bài hát
   * @param {number} trackId - ID của bài hát
   * @param {Object} options - Các tùy chọn
   * @param {number} [options.limit=200] - Số lượng bình luận tối đa
   * @param {number} [options.offset=0] - Vị trí bắt đầu
   * @param {boolean} [options.threaded=0] - Có hiển thị theo thread hay không
   * @param {boolean} [options.linked_partitioning=1] - Phân trang liên kết
   * @returns {Promise<Object>} Danh sách bình luận
   */
  getComments(trackId, options = {}) {
    const defaultOptions = {
      threaded: 0,
      limit: 200,
      offset: 0,
      linked_partitioning: 1
    };

    return this.api.request(`/tracks/${trackId}/comments`, {
      ...defaultOptions,
      ...options
    });
  }

  /**
   * Lấy các bài hát liên quan
   * @param {number} trackId - ID của bài hát
   * @param {Object} options - Các tùy chọn
   * @param {number} [options.limit=10] - Số lượng bài hát tối đa
   * @param {number} [options.offset=0] - Vị trí bắt đầu
   * @param {boolean} [options.linked_partitioning=1] - Phân trang liên kết
   * @returns {Promise<Object>} Danh sách bài hát liên quan
   */
  getRelated(trackId, options = {}) {
    const defaultOptions = {
      limit: 10,
      offset: 0,
      linked_partitioning: 1
    };

    return this.api.request(`/tracks/${trackId}/related`, {
      ...defaultOptions,
      ...options
    });
  }

  /**
   * Lấy detail oembed của bài hát
   * @param {string} oembed - oembed của bài hát
   * @returns {Promise<string>} 
   */
  async getOembed(url, options = {}) {
    try { 
      const defaultOptions = {
        format: "json",
        url: url,
        maxwidth: 600,
        auto_play: false,
        ...options
      };

      const trackInfo = await this.api.request(`/oembed`, defaultOptions, "https://soundcloud.com");

      if (!trackInfo) {
        throw new Error("Track oembed information not available");
      }

      return trackInfo;
    } catch (error) {
      throw new Error(`Failed to get oembed URL: ${error.message}`);
    }
  }

   /**
   * Lấy detail của bài hát
   * @param {string} URL - URL của bài hát
   * @returns {Promise<string>} 
   */
   async getResolveUrl(url) {
    try {
      let normalizedUrl = url;

      if (url.includes('on.soundcloud.com')) {
        const data = await this.getOembed(url);
        const iframeSrc = data.html.match(/src="([^"]+)"/)[1];
        normalizedUrl = decodeURIComponent(iframeSrc.split('&url=')[1].split('&')[0]);
      }
      const trackInfo = await this.api.request(`/resolve`, { url: normalizedUrl });

      if (!trackInfo) {
        throw new Error("Track Resolve information not available");
      }

      return trackInfo;
    } catch (error) {
      throw new Error(`Failed to get Resolve URL: ${error.message}`);
    }
  }

  /**
   * Lấy URL stream của bài hát
   * @param {number} trackId - ID của bài hát
   * @returns {Promise<string>} URL stream
   */
  async getStreamUrl(trackId) {
    try {
      const trackInfo = await this.api.request(`/tracks/${trackId}`);

      if (!trackInfo || !trackInfo.media || !trackInfo.media.transcodings) {
        throw new Error("Track streaming information not available");
      }

      const hlsTranscoding = trackInfo.media.transcodings.find(
        (t) =>
          t.format.protocol === "hls" && t.format.mime_type === "audio/mpeg",
      );

      if (!hlsTranscoding) {
        throw new Error("HLS streaming not available for this track");
      }

      const mediaUrl = hlsTranscoding.url;
      const mediaTranscodingId = mediaUrl.split("/").pop();

      const streamInfo = await this.api.request(
        `/media/soundcloud:tracks:${trackId}/${mediaTranscodingId}/stream/hls`,
        { track_authorization: trackInfo.track_authorization },
      );

      return streamInfo.url;
    } catch (error) {
      throw new Error(`Failed to get stream URL: ${error.message}`);
    }
  }
}

export default TracksModule;
