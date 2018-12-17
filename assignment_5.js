//Question-1
//Use pre-decrement operator in while's boolean_expression to print HELLO 5 times on to the console.
//var i=5;
//var hello="";
//while(i>0){
//hello=hello+"HELLO,";    
//    --i;
//}console.log(hello);

// var total=0;
//
// var num=1;
//
//while(num<=5){
//    var total=total+num;
//    total=parseInt(total);
//    console.log(num + "+" + total + "=" + total )
//    num++;
//}


//
//Question-2
//Write a program to calculate the sum of the numbers from 1 till upper bound. 
//If upper bound is 5, sum should be 1 + 2 + 3 + 4 + 5 = 15.
//If upper bound is 11, sum should be 1 + 2 + ... + 11 = 66.
//If upper bound is 100, sum should be 1 + 2 + ... + 100 = 5050.
//
//You should use while loop.
//
//var upperBound=parseInt(prompt("Enter upper bound to calculate the sum of numbers:"));
//var sum=0;
//var i=1;
//var x="";
//while(i<=upperBound){
//    if(i==upperBound){
//       x=x+i+"="; 
//    }else{
//      x=x+i+"+";  
//    }
//    sum=sum+i;
//    ++i;
//}console.log(x+sum);

//Question-3
//Write a program using while loop to print Even numbers from 1 to 100.

//var i=1;
//while(i<=100){
//    if(i%2==0){
//        console.log(i);
//    }i++;
//}

//Question-4
//Write a program for following logic:
//Print all the odd numbers in comma separated form from 1 till end (you may change it):
//if end = 10, OUTPUT = 1, 3, 5, 7, 9
//if end = 11, OUTPUT = 1, 3, 5, 7, 9, 11
//
//You should use while loop and if - else statements. Note that, there should not be any comma after last digit.

//var end=parseInt(prompt("Enter a number program will list odd numbers to you:"));
//var i=1;
//var outPut="";
//if((end!=0)&&(end%2==0)){
//end=end-3;    
//while(i<=end){
//    if(i%2!=0){
//    outPut=outPut+i+",";    
//    } i++;
//  }
//outPut=outPut+(end+2);
//}else{
//end=end-2;    
//while(i<=end){
//    if(i%2!=0){
//    outPut=outPut+i+",";    
//    } i++;
//  }outPut=outPut+(end+2);    
//} 
//console.log(outPut);

//var OddNum=2; 
//var n=+prompt("Enter your number!");
//var m="";
//while(OddNum++<n){
//        if(OddNum%2==1){
//        m+=", "+OddNum;
//    }
//}console.log(1+m);








