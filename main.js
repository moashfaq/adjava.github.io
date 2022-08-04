let x=1;

const parentfuntion= () =>{
    let myvalue=2;
    console.log(x);
    console.log(myvalue);

    const childfuntion =() =>
    {
        console.log(x+=5);
        console.log(myvalue +=1);

    }
    
    childfuntion();

}
parentfuntion();



//IIFE

 const privatecounter=(
    ()=> {
        let count=0;
        console.log(`initial value: ${count}`);
        return () => { count += 1; 
        console.log(count)}
    })();

    privatecounter();
    privatecounter();
    privatecounter();




    //credit game

    const credits=(
        (num)=> {
            let credits=num;
            console.log(`initial credit value: ${credits}`);
            return () => { 
                credits -= 1; 
                if(credits>0 )console.log(`playing game, ${credits} credits(s) remaining`  );
                if(credits<0 )console.log(`Not enough creadits`  );

            }
        }
    )(3);


    
    credits();
    credits();
    credits();
    credits();
    
