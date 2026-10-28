// Fisher–Yates shuffle avoids the bias of sorting with a random comparator.
export function shuffle(items, random = Math.random) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

// Assign the remainder to randomly selected topics. Each topic contributes either
// floor(count / topics) or ceil(count / topics) unique questions.
export function balancedSample(questions, topics, count = 25, random = Math.random) {
  if (!topics.length || count < 0 || !Number.isInteger(count)) throw new Error('Invalid sample size or topics');
  const base = Math.floor(count / topics.length);
  const extraTopics = new Set(shuffle(topics, random).slice(0, count % topics.length));
  const selection = topics.flatMap(topic => {
    const pool = questions.filter(q => q.cluster === topic);
    const amount = base + (extraTopics.has(topic) ? 1 : 0);
    if (pool.length < amount) throw new Error(`Not enough questions for topic ${topic}`);
    return shuffle(pool, random).slice(0, amount);
  });
  return shuffle(selection, random);
}
