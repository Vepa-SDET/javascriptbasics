//                    // String Manipulation
//function readFromEnd(text){
//    var x="";
//    for(var i=text.length-1;i>=0;i--){
//        x+=text[i];
//    }console.log(x);
//    if(x==text){
//        console.log("It is same from end to beginning!");
//    } else{
//        console.log("It is not same!");
//    }
//}
//readFromEnd("accc");
//
//var name="Vepa";
//var surname="Orazov";
//console.log(name.length);
//console.log(surname.length);
//console.log(name.charAt(2));
//console.log(surname.charAt(surname.length-1));
//
//function eachCharacter(string){
//    for(i=0;i<string.length;i++){
//        console.log(string[i]);
//    }
//}
//function eachCharacter(string){
//    for(i=0;i<string.length;i++){
//        console.log(string.charAt(i));
//    }
//}
//eachCharacter("Java Script");
//
//var s1= " Hello ";
//var s2="World";
//var s3=s1.concat(s2).concat(s1).concat(s2);
//console.log(s3);
//
//
//function passwordCreate(string1,string2){
//    var x="";
//    for(var i=0;i<3;i++){
//        x+=string1.charAt(i);
//    }
//    var password=x.concat(string2.length);
//    console.log(string2.length);
//    return password;
//}
//
//console.log(passwordCreate("Vepa","1984"));
//
//
////var password=passwordCreate(string1,String2);
//
//function passwordCreate(){
//    var string_1=prompt("Enter string 1:");
//    var string_2=prompt("Enter string 2:");
//    var x="";
//    for(var i=0;i<3;i++){
//        x+=string_1.charAt(i);
//    }
//    var password=x.concat(string_2.length);
//    return password;
//}
//
//console.log(passwordCreate());



function howManyHis(Hi,howmany){
    if(howmany<0){
        console.log("Enter positive number!");
    }else{
        for(var i=1;i<howmany;i++){
            Hi+="Hi";
        }
        console.log(Hi);
    }
}
howManyHis("Hi",1);

function Great_6_Number(n1,n2){
    if(n1==6 || n2==6 || n1+n2==6 || n1-n2==6 || n2-n1==6){
        console.log("true");
    }else{
        console.log("false");
    }
}
Great_6_Number(6,5);
Great_6_Number(5,6);
Great_6_Number(2,4);
Great_6_Number(7,1);
Great_6_Number(2,8);
Great_6_Number(2,5);

console.log("Hello");


//includes() Method

var str="Hello Mike, welcome to Amazon world.";
var n=str.includes("Mike");
console.log(n);

function checkedString(str1,str2){
    if(str1.includes(str2)){
        console.log(str2.length);
    }else{
        console.log("not found");
    }
}
checkedString("Your order confirmation number is YZ","confirmation");

x=["a","b"];
console.log(x.includes("a"));

//indexOf() Method

var str="Hello Mike, welcome to Amazon world.";
var n=str.indexOf("Mike");
console.log(n); //6
var n=str.indexOf("Amzon");
console.log(n); //-1
var n=str.indexOf("Amazon");
console.log(n); //23


function checkedString(str1,str2){
    if(str1.indexOf(str2)!=-1 && str1.includes(str2)){
        console.log(str1.indexOf(str2));
    }else{
        console.log("not found");
    }
}
checkedString("Your order confirmation number is YZ","confirmation");

//replace() Method
//The original string will remain unchanged.

var str="Ebay is a very good website";
var replaced=str.replace("Ebay","Bestbuy");
var replaced1=replaced.replace("Bestbuy","Amazon");
console.log(str);
console.log(replaced);
console.log(replaced1);

var s1="Orcun";
var s2="Canlilar";
var replaced=s2.replace((s2[s2.length-2]+s2[s2.length-1]),(s1[0]+s1[1]));

console.log(replaced);

//search() Method

var str="I want to be number 1 test automation developer.";
console.log(str.indexOf("automation")); //27
console.log(str.search("1"));          //20
console.log(str.search("2"));          //-1

var str="In order to be a good test automation developer, I need to practice at least 2 to 3 hours a day.";
if(str.search("automation")!=-1){
    console.log(" automation is present in the string");
}else{
    console.log("not found");
}

console.log(str.search("automation"));

//slice() Method 

var str="The morning is upon us.";
console.log(str.slice(1,8));   //he morn
console.log(str.slice(4,-2));  //morning is upon u
console.log(str.slice(12));    //is upon us
console.log(str.slice(2,9));

var str="In order to be a good test automation developer, I need to practice at least 2 to 3 hours a day.";
var x=str.slice(str.indexOf("automation"),(str.indexOf("automation")+"automation".length));
console.log(x);

     //split() Method
var str="It will display the array of the size";
var arr=str.split(" ");
console.log(arr); 
//["It", "will", "display", "the", "array", "of", "the", "size"]

var str="About 2,480,000,000 results (0.95 seconds)";
var arr=str.split(" ");
console.log(arr);
//["About", "2,480,000,000", "results", "(0.95", "seconds)"]
var str="In 1993, the National Center for Supercomputing Applications (NCSA), a unit of the University of Illinois at Urbana-Champaign, released NCSA Mosaic, the first popular graphical Web browser, which played an important part in expanding the growth of the nascent World Wide Web. In 1994, a company called Mosaic Communications was founded in Mountain View, California and employed many of the original NCSA Mosaic authors to create Mosaic Netscape. However, it intentionally shared no code with NCSA Mosaic. The internal codename for the company's browser was Mozilla, which stood for Mosaic killer, as the company's goal was to displace NCSA Mosaic as the world's number one web browser. The first version of the Web browser, Mosaic Netscape 0.9, was released in late 1994. Within four months it had already taken three-quarters of the browser market and became the main browser for the Internet in the 1990s. To avoid trademark ownership problems with the NCSA, the browser was subsequently renamed Netscape Navigator in the same year, and the company took the name Netscape Communications. Netscape Communications realized that the Web needed to become more dynamic. Marc Andreessen, the founder of the company believed that HTML needed a glue language that was easy to use by Web designers and part-time programmers to assemble components such as images and plugins, where the code could be written directly in the Web page markup";

var array1=str.split(" ");
if (array1.includes("Netscape")){
    console.log("I found it!");
}
var counter=0;
for (var i=0;i<array1.length;i++){
    if(array1[i]=="Netscape"){
        counter++;
    }
}console.log("There are "+counter+" Netscape in the string!");
console.log(array1.length); //228

// substr() Method
// Syntax: string.substr(start,length)

var str="JavaScript";

console.log(str.substr(0,1));  //J
console.log(str.substr(1,0));  //" "
console.log(str.substr(-1,1)); //t
console.log(str.substr(-3));  //ipt

// substring() Method
var str="Hello World!";

console.log(str.substring(0,1)); //H
console.log(str.substring(1,0)); //H   (same because swaping)

console.log(str.substring(0,6)); //Hello (index 6 not included)

console.log(str.substring(4));   //o World! (all from index 4)
console.log(str.substring(4,7)); //o W
console.log(str.substring(7,4)); //o W (same because swaping)

console.log(str.substring(0,7));   //Hello w
console.log(str.substring(0,10));  //Hello worl
 
var str="JavaScript";

console.log(str.substring(str.length-4,2)); //vaSc (swapped)
console.log(str.substring(2,3));            //v  
console.log(str.substring(str.length,2));   //vaScript (swapped)


//difference substring() and substr()
var str="JavaScript";

console.log(str.substring(2,5));   //vaS
console.log(str.substr(2,5));      //vaScr


// toLowerCase() Method

var str="JavaScript";

console.log(str.toLowerCase());   //javascript
console.log(str);                 //JavaScript (original not change)


// toUpperCase() Method

var str="JavaScript";

console.log(str.toUpperCase());   //JAVASCRIPT
console.log(str);                 //JavaScript (original not change)


var str="Javascript";
console.log(str.replace(str[2],str[2].toUpperCase()).replace(str[5],str[5].toUpperCase()));
var y=str.split(str[5]);
//y[1]=y[1].shift(str[5].toUpperCase());
var x=str.split(str[2]);
x[0]=x[0].concat(str[2].toUpperCase());
console.log(x);

//trim() Method

var str="    JavaScript";        
console.log(str.trim());           //JavaScript
var str="    JavaScript     ";
console.log(str.trim());           //JavaScript
var str="    Java  Script     ";
console.log(str.trim());           //Java  Script


var str="  342  ";
str=str.unshift("|");
//str="|"+str.trim()+"|";
console.log(str);



