# SoundCloud API Endpoints

## Thông tin chung
- Base URL: `https://api-v2.soundcloud.com`
- Client ID: `2GCvvB00falDGyr5CqBFf2iSIb16tCF1`
- Các tham số phổ biến:
  - `client_id`: ID client để xác thực API
  - `limit`: Số lượng kết quả trả về
  - `offset`: Vị trí bắt đầu lấy dữ liệu
  - `linked_partitioning`: Phân trang (thường là 1)
  - `app_version`: Phiên bản ứng dụng (thường là 1753870647)
  - `app_locale`: Ngôn ngữ (thường là en)

## 1. Trang chủ và Khám phá
### 1.1. Lấy nội dung trang chủ
```
GET /mixed-selections
```

### 1.2. Lấy track mới nhất (tất cả thể loại)
```
GET /recent-tracks/all%20genres
```

### 1.3. Lấy track mới nhất theo quốc gia
```
GET /recent-tracks/country
```

## 2. Tìm kiếm
### 2.1. Tìm kiếm tổng hợp
```
GET /search
```
Tham số:
- `q`: Từ khóa tìm kiếm
- `facet`: Loại kết quả (model, genre, place)

### 2.2. Tìm kiếm track
```
GET /search/tracks
```
Tham số:
- `q`: Từ khóa tìm kiếm (sử dụng * để tìm tất cả)
- `filter.genre_or_tag`: Lọc theo thể loại hoặc tag
- `sort`: Sắp xếp kết quả (popular, recent)

### 2.3. Tìm kiếm người dùng
```
GET /search/users
```

### 2.4. Tìm kiếm album
```
GET /search/albums
```

### 2.5. Tìm kiếm playlist (không bao gồm album)
```
GET /search/playlists_without_albums
```

## 3. Track
### 3.1. Lấy thông tin nhiều track theo ID
```
GET /tracks
```
Tham số:
- `ids`: Danh sách ID track (phân cách bằng dấu phẩy)

### 3.2. Lấy bình luận của track
```
GET /tracks/{track_id}/comments
```
Tham số:
- `threaded`: Hiển thị dạng cây (0 hoặc 1)

### 3.3. Lấy track liên quan
```
GET /tracks/{track_id}/related
```
Tham số:
- `anon_user_id`: ID người dùng ẩn danh (tùy chọn)

## 4. Media và Phát nhạc
### 4.1. Lấy stream HLS
```
GET /media/soundcloud:tracks:{track_id}/{media_transcoding_id}/stream/hls
```
Tham số:
- `track_authorization`: Token xác thực để phát track

## 5. Playlist
### 5.1. Lấy thông tin playlist
```
GET /playlists/{playlist_id}
```
Tham số:
- `representation`: Định dạng dữ liệu trả về (full)

### 5.2. Lấy danh sách người thích playlist
```
GET /playlists/{playlist_id}/likers
```

### 5.3. Lấy danh sách người repost playlist
```
GET /playlists/{playlist_id}/reposters
```

### 5.4. Lấy playlist theo thể loại
```
GET /playlists/discovery
```
Tham số:
- `tag`: Thể loại (country, rock, electronic, v.v.)

## 6. Người dùng
### 6.1. Lấy thông tin người dùng
```
GET /users/{user_id}
```

### 6.2. Lấy danh sách spotlight của người dùng
```
GET /users/{user_id}/spotlight
```

### 6.3. Lấy danh sách profile nổi bật của người dùng
```
GET /users/{user_id}/featured-profiles
```

### 6.4. Lấy danh sách track yêu thích của người dùng
```
GET /users/{user_id}/likes
```

### 6.5. Lấy danh sách người dùng đang theo dõi
```
GET /users/{user_id}/followings
```

### 6.6. Lấy danh sách nghệ sĩ liên quan
```
GET /users/{user_id}/relatedartists
```
Tham số:
- `creators_only`: Chỉ hiển thị người tạo nội dung (true/false)
- `page_size`: Số lượng kết quả mỗi trang

### 6.7. Lấy bình luận của người dùng
```
GET /users/{user_id}/comments
```

### 6.8. Lấy stream hoạt động của người dùng
```
GET /stream/users/{user_id}
```

### 6.9. Lấy track nổi bật của người dùng
```
GET /users/{user_id}/toptracks
```

### 6.10. Lấy danh sách track của người dùng
```
GET /users/{user_id}/tracks
```

### 6.11. Lấy danh sách playlist của người dùng (không bao gồm album)
```
GET /users/{user_id}/playlists_without_albums
```

### 6.12. Lấy thông tin profile web của người dùng
```
GET /users/soundcloud:users:{user_id}/web-profiles
```

## Headers phổ biến
```
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36
Accept: application/json, text/javascript, */*; q=0.01
Origin: https://soundcloud.com
Sec-Fetch-Site: same-site
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Referer: https://soundcloud.com/
Accept-Language: en,vi;q=0.9,en-US;q=0.8
```

## Ví dụ sử dụng
### Tìm kiếm track theo thể loại
```
GET /search/tracks?q=*&filter.genre_or_tag=dance%20%26%20edm&sort=popular&client_id=2GCvvB00falDGyr5CqBFf2iSIb16tCF1&limit=10&offset=0&linked_partitioning=1&app_version=1753870647&app_locale=en
```

### Lấy thông tin người dùng
```
GET /users/603901965?client_id=2GCvvB00falDGyr5CqBFf2iSIb16tCF1&app_version=1753870647&app_locale=en
``` 