//Question 1:
//Write a logic using switch-case to print "EVEN" / "ODD" for the numbers. 
//Numbers divisible by 2 are even and numbers not divisible by 2 are odd.


var inputNumber=parseInt(prompt("Enter a number:"));
var numberType;
numberType=inputNumber%2;
switch(numberType){
    case 0:
        console.log("It is even number!");
        break;
    case 1:
        console.log("It is odd number!");
        break;
    default:
        console.log("Enter positive number!");
        break;
}
//Question 2:
//
//Write a switch-case program that accepts a number from user.
//
//IF number is 0,1 or 2 print "Low Number. IF number is 3,4,5 print "Medium Number". IF number is is not between 0-5 then print "Other Number"

var userInput=parseInt(prompt("Enter number between 0-5:"));

switch(userInput){
    case 0: case 1: case 2:
console.log("Low number!");
    break;
    case 3: case 4: case 5:
console.log("Medium number!");
    break;
    default:
console.log("Other number!");
    break;
}

//Question 3:
//
//Write a switch-case program that accepts the total cost of shopping from user and apply discount ratio according the below table. Print the total amount that user needs to pay after discount
//
//Total Cost Of Shopping	Discount Ratio	Pay Amount
//1000	5%	?
//10000	8%	?
//other	0%	?

var totalCostOfShopping=parseInt(prompt("Enter total amount of shopping:"));
var payAmount;
switch(totalCostOfShopping){
    case 1000:
payAmount=totalCostOfShopping-totalCostOfShopping*0.05;        
console.log("Total amount:"+totalCostOfShopping+" 5% discount Pay Amount:"+payAmount);
    break;
    case 10000:
payAmount=totalCostOfShopping-totalCostOfShopping*0.08;        
console.log("Total amount:"+totalCostOfShopping+" 8% discount Pay Amount:"+payAmount);
    break;
    default:
console.log("Total amount:"+totalCostOfShopping+" 0% discount Pay Amount:"+totalCostOfShopping);
    break;
}

//Question 4:
//
//Write a program to display traffic light colors using following logic:
//if code (R/r)-->"Red"
//if code (O/o)-->"Orange"
//if code (G/g)-->"Green"


var lightColor=prompt("Enter traffic light color first letter:");

switch(lightColor){
    case "R": case "r": 
console.log("Red");
    break;
    case "O": case "o": 
console.log("Orange");
    break;
    case "G": case "g":
console.log("Green");
    break;
    default:
console.log("Wrong input letter!Choose one of these:R/r, O/o, G/g");
}

















