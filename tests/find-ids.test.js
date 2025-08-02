import { test, expect } from "bun:test";
import SoundCloudAPI from '../src/index.js';

test('find popular user and track IDs', async () => {
  const api = new SoundCloudAPI({ autoFetchClientId: true });
  
  // Tìm user phổ biến
  const userResult = await api.search.users('skrillex', { limit: 1 });
  console.log("Found User:", JSON.stringify(userResult.collection[0], null, 2));
  
  // Tìm track phổ biến
  const trackResult = await api.search.tracks('skrillex bangarang', { limit: 1 });
  console.log("Found Track:", JSON.stringify(trackResult.collection[0], null, 2));
}); 