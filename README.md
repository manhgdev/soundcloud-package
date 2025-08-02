# SoundCloud API Package

Package JavaScript để tương tác với SoundCloud API một cách dễ dàng và hiệu quả.

## Cài đặt

```bash
bun add @manhgdev/soundcloud-web
```

## Khởi tạo

```javascript
import SoundCloudAPI from '@manhgdev/soundcloud-web';

const api = new SoundCloudAPI({
  clientId: 'YOUR_CLIENT_ID', // Tùy chọn
  autoFetchClientId: true // Tự động lấy client ID
});
```

## Cách sử dụng

### Search Module

#### Tìm kiếm tất cả
```javascript
const result = await api.search.all('skrillex', {
  limit: 20,
  offset: 0,
  facet: 'model',
  linked_partitioning: 1
});
```

#### Tìm kiếm bài hát
```javascript
const tracks = await api.search.tracks('skrillex', {
  limit: 20,
  offset: 0,
  facet: 'genre',
  linked_partitioning: 1
});
```

#### Tìm kiếm người dùng
```javascript
const users = await api.search.users('skrillex', {
  limit: 20,
  offset: 0,
  facet: 'place',
  linked_partitioning: 1
});
```

#### Tìm kiếm album
```javascript
const albums = await api.search.albums('skrillex', {
  limit: 20,
  offset: 0,
  facet: 'genre',
  linked_partitioning: 1
});
```

#### Tìm kiếm playlist
```javascript
const playlists = await api.search.playlists('workout', {
  limit: 20,
  offset: 0,
  facet: 'genre',
  linked_partitioning: 1
});
```

#### Tìm kiếm bài hát theo thể loại
```javascript
const tracks = await api.search.byGenre('electronic', {
  limit: 10,
  offset: 0,
  sort: 'popular',
  linked_partitioning: 1
});
```

### Tracks Module

#### Lấy nhiều bài hát
```javascript
const tracks = await api.tracks.getMultiple([956017639, 789012]);
```

#### Lấy bình luận của bài hát
```javascript
const comments = await api.tracks.getComments(956017639, {
  threaded: 0,
  limit: 200,
  offset: 0,
  linked_partitioning: 1
});
```

#### Lấy bài hát liên quan
```javascript
const related = await api.tracks.getRelated(956017639, {
  limit: 10,
  offset: 0,
  linked_partitioning: 1
});
```

### Users Module

#### Lấy thông tin người dùng
```javascript
const user = await api.users.getUser(856062);
```

#### Lấy spotlight của người dùng
```javascript
const spotlight = await api.users.getSpotlight(856062, {
  limit: 10,
  offset: 0,
  linked_partitioning: 1
});
```

#### Lấy hồ sơ nổi bật của người dùng
```javascript
const profiles = await api.users.getFeaturedProfiles(856062, {
  limit: 10,
  offset: 0,
  linked_partitioning: 1
});
```

#### Lấy danh sách bài hát được thích
```javascript
const likes = await api.users.getLikes(856062, {
  limit: 10,
  offset: 0,
  linked_partitioning: 1
});
```

#### Lấy danh sách người đang theo dõi
```javascript
const followings = await api.users.getFollowings(856062, {
  limit: 3,
  offset: 0,
  linked_partitioning: 1
});
```

#### Lấy danh sách nghệ sĩ liên quan
```javascript
const artists = await api.users.getRelatedArtists(856062, {
  creators_only: false,
  page_size: 12,
  limit: 12,
  offset: 0,
  linked_partitioning: 1
});
```

#### Lấy bình luận của người dùng
```javascript
const comments = await api.users.getComments(856062, {
  limit: 20,
  offset: 0,
  linked_partitioning: 1
});
```

#### Lấy stream của người dùng
```javascript
const stream = await api.users.getStream(856062, {
  limit: 20,
  offset: 0,
  linked_partitioning: 1
});
```

#### Lấy bài hát nổi bật của người dùng
```javascript
const topTracks = await api.users.getTopTracks(856062, {
  limit: 10,
  offset: 0,
  linked_partitioning: 1
});
```

#### Lấy bài hát của người dùng
```javascript
const tracks = await api.users.getTracks(856062, {
  limit: 20
});
```

#### Lấy playlist của người dùng
```javascript
const playlists = await api.users.getPlaylists(856062, {
  limit: 10,
  offset: 0,
  linked_partitioning: 1
});
```

#### Lấy hồ sơ web của người dùng
```javascript
const webProfiles = await api.users.getWebProfiles(856062);
```

### Playlists Module

#### Lấy thông tin playlist
```javascript
const playlist = await api.playlists.getPlaylist(1236491080, {
  representation: 'full'
});
```

#### Lấy danh sách người thích playlist
```javascript
const likers = await api.playlists.getLikers(1236491080, {
  limit: 9,
  offset: 0,
  linked_partitioning: 1
});
```

#### Lấy danh sách người repost playlist
```javascript
const reposters = await api.playlists.getReposters(1236491080, {
  limit: 9,
  offset: 0,
  linked_partitioning: 1
});
```

#### Lấy playlist theo thể loại
```javascript
const playlists = await api.playlists.getByGenre('electronic', {
  limit: 10,
  offset: 0,
  linked_partitioning: 1
});
```

### Media Module

#### Lấy URL phát trực tuyến
```javascript
const playbackUrl = await api.media.getPlaybackUrl(956017639);
```

#### Lấy URL tải xuống
```javascript
const downloadUrl = await api.media.getDownloadUrl(956017639);
```

### Discover Module

#### Lấy nội dung trang chủ
```javascript
const homeContent = await api.discover.getHomeContent({
  limit: 10,
  offset: 0,
  linked_partitioning: 1
});
```

#### Lấy bài hát mới theo thể loại
```javascript
const recentTracks = await api.discover.getRecentTracks('electronic', {
  limit: 10,
  offset: 0,
  linked_partitioning: 1
});
```

#### Lấy bài hát mới theo quốc gia
```javascript
const countryTracks = await api.discover.getRecentTracksByCountry({
  limit: 10,
  offset: 0,
  linked_partitioning: 1
});
```

## Tham số mặc định

Tất cả các phương thức đều có tham số mặc định phù hợp:

- `limit`: Số lượng kết quả tối đa (thường là 10-20)
- `offset`: Vị trí bắt đầu (mặc định: 0)
- `linked_partitioning`: Phân trang liên kết (mặc định: 1)
- `facet`: Loại facet cho search (mặc định: 'model', 'genre', 'place')
- `threaded`: Hiển thị theo thread cho comments (mặc định: 0)
- `creators_only`: Chỉ hiển thị người tạo (mặc định: false)
- `page_size`: Kích thước trang (mặc định: 12)
- `representation`: Kiểu biểu diễn (mặc định: 'full')

## Lưu ý

- Package tự động lấy và cache client ID từ SoundCloud
- Tất cả các request đều có timeout và retry logic
- Hỗ trợ đầy đủ các endpoint của SoundCloud API v2
- Có JSDoc đầy đủ cho tất cả các phương thức

## License

MIT
