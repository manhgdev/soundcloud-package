import { test, expect } from "bun:test";
import SoundCloudAPI from '../src/index.js';

// Test với API thật
test('search.all should make a request to /search endpoint', async () => {
  const api = new SoundCloudAPI({ autoFetchClientId: true });
  
  const result = await api.search.all('test query', { limit: 10 });
  console.log("Search All Result:", JSON.stringify(result, null, 2).substring(0, 500) + "...");
  
  // Kiểm tra cấu trúc kết quả
  expect(result).toBeDefined();
  expect(result.collection).toBeDefined();
  expect(Array.isArray(result.collection)).toBe(true);
});

test('search.tracks should make a request to /search/tracks endpoint', async () => {
  const api = new SoundCloudAPI({ autoFetchClientId: true });
  
  const result = await api.search.tracks('test track', { limit: 5 });
  console.log("Search Tracks Result:", JSON.stringify(result, null, 2).substring(0, 500) + "...");
  
  expect(result).toBeDefined();
  expect(result.collection).toBeDefined();
  expect(Array.isArray(result.collection)).toBe(true);
});

test('search.users should make a request to /search/users endpoint', async () => {
  const api = new SoundCloudAPI({ autoFetchClientId: true });
  
  const result = await api.search.users('test user');
  console.log("Search Users Result:", JSON.stringify(result, null, 2).substring(0, 500) + "...");
  
  expect(result).toBeDefined();
  expect(result.collection).toBeDefined();
  expect(Array.isArray(result.collection)).toBe(true);
});

test('search.albums should make a request to /search/albums endpoint', async () => {
  const api = new SoundCloudAPI({ autoFetchClientId: true });
  
  const result = await api.search.albums('test album');
  console.log("Search Albums Result:", JSON.stringify(result, null, 2).substring(0, 500) + "...");
  
  expect(result).toBeDefined();
  expect(result.collection).toBeDefined();
  expect(Array.isArray(result.collection)).toBe(true);
});

test('search.playlists should make a request to /search/playlists_without_albums endpoint', async () => {
  const api = new SoundCloudAPI({ autoFetchClientId: true });
  
  const result = await api.search.playlists('test playlist');
  console.log("Search Playlists Result:", JSON.stringify(result, null, 2).substring(0, 500) + "...");
  
  expect(result).toBeDefined();
  expect(result.collection).toBeDefined();
  expect(Array.isArray(result.collection)).toBe(true);
});

test('search.byGenre should make a request with genre filter', async () => {
  const api = new SoundCloudAPI({ autoFetchClientId: true });
  
  const result = await api.search.byGenre('electronic', { limit: 5 });
  console.log("Search By Genre Result:", JSON.stringify(result, null, 2).substring(0, 500) + "...");
  
  expect(result).toBeDefined();
  expect(result.collection).toBeDefined();
  expect(Array.isArray(result.collection)).toBe(true);
}); 