////Lab Session 07.17.2018
//
////1-Create 5 variables for 5 vegetables and print them on the console
//
//var veg_1,veg_2,veg_3,veg_4,veg_5;
//veg_1="Cucumber";
//veg_2="Tomatoes";
//veg_3="Onion";
//veg_4="Pepper";
//veg_5="Carrot";
////console.log(veg_1,veg_2,veg_3,veg_4,veg_5);
//console.log("List of vegetables");
//console.log(veg_1);
//console.log(veg_2);
//console.log(veg_3);
//console.log(veg_4);
//console.log(veg_5);
//
///*Create a program to enter amount of each vegetable and make sure results are number*/
//var amnt_1,amnt_2,amnt_3,amnt_4,amnt_5;
//amnt_1=parseInt(prompt("How much cucumbers do you have?"));
//amnt_2=parseInt(prompt("How much tomatoes do you have?"));
//amnt_3=parseInt(prompt("How much onions do you have?"));
//amnt_4=parseInt(prompt("How much peppers do you have?"));
//amnt_5=parseInt(prompt("How much carrots do you have?"));
////amnt_1=parseInt(amnt_1);
////amnt_2=parseInt(amnt_2);
////amnt_3=parseInt(amnt_3);
////amnt_4=parseInt(amnt_4);
////amnt_5=parseInt(amnt_5);
//console.log(veg_1+":"+amnt_1);
//console.log(veg_2+":"+amnt_2);
//console.log(veg_3+":"+amnt_3);
//console.log(veg_4+":"+amnt_4);
//console.log(veg_5+":"+amnt_5);
//
////Create price for each product
//var prc_1,prc_2,prc_3,prc_4,prc_5;
//prc_1=2.5;
//prc_2=3;
//prc_3=1.5;
//prc_4=2;
//prc_5=4;
//
//console.log(amnt_1+" "+veg_1+" is "+amnt_1*prc_1+" "+"dollars!");
//console.log(amnt_2+" "+veg_2+" is "+amnt_2*prc_2+" "+"dollars!");
//console.log(amnt_3+" "+veg_3+" is "+amnt_3*prc_3+" "+"dollars!");
//console.log(amnt_4+" "+veg_4+" is "+amnt_4*prc_4+" "+"dollars!");
//console.log(amnt_5+" "+veg_5+" is "+amnt_5*prc_5+" "+"dollars!");

var addRemoveElement,newElement,shoppingList=["Orange","Apple"];
newElement=prompt("Currently you have "+shoppingList+" what do you want to add?");
shoppingList.push(newElement);
alert("Your new shopping list: "+shoppingList.toString());
removeElement=prompt("Your shopping list is: "+shoppingList+" Which product you want to remove?");
for(i=0;i<shoppingList.length;i++){
    if(removeElement==shoppingList[i]){
        shoppingList.splice(i,1);
        alert("Your new shopping list: "+shoppingList.toString());
    }else if(shoppingList.indexOf(removeElement)==-1){
        
    }
}alert(removeElement+" is not on the list!");
addRemoveElement=prompt("Your shopping list is: "+shoppingList+" Which product you want to add instead of "+shoppingList[0]);
shoppingList.splice(0,1,addRemoveElement);
alert("Your new shopping list: "+shoppingList.toString());


