import { test, expect } from "bun:test";
import SoundCloudAPI from '../src/index.js';

// Sử dụng ID thật từ kết quả tìm kiếm
const TEST_TRACK_ID = 45719017; // Skrillex - Bangarang feat Sirah

// test('media.getPlaybackUrl should fetch playback URL', async () => {
//   const api = new SoundCloudAPI({ autoFetchClientId: true });
  
//   const result = await api.media.getMediaUrl(null, TEST_TRACK_ID, 'hls');
//   console.log("Playback Info Result:", JSON.stringify(result, null, 2).substring(0, 500) + "...");
  
//   expect(result).toBeDefined();
//   expect(result.id).toBeDefined();
//   expect(result.streamUrl).toBeDefined();

// });

// test('media.getDownloadUrl should fetch download URL', async () => {
//   const api = new SoundCloudAPI({ autoFetchClientId: true });
  
//   const result = await api.media.getMediaUrl(null, TEST_TRACK_ID, 'progressive');
//   console.log("Download Info Result:", JSON.stringify(result, null, 2).substring(0, 500) + "...");
  
//   expect(result).toBeDefined();
//   expect(result.streamUrl).toBeDefined();
  
// });

test('media.getDownloadUrl should fetch download URL', async () => {
  const api = new SoundCloudAPI({ autoFetchClientId: true });
  
  const result = await api.media.getMediaUrl("https://soundcloud.com/forss/flickermood", null, 'progressive');
  console.log("Download Info Result:", JSON.stringify(result, null, 2).substring(0, 500) + "...");
  
  expect(result).toBeDefined();
  expect(result.streamUrl).toBeDefined();
  
});