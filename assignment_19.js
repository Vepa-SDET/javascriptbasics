//Question 1
//
//Given a string, return true if the first 2 chars in the string also appear at the end of the string, such as with "edited".

function frontAgain(str){
    if(str.substr(0,2)==str.substr(-2)){
        console.log(true);
    }else{
        console.log(false);
    }
} 

frontAgain("edited")    //true
frontAgain("edit")      //false
frontAgain("ed")        //true

//Question 2
//
//Return the number of times that the string "hi" appears anywhere in the given string.

function countHi(str){
    var count=0;
    for(var i=0;i<str.length;i++){
        if(str[i]=="h" && str[i+1]=="i"){
            count++;
        }
    }console.log(count);
}

countHi("abc hi ho") //1
countHi("ABChi hi")  //2
countHi("hihi")      //2

//Question 3
//
//Return true if the string "cat" and "dog" appear the same number of times in the given string.

function catDog(str){
    var count=0;
    for(var i=0;i<str.length;i++){
        if(str[i]=="c" && str[i+1]=="a" && str[i+2]=="t"){
            count++;
        }else if(str[i]=="d" && str[i+1]=="o" && str[i+2]=="g"){
            count--;
        }
    }if(count==0){
    console.log(true);
    }else{
    console.log(false);
    }
}

catDog("catdog")        //true
catDog("catcatdog")     //false
catDog("1cat1cadodog")  //true

//Question 4
//
//Given a string, return a string where for every char in the original, there are two chars.

function doubleChar(str){
    var newStr="";
    for (var i=0;i<str.length;i++){
        newStr=newStr.concat(str[i]).concat(str[i]);
    }console.log(newStr);
}

doubleChar("The")       //"TThhee"
doubleChar("AAbb")      //"AAAAbbbb"
doubleChar("Hi-There")  //"HHii--TThheerree"

//Question 5
//
//Given a string, return true if it ends in "ly".

var endsLy= function(str){
    if(str.substr(-2)=="ly"){
        console.log(true);
    }else{
        console.log(false);
    }
}

endsLy("oddly")     //true
endsLy("y")         //false
endsLy("oddy")      //false

//Question 6
//
//Given a string, return a version without both the first and last char of the string. The string may be any length, including 0.

function withouEnd2(str){
    console.log(str.substring(1,str.length-1));
}

withouEnd2("Hello") //"ell"
withouEnd2("abc")   //"b"
withouEnd2("ab")    //""

//Question 7
//
//Given a string, return true if "bad" appears starting at index 0 or 1 in the string, such as with "badxxx" or "xbadxx" but not "xxbadxx". The string may be any length, including 0. Note: use .equals() to compare 2 strings.

var hasBad= function(str){
    if(str.indexOf("bad")==0||str.indexOf("bad")==1){
        console.log(true);
    }else{
        console.log(false);
    }
}

hasBad("badxx")     //true
hasBad("xbadxx")    //true
hasBad("xxbadxx")   //false

//Question 8
//
//Given a string, return a string length 2 made of its first 2 chars. If the string length is less than 2, use '@' for the missing chars.

var atFirst= function(str){
    if(str.length>=2){
        console.log(str[0]+str[1]);
    }else if(str.length==1){
        console.log(str[0]+"@");
    }else{
        console.log("@@");
    }
}

atFirst("hello") //"he"
atFirst("hi")   //"hi"
atFirst("h")    //"h@"