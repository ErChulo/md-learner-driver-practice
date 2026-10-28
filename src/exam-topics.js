// Deliberately curated from the manual-based bank for the three exam areas
// requested by the learner. Anything not explicitly listed is general information.
export const examTopics = [
  {id:'traffic-signs',icon:'◇',en:'Traffic signs',es:'Señales de tránsito',desc:['Shapes, meanings, signals and road markings','Formas, significados, semáforos y marcas viales'],pages:'21–29'},
  {id:'road-rules',icon:'↗',en:'Road rules',es:'Reglas de circulación',desc:['Right-of-way, following distance, turns and lanes','Prioridad de paso, distancia, giros y carriles'],pages:'16–19, 37–47'},
  {id:'safe-driving',icon:'☼',en:'Safe driving',es:'Conducción segura',desc:['Weather, intersections, alcohol and drugs','Clima, intersecciones, alcohol y drogas'],pages:'15–18, 31–41'}
];
export const examQuestionIds = {
  'traffic-signs': [6,7,8,9,10,11,12,13,50,51,52,53,54,55,56,57,58,59,119,120,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165],
  'road-rules': [3,4,5,40,41,42,43,44,45,46,47,117,118,143,144,145,147,148,22,23,24,72,73,74,75,79,108,109,183,184,185,187,102,103,104,174,175],
  'safe-driving': [14,15,16,17,18,60,61,62,63,64,65,66,98,99,100,101,166,167,168,169,170,171,172,173,19,20,21,67,68,69,70,71,130,131,176,177,178,179,180,181,182,49,141,142,146,77,78,107,125,186,188,189]
};
const topicById = new Map(Object.entries(examQuestionIds).flatMap(([topic,ids])=>ids.map(id=>[id,topic])));
export const examTopicFor = id => topicById.get(id) ?? null;
export const examQuestions = questions => questions.filter(q => examTopicFor(q.id) !== null);
export const generalQuestions = questions => questions.filter(q => examTopicFor(q.id) === null);
