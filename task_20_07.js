var mark1=parseInt(prompt("Enter mark for subject 1:"));
var mark2=parseInt(prompt("Enter mark for subject 2:"));
var mark3=parseInt(prompt("Enter mark for subject 3:"));

var averAge=(mark1+mark2+mark3)/3;
if (mark1<0||mark1>100||mark2<0||mark2>100||mark3<0||mark3>100){
    console.log("Please enter valid mark!");
}else if (averAge>=90 && averAge<=100){
    console.log("Your average grade is:A");
}else if (averAge>=80 && averAge<=89){
 console.log("Your average grade is:B");   
}else if (averAge>=70 && averAge<=79){
 console.log("Your average grade is:C");   
}else if (averAge>=60 && averAge<=69){
 console.log("Your average grade is:D");
}else {
 console.log("Your average grade is:F");
}
                   

