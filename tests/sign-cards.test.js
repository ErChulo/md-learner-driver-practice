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

test('problematic examples use fitted labels and distinct manual details',()=>{
  const card=id=>signArtwork(signCards.find(s=>s.id===id));
  // Long, generated labels use a size based on the longest line.
  const longLabel=card('last-exit');
  const size=Number(longLabel.match(/font-size="([\d.]+)"/)[1]);
  assert.ok(size < 10, `long label must be reduced to fit, got ${size}`);
  // Warning pictograms are inset as a unit rather than crossing the diamond border.
  for (const id of ['truck-crossing','steep-hill','slippery','road-work','merge-left']) {
    assert.match(card(id), /translate\(16 16\) scale\(\.68\)/);
  }
  assert.match(card('left-yield'), /ON GREEN.*circle.*#008052/);
  assert.match(card('no-turn-red'), /ON .*RED.*circle.*#c51b30/);
  assert.match(card('school'), />SCHOOL<\/text>/);
  assert.notEqual(card('divided-start'),card('divided-end'));
});
