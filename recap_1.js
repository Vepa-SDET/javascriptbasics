////Question
//var firstName="Mike";
//var lastName="Smith";
//var salary="$100k";
//
//console.log("Hi! my name is "+firstName+" "+lastName+" and my salary is "+salary);
//
//var hours=parseInt(prompt("How many hours did you work this week?"));
//var hourlyRate=10;
//console.log("You worked "+hours+" hours this week and you made $"+hours*hourlyRate);
//
//x=5+5;
//console.log(x);
//x="5"+"5";
//console.log(x);
//x=5+"5";
//console.log(x);
//x="5"+5;
//console.log(x);
//
//var a,b,c;
//a=25;
//b=35;
//c=a;
//a=b;
//
//console.log(a,b,c);
//
//var numbers_4;
//var sum=0;
//numbers_4=parseInt(prompt("Enter 1st. numbers and let program calculate the average:"));
//sum=sum+numbers_4;
//numbers_4=parseInt(prompt("Enter 2nd. numbers and let program calculate the average:"));
//sum=sum+numbers_4;
//numbers_4=parseInt(prompt("Enter 3rd. numbers and let program calculate the average:"));
//sum=sum+numbers_4;
//numbers_4=parseInt(prompt("Enter 4st. numbers and let program calculate the average:"));
//sum=sum+numbers_4;
//    
//console.log("The average of 4 numbers is :"+sum/4);
//
//var x=5,y=4;
//console.log(x<10&&y>1);
//console.log(!(x==y));
//
//var number=parseInt(prompt("Enter a number and let program check if it is odd or even:"));
//
//if(number%2==0){
//    console.log("Number is even!");
//}else{
//    console.log("Number is odd!");
//}
//
//
//var number_1=parseInt(prompt("Enter two numbers and let program check if they are equal or not:"));
//var number_2=parseInt(prompt("Enter two numbers and let program check if they are equal or not:"));
//
//if(number_1==number_2){
//    console.log("Numbers are equal!");
//}else{
//    console.log("Numbers are not equal!");
//}
//
//var score=parseInt(prompt("Enter your score and let program check your grade:"));
//
//if(score<=100&&score>90){
//    console.log("A");
//}else if(score<=90&&score>80){
//    console.log("B");
//}else if(score<=80&&score>=70){
//    console.log("C");
//}else if(score>=0 && score<70){
//   console.log("F");
//}else{
//    console.log("Please enter a number in range 0-100!");
//}
//
//
//var productQuantity=parseInt(prompt("Enter the quantity of product:"));
//var productPrice=parseInt(prompt("Enter the price of product:"));
//var revenue=productPrice*productQuantity;
//
//if (revenue<3000){
//    console.log("There is no discount, net revenue is:"+revenue);
//}else if(revenue>=3000 && revenue<=5000){
//    console.log("You have 15% discount, net revenue is:"+(revenue-revenue*0.15));
//}else if(revenue>5000 && revenue<=10000){
//    console.log("You have 25% discount, net revenue is:"+(revenue-revenue*0.25));
//}else{
//console.log("You have 40% discount, net revenue is:"+(revenue-revenue*0.40));
//}
//
//
//var priceOfProduct = parseInt(prompt("Enter price of product"));
//
//var quantity= parseInt(prompt("Enter product quantity"));
//
//var revenue=parseInt(priceOfProduct*quantity);
//
//
//
//if(revenue<3000){    
//    console.log(revenue);
//    console.log("no discount");
//}else if(revenue>=3000&&revenue<5000){ 
//    var netRevenue=revenue-0.15*revenue;
//    console.log(netRevenue);
//    console.log("15% discount");
//
//}else if(revenue>=5000&&revenue<=10000) { 
//    var netRevenue=revenue-0.25*revenue;
//    console.log(netRevenue);
//    console.log("25% discount");
//    
//}else if(revenue>10000){ 
//    var netRevenue=revenue-0.4*revenue;
//    console.log(netRevenue);
//    console.log("40% discount");
//}
//
//var modelOfYourCar=prompt("Write your car model which you want to buy?");
//
//switch(modelOfYourCar){
//    case "toyota":
//    console.log("good for uber");
//    break;
//    case "ferrari":
//    console.log("good for race");
//    break;
//    case "mercedes":
//    console.log("good for luxury");
//    break;
//    default:
//    console.log("do not buy that one!");
//    break;
//}
//
//for(var i=0;i<20;i++){
//    console.log((i+1)+"x I will find $100k job in 5 months!");
//}
//
// 
//var price,quantity,revenue,discount,netRevenue;
//price=parseInt(prompt("Enter the price"));
//quantity=parseInt(prompt("Enter the quantity"));
//revenue=price*quantity;
//discount=0;
//if(revenue<3000){
//  netRevenue=revenue-discount;
//}else if(revenue<5000){
//    netRevenue=revenue-(revenue*15/100); 
//}else if(revenue<10000){
//    netRevenue=revenue-(revenue*25/100);
//}else if(revenue>=10000){
//    netRevenue=revenue-(revenue*40/100);
//}
//
//console.log(revenue-netRevenue);
//console.log(netRevenue);
//
//
//var posInteger=parseInt(prompt("Put an integer number to write multiplication table:"));
//for(var i=1;i<=10;i++){
//    console.log(i+"*"+posInteger+"="+(i*posInteger));
//}
//    
//var posInteger=parseInt(prompt("Put an integer number to write multiplication table:"));
//var print="";
//for(var i=1;i<=10;i++){
//    print="";
//    for (var j=1;j<=1;j++){
//    print=i+"*"+posInteger+"="+(i*posInteger);    
//    }
//   console.log(print);
//}
//
//var a = parseInt(prompt("Enter a number"));
//i =1; 
//while(i<=10){
//result = a*i;
//console.log( a + "x"+ i +"=" + result)
//i= i+1;
//}
//
//var i=1;
//while(i<15){
//console.log(i);
//i= i+1;
//}
//
//var i=1;
//do{
//console.log(i);
//i= i+1;    
//}while(i<15);
//
//for (i=1;i<=100;i++){
//    if(i%5==0||i%7==0){
//        console.log(i);
//}
//}
//var userInput;
//var counter=0;
//for(var i=1;i<=5;i++){
//userInput=parseInt(prompt("Enter a number:"));
//    if(userInput>10&&userInput<20){
//    counter++;    
//    }
//}console.log("You entered "+counter+" numbers between 10-20!");
//var counter=0;
//for(var i=1;i<=50;i++){
//    if (i%3==0&&i%5==0){
//        counter++;
//    }
//}console.log("There are "+counter+" numbers which is divisible 3 and 5!"  );
//
//var input;
//var total=0;
//
//while(true){
//input=parseInt(prompt("Put number for specific calculation;"));
//    if(input==0){
//        break;
//    }else if(input%2==0){
//        total+=input;
//    }else{
//        total-=input;
//    }
//}
//console.log(total); 

//var a,b,result;
//a=0;
//b=1;
//result=b;
//
//
//var n=parseInt(prompt("enter a number for calculating Fibonacci series"));
//
//for(var i=1;i<=n;i++){
//console.log(result);
//result=a+b;
//a=b;
//b=result;
//
//
//}

//
//
//for (var i=200;i>0;i=i-5){
// console.log(i);
//}
//
//
//var sum=0;
//for(var i=0,j=0; sum>20; ++i,--j){
// sum=sum+i+j;
//}
//console.log("Sum = "+sum);




















