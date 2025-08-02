class DiscoverModule {
  constructor(api) {
    this.api = api;
  }

  /**
   * Lấy nội dung trang chủ
   * @param {Object} options - Các tùy chọn
   * @param {number} [options.limit=10] - Số lượng mục tối đa
   * @param {number} [options.offset=0] - Vị trí bắt đầu
   * @param {boolean} [options.linked_partitioning=1] - Phân trang liên kết
   * @returns {Promise<Object>} Nội dung trang chủ
   */
  getHomeContent(options = {}) {
    const defaultOptions = {
      limit: 10,
      offset: 0,
      linked_partitioning: 1
    };

    return this.api.request("/mixed-selections", {
      ...defaultOptions,
      ...options
    });
  }

  /**
   * Lấy bài hát mới theo thể loại
   * @param {string} genre - Thể loại
   * @param {Object} options - Các tùy chọn
   * @param {number} [options.limit=10] - Số lượng mục tối đa
   * @param {number} [options.offset=0] - Vị trí bắt đầu
   * @param {boolean} [options.linked_partitioning=1] - Phân trang liên kết
   * @returns {Promise<Object>} Danh sách bài hát mới
   */
  getRecentTracks(genre = "all genres", options = {}) {
    const defaultOptions = {
      limit: 10,
      offset: 0,
      linked_partitioning: 1
    };

    return this.api.request(`/recent-tracks/${encodeURIComponent(genre)}`, {
      ...defaultOptions,
      ...options
    });
  }

  /**
   * Lấy bài hát mới theo quốc gia
   * @param {Object} options - Các tùy chọn
   * @param {number} [options.limit=10] - Số lượng mục tối đa
   * @param {number} [options.offset=0] - Vị trí bắt đầu
   * @param {boolean} [options.linked_partitioning=1] - Phân trang liên kết
   * @returns {Promise<Object>} Danh sách bài hát mới theo quốc gia
   */
  getRecentTracksByCountry(options = {}) {
    const defaultOptions = {
      limit: 10,
      offset: 0,
      linked_partitioning: 1
    };

    return this.api.request("/recent-tracks/country", {
      ...defaultOptions,
      ...options
    });
  }
}

export default DiscoverModule;
