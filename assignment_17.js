var strVar = "In order to Become a Number 1 Test Automation Developer, i need to practice at least 2 to 3 hours a day. Today is 08/11/2018. Weather is 70 F degrees."
//
////1) Display how many sentences in the string.
//var arrayStr=strVar.split(". ");
//console.log(arrayStr.length);
//
//////2) Display how many words in the string.
//var arrayStr=strVar.split(" ");
//console.log(arrayStr.length);
////
//////3) Display todays date.
//
//var arrayStr=strVar.split("Today is ");
//var todaysDate=arrayStr[1].split(" ");
//console.log(todaysDate[0]);
//
//////4) Pick today's weather from the string and convert to Celsius and display the result.
//var arrayStr=strVar.split("Weather is ");
//var todaysWeather=arrayStr[1].split(" ");
//console.log((todaysWeather[0]- 32)*5/9);
//////5) Separate Numbers and non numerical characters to 2 separate variables and display the result.
//////
//////         Please use isNaN() = is not a number method to check if it is a number or not.
//////         console.log(isNaN(1));  -- >false 
//////         console.log(isNaN("apple")); -- >true
//var strText="",strNumber="";
//for(var i=0;i<strVar.length;i++){
//    if(isNaN(strVar[i])){
//       strText=strText.concat(strVar[i]);
//   }else if(strVar[i]!=" "){
//       strNumber=strNumber.concat(strVar[i]);
//   }
//}
//console.log(strText);
//console.log(strNumber);
//
//////        Output Should Be:
//////            InordertoBecomeaNumberTestAutomationDeveloper,ineedtopracticeatleasttohoursaday.Todayis//.WeatherisFdegrees.
//////           1230811201870
//////
//////6) in the String instead of '2 to 3 hours' , display '3 to 4 hours'
//var newStr=strVar.replace("3","4").replace("2","3");    
//console.log(newStr);
//
//////7) Display first sentence in Uppercase and other sentences in Lowercase.
//
//var firstSentence=strVar.substring(0,strVar.indexOf(".")+1);
//var restSentences=strVar.substr(strVar.indexOf(".")+1);
//console.log(firstSentence.toUpperCase()+restSentences.toLowerCase());
//
//////8) Remove all spaces from the string and display the result.
//
//var withoutSpace="";
//for(var i=0;i<strVar.length;i++){
//    if(strVar[i]!=" "){
//        withoutSpace=withoutSpace.concat(strVar[i]);
//   }
//}
//console.log(withoutSpace);
//
//////9) Reverse all words order in the string and replace all "." and "," with ""

while(strVar.indexOf(".")!=-1){
      strVar=strVar.replace(",", " ").replace(".","");
}
var finalStr="",array=strVar.split(" ");
for(var i=array.length-1;i>=0;i--){
    finalStr+=array[i]+" "; 
}
console.log(finalStr);
//////      Output Should Be:
//////      degrees F 70 is Weather 08/11/2018 is Today day a hours 3 to 2 least at practice to need i Developer Automation Test 1 Number a Become to order In
//
//
//var s="Javascript"+1+2+"Quiz"+""+(3+4);
//console.log(s);
//
//var numbers="012345678";
//console.log(numbers.substring(1,3));
//console.log(numbers.substring(7,7));
//console.log(numbers.substring(7));
//
//var s="purr";
//s.toUpperCase();
//s.trim();
//s.substring(1,3);
//s+=" two";
//console.log(s.length);
//
//var total=0;
//var letters="abcdefg";
//total+=letters.substring(1,2).length;
//total+=letters.substring(6,6).length;
//total+=letters.substring(6,5).length;
//console.log(total);
//
//var b="rumble";
//b+=b.concat("4").substr(3,b.length-1);
//console.log(b);
//
//function FunCharSeq(str){
//    str=str.trim();
//    str+="O";
//    return str;
//}
//console.log("|"+FunCharSeq(" W ").concat("W")+"|");
//
//var space=" ";
//var composite=space+"hello"+space+space;
//composite.concat("world");
//console.log(composite);
//var trimmed=composite.trim();
//console.log(trimmed.length);
//
//console.log("123"+"\n"+"345");
//
//
//
