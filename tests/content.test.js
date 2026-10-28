import { test } from 'node:test';
import assert from 'node:assert/strict';
import { questions, clusters, signs } from '../src/data.js';
import { balancedSample } from '../src/sampling.js';

test('question bank has complete bilingual records and references', () => {
  assert.ok(questions.length >= 100);
  assert.equal(new Set(questions.map(q => q.id)).size, questions.length);
  for (const q of questions) {
    assert.ok(clusters.some(c => c.id === q.cluster));
    assert.ok(Number.isInteger(q.page) && q.page >= 7 && q.page <= 63);
    for (const language of ['es', 'en']) {
      assert.ok(q[language].q);
      assert.equal(q[language].a.length, 4);
      assert.equal(new Set(q[language].a).size, 4);
      assert.ok(q[language].a.every(Boolean));
    }
  }
  for (const c of clusters) assert.ok(questions.filter(q => q.cluster === c.id).length >= 4);
  assert.equal(signs.length, 9);
});

test('every full exam is unique and balanced across all eight clusters', () => {
  const ids = clusters.map(c => c.id);
  const extraTopics = new Set();
  for (let i = 0; i < 1000; i++) {
    const sample = balancedSample(questions, ids, 25);
    assert.equal(sample.length, 25);
    assert.equal(new Set(sample.map(q => q.id)).size, 25);
    for (const id of ids) {
      const n = sample.filter(q => q.cluster === id).length;
      assert.ok(n === 3 || n === 4);
      if (n === 4) extraTopics.add(id);
    }
  }
  assert.equal(extraTopics.size, ids.length);
});

test('sampling fails clearly rather than silently omitting a topic', () => {
  assert.throws(() => balancedSample([], ['missing'], 25), /Not enough questions/);
});
