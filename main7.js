const initApp=()=>{
    const button=document.querySelector('button');
    button.addEventListener('click',()=>{
        clickLog();
        button.disabled=true;
        setTimeout(()=>button.disabled= false,2000);
    });
}
const clicklog=()=> console.log('clicked');

document.addEventListener('DOMContentLoaded', initApp);
const debounce=(fn,delay)=>{
    let id;
    console.log(`Previous id: ${id}`);
    return (...args)=>{
    if(id)clearTimeout(id);
    id=setTimeout(()=>{
        fn(...args);

    },delay);}

}
