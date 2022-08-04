const car = {
    doors:2,
    seats:"vinyl",
    get seatMaterial(){
        return this.seatMaterial;
    },
    set seatMaterial(Material){
        this.seat=Material;
    }
}

const luxurycar={};
    Object.setPrototypeOf(luxurycar,car);   
    luxurycar.seatMaterial="leather";
    console.log(luxurycar);





    console.log(Object.keys(luxurycar));
    Object.keys(luxurycar).forEach(key=>
        {
            console.log(key);
        });


        for(let key in luxurycar){
            console.log(key);
             
        }






