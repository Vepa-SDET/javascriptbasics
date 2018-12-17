//Question 1=============================================
//Create a function that accepts 1 string, e.g. "Bob", return a greeting of the form "Hello Bob!".

var helloName=function(name){
    console.log("Hello "+name+"!");
}
helloName("Bob")    //"Hello Bob!"
helloName("Alice")  //"Hello Alice!"
helloName("X")      //"Hello X!"

//Question 2=============================================
//Create a function that accepts two strings, a and b, return the result of putting them together in the order abba, e.g. "Hi" and "Bye" returns "HiByeByeHi".


function makeAbba(a,b){
    var str="";
    console.log(str.concat(a).concat(b).concat(b).concat(a));
}
makeAbba("Hi", "Bye")       //"HiByeByeHi"
makeAbba("Yo", "Alice")     //"YoAliceAliceYo"
makeAbba("What", "Up")      //"WhatUpUpWhat"

//Question 3=============================================
//Create a function return a new string made of 3 copies of the last 2 chars of the original string. The string length will be at least 2.

function extraEnd(str){
    var newStr="";
    newStr=str.substr(-2,2);
    //newStr+=str.charAt(str.length-2)+str.charAt(str.length-1);
    console.log(newStr.concat(newStr).concat(newStr));
}
extraEnd("Hello") // "lololo"
extraEnd("ab")    //"ababab"
extraEnd("Hi")    //"HiHiHi"

//Question 4=============================================
//Given a string, return the string made of its first two chars, so the String "Hello" yields "He". If the string is shorter than length 2, return whatever there is, so "X" yields "X", and the empty string "" yields the empty string "". Note that str.length() returns the length of a string.

var firstTwo=function(str){
    if(str.length>=2){
        console.log(str[0]+str[1]);
    }else if(str.length==1){
        console.log(str[0]);
    }else{
        console.log("");
    }
}

firstTwo("Hello")   //"He"
firstTwo("abcdefg") //"ab"
firstTwo("X")       //"X"
firstTwo("")        //""

//Question 5==============================================
//Given a string of even length, return the first half. So the string "WooHoo" yields "Woo".

var firstHalf=function(str){
    if(str.length%2==0){
        console.log(str.substring(0,str.length/2));
    }else{
        console.log("String length should be even!");
    }
}

firstHalf("WooHoo")         //"Woo"
firstHalf("HelloThere")     //"Hello"
firstHalf("abcdef")         //"abc"

//Question 6===============================================
//Given a string, return a version without the first and last char, so "Hello" yields "ell". The string length will be at least 2.

function withoutEnd(str){
    if(str.length>=4){
        console.log(str.substring(1,str.length-1));
    }else{
        console.log("String length should be longer or equal to 4!");
    }
}
withoutEnd("Hello")     //"ell"
withoutEnd("java")      //"av"
withoutEnd("coding")    //"odin"

//Question 7===============================================
//Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. 

var comboString=function(a,b){
    var str="";
    if(a.length>b.length){
        console.log(str.concat(b).concat(a).concat(b));
    }else if(b.length>a.length){
        console.log(str.concat(a).concat(b).concat(a));
    }else{
        console.log("String lengthes should not be equal!");
    }
}
comboString("Hello", "hi")  //"hiHellohi"
comboString("hi", "Hello")  //"hiHellohi"
comboString("aaa", "b")     //"baaab"

//Question 8================================================
//Given 2 strings, return their concatenation, except omit the first char of each.

function nonStart(a,b){
    console.log(a.substring(1,a.length)+b.substring(1,b.length));
}

nonStart("Hello", "There")  //"ellohere"
nonStart("java", "code")    //"avaode"
nonStart("shotl", "java")   //"hotlava"

//Question 9================================================
//Given a string, return a "rotated left 2" version where the first 2 chars are moved to the end. The string length will be at least 2.

function left2(str){
    
    if(str.length>=2){
    var x=str.substr(0,2);
    str=str.substring(2,str.length);
    console.log(str.concat(x));
    }else{
        console.log("String length must be at least 2!");
    }
}

left2("Hello") //"lloHe"
left2("java")  //"vaja"
left2("Hi")    //"Hi"

//Question 10===============================================
//Given a string, return a "rotated right 2" version where the last 2 chars are moved to the start. The string length will be at least 2.

function right2(str){
    
    if(str.length>=2){
    var x=str.substr(-2,2);
    str=str.substring(0,str.length-2);
    console.log(x.concat(str));
    }else{
        console.log("String length must be at least 2!");
    }
}

right2("Hello") //"loHel"
right2("java")  //"vaja"
right2("Hi")    //"Hi"