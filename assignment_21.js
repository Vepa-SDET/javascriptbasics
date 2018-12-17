//Question1
//
//Returns true if for every '*' (star) in the string, if there are chars both immediately before and after the star, they are the same.
var sameStarChar=function(str){
    var result=false;
    for(var i=0;i<str.length;i++){
        if(str[i]=="*" && str[i-1]==str[i+1]){
            result=true;
        }
    }console.log(result);
}

sameStarChar("xy*yzz") //true
sameStarChar("xy*zzz") //false
sameStarChar("*xa*az") //true

//Question2
//
//We'll say that a "triple" in a string is a char appearing three times in a row. Return the number of triples in the given string. The triples may overlap.

function countTriple(str){
var count=0;
    for(var i=0;i<str.length && str.length>=3;i++){
        if(str.charAt(i)==str.charAt(i+1) && str.charAt(i+1)==str.charAt(i+2)){
           count++;
           }
    }console.log(count);
}
countTriple("abcXXXabc") //1
countTriple("xxxabyyyycd") //3
countTriple("a") //0

//Question3
//
//We'll say that a lowercase 'g' in a string is "happy" if there is another 'g' immediately to its left or right. Return true if all the g's in the given string are happy.

function gHappy(str){
var result=false;
    for(var i=0;i<str.length;i++){
        if(str[i]=="g" && str[i-1]=="g"||str[i+1]=="g"){
            result=true;
        }else if(str[i]=="g" && str[i-1]!="g"&&str[i+1]!="g"){
            result=false;
        }
    }console.log(result);
}

gHappy("xxggxx")    //true
gHappy("xxgxxgg")     //false
gHappy("xxggyygxx") //false

//Question4
//
//Given a string, return true if the number of appearances of "is" anywhere in the string is equal to the number of appearances of "not" anywhere in the string (case sensitive).

var equalIsNot= function(str){
    var compare=0;
    for(var i=0;i<str.length;i++){
        if(str[i]=="i" && str[i+1]=="s"){
            compare++;
        }else if(str[i]=="n" && str[i+1]=="o" && str[i+2]=="t"){
            compare--;
        }
    }if(compare==0){
    console.log(true);
    }else{
    console.log(false);
    }
}
equalIsNot("This is not")           //false
equalIsNot("This is notnot")        //true
equalIsNot("noisxxnotyynotxisi")    //true

//Question5
//
//A sandwich is two pieces of bread with something in between. Return the string that is between the first and last appearance of "bread" in the given string, or return the empty string "" if there are not two pieces of bread.

//var getSandwich= function(str){
//    var newStr="";
//    if(str.indexOf("bread")!=str.lastIndexOf("bread")){
//    var newStr=str.substring(str.indexOf("bread")+5,str.lastIndexOf("bread"));
//    }
//    console.log(newStr);
//}
function getSandwich(str){
    var idxS;
    var idxL;
    idxS=str.indexOf("bread");
    idxL=str.lastIndexOf("bread");
    str=str.slice(idxS+5,idxL);
    console.log(str);
}
//var getSandwich= function(str){
//    var finalStr="",newStr=str.substring(str.search("bread")+5,str.length);
//    if(newStr.includes("bread")){
//    finalStr=newStr.substring(0,newStr.search("bread"));
//    }
//    console.log(finalStr);
//}

getSandwich("breadjambread")        //"jam"
getSandwich("xxbreadjambreadyy")    //"jam"
getSandwich("xxbreadyy")            //""

//Question6
//
//Given two strings, return true if either of the strings appears at the very end of the other string, ignoring upper/lower case differences (in other words, the computation should not be "case sensitive"). Note: str.toLowerCase() returns the lowercase version of a string.=

var endOther= function(a,b){
var result=false;
if(a.toLowerCase()==(b.substr(-3)).toLowerCase()||b.toLowerCase()==(a.substr(-3)).toLowerCase()){
    result=true;
}console.log(result);    
}
endOther("Hiabc", "abc") //true
endOther("AbC", "HiaBc") //true
endOther("abc", "abXabc") //true

//Question7
//
//Given a string, if the string begins with "red" or "blue" return that color string, otherwise return the empty string.

function seeColor(str){
    if(str.search("red")==0){
        console.log("red");
    }else if(str.search("blue")==0){
        console.log("blue");
    }else{
        console.log("");
    }
}

seeColor("redxx")       //"red"
seeColor("xxred")       //""
seeColor("blueTimes")   //"blue"



