import { test, expect } from "bun:test";
import SoundCloudAPI from '../src/index.js';

test('getClientId should return a client ID', async () => {
  const api = new SoundCloudAPI({ autoFetchClientId: true });
  
  const clientId = await api.getClientId();
  console.log("Final Client ID:", clientId);
  
  expect(typeof clientId).toBe('string');
  expect(clientId.length).toBeGreaterThan(0);
}); 