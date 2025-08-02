class PlaylistsModule {
  constructor(api) {
    this.api = api;
  }

  /**
   * Lấy thông tin playlist
   * @param {number} playlistId - ID của playlist
   * @param {Object} options - Các tùy chọn
   * @param {string} [options.representation='full'] - Kiểu biểu diễn
   * @returns {Promise<Object>} Thông tin playlist
   */
  getPlaylist(playlistId, options = {}) {
    const defaultOptions = {
      representation: 'full'
    };

    return this.api.request(`/playlists/${playlistId}`, {
      ...defaultOptions,
      ...options
    });
  }

  /**
   * Lấy danh sách người thích playlist
   * @param {number} playlistId - ID của playlist
   * @param {Object} options - Các tùy chọn
   * @param {number} [options.limit=9] - Số lượng mục tối đa
   * @param {number} [options.offset=0] - Vị trí bắt đầu
   * @param {boolean} [options.linked_partitioning=1] - Phân trang liên kết
   * @returns {Promise<Object>} Danh sách người thích
   */
  getLikers(playlistId, options = {}) {
    const defaultOptions = {
      limit: 9,
      offset: 0,
      linked_partitioning: 1
    };

    return this.api.request(`/playlists/${playlistId}/likers`, {
      ...defaultOptions,
      ...options
    });
  }

  /**
   * Lấy danh sách người repost playlist
   * @param {number} playlistId - ID của playlist
   * @param {Object} options - Các tùy chọn
   * @param {number} [options.limit=9] - Số lượng mục tối đa
   * @param {number} [options.offset=0] - Vị trí bắt đầu
   * @param {boolean} [options.linked_partitioning=1] - Phân trang liên kết
   * @returns {Promise<Object>} Danh sách người repost
   */
  getReposters(playlistId, options = {}) {
    const defaultOptions = {
      limit: 9,
      offset: 0,
      linked_partitioning: 1
    };

    return this.api.request(`/playlists/${playlistId}/reposters`, {
      ...defaultOptions,
      ...options
    });
  }

  /**
   * Lấy playlist theo thể loại
   * @param {string} genre - Thể loại
   * @param {Object} options - Các tùy chọn
   * @param {number} [options.limit=10] - Số lượng mục tối đa
   * @param {number} [options.offset=0] - Vị trí bắt đầu
   * @param {boolean} [options.linked_partitioning=1] - Phân trang liên kết
   * @returns {Promise<Object>} Danh sách playlist
   */
  getByGenre(genre, options = {}) {
    const defaultOptions = {
      tag: genre,
      limit: 10,
      offset: 0,
      linked_partitioning: 1
    };

    return this.api.request("/playlists/discovery", {
      ...defaultOptions,
      ...options
    });
  }
}

export default PlaylistsModule;
