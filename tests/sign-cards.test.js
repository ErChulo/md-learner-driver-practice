import test from 'node:test';
import assert from 'node:assert/strict';
import {signCards,signCategories,signArtwork} from '../src/sign-cards.js';

test('sign cards have unique ids, bilingual descriptions, manual references and vector artwork',()=>{
  assert.ok(signCards.length >= 90);
  assert.equal(new Set(signCards.map(s=>s.id)).size,signCards.length);
  const categories=new Set(signCategories.map(c=>c.id));
  for(const s of signCards){
    assert.ok(categories.has(s.category));
    assert.ok(s.en && s.es && s.art);
    assert.ok(s.page>=21 && s.page<=27);
    const svg=signArtwork(s);
    assert.match(svg, /^<svg viewBox="0 0 100 100"/);
    assert.match(svg, /<\/svg>$/);
    assert.doesNotMatch(svg, /undefined/);
  }
  for(const c of signCategories.filter(c=>c.id!=='all')) assert.ok(signCards.some(s=>s.category===c.id));
});
