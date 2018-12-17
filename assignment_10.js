//Question 1:
//
//Write a JavaScript Program to store numbers from 1 to 1000 in One-dimensional array and then print array contents as follows (10 elements per row): 
//1 2 3 4 5 6 7 8 9 10 
//11 12 13 14 15 16 17 18 19 20 
//21 22 23 24 25 26 27 28 29 30 
//.
//.
//.
//991 992 993 994 995 996 997 998 999 1000

var d=[];
var x=0;
for(var i=1;i<=1000;i++){
    d.push(i);
}for(var i=1;i<=100;i++){
var print="";
    for(var y=1;y<=10;y++){
        print=print+d[x]+(" ");
        x++;
    } console.log(print);
}
//Question 2:
//
//Write a JavaScript program to store numbers 1 to 10 in an array using data instantiation.
//Then write a for loop to multiply each member of above array by 19, this way you will get table of 19 stored in the above array.
//Finally write another for loop to print all the array elements.
//You should get following output:
//19
//38
//57
//76
//95
//114
//133
//152
//171
//190

var x=[1,2,3,4,5,6,7,8,9,10];
for (var i=0;i<10;i++){
    x[i]=(i+1)*19;
}for(var i=0;i<10;i++){
    console.log(x[i]);
}
//Question 3:
//Below is One-dimensional array code:
//var arr = ['A', 'Z', 'B', 'N', 'P', 'T', 'X', 'C'];
//
//Write the code to search for particular character in above array.
//If I search for 'B', then output should be: "B found!"
//If I search for 'E', then output should be: "E Not found!"
var arr=['A','Z','B','N','P','T','X','C'];
var search=prompt("Enter a letter for search:");
for (var i=0;i<arr.length;i++){
    if(arr[i]==search){
        console.log(search+" found!");
        break;
    }else if(i==arr.length-1){
        console.log(search+" not found!");
      }
}
//Question 4:
//var scores = [51, 85, 32, 0, 98, 157, 82, 101, 64, 249];
//Above array stores the scores of a batsman in his last 10 innings in the game of cricket.
//If score is greater than or equal to 50 but less than 100, it is regarded as half-century.
//If score is greater than or equal to 100 but less than 200, it is regarded as a century.
//If score is greater than or equal to 200, it is regarded as a double-century.
//NOTE: No scenario of triple-century in this case.
//
//Write the code to print the number of half-centuries, centuries and double-centuries scored by the batsman.
var scores = [51, 85, 32, 0, 98, 157, 82, 101, 64, 249];
var h=0,c=0,d=0;
for (var i=0;i<scores.length;i++){
    if(scores[i]>=50 && scores[i]<100){
        h++; 
    }else if(scores[i]<200){
        c++;
    }else if(scores[i]>=200){
        d++;
    }
}console.log("You have "+h+" half-centuries "+c+" centuries "+d+" double-centuries!" );




//Question 5:
//In mathematics, the Fibonacci series are the numbers in the following integer sequence:
//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
//By definition, the first two numbers in the Fibonacci sequence are 0 and 1, 
//and each subsequent number is the sum of the previous two.
//
//Write a JavaScript Program to generate above series till n number of times (For example you can try with 
//n = 10 and n = 15) and store it in One-dimensional array.
//For n = 10, Fibonacci series: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
//For n = 15, Fibonacci series: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377
//
//Write a for loop to print all the elements of the array.

var n=+prompt("How many Fibonacci numbers do you want to write?");
var fibArray=Array(n);
console.log(fibArray.length);
fibArray[0]=0;
fibArray[1]=1;
for(var i=2;i<fibArray.length;i++){
   fibArray[i]=fibArray[i-1]+fibArray[i-2];
}console.log(fibArray.toString());











