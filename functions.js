//Functios
//function sayHello(){
//    console.log('Hello!');
//}
//let howManyHello=+prompt("How many Hellos do you want?");
//for(let i=1;i<=howManyHello;i++){
//sayHello();
//}
//
////Task
//
//function sumOf_3_Numbers(){
//    var num1=5,num2=6,num3=7;
//    console.log("Sum of three numbers="+(num1+num2+num3));
//}
//sumOf_3_Numbers();
//
//
//function mileConverter(){
//var useriInput=parseInt(prompt("Enter your car mileage and program will convert it to kilometer:"));
//var kiloMeter=useriInput*1.6;
//console.log("You have done "+kiloMeter+" kilometers!");
//}
//
//mileConverter();

//function findBiggestOf_2(){
//var num1,num2;
//alert("Enter 2 numbers and Program will show biggest!");
//num1=parseInt(prompt("Enter number 1:"));
//num2=parseInt(prompt("Enter number 2:"));
//if(num1>num2){
//    console.log(num1+" is biggest number!");
//}else if(num2>num1){
//    console.log(num2+" is biggest number!");
//}else if(num2==num1){
//    console.log("Numbers are equal!");
//}else{
//    console.log("Enter numbers only!");
//}
//}
//findBiggestOf_2();
//
//function calculateArea(width,height){
//var area=width*height;
//console.log(area+" square meter");    
//}
//
//calculateArea(10,5);
//calculateArea(15,5);
//calculateArea(200,5);
//
//
//function payRoll(hours,hourlyRate){
//    var payment=hours*hourlyRate;
//    console.log("You earned $"+payment);
//}
//payRoll(10,10);

//var x=5;
//var y=10;
//var operator="*",calculate=0;
function calculator(x,y,operator){
if(operator=="*"){
   calculate=x*y;
}else if(operator=="/"){
   calculate=x/y;
}else if(operator=="+"){
    calculate=x+y;
}else if(operator=="-"){
    calculate=x-y;
}console.log(calculate);
}

calculator(5,10,"*");
calculator(5,10,"/");
calculator(5,10,"-");
calculator(5,10,"+");

function ageCalculate(birthYear){
var age=2018-birthYear;
    console.log("You "+age+" years old!");
}
ageCalculate(2000);

function greatestOf3(num1,num2,num3){
    if(num1>num2&&num1>num3){
        console.log(num1+" is the greatest number!");
    }else if(num2>num1&&num2>num3){
        console.log(num2+" is the greatest number!");
    }else if(num3>num1&&num3>num2){
        console.log(num3+" is the greatest number!");
    }else if(num3==num1&&num3==num2){
        console.log("All numbers are equal!");

    }
}
greatestOf3(5,5,1);    

function fahrCelcConverter(fahren){
    var celciUs=(fahren - 32) / 1.8;
    console.log(celciUs);
}
fahrCelcConverter(77);

function gradeCal(gr1,gr2,gr3){
    var gradeLev=(gr1+gr2+gr3)/3;
    if(gradeLev>=90&&gradeLev<=100){
        console.log("A");
    }else if(gradeLev>=80){
        console.log("B");
    }else if(gradeLev>=70){
        console.log("C");
    }else if(gradeLev>=60){
        console.log("D");
    }else if(gradeLev<60){
        console.log("F");
    }else{
        console.log("Put valid numbers!");
    }
}
gradeCal(100,100,100);
gradeCal(50,50,50);
gradeCal(80,80,80);  


function findElement (aRRay,element){
    for (i=0;i<aRRay.length;i++){
        if(aRRay[i]==element){
            console.log("Found it!");
            break;
        }else if(i==aRRay.length-1){
            aRRay.push(element);
            console.log(aRRay.toString());
            break;
        }
    }
}

var x=[1,2,3];
findElement(x,3);
findElement(x,4);
findElement(x,5);

function calculateArea(width,height){
    var area=width * height;
    return area;
}
var wallOne=calculateArea(10,5);
var wallTwo=calculateArea(7,5);
console.log(wallOne);
console.log(wallTwo);
x=calculateArea(5,5);

function isChecked(){
    if(x>15){
        console.log("Valid");
    }else{
        console.log("not valid");
    }
}
isChecked();

function twoValues(val1,val2){
    var summ=val1+val2;
    return summ;
}
var v1=twoValues(10,5);
var v2=twoValues(15,18);
console.log(v1);
console.log(v2);

function calculateAge(yearBirth){
    var age=2018-yearBirth;
    return age;
}
function yearsUntilRetirement(name,year){
    var retireAge=65-calculateAge(year);
    console.log(name+" , "+ retireAge);
}
yearsUntilRetirement("Vepa",1984);


function addTen(a,b){
    return a+b+10;
}
function addTen(a){
    return a+10;
}
var result=addTen(100);
console.log(result);

function getSize(width,height,length){
    
}

var area=function(x,y){
    return x*y;
}
var result=area(10,20);
console.log(area(10,20));
console.log(result);











    
    