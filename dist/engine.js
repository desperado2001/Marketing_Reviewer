export function shuffle(items, random = Math.random) {
 const result = [...items];
 for(let i=result.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[result[i],result[j]]=[result[j],result[i]];}
 return result;
}
export function makeRun(bank, {mode='campaign',topic=null,missed=[]}={}) {
 let pool=bank.filter(q=>!topic||q.topic===topic);
 if(mode==='retry')pool=pool.filter(q=>missed.includes(q.id));
 if(mode==='quick')pool=shuffle(pool).slice(0,10);
 else if(mode==='retry')pool=shuffle(pool);
 return {mode,topic,items:pool.map(q=>({id:q.id,order:shuffle([0,1,2,3])})),answers:[],index:0,streak:0,bestStreak:0,score:0};
}
export function recordAnswer(run,question,choice) {
 if(run.answers.length!==run.index || run.items[run.index]?.id!==question.id || !Number.isInteger(choice)||choice<0||choice>3)return run;
 const correct=choice===question.answer;
 const streak=correct?run.streak+1:0;
 const earned=correct?100+Math.min(streak-1,4)*25:0;
 return {...run,answers:[...run.answers,{id:question.id,choice,correct,earned}],streak,bestStreak:Math.max(run.bestStreak,streak),score:run.score+earned};
}
export function advance(run) {
 return run.answers.length===run.index+1?{...run,index:run.index+1}:run;
}
export function freshProgress(){return {version:1,seen:{},missed:[],bestScore:0,runs:0};}
export function updateProgress(progress,question,choice){
 const correct=choice===question.answer;
 return {...progress,seen:{...progress.seen,[question.id]:correct},missed:correct?progress.missed.filter(id=>id!==question.id):[...new Set([...progress.missed,question.id])]};
}
export function validRun(run,bank){
 if(!run||!['campaign','quick','retry','mission'].includes(run.mode)||!Array.isArray(run.items)||!run.items.length||!Array.isArray(run.answers))return false;
 const ids=new Set(bank.map(q=>q.id));
 return run.items.every(i=>ids.has(i.id)&&Array.isArray(i.order)&&i.order.length===4&&[...i.order].sort().join('')==='0123')&&new Set(run.items.map(i=>i.id)).size===run.items.length&&Number.isInteger(run.index)&&run.index>=0&&run.index<=run.items.length&&[run.index,run.index+1].includes(run.answers.length)&&run.answers.length<=run.items.length&&run.answers.every((a,i)=>a.id===run.items[i].id&&Number.isInteger(a.choice)&&a.choice>=0&&a.choice<4)&&['score','streak','bestStreak'].every(k=>Number.isFinite(run[k])&&run[k]>=0);
}
