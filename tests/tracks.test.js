import { test, expect } from "bun:test";
import SoundCloudAPI from '../src/index.js';

// Sử dụng ID thật từ kết quả tìm kiếm
const TEST_TRACK_ID = 45719017; // Skrillex - Bangarang feat Sirah
const TEST_TRACK_IDS = [45719017, 45719017]; // Sử dụng cùng một track ID cho đơn giản

test('tracks.getMultiple should fetch multiple tracks', async () => {
  const api = new SoundCloudAPI({ autoFetchClientId: true });
  
  const result = await api.tracks.getMultiple(TEST_TRACK_IDS);
  console.log("Multiple Tracks Result:", JSON.stringify(result, null, 2).substring(0, 500) + "...");
  
  expect(result).toBeDefined();
  expect(Array.isArray(result)).toBe(true);
});

test('tracks.getRelated should fetch related tracks', async () => {
  const api = new SoundCloudAPI({ autoFetchClientId: true });
  
  const result = await api.tracks.getRelated(TEST_TRACK_ID, { limit: 5 });
  console.log("Related Tracks Result:", JSON.stringify(result, null, 2).substring(0, 500) + "...");
  
  expect(result).toBeDefined();
  expect(result.collection).toBeDefined();
  expect(Array.isArray(result.collection)).toBe(true);
}); 