/////////////////   Error Handling   /////////////////////////////////////
//
////Keywords  //try  //catch  //throw  //finally
////Mostly used in server requests
//
///////  try...catch block   /////
//
////try{
////    //Block of code to try
////}
////catch(err){                                             
////    //Block of code to handle error
////}
//
////try{
////   console.log("Hello");
////   console.log(sayHello());
////   console.log("This is an error!");    
////}
////catch(err){
////   console.log("Description " + err.description);
////   console.log("Message "+ err.message);
////   console.log("Stack trace:"+ err.stack);
////}
////console.log("Ready to go!");
//
//
///////  finally block  //////////
//
////try{
////    //Block of code to try
////}
////catch(err){                                             
////    //Block of code to handle error
////}
////finally{
////    //Block of code to be executed regardless of the try/catch result
////}
//
////try{
////   console.log("Hello");
////   console.log(sayHello());
////   console.log("This is an error!");    
////}
////catch(err){
////   console.log("Description " + err.description);
////   console.log("Message "+ err.message);
////   console.log("Stack trace:"+ err.stack);
////}
////finally{
////    console.log("This line is guaranteed to execute!");
////}
//
//
//////// throw statement  ////////////////
//
//function divide(){
//    var num1=parseInt(prompt("Enter Num1"));
//    var num2=parseInt(prompt("Enter Num2"));
//    
//    try{
//        if(num2==0){
//            throw {
//            error:"Divide by zero error",
//            message:"Number cannot be zero"
//                  }
//        }else{
//            console.log(`Result=${num1/num2}`);
//        }
//    }
//    catch(e){
//        console.log(e.error);
//        console.log(e.message);
//        
//    }
//}
//
//
//divide();
//
//function f(){
//    try{
//        console.log(0);
//        console.log(name2);
//    }
//    catch(e){
//        console.log(1);
//        return true;
//        console.log(2);
//    }
//    finally{
//        console.log(3);
//        return false;
//        comsole.log(4);
//    }
//    console.log(5);
//}
//
//console.log(f());
//
arr=[[-1, -1, 0, -9, -2, -2],
     [-2, -1, -6, -8, -2, -5],
     [-1, -1, -1, -2, -3, -4],
     [-1, -9, -2, -4, -4, -5],
     [-7, -3, -3, -2, -9, -9],
     [-1, -3, -1, -2, -4, -5]
     ];

function hourglassSum(arr) {
var sum=arr[0][0]+arr[0][1]+arr[0][2]+arr[1][1]+arr[2][0]+arr[2][1]+arr[2][2];
    for(var i=1;i<arr.length-1;i++){
        for(var j=1;j<arr[i].length-1;j++){
          if(sum<arr[i-1][j-1]+arr[i-1][j]+arr[i-1][j+1]+arr[i][j]+arr[i+1][j-1]+arr[i+1][j]+arr[i+1][j+1]){
              sum=arr[i-1][j-1]+arr[i-1][j]+arr[i-1][j+1]+arr[i][j]+arr[i+1][j-1]+arr[i+1][j]+arr[i+1][j+1];
          }  
        }

    }
    return sum;
}
  //1+1+1+1+1+1+1
console.log(hourglassSum(arr));


var a=[41, 73, 89, 7, 10, 1, 59, 58, 84, 77, 77, 97, 58, 1, 86, 58, 26, 10, 86, 51];
var b=[0,1];

b+=a;

function rotLeft(a,d){
    let x=0;
    for(let i=d;i<a.length;i++){
        x=a.pop();
        a.unshift(x);
    }
return a;
}

console.log(rotLeft(a,10));

var xg=Array(10);
console.log(xg.length);




