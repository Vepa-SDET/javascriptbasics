//var colors=["blue","black","red","white"];
//console.log(colors[0]+" "+colors[1]);
//var mixedArray=[true,false,5,"Sdet"];
//console.log(mixedArray[0]+" "+mixedArray[1]+" "+mixedArray[2]+" "+mixedArray[3]);
//var emptyArray=[];
//var scores1= new Array();
//var scores2= Array(10);
//var scores2= Array(true,"10",NaN,4,5,6,7,8,9,10,11);
//console.log(scores2);
//console.log(scores2[0]);
//console.log(scores2[1]);
//console.log(scores2[2]);
//console.log(scores2[3]);
//console.log(scores2[10],scores2[3]);

//var months=["January","February","March","April","May","June","July","August","September","October","November","December"];
//var number=+prompt("Enter number for month:");
//console.log("The month name is:"+months[number-1]);
//console.log(months.length);
//
//var days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
//var number=+prompt("Enter number for day:");
//console.log("Today is:"+days[number-1]);
//
//console.log(days.length);

//var shoppingList=["cheese","pumpkin","bread","eggs","milk","almonds","peach"];
//for(var i=0;i<shoppingList.length;i++){
//    console.log(shoppingList[i]);
//}

//var carsList=["mercedes","toyota","ford","audi","bmw","lexus","honda"];
//for(var i=0;i<carsList.length;i++){
//    if(carsList[i]=="honda"){
//        console.log("You have honda in your list!");
//        break;
//    }else if(i==carsList.length-1){
//        console.log("You don`t have honda in your list!");
//    }    
//      
//}

//console.log(Array.isArray(carsList));
//console.log(typeof carsList);
//console.log(carsList.toString());
//var shoppingList=["cheese","pumpkin","bread","eggs","milk","almonds","peach"];
//if(Array.isArray(shoppingList)){
//    console.log(shoppingList.toString());
//}
//
//var shoppingList=["cheese", "pumpkin","bread","eggs","milk","almonds"];
//
//if(Array.isArray(shoppingList))
//{console.log(shoppingList.toString());
//}else{
//     console.log("this is not array");
// }


//var stack=[];
//stack.push(1);
//console.log(stack);
//stack.push(2);
//console.log(stack);
//stack.push(3);
//console.log(stack);
//stack.push(4);
//console.log(stack);
//stack.push(5);
//console.log(stack);
//stack.push(0);
//console.log(stack);
//stack.push(6);
//console.log(stack);
//
//stack.pop();
//console.log(stack);

//var userInput=[];
//outerLoop:
//while(true){
//    number=+prompt("Enter your selection:");
//    switch (number){
//        case 1:
//        userInput.push(prompt("Enter new element:"));
//        break;
//        case 2:
//        userInput.pop();
//        break;
//        case 3:
//console.log(userInput.toString());
//        break;
//        case 4:
//        break outerLoop;
//}
//}


//var times=+prompt("How many times you want to play?");
//for(var i=1;i<=times;i++){
//    var numbers=[];
//    for(var j=1;j<=3;j++){
//   numbers.push(prompt("Enter number:"));
//    }
//    if(numbers[0]>numbers[1]&&numbers[0]>numbers[2]){
//        console.log(numbers[0]+" is the biggest number!");
//    }else if (numbers[1]>numbers[0]&&numbers[1]>numbers[2]){
//        console.log(numbers[1]+" is the biggest number!");
//}else if (numbers[2]>numbers[0]&&numbers[2]>numbers[1]){
//        console.log(numbers[2]+" is the biggest number!");
//}else{
//    console.log("All numbers are equal!");
//}
//}
//counter=0;
//do{
//    var numbers=[];
//    for(var j=1;j<=3;j++){
//   numbers.push(prompt("Enter number:"));
//        
//    }
//    if(numbers[0]>numbers[1]&&numbers[0]>numbers[2]){
//        alert(numbers[0]+" is the biggest number!");
//    }else if (numbers[1]>numbers[0]&&numbers[1]>numbers[2]){
//        alert(numbers[1]+" is the biggest number!");
//}else if (numbers[2]>numbers[0]&&numbers[2]>numbers[1]){
//        alert(numbers[2]+" is the biggest number!");
//}else{
//    alert("All numbers are equal!");
//}
// var stop=+prompt("Do you want to continue? Enter 1 if yes or 2 if not!"); 
// counter++;   
//}while(stop==1)
//alert("Thank You! You tried "+counter+" times!");

//shift() method
//var myFish=["angel","clown","mandarin","surfean"];
//var shifted=myFish.shift();
//console.log(shifted);
//console.log(myFish);
//for(var i=0;i<myFish.length;i++){
//    console.log(myFish[i]);
//}
//
//var x=Array(10);
//console.log(x.length);
//console.log(x[0]);
//
//var names=["Andrew","Edward","Paul","Chris","John"];
//while(names.length>0){
//    names.shift()
// } console.log(names);
//
var names=["Andrew","Edward","Paul","Chris","John"];
names.splice(0,1);
console.log(names);
var names=["Andrew","Edward","Paul","Chris","John"];
names.splice(2,0,"Vepa","Maysa","Medine","Muhammedaly");
console.log(names);
names.splice(0,names.length);
console.log(names);

var rotateLeft=function(array){
    var x=array[0];
    array.splice(0,1);
    array.push(x)
    console.log(array);
}
//rotateLeft([1, 2, 3]);       //[2,3,1]
//rotateLeft([5, 11, 9]);      //[11,9,5]
//rotateLeft([7, 0, 0]);       //[0,0,7]
//rotateLeft([17, 12, 10, 8]); //[12,10,8,17]





//
//var names=["Andrew","Edward","Paul","Chris","John"];
//names.splice(2,1,"Vepa");
//console.log(names);
//
//var myFish=["angel","clown","mandarin","sturgeon"];
//myFish.splice(2,0,"drum");
//console.log(myFish);
//myFish.splice(3,1);
//console.log(myFish);
//myFish.splice(2,1,"trumpet");
//console.log(myFish);
//myFish.splice(0,2,"parrot","anemone","blue");
//console.log(myFish);
//myFish.splice(2,2);
//console.log(myFish);
//myFish.splice(1,1);
//console.log(myFish);
//
//var animals=["ant","bison","camel","duck","elephant"];
//console.log(animals.slice(2));
//console.log(animals.slice(2,4));
//console.log(animals.slice(1,5));
//console.log(animals);
//
//var animals=["dog","cat","monkey","donkey","dino","elephant"];
//console.log(animals);
//console.log(animals.slice(1));
//console.log(animals.slice(5));
//console.log(animals.slice(4));
//console.log(animals.slice(0,1));
//console.log(animals.slice(0,2));
//console.log(animals.slice(0,0));
//console.log(animals.slice(2,3));
//console.log(animals.slice(2,5));
//
////indexOf() Method
//
//var scores=[10,20,30,10,40,20];
//
//console.log(scores.indexOf(10));
//console.log(scores.indexOf(30));
//console.log(scores.indexOf(50));
//console.log(scores.indexOf(20));
//
//console.log(scores.indexOf(10,2));
//console.log(scores.indexOf(30,3));
//console.log(scores.indexOf(20,-1));
//console.log(scores.indexOf(20,-5));
//// -5 means== (scores.length-5)
//
//var beasts=["ant","bison","camel","duck","bison"];
//
//console.log(beasts.indexOf("bison"));
//console.log(beasts.indexOf("bison",2));
//console.log(beasts.indexOf("giraffe"));
//console.log(beasts.indexOf("camel",-6));
//
////lastIndexOf() Method
//var scores=[10,20,30,10,40,20];
//
//console.log(scores.lastIndexOf(10,2));
//console.log(scores.lastIndexOf(20));
//console.log(scores.lastIndexOf(50));
////sort() Method
//var months=["March","Jan","Feb","Dec"];
//console.log(months.sort());
//var array1=[1,30,4,21];
//console.log(array1.sort());
//var animals=["Cat","ant","Bee","elephant","Ant"];
//console.log(animals.sort());
//var mixArray=["cat","Ant",3,-1,"elephant","Bee",67,578];
//console.log(mixArray.sort());

//var numArray=Array(15);
//numArray=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
//console.log(numArray[9]);
//numArray[4]=35;
//numArray[8]=numArray[5]+numArray[12];
//console.log(numArray[8]);
//
//var weekDays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
//for(var i=0;i<weekDays.length;i++){
//    console.log(weekDays[i]);
//}
//var numbers=Array(10);
//var userinput,sum=0;
//for(i=0;i<10;i++){
//numbers[i]=(userinput=+prompt("Enter number "+(i+1)+":"));
//sum+=numbers[i];
//}console.log(sum);
//
//var indicesA=[],indicesB=[],indicesC=[],indicesD=[];
//var array=["a","b","a","c","a","d"];
//for(i=0;i<array.length;i++){
//    switch(array[i]){
//        case "a":
//        indicesA.push(array.indexOf("a",i));
//        break;
//        case "b":
//        indicesB.push(array.indexOf("b",i));
//        break;
//        case "c":
//        indicesC.push(array.indexOf("c",i));
//        break;
//        case "d":
//        indicesD.push(array.indexOf("d",i));
//        break;
//    }
//}
//console.log("Indexes of a:"+indicesA);
//console.log("Indexes of b:"+indicesB);
//console.log("Indexes of c:"+indicesC);
//console.log("Indexes of d:"+indicesD);
////Ozzy
//var indices = [];
//var array = ["a","b","a","c","a","d"];
//var element = "a";
//var idx=array.indexOf(element);
//while(idx != -1){
//    indices.push(idx);
//    idx=array.indexOf(element,idx+1);
//}
//console.log(indices);

var  d="", num1;
for(var i=1; i<=7; i++){
    num1="";
      d+="\t";
        for(var c=1; c<=7; c++){
          if(c>=i){
            num1+=c+"\t\t";  
          }
       }console.log(d+num1);
    }

// fill() Method
x=["a","b","c"];
x.fill("x");
console.log(x); // ["x","x","x"]









