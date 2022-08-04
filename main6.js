const initApp=()=>{
    const tbutton=document.querySelector('#throttle');
    tbutton.addEventListener('click',throttle(clickLog,2000));

}

const clickLog=()=> console.log('click');
document.addEventListener('DOMContentLoaded', initApp);
const throttle=(fn,delay)=>
{
    let lastTime=0;
    console.log('called throttle immediatly');
    let id=0;
    return(...args)=>{

    

    const now=new Date().getTime();
    id++;
    if(now-lastTime<delay)return;
    lastTime=now;
    console.log(`event id:${id}`);
    fn(...args);

}}
