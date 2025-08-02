import { test, expect } from "bun:test";
import SoundCloudAPI from '../src/index.js';

test('discover.getHomeContent should fetch home content', async () => {
  const api = new SoundCloudAPI({ autoFetchClientId: true });
  
  const result = await api.discover.getHomeContent();
  console.log("Home Content Result:", JSON.stringify(result, null, 2).substring(0, 500) + "...");
  
  expect(result).toBeDefined();
  expect(result.collection).toBeDefined();
  expect(Array.isArray(result.collection)).toBe(true);
});

test('discover.getRecentTracks should fetch recent tracks', async () => {
  const api = new SoundCloudAPI({ autoFetchClientId: true });
  
  const result = await api.discover.getRecentTracks('electronic');
  console.log("Recent Tracks Result:", JSON.stringify(result, null, 2).substring(0, 500) + "...");
  
  expect(result).toBeDefined();
  expect(result.collection).toBeDefined();
  expect(Array.isArray(result.collection)).toBe(true);
});

test('discover.getRecentTracksByCountry should fetch recent tracks by country', async () => {
  const api = new SoundCloudAPI({ autoFetchClientId: true });
  
  const result = await api.discover.getRecentTracksByCountry();
  console.log("Recent Tracks By Country Result:", JSON.stringify(result, null, 2).substring(0, 500) + "...");
  
  expect(result).toBeDefined();
  expect(result.collection).toBeDefined();
  expect(Array.isArray(result.collection)).toBe(true);
}); 