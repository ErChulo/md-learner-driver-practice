import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync, existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {SaxesParser} from 'saxes';
import {signCards,signCategories,signArtwork} from '../src/sign-cards.js';

const json = JSON.parse(readFileSync(new URL('../src/data/maryland-signs.json', import.meta.url)));

test('catalog is synchronized, bilingual and explicit about verification', () => {
  assert.deepEqual(signCards, json);
  assert.equal(new Set(signCards.map(s => s.id)).size, signCards.length);
  const categories = new Set(signCategories.map(c => c.id));
  for (const s of signCards) {
    assert.ok(categories.has(s.category));
    assert.ok(s.en && s.es && s.verificationNote);
    assert.ok(['VERIFIED', 'UNRESOLVED', 'MISMATCH'].includes(s.verificationStatus));
    assert.ok(Number.isInteger(s.manualPage2026));
    if (s.verificationStatus === 'VERIFIED') assert.ok(s.assetPath && s.sourceUrl && s.mutcdCode && s.license);
    if (s.verificationStatus !== 'VERIFIED') assert.match(signArtwork(s, 'en'), /not available/);
  }
});

test('all sourced assets are intact, local, valid SVG and contain no executable or external content', () => {
  for (const s of signCards.filter(s => s.assetPath)) {
    const path = new URL('../' + s.assetPath, import.meta.url);
    assert.ok(existsSync(path), `${s.id}: missing asset`);
    const data = readFileSync(path);
    assert.equal(createHash('sha256').update(data).digest('hex'), s.assetSha256, `${s.id}: source hash changed`);
    assert.match(s.sourceUrl, /^https:\/\/github\.com\/whizy76\/mutcd-svg\/blob\/[a-f0-9]{40}\/svg\//);
    let root = false, inStyle = false;
    const parser = new SaxesParser({xmlns:true});
    parser.on('doctype', () => { throw new Error(`${s.id}: doctype is forbidden`); });
    parser.on('opentag', node => {
      const name = node.local.toLowerCase();
      if (!root) { assert.equal(name, 'svg'); root = true; }
      assert.ok(!['script','foreignobject','image'].includes(name), `${s.id}: forbidden ${name}`);
      inStyle = name === 'style';
      for (const a of Object.values(node.attributes)) {
        const key = a.local.toLowerCase();
        assert.ok(!key.startsWith('on'), `${s.id}: event attribute`);
        if (key === 'href' || key === 'src') assert.match(a.value, /^#/, `${s.id}: external reference`);
        assert.doesNotMatch(a.value, /@import|url\(\s*["']?(?!#)/i, `${s.id}: external CSS reference`);
      }
    });
    const checkCss = text => { if (inStyle) assert.doesNotMatch(text, /@import|url\(\s*["']?(?!#)/i); };
    parser.on('text', checkCss);
    parser.on('cdata', checkCss);
    parser.on('closetag', node => { if (node.local.toLowerCase() === 'style') inStyle = false; });
    parser.write(data.toString('utf8')).close();
    assert.ok(root);
    if (s.verificationStatus === 'VERIFIED') assert.match(signArtwork(s, 'en'), /<img /);
  }
});

test('newly sourced signs are verified and use the correct individual assets', () => {
  const expected = {
    hospital:'D09-02', fuel:'D09-07', food:'D09-08', lodging:'D09-09',
    airport:'I03-05', train:'I03-07', mile:'D10-01', detour:'M04-09',
    'straight-only':'R03-05A', 'straight-or-right':'R03-06',
    'lane-directions':'R03-08B', 'hov-overhead':'R03-14', 'last-exit':'W16-16P'
  };
  for (const [id, code] of Object.entries(expected)) {
    const card = signCards.find(s => s.id === id);
    assert.equal(card?.verificationStatus, 'VERIFIED');
    assert.equal(card.mutcdCode, code);
    assert.match(signArtwork(card, 'en'), /<img /);
  }
  // A right-pointing sign must not silently replace the left-pointing example.
  assert.equal(signCards.find(s => s.id === 'left-only').verificationStatus, 'UNRESOLVED');
});
