class SearchModule {
  constructor(api) {
    this.api = api;
  }

  /**
   * Tìm kiếm tất cả (tracks, users, albums, playlists)
   * @param {string} query - Từ khóa tìm kiếm
   * @param {Object} options - Các tùy chọn
   * @param {number} [options.limit=20] - Số lượng kết quả tối đa
   * @param {number} [options.offset=0] - Vị trí bắt đầu
   * @param {string} [options.facet='model'] - Loại facet
   * @param {boolean} [options.linked_partitioning=1] - Phân trang liên kết
   * @returns {Promise<Object>} Kết quả tìm kiếm
   */
  all(query, options = {}) {
    const defaultOptions = {
      q: query,
      limit: 20,
      offset: 0,
      facet: 'model',
      linked_partitioning: 1
    };

    return this.api.request("/search", {
      ...defaultOptions,
      ...options
    });
  }

  /**
   * Tìm kiếm bài hát
   * @param {string} query - Từ khóa tìm kiếm
   * @param {Object} options - Các tùy chọn
   * @param {number} [options.limit=20] - Số lượng kết quả tối đa
   * @param {number} [options.offset=0] - Vị trí bắt đầu
   * @param {string} [options.facet='genre'] - Loại facet
   * @param {boolean} [options.linked_partitioning=1] - Phân trang liên kết
   * @returns {Promise<Object>} Kết quả tìm kiếm bài hát
   */
  tracks(query, options = {}) {
    const defaultOptions = {
      q: query,
      limit: 20,
      offset: 0,
      facet: 'genre',
      linked_partitioning: 1
    };

    return this.api.request("/search/tracks", {
      ...defaultOptions,
      ...options
    });
  }

  /**
   * Tìm kiếm người dùng
   * @param {string} query - Từ khóa tìm kiếm
   * @param {Object} options - Các tùy chọn
   * @param {number} [options.limit=20] - Số lượng kết quả tối đa
   * @param {number} [options.offset=0] - Vị trí bắt đầu
   * @param {string} [options.facet='place'] - Loại facet
   * @param {boolean} [options.linked_partitioning=1] - Phân trang liên kết
   * @returns {Promise<Object>} Kết quả tìm kiếm người dùng
   */
  users(query, options = {}) {
    const defaultOptions = {
      q: query,
      limit: 20,
      offset: 0,
      facet: 'place',
      linked_partitioning: 1
    };

    return this.api.request("/search/users", {
      ...defaultOptions,
      ...options
    });
  }

  /**
   * Tìm kiếm album
   * @param {string} query - Từ khóa tìm kiếm
   * @param {Object} options - Các tùy chọn
   * @param {number} [options.limit=20] - Số lượng kết quả tối đa
   * @param {number} [options.offset=0] - Vị trí bắt đầu
   * @param {string} [options.facet='genre'] - Loại facet
   * @param {boolean} [options.linked_partitioning=1] - Phân trang liên kết
   * @returns {Promise<Object>} Kết quả tìm kiếm album
   */
  albums(query, options = {}) {
    const defaultOptions = {
      q: query,
      limit: 20,
      offset: 0,
      facet: 'genre',
      linked_partitioning: 1
    };

    return this.api.request("/search/albums", {
      ...defaultOptions,
      ...options
    });
  }

  /**
   * Tìm kiếm playlist
   * @param {string} query - Từ khóa tìm kiếm
   * @param {Object} options - Các tùy chọn
   * @param {number} [options.limit=20] - Số lượng kết quả tối đa
   * @param {number} [options.offset=0] - Vị trí bắt đầu
   * @param {string} [options.facet='genre'] - Loại facet
   * @param {boolean} [options.linked_partitioning=1] - Phân trang liên kết
   * @returns {Promise<Object>} Kết quả tìm kiếm playlist
   */
  playlists(query, options = {}) {
    const defaultOptions = {
      q: query,
      limit: 20,
      offset: 0,
      facet: 'genre',
      linked_partitioning: 1
    };

    return this.api.request("/search/playlists_without_albums", {
      ...defaultOptions,
      ...options
    });
  }

  /**
   * Tìm kiếm bài hát theo thể loại
   * @param {string} genre - Thể loại
   * @param {Object} options - Các tùy chọn
   * @param {number} [options.limit=10] - Số lượng kết quả tối đa
   * @param {number} [options.offset=0] - Vị trí bắt đầu
   * @param {string} [options.sort='popular'] - Sắp xếp theo
   * @param {boolean} [options.linked_partitioning=1] - Phân trang liên kết
   * @returns {Promise<Object>} Kết quả tìm kiếm bài hát theo thể loại
   */
  byGenre(genre, options = {}) {
    const defaultOptions = {
      q: '*',
      'filter.genre_or_tag': genre,
      sort: 'popular',
      limit: 10,
      offset: 0,
      linked_partitioning: 1
    };

    return this.api.request("/search/tracks", {
      ...defaultOptions,
      ...options
    });
  }
}

export default SearchModule;
