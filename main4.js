const
add= (x,y)=> x+y;
console.log(add(2,3));
console.log("____________________________________________________");



const fullName=(first,last)=> `${first} ${last}`;
console.log(fullName("Ashfaq","Ch"));

console.log("______________________Impure Eg_1________________________");

let x=1;
const increment=()=> x+=1;
console.log(increment());
console.log(x);


console.log("______________________Impure Eg__2_______________________");

const myarray =[1,2,3];
const addToArray=(array,data)=>{
    array.push(data);
    return array;
}
console.log(addToArray(myarray,4));
console.log(myarray);

console.log("______________________Refactored Eg__1_______________________");

const pureincrement=(num)=> num+=1;
console.log(pureincrement(x));
console.log(x);

console.log("______________________Refactored Eg__2_______________________");

const pureaddtoarray=(array,data)=> [...array,data];
console.log(pureaddtoarray(myarray,5));
console.log(myarray);


console.log("______________________Pure odd Eg__2_______________________");

const onetofive=[1,2,3,4,5];
const oddtofive=onetofive.filter(elem => elem % 2 !==0)
console.log(oddtofive);
