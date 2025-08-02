import { httpsGet } from './https.js'

class MediaModule {
  constructor(api) {
    this.api = api;
  }

  getStreamURL(mediaUrl, trackAuthorization, clientId) {
    return `${mediaUrl}?client_id=${clientId}&track_authorization=${trackAuthorization}`;
  }

  async getPlaybackUrl(trackId) {
    try {
      return await this.getMediaUrl(trackId, "hls");
    } catch (error) {
      throw new Error(`Failed to get playback URL: ${error.message}`);
    }
  }

  async getDownloadUrl(trackId) {
    try {
      return await this.getMediaUrl(trackId, "progressive");
    } catch (error) {
      throw new Error(`Failed to get download URL: ${error.message}`);
    }
  }

  async getMediaUrl(trackId, protocol = "hls") {
    try {
      const track = await this.api.tracks.getMultiple([trackId]);

      if (!track || !track.length || !track[0]) {
        throw new Error("Track not found");
      }

      const trackData = track[0];

      if (
        !trackData.media ||
        !trackData.media.transcodings ||
        !trackData.media.transcodings.length
      ) {
        throw new Error("No media transcodings available for this track");
      }

      const transcoding = trackData.media.transcodings.find(
        (t) =>
          t.format.protocol === protocol && t.format.mime_type === "audio/mpeg",
      );

      if (!transcoding) {
        throw new Error(`No suitable ${protocol} media transcoding found`);
      }

      const mediaUrl = transcoding.url;

      const urlRequest = this.getStreamURL(
        mediaUrl,
        trackData.track_authorization,
        this.api.clientId,
      );

      const response = await httpsGet(urlRequest);

      return {
        streamUrl: response.url,
        ...trackData
      }
    } catch (error) {
      throw new Error(`Failed to get media URL: ${error.message}`);
    }
  }
}

export default MediaModule;
