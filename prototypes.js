/*
In Java we created classes and put methods inside and inherited these methods by using extends.$anchorScroll

Js (ES5) does not have classes but have PROTOTYPES

It is not exactly same as class, because you do not create instance of it, but you can create methods that affect multiple objects by using isPrototypeOf
*/

function bicycle(cadence,speed,gear,tirePressure){
    this.cadence=cadence;
    this.speed=speed;
    this.gear;
    this.tirePressure=tirePressure;
    
    this.inflateTires=function(){
        return this.tirePressure+=3;
    }
}

var b1=new bicycle(50,20,4,25);
b1.inflateTires();

function mechanic(name){
    this.name=name;
}

var m1=new mechanic("Mike"); 
// We gonna give Mike access to inflateTires method 

/*
Whenever you create a function, JS creates 2 objects.
    1-Function name object
    2-prototype object
*/

function great(){
    console.log("Hello");
}

great();                    //hello
console.log(great);             //function object
console.log(great.prototype);   //prototype object

/*
When you create object,__proto__ is created be JS Engine
*/
function foo(){}
var obj=new foo();
console.log(obj);

/*
Set a property to foo prototype and access it from your obj
*/

foo.prototype.test="this is object";
console.log(obj.__proto__.test);
console.log(obj.__proto__);
console.log(obj.hello);

obj.__proto__.hello="test";

console.log(obj.hello);

obj.test=10;
console.log(obj.test);

function employee(name){
    this.name=name;
}

var emp1=new employee("Mike");
var emp2=new employee("Smith");
employee.prototype.playPranks=function(){
    console.log("Plank played");
}
emp1.__proto__.playSoccer=function(){
    console.log("Soccer played");
}

emp1.__proto__.playPranks();
emp2.__proto__.playPranks();
employee.prototype.playPranks();

emp1.__proto__.playSoccer();
emp2.__proto__.playSoccer();
employee.prototype.playSoccer();

var names={
    name:"Vepa",
    surname:"Orazov"
}

/*
In class modules, you have to define all method upfront
In prototype, you can put things at runtime
The minute you add that extra property, every object that was created from the employee as a constructor, even the ones that were created before you added that on the propety would still work. Because the prototype look up happens at runtime.
*/

function simple(){}
var obj=new Object();
console.log(simple.prototype===obj.__proto__);



function employee(){}
var emp=new employee();
console.log(emp.test);

//emp.test;

emp.prop="Employee";
emp.__proto__.parentProp="Parent of Employer";

console.log(emp.__proto__.__proto__===Object.prototype);
console.log(employee.prototype.__proto__===Object.prototype);

Object.prototype.grandParentPro="Grand Parent";

function foo(){}
var tmp=new foo();    
console.log(tmp.grandParentPro);


function manager(name,dept){
    this.name=name;
    this.dept=dept;
}

manager.prototype.getDept=function(){
    return this.dept;
}

var m1=new manager("Mike","Sales");
console.log(m1.getDept());
console.log(m1.getName());










