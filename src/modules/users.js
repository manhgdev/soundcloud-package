class UsersModule {
  constructor(api) {
    this.api = api;
  }

  /**
   * Lấy thông tin người dùng
   * @param {number} userId - ID của người dùng
   * @returns {Promise<Object>} Thông tin người dùng
   */
  getUser(userId) {
    return this.api.request(`/users/${userId}`);
  }

  /**
   * Lấy spotlight của người dùng
   * @param {number} userId - ID của người dùng
   * @param {Object} options - Các tùy chọn
   * @param {number} [options.limit=10] - Số lượng mục tối đa
   * @param {number} [options.offset=0] - Vị trí bắt đầu
   * @param {boolean} [options.linked_partitioning=1] - Phân trang liên kết
   * @returns {Promise<Object>} Spotlight của người dùng
   */
  getSpotlight(userId, options = {}) {
    const defaultOptions = {
      limit: 10,
      offset: 0,
      linked_partitioning: 1
    };

    return this.api.request(`/users/${userId}/spotlight`, {
      ...defaultOptions,
      ...options
    });
  }

  /**
   * Lấy danh sách hồ sơ nổi bật của người dùng
   * @param {number} userId - ID của người dùng
   * @param {Object} options - Các tùy chọn
   * @param {number} [options.limit=10] - Số lượng mục tối đa
   * @param {number} [options.offset=0] - Vị trí bắt đầu
   * @param {boolean} [options.linked_partitioning=1] - Phân trang liên kết
   * @returns {Promise<Object>} Danh sách hồ sơ nổi bật
   */
  getFeaturedProfiles(userId, options = {}) {
    const defaultOptions = {
      limit: 10,
      offset: 0,
      linked_partitioning: 1
    };

    return this.api.request(`/users/${userId}/featured-profiles`, {
      ...defaultOptions,
      ...options
    });
  }

  /**
   * Lấy danh sách bài hát được thích
   * @param {number} userId - ID của người dùng
   * @param {Object} options - Các tùy chọn
   * @param {number} [options.limit=10] - Số lượng mục tối đa
   * @param {number} [options.offset=0] - Vị trí bắt đầu
   * @param {boolean} [options.linked_partitioning=1] - Phân trang liên kết
   * @returns {Promise<Object>} Danh sách bài hát được thích
   */
  getLikes(userId, options = {}) {
    const defaultOptions = {
      limit: 10,
      offset: 0,
      linked_partitioning: 1
    };

    return this.api.request(`/users/${userId}/likes`, {
      ...defaultOptions,
      ...options
    });
  }

  /**
   * Lấy danh sách người đang theo dõi
   * @param {number} userId - ID của người dùng
   * @param {Object} options - Các tùy chọn
   * @param {number} [options.limit=3] - Số lượng mục tối đa
   * @param {number} [options.offset=0] - Vị trí bắt đầu
   * @param {boolean} [options.linked_partitioning=1] - Phân trang liên kết
   * @returns {Promise<Object>} Danh sách người đang theo dõi
   */
  getFollowings(userId, options = {}) {
    const defaultOptions = {
      limit: 3,
      offset: 0,
      linked_partitioning: 1
    };

    return this.api.request(`/users/${userId}/followings`, {
      ...defaultOptions,
      ...options
    });
  }

  /**
   * Lấy danh sách nghệ sĩ liên quan
   * @param {number} userId - ID của người dùng
   * @param {Object} options - Các tùy chọn
   * @param {number} [options.limit=12] - Số lượng mục tối đa
   * @param {number} [options.offset=0] - Vị trí bắt đầu
   * @param {boolean} [options.linked_partitioning=1] - Phân trang liên kết
   * @param {boolean} [options.creators_only=false] - Chỉ hiển thị người tạo
   * @param {number} [options.page_size=12] - Kích thước trang
   * @returns {Promise<Object>} Danh sách nghệ sĩ liên quan
   */
  getRelatedArtists(userId, options = {}) {
    const defaultOptions = {
      creators_only: false,
      page_size: 12,
      limit: 12,
      offset: 0,
      linked_partitioning: 1
    };

    return this.api.request(`/users/${userId}/relatedartists`, {
      ...defaultOptions,
      ...options
    });
  }

  /**
   * Lấy danh sách bình luận của người dùng
   * @param {number} userId - ID của người dùng
   * @param {Object} options - Các tùy chọn
   * @param {number} [options.limit=20] - Số lượng mục tối đa
   * @param {number} [options.offset=0] - Vị trí bắt đầu
   * @param {boolean} [options.linked_partitioning=1] - Phân trang liên kết
   * @returns {Promise<Object>} Danh sách bình luận
   */
  getComments(userId, options = {}) {
    const defaultOptions = {
      limit: 20,
      offset: 0,
      linked_partitioning: 1
    };

    return this.api.request(`/users/${userId}/comments`, {
      ...defaultOptions,
      ...options
    });
  }

  /**
   * Lấy stream của người dùng
   * @param {number} userId - ID của người dùng
   * @param {Object} options - Các tùy chọn
   * @param {number} [options.limit=20] - Số lượng mục tối đa
   * @param {number} [options.offset=0] - Vị trí bắt đầu
   * @param {boolean} [options.linked_partitioning=1] - Phân trang liên kết
   * @returns {Promise<Object>} Stream của người dùng
   */
  getStream(userId, options = {}) {
    const defaultOptions = {
      limit: 20,
      offset: 0,
      linked_partitioning: 1
    };

    return this.api.request(`/stream/users/${userId}`, {
      ...defaultOptions,
      ...options
    });
  }

  /**
   * Lấy danh sách bài hát nổi bật của người dùng
   * @param {number} userId - ID của người dùng
   * @param {Object} options - Các tùy chọn
   * @param {number} [options.limit=10] - Số lượng mục tối đa
   * @param {number} [options.offset=0] - Vị trí bắt đầu
   * @param {boolean} [options.linked_partitioning=1] - Phân trang liên kết
   * @returns {Promise<Object>} Danh sách bài hát nổi bật
   */
  getTopTracks(userId, options = {}) {
    const defaultOptions = {
      limit: 10,
      offset: 0,
      linked_partitioning: 1
    };

    return this.api.request(`/users/${userId}/toptracks`, {
      ...defaultOptions,
      ...options
    });
  }

  /**
   * Lấy danh sách bài hát của người dùng
   * @param {number} userId - ID của người dùng
   * @param {Object} options - Các tùy chọn
   * @param {number} [options.limit=20] - Số lượng mục tối đa
   * @param {string} [options.offset] - Vị trí bắt đầu (định dạng đặc biệt)
   * @param {string} [options.representation] - Kiểu biểu diễn
   * @returns {Promise<Object>} Danh sách bài hát
   */
  getTracks(userId, options = {}) {
    const defaultOptions = {
      limit: 20,
      representation: ''
    };

    return this.api.request(`/users/${userId}/tracks`, {
      ...defaultOptions,
      ...options
    });
  }

  /**
   * Lấy danh sách playlist của người dùng
   * @param {number} userId - ID của người dùng
   * @param {Object} options - Các tùy chọn
   * @param {number} [options.limit=10] - Số lượng mục tối đa
   * @param {number} [options.offset=0] - Vị trí bắt đầu
   * @param {boolean} [options.linked_partitioning=1] - Phân trang liên kết
   * @returns {Promise<Object>} Danh sách playlist
   */
  getPlaylists(userId, options = {}) {
    const defaultOptions = {
      limit: 10,
      offset: 0,
      linked_partitioning: 1
    };

    return this.api.request(
      `/users/${userId}/playlists_without_albums`,
      {
        ...defaultOptions,
        ...options
      }
    );
  }

  /**
   * Lấy thông tin hồ sơ web của người dùng
   * @param {number} userId - ID của người dùng
   * @returns {Promise<Object>} Thông tin hồ sơ web
   */
  getWebProfiles(userId) {
    return this.api.request(`/users/soundcloud:users:${userId}/web-profiles`);
  }
}

export default UsersModule;
