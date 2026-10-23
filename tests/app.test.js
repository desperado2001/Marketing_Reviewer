import test from 'node:test';
import assert from 'node:assert/strict';
import {questions} from '../dist/questions.js';

test('play a full mission through UI events, persist, resume, and retry misses',async()=>{
 const handlers={}, main={innerHTML:'',focus(){}};
 const announcement={textContent:''},saveLabel={innerHTML:''};
 const store=new Map();
 globalThis.localStorage={getItem:k=>store.get(k)||null,setItem:(k,v)=>store.set(k,v)};
 globalThis.document={querySelector:s=>s==='#main'?main:s==='#announcement'?announcement:s==='.save-label'?saveLabel:{focus(){}},querySelectorAll:()=>[],addEventListener:(e,f)=>{handlers[e]=f;}};
 globalThis.window={scrollTo(){}};
 globalThis.confirm=()=>true;
 await import('../dist/app.js?integration');
 assert.match(main.innerHTML,/Make knowledge stick/);
 function click(dataset){handlers.click({target:{closest:()=>({dataset,disabled:false,matches:()=>false})}});}
 const saved=()=>JSON.parse(store.get('marketquest-ch1-v1'));
 click({action:'start',mode:'mission',topic:'foundations'});
 assert.match(main.innerHTML,/QUESTION 1 \/ 8/);
 for(let i=0;i<8;i++){
  const q=questions[i];click({answer:String(i===0?(q.answer+1)%4:q.answer)});
  assert.match(main.innerHTML,/explanation/);
  assert.equal(saved().run.answers.length,i+1);
  // Duplicate submission must not earn XP or count twice.
  click({answer:String(q.answer)});assert.equal(saved().run.answers.length,i+1);
  if(i===0){click({nav:'home'});assert.match(main.innerHTML,/A mission is in progress/);click({action:'resume'});assert.match(main.innerHTML,/A useful miss/);}
  click({action:'next'});
 }
 assert.match(main.innerHTML,/ROUND COMPLETE/);
 assert.equal(saved().progress.runs,1);
 assert.deepEqual(saved().progress.missed,['ch1-01']);
 assert.equal(saved().run.answers.filter(a=>a.correct).length,7);
 click({action:'start',mode:'retry'});assert.equal(saved().run.items.length,1);
 const order=saved().run.items[0].order;
 handlers.keydown({key:String(order.indexOf(questions[0].answer)+1),preventDefault(){},target:{closest:()=>null}});
 assert.deepEqual(saved().progress.missed,[]);
 click({action:'next'});
 assert.match(main.innerHTML,/A perfect run/);
 assert.equal(saved().progress.runs,2);
 click({nav:'notes'});assert.match(main.innerHTML,/Your field notes/);
 click({action:'reset'});assert.equal(saved().progress.runs,0);assert.equal(saved().run,null);
});

test('chapter switching retains legacy Chapter 1 progress and independently saves Chapter 2',async()=>{
 const {questions:chapter2}=await import('../dist/questions2.js');
 const {makeRun,recordAnswer,freshProgress,updateProgress}=await import('../dist/engine.js');
 const handlers={},main={innerHTML:'',focus(){}},nodes=new Map();
 const store=new Map();
 // Seed the exact original Chapter 1 storage format, including a pending explanation.
 const q=questions[0];let oldRun=makeRun(questions,{mode:'mission',topic:'foundations'});
 oldRun=recordAnswer(oldRun,q,(q.answer+1)%4);
 const legacy={progress:{...updateProgress(freshProgress(),q,(q.answer+1)%4),bestScore:900,runs:2},run:oldRun};
 store.set('marketquest-ch1-v1',JSON.stringify(legacy));
 globalThis.localStorage={getItem:k=>store.get(k)||null,setItem:(k,v)=>store.set(k,v)};
 globalThis.document={querySelector:s=>{if(s==='#main')return main;if(!nodes.has(s))nodes.set(s,{focus(){},innerHTML:'',textContent:''});return nodes.get(s);},querySelectorAll:()=>[],addEventListener:(e,f)=>handlers[e]=f};
 globalThis.window={scrollTo(){}};globalThis.confirm=()=>true;
 await import('../dist/app.js?chapters');
 const click=dataset=>handlers.click({target:{closest:()=>({dataset,disabled:false,matches:()=>false})}});
 const saved=id=>JSON.parse(store.get(`marketquest-${id}-v1`));
 assert.match(main.innerHTML,/900/);assert.match(main.innerHTML,/A mission is in progress/);
 click({chapter:'ch2'});
 assert.match(main.innerHTML,/Marketing Planning and Management/);
 assert.match(main.innerHTML,/Turn insight into action/);
 assert.match(nodes.get('.chapter-list').innerHTML,/CHAPTER 02/);
 click({action:'start',mode:'mission',topic:'planning'});
 assert.match(main.innerHTML,/Corporate planning/);
 click({answer:String((chapter2[0].answer+1)%4)});
 assert.deepEqual(saved('ch2').progress.missed,['ch2-01']);
 assert.equal(saved('ch2').run.answers.length,1);
 click({chapter:'ch1'});
 assert.equal(saved('ch1').progress.bestScore,900);
 assert.deepEqual(saved('ch1').progress.missed,['ch1-01']);
 click({action:'resume'});assert.match(main.innerHTML,/A useful miss/);
 click({chapter:'ch2'});click({action:'resume'});
 assert.match(main.innerHTML,/A useful miss/);
 assert.match(main.innerHTML,/Corporate planning/);
 click({nav:'notes'});assert.match(main.innerHTML,/G-STIC/);
 click({action:'reset'});
 assert.equal(saved('ch2').run,null);assert.deepEqual(saved('ch2').progress.missed,[]);
 assert.equal(saved('ch1').progress.bestScore,900);
 assert.deepEqual(saved('ch1').progress.missed,['ch1-01']);
 // Quick fire and retry only draw from the current chapter.
 click({action:'start',mode:'quick'});
 assert.equal(saved('ch2').run.items.length,10);
 assert.ok(saved('ch2').run.items.every(i=>i.id.startsWith('ch2-')));
 assert.equal(store.get('marketquest-selected-chapter'),'ch2');
 // Reload selects Chapter 2 and restores its unfinished quick round.
 await import('../dist/app.js?reload');
 assert.match(main.innerHTML,/Your Chapter 2 mission/);
 assert.match(main.innerHTML,/A mission is in progress/);
 const {questions:chapter3}=await import('../dist/questions3.js');
 const chapter1Before=store.get('marketquest-ch1-v1');
 click({chapter:'ch3'});
 assert.match(main.innerHTML,/Analyzing Consumer Markets/);
 assert.match(nodes.get('.chapter-list').innerHTML,/CHAPTER 03/);
 click({action:'start',mode:'mission',topic:'cases3'});
 assert.match(main.innerHTML,/A DECISION FOR YOUR DESK/);
 for(const q3 of chapter3.filter(q=>q.topic==='cases3')){
  click({answer:String(q3.answer)});click({action:'next'});
 }
 assert.match(main.innerHTML,/A perfect run/);
 assert.equal(saved('ch3').progress.runs,1);
 assert.equal(Object.keys(saved('ch3').progress.seen).length,8);
 assert.ok(Object.keys(saved('ch3').progress.seen).every(id=>id.startsWith('ch3-')));
 assert.equal(store.get('marketquest-ch1-v1'),chapter1Before);
 click({nav:'notes'});assert.match(main.innerHTML,/Maslow/);
 click({chapter:'ch2'});
 assert.match(main.innerHTML,/A mission is in progress/);
 click({action:'resume'});assert.match(main.innerHTML,/QUESTION 1 \/ 10/);

});
