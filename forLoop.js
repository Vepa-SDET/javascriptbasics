//
//for (var x=0; x<5;x++){
//    
//    console.log("Javascript");
//}


//for (var x=1; x<10;x+=2){
//    
//    console.log(x+" apple");
//}console.log(x);
// x    t/f   print      increase 
// 1    t     1 apple     1+2
// 3    t     3 apple     3+2
// 5    t     5 apple     5+2
// 7    t     7 apple     7+2
// 9    t     9 apple     9+2

//Print all numbers divisible between 0-50
//
//for (var x=0;x<=50;x++){
//    if (x%4==0){
//    console.log(x);    
//    }
//}
//for (var x=0;(x<=50 && x%4==0);x+=4){
//    console.log(x);    
//    }

//for (var x=100;(x>=0&&x%3==0);x=x-1){
//    console.log(x);    
//    }

//for (var x=100;x>=80;--x){
//    if (x%3!=0){
//    console.log(x+" is not divisible by 3!");    
//    }else{
//        console.log(x+" is divisible by 3!");    
//
//    }
//}
/*
User should be able to enter 2 numbers and program sholud display which is bigger. If numbers are equal, it should display numbers are equal. Above steps need to be repeated to number of times that is user entered. 
*/
//
//var howMany=parseInt(prompt("How many times you want to repeat steps?"));
//
//for (var x=1; x<=howMany; x++){
//var num1=parseInt(prompt("Enter number 1:"));
//var num2=parseInt(prompt("Enter number 2:"));
//    
//    if (num1>num2){
//        console.log(num1+" is bigger than "+num2);
//    }else if (num1<num2){
//        console.log(num2+" is bigger than "+num1);
//    }else{
//        console.log(num1+" and "+num2+" are equal!");
//    }
//} 
//
//for (var i=1; i<=32; i++){
//if (i%2==0){
//     console.log(i+" is even number!");
//}else{
//     console.log(i+" is odd number!");
//}   
//}

//var total=0;
//for (var i=0; i<5; i++){
//var number=parseInt(prompt("Enter a number:"));
//total=total +number;
//}
//console.log("Total of 5 numbers:"+total);
//

//var input=parseInt(prompt("Enter a positive integer:"));
//for (var num=1; num<=10; num++ ){
//    console.log(input+"*"+num+"="+(input*num));
//}

//var x= 2 *4 /2;
//
//var y=4+3*6+"JS";
//
//var z=x+y;
//
//console.log(typeof(z));

//var temp = 65;
//
//var weather = "sunny";
//
//var car = "sport";
//
//console.log( temp>=65 && ( (weather == "sunny") && (car!="sport") ) );

//var input=3;
//var input1=2;
//switch (input>input1){
//    case true:
//        console.log(true); break;
//    case 2:
//        console.log("2"); break;
//    case 3:
//        console.log("3"); break;
//}


//var bool=false;
//var bool1=false;
//var bool2=false;
//bool= (bool2&&console.log("1"));
//console.log(bool);
//console.log(typeof bool);
//bool=(bool1||console.log("2"));
//console.log(bool);
//console.log(typeof bool);
//bool=(bool||console.log("3"));
//console.log(bool);
//console.log(typeof bool);


//var temp = 65;
//
//var weather = "sunny";
//
//var car = "sport";
//
//console.log( temp>=65 && ( (weather == "sunny") && (car!="sport") ) );







//var b1=false;
//var b2=false;
//
//if(b2!=(b1=!b2)){
//    console.log("true");
//}else{
//    console.log("false");
//}

//var number=parseInt(prompt("Put a number:"));
//var sum=0;
//for (var i=1; i<=number; i++){
//    sum+=1/i;
//}
//console.log(sum);


//n=prompt("Enter number");
//var sum=0;
//var oneline="";
//
//for(var i=1; i<=n; i++){
//   sum=sum+1/i;
//   oneline=oneline+"1/"+i+" + ";
//   }
//console.log(oneline+"="+sum);




//for(var i=0;i<5;i++){
//    console.log("Outer Loot at state: "+i+"\n");
//    for(var p=0; p<2;p++){
//       console.log("Inner Loot ast state: "+p);
//        if(p==1){
//            console.log("\n");
//        }
//    }
//}

//var a="";
//for(var i=1;i<=5;i++){
//    for(var p=1;p<=1 ;p++){
//        a=a+"*"
//}
//    console.log(a);
//}
//
//var star="";
//for(var j=1; j<=5 ; j++ ){
//      for(var i=1; i<=1 ; i++ ){
//        star=star+"*"
//            
//    }
//          console.log(star);
//}
//
//var a=""
//for ( var i=0; i<5;i++){
//     a=a+"*"
//    console.log(a);
//}

var a="";
for (var i=5;i>=0;i--){
    a=a+"*";
    console.log(a);
}
















