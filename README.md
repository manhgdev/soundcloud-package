# SoundCloud API Package

Gói thư viện JavaScript giúp tương tác với SoundCloud API một cách dễ dàng.

## Giới thiệu

Dự án này cung cấp một wrapper cho SoundCloud API, giúp các nhà phát triển có thể tích hợp các tính năng của SoundCloud vào ứng dụng của họ một cách đơn giản và hiệu quả.

## Tính năng

- Tìm kiếm bài hát, album, playlist và người dùng
- Phát nhạc và quản lý trình phát
- Tương tác với người dùng (thích, bình luận, repost)
- Quản lý playlist và collection
- Xem thông tin chi tiết về track, người dùng và playlist
- Tự động lấy và cập nhật client ID

## Cài đặt

```bash
bun add @manhgdev/soundcloud-web
```

## Khởi tạo

```javascript
import SoundCloudAPI from '@manhgdev/soundcloud-web';

// Khởi tạo với tự động lấy client ID
const sc = new SoundCloudAPI({
  autoFetchClientId: true // Mặc định là true, tự động lấy và cập nhật client ID
});

// Hoặc khởi tạo với client ID cụ thể
const sc2 = new SoundCloudAPI({
  clientId: 'YOUR_CLIENT_ID',
  autoFetchClientId: false // Tắt tính năng tự động lấy client ID
});

// Lấy client ID hiện tại
const clientId = await sc.getClientId();
```

## Hướng dẫn sử dụng chi tiết

### Module Search

Module này cho phép tìm kiếm các nội dung trên SoundCloud.

```javascript
// Tìm kiếm tất cả (tracks, users, albums, playlists)
const results = await sc.search.all('skrillex', { limit: 10 });

// Tìm kiếm bài hát
const tracks = await sc.search.tracks('dance & edm', {
  limit: 10,
  sort: 'popular'
});

// Tìm kiếm người dùng
const users = await sc.search.users('skrillex');

// Tìm kiếm album
const albums = await sc.search.albums('skrillex album');

// Tìm kiếm playlist
const playlists = await sc.search.playlists('workout playlist');

// Tìm kiếm theo thể loại
const electronicTracks = await sc.search.byGenre('electronic', {
  limit: 20,
  sort: 'popular'
});
```

### Module Tracks

Module này cho phép làm việc với các bài hát trên SoundCloud.

```javascript
// Lấy nhiều bài hát theo ID
const tracks = await sc.tracks.getMultiple([123456, 789012]);

// Lấy bình luận của bài hát
const comments = await sc.tracks.getComments(123456, { limit: 10 });

// Lấy các bài hát liên quan
const relatedTracks = await sc.tracks.getRelated(123456, { limit: 10 });
```

### Module Users

Module này cho phép làm việc với người dùng trên SoundCloud.

```javascript
// Lấy thông tin người dùng
const user = await sc.users.getUser(123456);

// Lấy spotlight của người dùng
const spotlight = await sc.users.getSpotlight(123456);

// Lấy danh sách người dùng được đề xuất
const featuredProfiles = await sc.users.getFeaturedProfiles(123456);

// Lấy danh sách bài hát được thích
const likes = await sc.users.getLikes(123456, { limit: 10 });

// Lấy danh sách người đang theo dõi
const followings = await sc.users.getFollowings(123456, { limit: 10 });

// Lấy danh sách nghệ sĩ liên quan
const relatedArtists = await sc.users.getRelatedArtists(123456, { limit: 10 });

// Lấy bình luận của người dùng
const comments = await sc.users.getComments(123456, { limit: 10 });

// Lấy stream của người dùng
const stream = await sc.users.getStream(123456, { limit: 10 });

// Lấy bài hát nổi bật của người dùng
const topTracks = await sc.users.getTopTracks(123456, { limit: 10 });

// Lấy tất cả bài hát của người dùng
const userTracks = await sc.users.getTracks(123456, { limit: 10 });

// Lấy playlist của người dùng
const userPlaylists = await sc.users.getPlaylists(123456, { limit: 10 });

// Lấy thông tin hồ sơ web của người dùng
const webProfiles = await sc.users.getWebProfiles(123456);
```

### Module Playlists

Module này cho phép làm việc với playlist trên SoundCloud.

```javascript
// Lấy thông tin playlist
const playlist = await sc.playlists.getPlaylist(123456);

// Lấy danh sách người thích playlist
const likers = await sc.playlists.getLikers(123456, { limit: 10 });

// Lấy danh sách người repost playlist
const reposters = await sc.playlists.getReposters(123456, { limit: 10 });

// Lấy playlist theo thể loại
const genrePlaylists = await sc.playlists.getByGenre('electronic', { limit: 10 });
```

### Module Media

Module này cho phép làm việc với media và streaming trên SoundCloud.

```javascript
// Lấy URL phát trực tuyến cho bài hát
const playbackUrl = await sc.media.getPlaybackUrl(123456);

// Lấy URL tải xuống cho bài hát
const downloadUrl = await sc.media.getDownloadUrl(123456);

// Phương thức chung để lấy URL media với protocol tùy chọn
const mediaUrl = await sc.media.getMediaUrl(123456, 'hls'); // hoặc 'progressive'
```

### Module Discover

Module này cho phép khám phá nội dung trên SoundCloud.

```javascript
// Lấy nội dung trang chủ
const homeContent = await sc.discover.getHomeContent();

// Lấy bài hát mới theo thể loại
const recentTracks = await sc.discover.getRecentTracks('electronic');

// Lấy bài hát mới theo quốc gia
const recentTracksByCountry = await sc.discover.getRecentTracksByCountry();
```

## Tự động lấy Client ID

Package hỗ trợ tự động lấy và cập nhật client ID từ trang web SoundCloud. Tính năng này:

- Tự động lấy client ID mới khi cần thiết
- Lưu trữ client ID trong bộ nhớ tạm với thời gian hết hạn 3 phút
- Tự động làm mới client ID khi hết hạn
- Sử dụng client ID dự phòng nếu không thể lấy được client ID mới

## Tài liệu API

Xem chi tiết các endpoint API trong file [endpoint.md](./endpoint.md)

## Giấy phép

MIT
