import { test } from 'node:test';
import assert from 'node:assert/strict';
import { questions, clusters, signs } from '../src/data.js';
import { balancedSample } from '../src/sampling.js';
import { examTopics, examQuestionIds, examTopicFor, examQuestions, generalQuestions } from '../src/exam-topics.js';

test('question bank has complete bilingual records and references', () => {
  assert.ok(questions.length >= 210);
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
  for (const c of clusters) assert.ok(questions.filter(q => q.cluster === c.id).length >= 15);
  // Keep historical IDs stable when the bank is extended: saved answers use these IDs.
  assert.equal(questions[0].en.q, 'How many questions are on the knowledge test?');
  assert.equal(questions[131].es.q, '¿Qué debe hacer si está cansado o tiene sueño mientras conduce?');
  for (const language of ['es', 'en']) {
    const prompts = questions.map(q => q[language].q.trim().toLocaleLowerCase(language));
    assert.equal(new Set(prompts).size, prompts.length, `Repeated ${language} question`);
  }
  // The bank must continue to include each of the ten numbered manual sections.
  const sections = [[7,8],[9,13],[15,19],[21,29],[31,38],[39,41],[43,49],[51,53],[55,58],[59,63]];
  for (const [first,last] of sections) assert.ok(questions.some(q => q.page >= first && q.page <= last), `Missing section ${first}–${last}`);
  assert.equal(signs.length, 9);
});

test('full exams draw only from curated exam topics, balanced 8 / 8 / 9', () => {
  const ids = examTopics.map(c => c.id);
  const eligible = examQuestions(questions);
  const general = generalQuestions(questions);
  const listed = Object.values(examQuestionIds).flat();
  assert.equal(new Set(listed).size, listed.length, 'A question must not be in two exam topics');
  assert.equal(eligible.length, listed.length, 'Every curated ID must exist');
  assert.ok(eligible.length >= 25);
  assert.ok(general.some(q => q.cluster === 'licensing'));
  assert.ok(questions.filter(q => q.cluster === 'licensing').every(q => !examTopicFor(q.id)));
  const extraTopics = new Set();
  for (let i = 0; i < 1000; i++) {
    const sample = balancedSample(eligible, ids, 25, Math.random, q => examTopicFor(q.id));
    assert.equal(sample.length, 25);
    assert.equal(new Set(sample.map(q => q.id)).size, 25);
    assert.ok(sample.every(q => examTopicFor(q.id) && q.cluster !== 'licensing'));
    for (const id of ids) {
      const n = sample.filter(q => examTopicFor(q.id) === id).length;
      assert.ok(n === 8 || n === 9);
      if (n === 9) extraTopics.add(id);
    }
  }
  assert.equal(extraTopics.size, ids.length);
});

test('general-only administrative topics never enter an exam', () => {
  const administrative = [0,1,2,30,31,32,33,34,35,36,37,38,39,88,89,90,91,93,94,95,96,113,121,122,123,124,129,198,199,200,201,202,204];
  for (const id of administrative) assert.equal(examTopicFor(id), null, `Question ${id} must be general`);
});

test('sampling fails clearly rather than silently omitting a topic', () => {
  assert.throws(() => balancedSample([], ['missing'], 25), /Not enough questions/);
});
