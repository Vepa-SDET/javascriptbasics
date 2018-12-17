//ES5 

var Person5 = function (name,yearOfBirth,job){
   this.name=name;
   this.yearOfBirth=yearOfBirth;
   this.job=job;
         
}

var p1_es5=new Person5("Mike",1980,"Automation Tester");

Person5.prototype.calculateAge=function(){
    var age=new Date().getFullYear()-this.yearOfBirth;
    console.log(age);
}

p1_es5.calculateAge();

//ES6

class Person6{
    constructor(name,yearOfBirth,job){
        this.name=name;
        this.yearOfBirth=yearOfBirth;
        this.job=job;
    }
    calculateAge(){
    let age=new Date().getFullYear()-this.yearOfBirth;
    console.log(age);
    }
}

let p1_es6=new Person6("Mike",1980,"Automation Tester");

p1_es6.calculateAge();
console.log(p1_es6 instanceof Person6);

///////////// ES6 Static Methods //////////////////////////////////////////

// Static methods that are simply attached to the classes 

class Person6{
    constructor(name,yearOfBirth,job){
        this.name=name;
        this.yearOfBirth=yearOfBirth;
        this.job=job;
    }
    calculateAge(){
    let age=new Date().getFullYear()-this.yearOfBirth;
    console.log(age);
    }
    static greeting(){
        console.log("Hello");
    }
}

let p1_es6=new Person6("Mike",1980,"Automation Tester");
p1_es6.calculateAge();

Person6.greeting();

/*When to USE STATIC Methods?
    1-If you are writing UTILITY Functions and they are NOT Supposed to be Change.
    2-If there is some code that can easily be shared by all the instance methods, extract that code into a STATIC code.
    3-If you are sure that the definition of the method will never be changed or overridden. As STATIC methods can not be overridden.
*/

class Bicycle6{
    constructor (cadence,speed,gear,tirePressure){
        this.cadence=cadence;
        this.speed=speed;
        this.gear=gear;
        this.tirePressure=tirePressure;
    }
    inflateTire(){
        this.tirePressure+=3;
        return this.tirePressure;
    }
}

let b1_6=new Bicycle6(50,20,4,25);

console.log(b1_6.inflateTire());

////////////////   INHERITANCE     /////////////////////////////////////////

/// INHERIT Constructor  ////////
//class Animal{
//    constructor(name){
//        this.name=name;
//    }
//    
//}
//
//class Dog extends Animal{
//    constructor(name){
//    super(name);    
//    }
//    
//}
//
//let d1=new Dog("Alaja");
//console.log(d1.name);
//
//
//class Person{
//    constructor(name,age,weight){
//        this.name=name;
//        this.age=age;
//        this.weight=weight;
//    }
//    displayName(){
//        console.log(this.name);
//    }
//    displayAge(){
//        console.log(this.age);
//    }
//    displayWeight(){
//        console.log(this.weight);
//    }
//}
//
//
//class Programmer extends Person{
//    constructor(name,age,weight,language){
//        super(name,age,weight);
//        this.language=language;
//    }
//    displayLanguage(){
//        console.log(this.language);
//    }
//}
//
//let p1=new Person("Mike",38,180);
//p1.displayName();
//p1.displayAge();
//p1.displayWeight();
//
//
//let pr1=new Programmer("Smith",48,200,"JavaScript");
//pr1.displayName();
//pr1.displayAge();
//pr1.displayWeight();
//pr1.displayLanguage();

class Vehicle{
    start(){
        console.log("starting the vehicle");
    }
}

class Car extends Vehicle{
    start(){
        super.start();
        console.log("starting the car");
    }
}

let c=new Car();
c.start();

/////////////////  Getter and Setters //////////////////////////////////////

class GetThings{
    constructor(size){
        this.length=size;
    }
    get Length(){
        return this.length;
    }
    set Length(value){
        this.length=value;
        console.log("the value has been set!");
    }
}

let thing = new GetThings(5);
console.log(thing.Length);    // coming from GET method. -> 9
thing.Length= 10;             // coming from SET method. -> the value has been set
console.log(thing.Length);    // coming from GET method. -> 10

////////////////

class EncapTest{
    constructor(name,idNum,age){
        this._name=name;
        this._idNum=idNum;
        this._age=age;
    }
    get Age(){
        return this.age;
    }
    get Name(){
        return this.name;
    }
    get Id(){
        return this.idNum;
    }
    set Age(newAge){
        this.age=newAge;
    }
    set Name(newName){
        this.name=newName;
    }
    set Id(newIdNum){
        this.idNum=newIdNum;
    }

}

let encap1= new EncapTest("Smith",20,"S30");
console.log(`Name:${encap1.Name} Age:${encap1.Age} ID:${encap1.Id}`);

let encap= new EncapTest();
encap.Name="Mike";
encap.Age=25;
encap.Id="MS30";

console.log(`Name:${encap.Name} Age:${encap.Age} ID:${encap.Id}`);

///////////////// ESRA /////////////////////////////////////////// 
/*

class EncapTest{
    constructor(name,age,idNum){
        this.name = name;         // if i wrote the: this._name = name; it makes the property private.
        this.idNum = idNum;       // if i wrote the: this._idNum = idNum; it makes the property private.
        this.age = age;           // if i wrote the: this._age = age; it makes the property private.
    }
    
    get Age(){
        return this.age;
    }
    
    get Name(){
        return this.name;
    }
    
    get IdNum(){
        return this.idNum;
    }
    
    set Age(newAge){
        this.age = newAge;
    }
    
    set Name(newName){
        this.name = newName;
    }
    
    set IdNum(newIdNum){
        this.idNum = newIdNum;
    }
}

let encap = new EncapTest();
encap.Name = "Mike";
encap.Age = 20;
encap.IdNum = "MS30";

console.log(`Name: ${encap.Name} Age: ${encap.Age} ID: ${encap.IdNum}`);   // Name: Mike Age: 20 ID: MS30


let encap2 = new EncapTest("Mike",20,"MS30");
console.log(`Name: ${encap2.Name} Age: ${encap2.Age} ID: ${encap2.IdNum}`);   // Name: Mike Age: 20 ID: MS30
// encap2's console.log is coming from getter method. there is no setter method. If i did private with _ it didn't give anything

*/


