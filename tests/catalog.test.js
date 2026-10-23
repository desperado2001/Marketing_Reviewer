import test from 'node:test';
import assert from 'node:assert/strict';
import {chapters} from '../dist/catalog.js';
import {makeRun,validRun} from '../dist/engine.js';
test('chapter catalog contains 240 unique questions, isolated pools, and original chapter storage',()=>{
 assert.equal(chapters.length,5);assert.equal(chapters[0].storageKey,'marketquest-ch1-v1');
 assert.notEqual(chapters[0].storageKey,chapters[1].storageKey);
 assert.equal(new Set(chapters.flatMap(c=>c.questions.map(q=>q.id))).size,240);
 for(const c of chapters){
  assert.equal(c.questions.length,48);assert.equal(c.topics.length,6);
  for(const t of c.topics)assert.equal(c.questions.filter(q=>q.topic===t.id).length,8);
  for(const q of c.questions){assert.equal(new Set(q.options).size,4);assert.equal(q.options.length,4);assert.ok(Number.isInteger(q.answer)&&q.answer>=0&&q.answer<4);assert.ok(q.explanation.length>60);assert.equal(q.optionExplanations.length,4);assert.equal(new Set(q.optionExplanations).size,4);for(const reason of q.optionExplanations)assert.ok(typeof reason==='string'&&reason.length>40);assert.equal(q.optionExplanations[q.answer],q.explanation);assert.ok(q.id.startsWith(c.id+'-'));}
  const campaign=makeRun(c.questions);assert.equal(campaign.items.length,48);assert.ok(validRun(campaign,c.questions));
  assert.equal(validRun(campaign,chapters.find(other=>other.id!==c.id).questions),false);
  const retry=makeRun(c.questions,{mode:'retry',missed:['ch1-01','ch2-01','ch3-01','ch4-01','ch5-01']});assert.equal(retry.items.length,1);assert.ok(retry.items[0].id.startsWith(c.id));
 }
});
