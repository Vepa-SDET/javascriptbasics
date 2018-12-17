var Car = function(make,year,model){
    this.make = make;
    this.year = year;
    this.model= model;
    this.lightControl = function (lights){
        if(lights=="ON"){
            lights = "OFF";
        }else{
            lights = "ON";
        }
        return lights;
    }
}
let myCar = new Car("Honda",2018,"Civic");
console.log(Car.prototype ==myCar.__proto__);//true

let askUser = +prompt("Would you like to update your navigation software? \n 1.Yes  2.No");

if(askUser == 1){
    Car.prototype.liveTraffic = function(){
        console.log("Your GPS software is updated. Now you can avoid traffic");
    } 
}else {
    console.log("Thank you for your time")
}

console.log(Car.prototype)
car.liveTraffic();