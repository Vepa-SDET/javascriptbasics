//Comparison Operators

//Equality
b=2=="3";
console.log(b);
b=2=="2";
console.log(b);
// console.log(0=false); //will show true
// console.log(1=true); //will show true

//Inequality
console.log(1!=2); 
console.log(1!="1"); //will show false
console.log(1!=false); //will show true

//Strict equality
console.log(3===3);  //true
console.log(3==="3"); // false

//Non-strict equality
console.log(3!=="3"); //true
console.log(4!==4); //false

//Greater 
console.log(4>3); //true
console.log(3>4);  //false
console.log(4>4);  //false

//Greater than or equal
console.log(4>=3); //false
console.log(4>=4);  //true

//Less than
console.log(3<4);  //true
console.log(3<3);  //false

//Less than or equal
console.log(3<=4);  //true
console.log(4<=4);  //true

console.log("1"<"2");

var a,b,bool;
a=prompt("Type first number!");
b=prompt("Type second number!");
bool=parseInt(a)>parseInt(b);
console.log("First number bigger than Second number "+bool);

