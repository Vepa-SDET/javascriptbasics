//Browser Object Model

//Document Object Model

//Global JavaScript Objects

    //String Objects
    

    //Number Objects
    /*  isNaN()
        toFixed()
        toPrecision()
        toExponential()
                        */
// isNan()
var a="apple";
console.log(isNaN(a));  //true
var b="23";
console.log(isNaN(b));  //false
var c="abc23";
console.log(isNaN(c));  //true
var d=" ";
console.log(isNaN(d));  //false
var e=23;
console.log(isNaN(e));  //false

// toFixed()
var a=213.73145;
console.log(a.toFixed());       //214
var b=213.73145;
console.log(b.toFixed(3));      //213.731
var c=213.73145;
console.log(c.toFixed(2));      //213.73
var d=2.13e+15; 
console.log(d.toFixed(2));      //2130000000000000.00

// toPrecision()

var a=13.3714;
console.log(a.toPrecision());   //13.3714
var b=13.3714;
console.log(b.toPrecision(2));  //13
var c=13.3714;
console.log(c.toPrecision(3));  //13.4
var d=13.3714; 
console.log(d.toPrecision(10)); //13.37140000

var x=0.001658853;
console.log(x.toPrecision());   //0.001658853
console.log(x.toPrecision(2));  //0.0017
console.log(x.toPrecision(3));  //0.00166
console.log(x.toPrecision(10)); //0.001658853000

//  toExponential()

var x=123456;
console.log(x.toExponential());  //1.23456e+5 
var x=123.456;
console.log(x.toExponential());  //1.23456e+2  

//toString()
// Convert a number to a String

var num=15;
var str=num.toString();
console.log(typeof(num)); //number
console.log(typeof(str)); //string

var array=["vepa",1];
var str=array.toString();

var buck1="",buck2="",s1="dfgsdA08awq #23423wefa^$#saaag5345sfs";
for(var i=0;i<s1.length;i++){
    if(s1[i]==" "||isNaN(s1[i])){
        buck1+=s1[i];
    }else{
        buck2+=s1[i];
    }
}console.log("Numbers="+buck2.length+" letters="+buck1.length);

// Math.round()
// Rounds number to the nearest integer

var a=Math.round(2.60); 
console.log(a);          //3
a=Math.round(2.50);
console.log(a);          //3   
a=Math.round(2.49);
console.log(a);          //2   
a=Math.round(-2.49);
console.log(a);         //-2    
a=Math.round(-2.60);
console.log(a);         //-3
a=Math.round(-2.51);
console.log(a);         //-3
a=Math.round(-2.50);
console.log(a);         //-2

// Math.sqrt()
// Returns square root of Positive number

var a=Math.sqrt(0);
console.log(a);         //0
var b=Math.sqrt(1);
console.log(b);         //1
var c=Math.sqrt(64);
console.log(c);         //8
var d=Math.sqrt(-9);
console.log(d);         //Nan
var e=Math.sqrt(9);
console.log(e);         //3

// Math.floor();
// Rounds number down to the nearest integer

var a=Math.floor(0.60);
console.log(a);             //0
var a=Math.floor(0.99);
console.log(a);             //0
var a=Math.floor(5);
console.log(a);             //0
var a=Math.floor(-5.1);
console.log(a);             //0
var a=Math.floor(-5.99);
console.log(a);             //0
var a=Math.floor(5.1);
console.log(a);             //0

console.log(10.56.toPrecision(5));
console.log(10.56.toFixed(5));
console.log(10.56.toExponential());
console.log(10.56.toFixed(5));

// Math.ceil()
// Rounds number up to the nearest integer

var a=Math.ceil(0.60);
console.log(a);             //1
var a=Math.ceil(0.01);
console.log(a);             //1
var a=Math.ceil(5);
console.log(a);             //5
var a=Math.ceil(5.01);
console.log(a);             //6
var a=Math.ceil(-5.99);
console.log(a);             //-5
var a=Math.ceil(-2.01);
console.log(a);             //-2

// Math.random()
//Return a random number between mentioned numbers

var a=Math.random();
console.log(a.toFixed(2));

var b=Math.random()*10+1;
console.log(b);

var a=Math.random() * (max - min) + min;
if(Math.round(a)>100){
    console.log(Math.round(a)+" is bigger than 100!");
}

// The Date Object

var today= new Date();
console.log(today);

var today=new Date(1000000000000);
console.log(today);

var d=new Date("October 13,2018 11:13:00");
console.log(d);

var d=new Date(99,5,24,11,33,30,0);
console.log(d);

//Months are zero index

var d=new Date(2008,4,24,11,33,30,0);
console.log(d);

var d=new Date(98,5);
console.log(d);

//ISO Date
var d=new Date("2015-03-25");
console.log(d);

//Short Date
var d=new Date("03/25/2015");
console.log(d);

//Long Date
var d=new Date()

// getFullYear() Method

var moonLanding =new Date("July 20,69 00:20:18");
console.log(moonLanding.getFullYear());  //1969
console.log(moonLanding.getMonth());     //6(it means July)   
console.log(moonLanding.getDay());       //0  
console.log(moonLanding.getHours());     //0
console.log(moonLanding.getSeconds());   //18   
console.log(moonLanding.getTime());      //-14236782000   

var today= new Date();
var year=today.getFullYear();
var month=today.getMonth();
var hours=today.getHours();
var day=today.getDay();
var seconds=today.getSeconds();
var milliseconds=today.getMilliseconds();
var time=today.getTime();

console.log(year);      //2018
console.log(month);     // 7(it means august)
console.log(day);       //4
console.log(hours);     //10
console.log(seconds);   //21
console.log(milliseconds); //880
console.log(time);      //1534433342339

var d=new Date(-62167198164000);
console.log(d);

//setDate() Method

var event= new Date("August 19,1975 23:15:30");
event.setDate(24);
console.log(event.getDate()); //24
console.log(event); //Sun Aug 24 1975 23:15:30 GMT-0500

//setFullYear() Method

var event= new Date("August 19,1975 23:15:30");
event.setFullYear(2018);
console.log(event.getFullYear()); //2018
console.log(event); //Sun Aug 19 2018 23:15:30 GMT-0500 

var theBigDay=new Date(1962,6,7);
theBigDay.setFullYear(2018,11,3);
console.log(theBigDay);  //Mon Dec 03 2018 00:00:00 GMT-0600 

//setHours() Method

var event= new Date("August 19,1975 23:15:30");
event.setHours(20);
console.log(event.getHours()); //20
console.log(event); //Tue Aug 19 1975 20:15:30 GMT-0500

event.setHours(20,21,22);
console.log(event); //Tue Aug 19 1975 20:21:22 GMT-0500

var today=new Date();
today.setHours(15);
console.log(today); //Thu Aug 16 2018 15:56:00 GMT-0500


//setMinutes() Method

var event= new Date("August 19,1975 23:15:30");
event.setMinutes(45);
console.log(event.getMinutes()); //45
console.log(event); //Tue Aug 19 1975 23:45:30 GMT-0500 

var today=new Date();
today.setMinutes(45);
console.log(today); //Thu Aug 16 2018 10:45:05 GMT-0500

// setMonth() Method

var event= new Date("August 19,1975 23:15:30");
event.setMonth(3);
console.log(event.getMonth()); //3
console.log(event); //Sat Apr 19 1975 23:15:30 GMT-0500 

var today=new Date();
today.setMonth(10);
console.log(today); //Fri Nov 16 2018 11:17:31 GMT-0600

// setSeconds() Method

var event= new Date("August 19,1975 23:15:30");
event.setSeconds(00);
console.log(event.getSeconds()); //0
console.log(event); //Tue Aug 19 1975 23:15:00 GMT-0500 

var today=new Date();
today.setSeconds(00);
console.log(today); //Thu Aug 16 2018 11:21:00 GMT-0500

//setTime() method

var event1=new Date("July 1,1999");
var event2=new Date();
event2.setTime(event1.getTime());

console.log(event1); //Thu Jul 01 1999 00:00:00 GMT-0500
console.log(event2); //Thu Jul 01 1999 00:00:00 GMT-0500

var myBirthday=new Date("September 12,1984");
var todayDate=new Date();
var myAge=0;
if(myBirthday.getMonth()<todayDate.getMonth()){
    myAge=todayDate.getFullYear()-myBirthday.getFullYear();
}else{
    myAge=todayDate.getFullYear()-1-myBirthday.getFullYear();
}
console.log(myAge);

var x=1;
var i=0;
while(i++<2){
console.log(i+" ");    
    
}
var x=9-14;
console.log(Math.abs(x));

