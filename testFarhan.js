
var m=parseInt(prompt(" Enter Math Marks"));
var e=parseInt(prompt("Enter English Marks"));
var h=parseInt(prompt("Enter History Marks"));


var aveRage=(m+e+h)/3;

if((m<0||m>100)||(e<0||e>100)||(h<0||h>100)){
   
  console.log( "Enter a valid number between 0 and 100");
}else if(aveRage<=59){
       console.log("Fail");
}else if (aveRage<=69){
   
   console.log( "Grade D");
}else if (aveRage<=79){
   console.log("Grade C");
}else if (aveRage <=89){
   console.log("Grade B");
}else{
   console.log("Your Grade is A");
   }