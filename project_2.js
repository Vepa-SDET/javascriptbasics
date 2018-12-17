//Main Screen has two main products
//            1.Vegetables 2.Fruits

var vegatables=[
  ["Cucumber","Tomatoes","Onions","Pepper","Carrot"],
  [2.5,3,1.5,2,4],
  ["Orange","Banana","Watermelon","Apple","Cherry"],
  [3.5,4,7,8,4]
]
var input;var bool=true; var total=0;
do{
input=+(prompt("What type of product you want to buy, please enter number \n 1-Vegetables \n 2-Fruits"));
  if(input==1 || input==2 ){
    do{
      var bool1=false;
      if(input==1){
    var inV=prompt(" 1.Cucumber $2.5 \n 2.Tomatoes $3 \n 3.Onions $1.5 \n 4.Pepper $2 \n 5.Carrot $4");
      }else {
        var inV=prompt(" 1.Orange $3.5 \n 2.Banana $4 \n 3.Watermelon $7 \n 4.Apple $8 \n 5.Cherry $4");}
     if(inV>=1 && inV<=5){
    do{
      if(input==1){
     var inV1=prompt("Please Enter amount of "+vegatables[input-1][inV-1]);
      if(inV1<=100 && inV1>=1){
       total=total+inV1*vegatables[input][inV-1];}
      } if(input==2){
        var inV1=prompt("Please Enter amount of "+vegatables[input][inV-1]);
        if(inV1<=100 && inV1>=1){
        total=total+inV1*vegatables[input+1][inV-1];}
      }
      if(inV1<=100 && inV1>=1){
      alert("Your total will be $"+total);
    var inV2=prompt("\n Do you want to shop more \n 1.Yes \n 2.No");
      if(inV2==1){
        bool2=false;
        bool1=false;
      }
        if(inV2==2){
          alert("Your cart total is $"+total+"\n Thank you for shopping with us");
        var bool2=false;
          bool1=false;
          bool=false;
      }else if(inV2!=1 && inV2!=2){
        bool2=true;
        alert("Please enter Valid number from 1-2");}
    }else{alert("Please enter Valid number from 1-100");
          bool2=true;}
    }while(bool2==true);
    
    }else{
      alert("Please enter a number between 1-5");
      bool1=true;}
  }while(bool1==true);
  }else{
    alert("Please enter valid number between 1-2 ");}
} while(bool==true);

//if user enter 1 (vegetables ) , list 5 vegetables with price
//if user enter 2 (fruit) list 5 fruits with price
//if user enter different input from 1 and 2,
//-alert "Please enter valid option"
//Accepts 1-5 for vegetables or fruits selection,
//if user enter different input, show "Please enter valid option"
//after product selection,  user should enter amount between 1 to 100.
//if different than this range show "Please enter amount between 1 to 100"
//after amount entrance,  show total price and ask "do you want to shop more ?"
//if user enter 1 (yes) start from main product, at the same time keep previous total and add new total it
//if no (2) show total price say thank you
//first selection only accepts 1 or 2, if not ask again
//second selection only accept 1-5 ,if not ask again
//amount only accept numbers 1 to 100, if not ask again
//continue selection only accept 1 or 2 if not ask again
//Vegetables
//Cucumber   $2.5
//Tomatoes    $3
//Onion          $1.5
//Pepper        $2
//Carrot         $4
//Fruits
//Orange         $3.5
//Banana         $4
//WaterMelon  $7
//Apple             $8  
//Cherry            $4