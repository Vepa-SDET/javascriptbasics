//Question-1
//Write a JAVASCRIPT program that asks user to enter a number and prints  "it is odd number" or "it is even number"

function oddOrEven(){
    let num=parseInt(prompt("Please enter a number to check if it is even or odd:"));
    if(num%2==0){
        return `${num} is even number`;
    }else{
        return `${num} is odd number`;
    }
}

console.log(oddOrEven());

//Question-2
//Write a JAVASCRIPT program that prints "OK" if the number entered by user is divisible by 2 and 3. If not print "NOT OK"

function divByTwoThree(){
    let num=parseInt(prompt("Please enter a number to check if it is divisible by 2 or 3:"));
     if(num%2==0 || num%3==0){
        return `OK`;
    }else{
        return `NOT OK`;
    }
}

console.log(divByTwoThree());

//Question-3
//Write a JAVASCRIPT program that prints :
//"Divisible by 2 and 3" if the number entered is divisible by 2 and 3
//"Divisible by 2" if the number entered is divisible by only 2
//"Divisible by 3" if the number entered is divisible by only 3 
//"Not divisible by 2 or 3" if  number entered is not divisible by 2 or 3

function divBy2Three(){
    let num=parseInt(prompt("Please enter a number to check if it is divisible by 2 or 3:"));
     if(num%2==0 && num%3==0){
        return `Divisible by 2 and 3`;
    }else if(num%2==0){
        return `Divisible by 2`;
    }else if(num%3==0){
        return `Divisible by 3`;
    }else{
        return `Not divisible by 2 or 3`;
    }
}

console.log(divBy2Three());

//Question-4
//Write a JAVASCRIPT program that prints "It is a good number" if it is divisible by 4, 5, and 6. If not print  "It is not a good number"

function goodNumber(){
    let num=parseInt(prompt("Please enter a number to check if it is good number:"));
    if(num%4==0 && num%5==0 && num%6==0){
        return `It is a good number`;
    }else{
        return `It is not a good number`;
    }
    
}

console.log(goodNumber());

//Question-5
//Write a JAVASCRIPT program that prints "It is a good number" if the number entered by user is between 0 and 100 and divisible by 2. If not, print "It is not a good number"

function goodNum(){
    let num=parseInt(prompt("Please enter a number to check if it is good number:"));
    if(num>0 && num<100 && num%2==0){
        return `It is a good number`;
    }else{
        return `It is not a good number`;
    }
    
}

console.log(goodNum());


//Question-6
//Write a JAVASCRIPT program that asks user to enter 3 numbers and prints "It is good" if one of the number is greater than 50. If none of the number is greater than 50, print : "It is not good"

function greaterThanFifty(){
    let res=false;
    for(let i=0;i<3;i++){
        let num=parseInt(prompt(`Enter number ${i+1}:`));
        if(num>50){
            res=true;
        }
    }
    if(res){
        return "It is good";  
    }else{
        return "It is not good";
    }
}

console.log(greaterThanFifty());


//Question-7
//Write a JAVASCRIPT program that asks user to enter 3 numbers and prints "It is successful"  if all numbers are greater than 0 and all numbers are even. If not, print "It is not successful"

function evensGreaterThanZero(){
    let count=0;
    for(let i=0;i<3;i++){
        let num=parseInt(prompt(`Enter number ${i+1}:`));
        if(num>0 && num%2==0){
            count++;
        }
    }
    if(count==3){
        return "It is successful";  
    }else{
        return "It is not successful";
    }
}

console.log(evensGreaterThanZero());




















