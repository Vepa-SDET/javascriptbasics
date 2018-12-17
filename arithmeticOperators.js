// Addition Operator: x+y
//Assignment always right to left ! ! !
//Number + Number= Addition
console.log(2+2);
console.log(20+200);

//Boolean + Number= Addition
console.log(false+1); //false=0
console.log(true+1);  //true=1
x=false+1;
console.log(typeof x); // type of x is Number

// Number + String= Concatenation
console.log("Hello"+1); 
c="Hello"+1;
console.log(typeof c); // type of c is String

//String + Boolean = Concatenation
b="Hello"+false;
console.log(b);
console.log(typeof b); // type of b is String

// String+String= Concatenation
console.log("Hello"+"World!");

//Subtraction Operator: x-y
console.log(5-3);
console.log(10-20);
console.log(-10-10);

//Multiplication Operator: x*y
console.log(10*10);
console.log(20*-10);

//Division Operator: x/y
console.log(10/10);
console.log(20/-10);
console.log(0/20);
console.log(20/0);

//Module Operator : x%y
console.log(5%3);
console.log(6%2);

//Incremenet(post or pre) Operator: x++ or ++x 
var x=3;
y=x++;
console.log(x);
console.log(y);
//value of x=4
z=++x;
console.log(x);
console.log(z);

//Decremenet(post or pre) Operator: x-- or --x 
var x=3;
y=x--;
console.log(x);
console.log(y);
//value of x=2
z=--x;
console.log(x);
console.log(z);

//TESTS

var num1=50,num2=60,sum=num1+num2;
console.log(sum);

//Convert prompt input to number
var num1,num2,sum;
num1=prompt("Assign number_1!");
num2=prompt("Assign number_2");
sum=Number(num1)+Number(num2); 
// num1= parseInt(num1) and num2= parseInt(num2) only integer
//sum=parseInt(num1)+parseInt(num2);
console.log(sum);








