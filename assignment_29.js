//You are in the market to buy a car and visited a dealer
//
//1- create a dealer array with some objects inside. Objects will have car informations like make,model,year,mileage,and state.
//
//2- create a function that checks if the car state is VA
//
//3- print all the cars where the year is more than 2010 that belongs to va 
//
//4- print total mileage of the cars that belongs to va 
//
// 
//
//Hint: Use callbacks

let dealer=[
    {make:"Toyota",model:"Corolla",year:2005,mileage:107000,state:"VA"},
    {make:"Nissan",model:"Sentra",year:2011,mileage:157000,state:"TX"},
    {make:"Mercedes",model:"E350",year:2018,mileage:3000,state:"CA"},
    {make:"KIA",model:"Sorento",year:2013,mileage:63000,state:"VA"},
    {make:"Ford",model:"Mustang",year:2015,mileage:9000,state:"VA"}
];

let inspect=(cars,c_back)=>{
    let totMile=0;
    for(let i=0;i<cars.length;i++){
        if(cars[i].state=="VA"){
            totMile+=cars[i].mileage;
            c_back(cars[i]);
        }
    }
console.log(`Total mileage of VA cars:${totMile}`);
}

let callBack=(c)=>{
    if(c.year>2010){
console.log(`${c.make} ${c.model} ${c.year} ${c.mileage} ${c.state}`);
    }
}

inspect(dealer,callBack);








