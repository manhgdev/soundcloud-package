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
