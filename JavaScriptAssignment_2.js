//Question-1 
var gallons,liters;
gallons=parseInt(prompt("How much gas you want in gallons?"));
liters=gallons*3.78541178;
console.log("You need "+liters+" gas in liters!");

//Question-2  
var MyFruit="Apple";
console.log("“My Fav Fruit is "+MyFruit+"”");

//Question-3
var usersName,birthYear,yourAge;
usersName=prompt("Enter your name?");
birthYear=parseInt(prompt("Enter your birth year."));
yourAge=2018-birthYear;
console.log("Hello "+usersName+" ! Based on your input, your age is "+yourAge+" :)");


//Question-4
var inputNumber, testInputNumber, numberType;
inputNumber=parseInt(prompt("Enter your your favorite number!"));
testInputNumber=inputNumber%2;
if (testInputNumber==0){
    numberType="even";
}
else {
    numberType="odd"
}
console.log("Your favorite number is "+numberType+" !");






