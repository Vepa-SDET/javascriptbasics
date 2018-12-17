//Creating Objects in JS

//First way:
let car1={
    make:"Audi",
    model:"Q7",
    year:2018,
    color:"black",
    turbo:true
}

//Second way:
let car2=new Object();
car2.make="BMW";
car2.model="X5";
car2.year=2018;
car2.color="black";
car2.turbo=true;

//Third way:
let car1Copy=Object.create(car2);
console.log(car1Copy.make); //Audi
car1Copy.make="Mercedes";
console.log(car1Copy.make); //Mercedes

//Create objects with constructor function

function constructorName(par1,par2){
    this.par1=par1;
    this.par2=par2;
}

let obj1=new constructorName("value1","value2");
let obj2=new constructorName("val1","val2");

//Updating properties and methods

let car3={
    make:"Audi",
    model:"Q7",
    year:2018,
    color:"black",
    turbo:true,
    drive:()=>{
        return "Let`s go!";
    }
}

car3.make="Bmw";
car3["hp"]=450;
delete car3.model;

car3.drive=()=>{
    return "Go faster!";
}

//2 way of reaching object properties


let car4={
    make:"Skoda",
    model:"Yeti",
    year:2018,
    color:"black",
    turbo:true,
    drive:()=>{
        return "Let`s go!";
    }
}

//First way
console.log(car4.make);
console.log(car4.drive());
console.log(car4.drive);    //function description

//Second way
console.log(car4["make"]);
console.log(car4["drive"]); //function description



//this keyword 

function myCar(make,model,year,color,turbo){
    this.make=make;
    this.model=model;
    this.year=year;
    this.color=color;
    this.turbo=turbo;
    this.drive=()=>{
        if(this.turbo){
        return "This car goes faster!";
    }
}
}

let mers=new myCar("Benz","E350",2018,"white",true);
console.log(mers.drive());

let car5={
    make:"Volkswagen",
    model:"Passat",
    year:2018,
    color:"black",
    turbo:true,
    drive:()=>{
          if(this.turbo){
        return "This car goes faster!";
    }
}
}

//////////////////     Task      /////////////////////////  
//In this challenge, we will learn about iterating over objects. 
//Create a function which will have one parameter: an array, of objects.                                                        Each object in the array has two integer properties denoted by x and y.                                                         The function must return a count of all such objects o in array arr that satisfy o.x==o.y.

let arr=[{x:32,y:32},{x:2,y:5},{x:6,y:9},{x:99,y:99},{x:25,y:12}];
let count=0;
for(let i=0;i<arr.length;i++){
    if(arr[i].x==arr[i].y){
        count++;
    }
}
console.log(count);


//ES5 constructor function

function Mycar(make,model,year,color,turbo){
    this.make=make;
    this.model=model;
    this.year=year;
    this.color=color;
    this.turbo=turbo;
    this.drive=()=>{
        if(this.turbo){
        return "This car goes faster!";
    }
}

 var toyo=new Mycar("Toyota","Corolla",2018,"white",true);    
    
}

//ES6 Classes

class Car{
    constructor(make,model,year,color,turbo){
       this.make=make;
    this.model=model;
    this.year=year;
    this.color=color;
    this.turbo=turbo;
   }
    drive(){
        if(this.turbo){
        return "This car goes faster!"; 
        }
    }
}

let benz=new Car("Mercedes","E350",2018,"white",true); 


//Getter & Setter methods
class SellCar{
    constructor(price){
        this._sellPrice=price;
    }
    get Price(){
        return this.sellPrice;
    }
    set Price(value){
        if(value>=10000){
        this.sellPrice=value;
        console.log("Good price!");
        }else{
        console.log("I will not sell this car for this price!");    
        }
}
}
let sell=new SellCar();
sell.Price=10000;
console.log(sell.Price);


























function getCount(objects) {
    let count=0;
    for(let i=0;i<objects.length;i++){
        if(objects[i]["x"]==objects[i]["y"]){
         count++;       
            }
        }
return count;
}






