import { test, expect } from "bun:test";
import SoundCloudAPI from '../src/index.js';

// Sử dụng ID thật từ kết quả tìm kiếm
const TEST_USER_ID = 856062; // Skrillex

test('users.getUser should fetch user information', async () => {
  const api = new SoundCloudAPI({ autoFetchClientId: true });
  
  const result = await api.users.getUser(TEST_USER_ID);
  console.log("User Info Result:", JSON.stringify(result, null, 2).substring(0, 500) + "...");
  
  expect(result).toBeDefined();
  expect(result.id).toBeDefined();
  expect(result.kind).toBe('user');
});

test('users.getTracks should fetch user tracks', async () => {
  const api = new SoundCloudAPI({ autoFetchClientId: true });
  
  const result = await api.users.getTracks(TEST_USER_ID, { limit: 5 });
  console.log("User Tracks Result:", JSON.stringify(result, null, 2).substring(0, 500) + "...");
  
  expect(result).toBeDefined();
  expect(result.collection).toBeDefined();
  expect(Array.isArray(result.collection)).toBe(true);
});

test('users.getPlaylists should fetch user playlists', async () => {
  const api = new SoundCloudAPI({ autoFetchClientId: true });
  
  const result = await api.users.getPlaylists(TEST_USER_ID, { limit: 5 });
  console.log("User Playlists Result:", JSON.stringify(result, null, 2).substring(0, 500) + "...");
  
  expect(result).toBeDefined();
  expect(result.collection).toBeDefined();
  expect(Array.isArray(result.collection)).toBe(true);
});

test('users.getFollowings should fetch user followings', async () => {
  const api = new SoundCloudAPI({ autoFetchClientId: true });
  
  const result = await api.users.getFollowings(TEST_USER_ID, { limit: 5 });
  console.log("User Followings Result:", JSON.stringify(result, null, 2).substring(0, 500) + "...");
  
  expect(result).toBeDefined();
  expect(result.collection).toBeDefined();
  expect(Array.isArray(result.collection)).toBe(true);
}); 