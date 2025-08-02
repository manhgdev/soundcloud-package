import { test, expect } from "bun:test";
import SoundCloudAPI from '../src/index.js';

// Cần tìm một playlist ID thật
// Sử dụng kết quả từ search để tìm một playlist
test('find a playlist ID for testing', async () => {
  const api = new SoundCloudAPI({ autoFetchClientId: true });
  
  const result = await api.search.playlists('skrillex', { limit: 1 });
  console.log("Found Playlist:", JSON.stringify(result.collection[0], null, 2));
  
  // Lưu playlist ID cho các test tiếp theo
  const playlistId = result.collection[0].id;
  
  expect(playlistId).toBeDefined();
  expect(typeof playlistId).toBe('number');
  
  return playlistId;
});

test('playlists.getPlaylist should fetch playlist information', async () => {
  const api = new SoundCloudAPI({ autoFetchClientId: true });
  
  // Tìm một playlist ID
  const searchResult = await api.search.playlists('skrillex', { limit: 1 });
  const playlistId = searchResult.collection[0].id;
  
  const result = await api.playlists.getPlaylist(playlistId);
  console.log("Playlist Info Result:", JSON.stringify(result, null, 2).substring(0, 500) + "...");
  
  expect(result).toBeDefined();
  expect(result.id).toBeDefined();
  expect(result.kind).toBe('playlist');
});

test('playlists.getByGenre should fetch playlists by genre', async () => {
  const api = new SoundCloudAPI({ autoFetchClientId: true });
  
  const result = await api.playlists.getByGenre('electronic', { limit: 5 });
  console.log("Playlists By Genre Result:", JSON.stringify(result, null, 2).substring(0, 500) + "...");
  
  expect(result).toBeDefined();
  expect(result.collection).toBeDefined();
  expect(Array.isArray(result.collection)).toBe(true);
}); 