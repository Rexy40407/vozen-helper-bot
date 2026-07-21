import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const page = await readFile(new URL('../site/vozen.html', import.meta.url), 'utf8');

test('servers panel exposes a live server counter beside its heading', () => {
  assert.match(page, /id="guildsCount"[^>]*aria-live="polite"/);
  assert.match(page, /function renderGuilds\(guilds\)[\s\S]*?guildsCount/);
  assert.match(page, /guildsCount[^\n]*textContent\s*=\s*String\(guilds\.length\)/);
});

test('server counter has a compact, accessible visual treatment', () => {
  assert.match(page, /\.server-count\s*\{/);
  assert.match(page, /\.server-count__value\s*\{/);
  assert.match(page, /\.server-count__label\s*\{/);
});
