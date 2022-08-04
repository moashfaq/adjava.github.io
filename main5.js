const add2=(x)=>x+2;
const subtract1=(x)=>x -1;
const multiplyby5=(x)=> x*5;

const result= multiplyby5(subtract1(add2(4)));
console.log(result);

console.log("_____________________________________________");

const compose=(...fns)=> val => fns.reduceRight((prev,fn)=> fn(prev),val);

const compResult= compose(multiplyby5,subtract1,add2)(4);
console.log(compResult);

const pipe=(...fns)=> (val) => fns.reduce((prev,fn)=> fn(prev),val);

const pipeResult=pipe(add2,subtract1,multiplyby5)(5);
console.log(pipeResult);



console.log("___________________splitonspace__________________");

const lorem=" hello lorem how are you doing. This is ashfaq speaking. blah blah blahh.";

const splitOnSpace= (string)=>string.split(' ');
const count =(array)=> array.length;

const wordcount= pipe(splitOnSpace,count);
console.log(wordcount(lorem));

console.log("hello");