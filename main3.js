const countTOten = (num=1)=> {
    while(num<=10){
        console.log(num);
        num++;
    }
}

countTOten();


console.log("____________________________________________________");

const recureToTen=(num=1)=>{
    if(num>10)return;
    console.log(num);
    num++;
    recureToTen(num);
}

recureToTen();

console.log("____________________________________________________");


const fibonacci=(num,array=[0,1])=>{
    while(num>2){
        const[nextToLast,last]=array.slice(-2);
        array.push(nextToLast+last);
        num-=1;
    }
    return array;
}

console.log(fibonacci(12));


const fib=(num,array=[0,1])=>{
    if(num<=2)return array;
    const [nextToLast,last]=array.slice(-2);
    return fib(num-1,[...array,nextToLast+last]);
}

fib(12);


console.log("_________________________With Recursion___________________________");

const fibonaccipos=(pos)=>{
    if(pos<=1)return pos;
    const seq=[0,1];
    for(let i=2;i<=pos;i++){
        const[nextToLast,last]=seq.slice(-2);
        seq.push(nextToLast+last);
    }
    return seq[pos];
}

console.log(fibonaccipos(8));

console.log("______________________Without Recursion______________________________");

const fibpos=(pos)=>{
    if(pos<2)return pos;
    return fibpos(pos-1)+fibpos(pos-2);
}

console.log(fibpos(8));

console.log("________________________Example_______________________");

const getAWSProductIdImage=async()=>{

    if(data.IsTruncated){
        return await getAWSProductIdImage(
            productId,
            s3,
            resultArray,
            data.NextContinuation
        );
    }
    return resultArray;
}

const artistsByGarne={
    jazz:["Miles Davis","john Coltrane"],
    rock:{
        classic:["Bob Seger","The Eagle"],
        Hair:["Def Leppard","Whitesnake","poison"],
        alt:{
            classic:["pearl jam","The killers"],
            current:["Joywave","sir sly"]
        }
    },
    unclassified:{
        new:["caamp","Neil Young"],
        classic:["seal","Morchiba","Chris Staplenton"]
    }
}

const getArtistName=(dataObj,arr=[])=>{
    Object.keys(dataObj).forEach(key=>{
        if(Array.isArray(dataObj[key])){
            return dataObj[key].forEach(artist=>{
                arr.push(artist);

            });

        }
        getArtistName(dataObj[key],arr);

    });
    return arr;
}

console.log(getArtistName(artistsByGarne));