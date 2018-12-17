//Logical Operators
//AND
console.log(true&&true);
console.log(true&&false);
console.log(false&&(3==4));

//OR
console.log(true||true);
console.log(true||false);
console.log(false||(3==4));

//TASKS
var ApplesCount=20;
var OrangesCount=30;
var PearsCount=30;

var comp=ApplesCount<OrangesCount||OrangesCount>=PearsCount;
console.log(comp);

var OutsideWeather;
var Degree;
OutsideWeather="Shiny";
Degree=70;
var comp2=(!(OutsideWeather=="Raining"||Degree==70));
console.log(comp2);

var b=2;
var res=++b==2||--b==2&&--b==2;
console.log(res);

/*
b: 2-> 3 -> 2 -> 1
res: 3==2||2==2&&1==2
     false||(true&&false)
     false||false
     false
*/
var x=true,z=true;
var y=20;
x=(y!=10)||(z=false);
console.log(x);



