//////////// Functions are First Class Objects  /////////////////////////////////
/* FUNCTIONS have the ability to:
    1-Be assigned to variable
    2-Have other functions in them
    3-Return other functions to be called later
*/

/////////// CALL BACK Functions ///////////////////////////////////////////////

// A callback function is a function passed into another function as an argument

let x=function(){
    console.log("I am called from inside a function");
}
let y = function(r){
    console.log("do smthg.");
    r();
}

y(x);

let calc= function(num1,num2,callback){
    return callback(num1,num2);
}

let add=function(a,b){
    return a+b;
}
let multiple=function(a,b){
    return a*b;
}
let division=function(a,b){
    return a/b;
}
let subtraction=function(a,b){
    return a-b;
}

console.log(calc(2,3,add));
console.log(calc(2,3,multiple));
console.log(calc(2,3,division));
console.log(calc(2,3,subtraction));

let students=[{name:"Mary",score:90,school:"East"},
              {name:"James",score:100,school:"east"},
              {name:"Steve",score:40,school:"East"},
              {name:"Gabe",score:90,school:"West"},
              {name:"Racheal",score:85,school:"East"},
              {name:"Smith",score:950,school:"West"}
             ];

let processStudents=function(data,callback){  
    for(let i=0;i<data.length;i++){
       if(data[i].school.toLowerCase()=="east"){
           if(typeof callback=="function"){
           callback(data[i]);
           }
       } 
  }
}
processStudents(students,function(x){
    if(x.score>60){
    console.log(x.name+" passed");
    }else{
        console.log(x.name+" not passed");
    }
});

let deterTotal=function(){
    let total=0;
    let count=0;
    processStudents(students,function(x){
        total=total+x.score;
        count++
    })
console.log(`Total score;${total}- Total number:${count}`);
}

deterTotal();


/////////////////////  CLOSURES  ///////////////////////////////////////

function calcRectArea(length,width){
    return length*width;
}
let room= calcRectArea(10,10);

function youSayGoodBye(){
    console.log("Good Bye");
    function andISayHello(){
        console.log("Hello");
    }
return andISayHello;
}

let smth=youSayGoodBye();

console.log(smth);

smth();

// closures get involved when the returned 

function stopWatch(){
    let startTime=Date.now();
    
    function getDelay(){
        let elapsed=Date.now()-startTime;
        console.log(elapsed);
    }
return getDelay;
}

let timer=stopWatch();
timer();

////////////////////////  Closure   ///////////////////////////////////////////
// JavaScript runtime keeps track of all of your variables, memeory usage, reference, and so. When it detects that an inner function relies on variables stored by an outer function, it ensures those variables are available even if the outer function goes away.


let lx=[1,2,3]+[3,4,5];
console.log(typeof lx,lx);

(function(){
    let a=b=100;
console.log(a,b);
})();


////////////////// CALL - APPLY - BIND  /////////////////////////////////////////

let obj={
    num:2
}

let addToThis=function(a){
    return this.num+a;
}

let x=addToThis.call(obj,3);
console.log(x);


let addToThis2=function(a,b,c){
    return this.num+a+b+c;
}

let y=addToThis2.call(obj,3,2,1);
console.log(y);

/// APPLY ///////
let arr=[1,2,3];
let z=addToThis2.apply(obj,arr);
console.log(z);


//// bind///

let arr2=[1,2,3];

let w=addToThis2.bind(obj);
console.log(w(1,2,3));
console.log(w(...arr2));

























