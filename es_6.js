//ES-6 Updates
// ES-6 Compatibility Table
//Variabe Declaration with let and const
/*
//ES5
//
//var name5="Mike Smith";
//var age5=23;
//name5="Mike Miller";
//console.log(name5);

//ES6
//1st difference
const birthYear=1984;
//birthYear=2000;
let name6="Mike Smith";
name6="Mike Miller";
console.log(name6,birthYear);

//2nd difference variables declared with var in ES5 is function scoped, and the variables declared with let and const in ES6 are block-scoped.

//ES5

function dlicense5(test){
    if(test){
        var firstName="Mike";
        var yearBirh=1970;
    }
    console.log(firstName+", born in "+yearBirh+" is now officially allowed to drive a car!");
}

dlicense5(true);

//es6

function dlicense6(test){
    let firstName2="Mike";
    const yearBirh2=1970;
    if(test){
      console.log(firstName2+", born in "+yearBirh2+" is now officially allowed to drive a car!");  
    }

}

dlicense6(true);

let i=23,sum=0;
for(i=0;i<5;i++){
    console.log(i);
    sum+=i;
}
console.log(i,sum);



//ES6 STRINGS

var a=10;
var b=10;

console.log("JavaScript appeared "+(a+b)+" years ago!");

//Template String

//console.log(`JavaScript appeared ${a+b} years ago!`);
//
//
//let firstName="Mike";
//let lastName="Smith";
//const yearOfBirth=1970;
//function calcAge(curYear,birthyear){
//    return curYear-birthyear;
//}
//console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}.Today, he is ${calcAge(2018,yearOfBirth)} years old!`);

//String Methods

let fName="Mike";
let lName="Smith";

const n=`${fName} ${lName}`;

console.log(n);
console.log(n.startsWith("m")); //false
console.log(n.startsWith("M")); //true
console.log(n.endsWith("Sm"));  //false
console.log(n.endsWith("th")); //true

console.log(`${fName} ${lName} `.repeat(3));   //Mike Smith Mike Smith Mike Smith 

//Arrow functions

//ES5

//var x=function(a){
//    return a;
//}

//ES6

let x= a =>a;
console.log(x(2));

//if we do not have any parameter

//var y=function(){
//    console.log("Hello");
//}
//ES6
let y=() =>{console.log("Hello");}

y();

//IF WE HAVE MULTIPLE PARAMETERS

//ES5

var z=function(a,b,c){
    return a+b+c;
}
console.log(z(1,2,3));

//ES6

let k=(a,b,c)=>a+b+c;
console.log(k(1,2,3));

////////////////////////////////////////////////////////////////////////////////////

//map() Method

var array1=[1,4,9,16];

const map1=array1.map(x=>x*2);

console.log(map1);


/////////////////////////////////////////////////////////////////////////////////
//Destructing is a JS expression that makes it possible to unpack values from array, or properties from objects, into distinct variables

//ES5

//var john=["john",26];
//
//var name=john[0];
//var age=john[1];

//ES6
let[name,age]=[["John"],26];

console.log(Array.isArray(name));
console.log(age);
*/
//////////////////////////////////////////////////////////////////////

//Arrays

//var x=Array.from("JavaScript");
//console.log(x);
//
//var ages=[12,17,8,21,14,11];
//var full=ages.map(function(cur){
//                  return cur>=18; 
//                  })
//console.log(full);
//console.log(full.indexOf(true));
//console.log(ages[full.indexOf(true)]);

//ES6
//findIndex()= returns the index of the first element in the array that satisfies the provided texting function

//find()= returns the value of the first element in the array that satisfies the provided testing function

//let ages=[12,17,8,21,14,11];
//console.log(ages.findIndex(cur=> cur>=18));
//console.log(ages.find(cur=> cur>=18));
//
//// for..of  //////
//
//let myArray=[10,20,30];
//for(let x of myArray){
//    x+=1;
//    console.log(x);
//}
//
//let myObj={
//    x:1,
//    y:2,
//    z:3
//}
//
//for(let a in myObj){
//    console.log(a);
//    console.log(myObj[a]);
//}
//
//let list=[4,5,6];
//for(let i in list){
//    console.log(i);
//}
//for(let i of list){
//    console.log(i);
//}
//

////// SPREAD OPERATOR //////////////////////////////////////////////////////////
//
//let mid=[3,4];
//let array=[1,2,mid,5,6];
//let arr=[1,2,...mid,5,6];
//console.log(...array);  //1 2 (2) [3, 4] 5 6
//console.log(arr);       //[1, 2, 3, 4, 5, 6]
//
//function addFourAges(a,b,c,d){
//    return a+b+c+d;
//}
//
//let sum1=addFourAges(1,2,3,4);
//console.log(sum1);
//
//// if i have those ages in an array, how can I pass it to function?
//
//let ages=[10,20,30,40];
//let yu=[...ages];
//let sum=addFourAges(...ages);
//console.log(sum);           //100
//
//let sum2=(a,b,c,d)=>a+b+c+d;
//console.log(sum2(...ages));


///////////////// REST OPERATOR ////////////////////////////////////////////////
//
//function sumAll(...args){
//    let sum=0;
//    for(let arg of args){
//        sum+=arg;
//    }
//    return sum;
//}
//console.log(sumAll(1));
//
////The big difference between spread and rest operator is the place in which we use each of them
//
////function multiply(multiplier,...theArgs){
////    return theArgs.map(function(element){
////        return multiplier*element;
////    });
////}
//
//let multiply=(multiplier,...theArgs)=> theArgs.map(element=> multiplier*element);
//
//let arr=multiply(2,1,2,3);
//console.log(arr);
//
/////////////////////////////////////// MAP //////////////////////////////////////
//
//let myMap= new Map();
//
//myMap.set("1","value of x");
//myMap.set("2","value of y");
//myMap.set("3","value of z");
//
//console.log(myMap.size);
//console.log(myMap.get("1"));
//
//for(let [key,value] of myMap.entries()){
//    console.log(`This is ${key}, and it is set to ${value}`);
//}

let question = new Map();
question.set("question", "what is the official name of the latest major JS version");
question.set(1,"ES5");
question.set(2,"ES6");
question.set(3,"ES2015");
question.set(true,"Correct answer is D");
question.set(false,"wrong, try again");
question.set("answer",prompt("enter your answer here"));


console.log(question.get("question"));
console.log(question.size);

for(let[key,value] of question.entries()){
    console.log(`this is ${key}, and it is set to  ${value}`);
}


if (question.get("answer")==1){
    console.log(true);
}

