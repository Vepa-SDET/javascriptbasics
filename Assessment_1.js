//let x=4,y=6,v=8;
//if(x>y && x>v){
//    console.log(x+" Greatest Number");
//}else if(v>y && x<v){
//    console.log(v+" Greatest Number");
//}else if(v<y && y>x){
//    console.log(y+" Greatest Number");
//}
//
//let arr=[3,4,5,6];
//
//for(let i=0;i<arr.length;i++){
//
//console.log(arr[i]);
//
//}
//
//function calc(num){
//    return num%3;
//}
//console.log(calc(10));

//var student ={
//
//              fname: "Mike",
//
//              lName: "Smith",
//
//              age: 20,
//
//              languages:{
//
//                             b8:"Java",
//
//                             b9:"JavaScript"
//
//              },
//
//              offers:["capitalOne","Geico","accenture"]
//
//};
//
//
//console.log(`${student.fname} knows ${student.languages.b8} and he got an offer from ${student.offers[1]}`);

//let a="Mike",b="Smith";
//
//function pass(x,y){
//    let str1=x.substring(x.length-3);
//    return str1+y.length;
//}
//console.log(pass(a,b));

let count=0;
while(true){
    count++;
    let ans=+prompt("Enter a number:");
    if(ans==30){
        console.log("You got it. You have tried :"+ count);
        break;
        
    }
}

let arr=[5,6,7,10];
function x(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==5 || arr[i]==10){
            console.log("exists");
            break;
        }else if(i==arr.length-1){
            console.log("not exist");
        }    
    }
    
}
x(arr);