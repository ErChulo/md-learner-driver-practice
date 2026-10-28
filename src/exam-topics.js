import {clusters, questions} from './data.js';

// Only the licensing cluster is administrative. All other manual topics remain
// eligible, including emergencies, sharing the road, and driver responsibilities.
export const examTopics = clusters.filter(topic => topic.id !== 'licensing');
const topicByQuestionId = new Map(questions.filter(q => q.cluster !== 'licensing').map(q => [q.id, q.cluster]));
export const examTopicFor = id => topicByQuestionId.get(id) ?? null;
export const examQuestions = bank => bank.filter(q => examTopicFor(q.id) !== null);
export const generalQuestions = bank => bank.filter(q => q.cluster === 'licensing');
