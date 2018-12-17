// Assignment -3
// Question-1
// Solution-1
/*
var marks_1=prompt("Enter you mark:");
marks_1=parseInt(marks_1);

if (marks_1<0 || marks_1>100){
    console.log("Enter valid mark!");
}else if (marks_1>=60 && marks_1<90){
    console.log("Pass!");
}else if (marks_1>=90 && marks_1<=100){
    console.log("Passed with Distinction!");
}else if (marks_1<60 && marks_1>=0){
    console.log("Fail!");
}

// Solution-2
var marks_1=prompt("Enter you mark:");
marks_1=parseInt(marks_1);

if (marks_1<=100 && marks_1>=0){
    if (marks_1>=60 && marks_1<=90){
    console.log("Pass!");
    }else if (marks_1>90){
        console.log("Passed with Distinction!");
    }else if (marks_1<60){
        console.log("Fail!");
    }
}else {console.log("Enter Valid Mark!");
      }



//Question 2

var userName,passWord,validUserName,validPassWord;

userName=prompt("Create Username:");
passWord=prompt("Create Password:");

if (userName=="" && passWord==""){
    console.log("Username & Password fields can not be empty!");
}else if (userName==""){
    console.log("Username field can not be empty!");
}else if (passWord==""){
    console.log("Password field can not be empty!");
}else{
    console.log("Username&Password created successfully. Now you can Login!");
    validUserName=prompt("Enter your Username:");
    validPassWord=prompt("Enter your Password:");    
    if (userName==validUserName && passWord==validPassWord){
    console.log("User Logged in Successfully!");
    }else if(userName!=validUserName && passWord!=validPassWord){
    console.log("Invalid Username & Password.Please verify!");    
    }else if (userName!=validUserName){
    console.log("Invalid Username.Please verify!");
    }else{
    console.log("Invalid Password.Please verify!");
    }
}    


//Question 3

var num1=prompt("Enter number 1:");
var num2=prompt("Enter number 2:");
var operator=prompt("Enter operator:");

if (num1=="" && num2==""){
    console.log("Enter Valid Numbers!");
}else if(num1==""){
    console.log("Enter Valid Number to number 1!");
}else if(num2==""){
    console.log("Enter Valid Number to number 2!");
}else{
   num1=parseInt(num1);
   num2=parseInt(num2); 

   if (operator=="*"){
    console.log(num1*num2);
   }else if (operator=="+"){
    console.log(num1+num2);
   }else if (operator=="-"){
    console.log(num1-num2);
   }else if (operator=="/"){
    console.log(num1/num2);
   }else {
    console.log("Enter valid operator!");   
   }
}


//Question-4

var userIncome=parseInt(prompt("Enter Your Income:"));
var taxAmount;

if (userIncome>0){
    
    if (userIncome<=150000){
        taxAmount=userIncome*0.25;
        console.log("Your Income :"+userIncome);
        console.log("The tax amount you have to pay:"+taxAmount);
    }else if (userIncome<=300000){
        taxAmount=150000*0.25+(userIncome-150000)*0.30;
        console.log("Your Income :"+userIncome);
        console.log("The tax amount you have to pay:"+taxAmount);
    }else if (userIncome<=600000){
        taxAmount=150000*0.25+150000*0.30+(userIncome-300000)*0.35;
        console.log("Your Income :"+userIncome);
        console.log("The tax amount you have to pay:"+taxAmount);
    }else if (userIncome<=1200000){
        taxAmount=150000*0.25+150000*0.30+300000*0.35+(userIncome-600000)*0.40;
        console.log("Your Income :"+userIncome);
        console.log("The tax amount you have to pay:"+taxAmount);
    }else if (userIncome>1200000){
       taxAmount=150000*0.25+150000*0.30+300000*0.35+600000*0.40+(userIncome-1200000)*0.50;
        console.log("Your Income :"+userIncome);
        console.log("The tax amount you have to pay:"+taxAmount);
    }
}
    else{
     console.log("The income amount must be greater than 0");
}


//Question-5

var year=parseInt(prompt("Write a year to findout if it is Leap year or not:"));

if (year>0){
if ((year%100===0)&&(year%400===0)){
    console.log("Congratulations "+year+" is a Leap year");
}else if(year%4===0){
        console.log("Congratulations "+year+" is a Leap year");
}else{
        console.log(year+" is not a Leap year. Try to enter another year!");
}
}else {
    console.log("Year must be bigger than 0!");
}

//Question-6

var calls=parseInt(prompt("Enter number of calls to calculate monthly tel. bill:"));
var bill;

if (calls<=100){
    bill=200;
    console.log("Your monthly bill is:"+bill);
}else if(calls<=150){
    bill=200+(calls-100)*0.60;
    console.log("Your monthly bill is:"+bill);
}else if(calls<=200){
    bill=200+(50*0.60)+(calls-150)*0.50;
    console.log("Your monthly bill is:"+bill);
}else {
    bill=200+(50*0.60)+(50*0.50)+(calls-200)*0.40;
    console.log("Your monthly bill is:"+bill);
}
*/

//Write a method called isPalindrome with one int parameter called number.
//The method needs to return a boolean.
//It should return true if the number is a palindrome number otherwise it should return false.
//Sample Output:
//isPalindrome(-1221) - > should return true
//isPalindrome(707) - > should return true
//isPalindrome(11212) - > should return false because reverse is 21211 and that is not equal to 11212
//
//Hint:
//What is a Palindrome number? A palindrome number is a number which when reversed is equal to the original number.
//For example: 121, 12321, 1001 etc
//
//Logic to check a palindrome number:
//Find the reverse of the given number. Store it in some variable say reverse. Compare the number with reverse.
//If both are the same then the number is a palindrome otherwise it is not.
//
//Logic to reverse a number:
//Declare and initialize another variable to store the reverse of a number, for example reverse = 0.
//Extract the last digit to some variable say lastDigit = num % 10
//Increase the place value of reverse by one.
//To increase place value multiply reverse variable by 10 e.g reverse = reverse * 10
//Add lastDigit to reverse
//Since last digit of num is processed, remove last digit of num. To remove last digit divide num by 10
//Repeat steps until num is not equal to (or greater than) zero.
//


function isPalindrome(number){
let num=number;
let bool=true;
let str="";

while(bool){
    if(num<0){
        num=-1*num;
        number=number*-1;
    }
    if(num>0){
        x=num%10;
        console.log(typeof x);
        num=Math.floor(num/10);
        str+=x;
    }else if(num==0){
        bool=false;
    }
    // console.log(str);
}if(number==parseInt(str)){
    return true;
}else{
    return false;
}
}



console.log(isPalindrome(-1221));     // should return true
console.log(isPalindrome(707));       // should return true
console.log(isPalindrome(11212));     // should return false 



























