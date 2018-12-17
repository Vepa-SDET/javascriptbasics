//var temp=prompt("Enter temp");
//if(70<temp<80){
//   console.log("Temp "+temp+" F that you enter between 70 and 80 F is an ideal temp.")
//}

//var marks;
//marks=parseInt(prompt("Enter your mark"));
//
//if(marks>100){
//    console.log("Not a valid mark");
//}else{
//   if(marks<60){
//    console.log("Fail");
//    }else if((marks>=60)&&(marks<90)){
//    console.log("Pass");
//    }else if(marks>=90){
//    console.log("Passed with Distinction");
//   }
//   }

//var userName,passWord,correctUserName,correctPassWord;
//userName=prompt("Enter your username");
//passWord=prompt("Enter your password");  
//correctUserName="Kadriye_Ti";
//correctPassWord=54321;
//if((userName=="")&&(passWord=="")){
//    console.log("Username and Password Fields cannot be empty");
//}else if((userName=="")&&(passWord!="")){
//    console.log("Username cannot be empty");
//}else if((userName!="")&&(passWord=="")){
//    console.log("Password cannot be empty");
//}else if((userName!="")&&(passWord!="")){
//        if((userName==correctUserName)&&(passWord==correctPassWord)){
//           console.log("User Logged in successfully");
//        }else{
//            console.log("Please enter correct username or password");
//           }
//}
//
//var num1,num2,operator;
//num1=prompt("Enter first number");
//operator=prompt("Enter an operator");
//num2=prompt("Enter second number");
//if((num1=="" && num2=="")||(num1!=="" && num2=="")||(num1=="" && num2!="")){        
//    console.log("Please enter valid numbers");
//}else{
//    num1=parseInt(num1);
//    num2=parseInt(num2);
//    if(operator=="+"){
//        console.log(num1+num2);
//    }else if(operator=="-"){
//        console.log(num1-num2);
//    }else if(operator=="*"){
//        console.log(num1*num2);
//    }else if(operator=="/"){
//        console.log(num1/num2);
//    }
//} 

var num1,num2,operator;
num1=prompt("Enter first number");
operator=prompt("Enter an operator");
num2=prompt("Enter second number");
console.log(num1);
console.log(typeof num1);
console.log(num2);

if(num1=="" && num2==""){
    console.log("Please enter valid numbers");
//}else if (num1==NaN){
//console.log("Please enter valid number to number 1");
//}else if(num2==NaN){
//console.log("Please enter valid number to number 2");
}else{
    num1=parseInt(num1);
    num2=parseInt(num2);
    if(operator=="+"){
        console.log(num1+num2);
    }else if(operator=="-"){
        console.log(num1-num2);
    }else if(operator=="*"){
        console.log(num1*num2);
    }else if(operator=="/"){
        console.log(num1/num2);
    }else {
        console.log("Enter Valid Operator");
    }
}