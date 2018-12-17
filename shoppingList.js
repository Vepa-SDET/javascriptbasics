//Create a shopping list program that asks user following options
//1-Add a new product
//2-Remove a product
//3-Edit a product
//4-Print the shopping list
//5-Exit the program
//default list should include "Orange","Apple"
// 
//
//1-Add a product
//
//    -prompt should ask “Currently you have: "+array items+"what do you want to add ?"
//
//    -add new element to array and display new list
//
//2-Remove a product
//
//    -prompt should ask  “Currently you have: "+array items +"What do you want to remove?"
//
//        - if the element is in the list remove it and alert element +“successfully removed" and display new list.
//
//        - if element is not in the list alert element+ "could not be found"
//
//3-Edit a product
//
//    -(this selection we will get the element which user wanted to remove, we will remove it and insert new one.)
//
//        -prompt should ask first "Currently you have: "+arraylist+"Enter what do you want to change ?"
//
//        -prompt should ask second "What is the new product that you want to enter ?"
//
//            -if the element is in the list, delete(first prompt) that one and insert the new element(second prompt).
//
//                -after that alert (Successfully changed) and display new list
//
//            -if the element is not in the list alert element+"could not be found"
//
//4-Print the shopping list
//
//    -Print each element with their position(start from 1) one by one.
//
//    example; shoppinglist["orange","Apple"]
//
//        alert 1-Orange
//
//        alert 2-Apple
//
//5-Exit the program
//
//    -Stop the loop and alert "Thank you"
var userOption,addProduct,removeProduct,putProduct,changeProduct;
var shoppingList=["Orange","Apple"];
do{
userOption=+prompt("1-Add a new product \n 2-Remove a product \n3-Edit a product \n4-Print the shopping list \n5-Exit the program");
if(userOption==1){
addProduct=prompt("Your have "+shoppingList.toString()+" on your shopping list\n What do you want to add?");
    if(shoppingList.indexOf(addProduct)!=-1){
        alert("You already have "+addProduct+" on your shopping list!");
    }else{
        shoppingList.push(addProduct);
        alert("You added "+addProduct+" into your shopping list\n New shopping list is: "+shoppingList.toString());
    }
    
}else if(userOption==2){
 removeProduct=prompt("Your have "+shoppingList.toString()+" on your shopping list\n What do you want to remove?");
    if(shoppingList.indexOf(removeProduct)!=-1){
    shoppingList.splice(shoppingList.indexOf(removeProduct),1);
    alert("You removed "+removeProduct+" from your shopping list!\n New shopping list is: "+shoppingList.toString());
    }else{
        alert("There is no "+removeProduct+" in your shopping list!");
    }
    
}else if(userOption==3){
 changeProduct=prompt("Your have "+shoppingList.toString()+" on your shopping list\n What do you want to change?");
 putProduct=prompt("What is the new product that you want to add instead?");
 if(shoppingList.indexOf(changeProduct)!=-1 && shoppingList.indexOf(putProduct)==-1){
    shoppingList.splice(shoppingList.indexOf(changeProduct),1,putProduct);
     alert("You removed "+changeProduct+" and added "+putProduct+" \n New shopping list is: "+shoppingList);
 }else if(shoppingList.indexOf(changeProduct)==-1 && shoppingList.indexOf(putProduct)==-1){
     shoppingList.push(putProduct);
     alert("There is no "+changeProduct+" on your list,\n so you just added "+putProduct+" \n New shopping list is: "+shoppingList);
 }else if(shoppingList.indexOf(changeProduct)!=-1 && shoppingList.indexOf(putProduct)!=-1 ){
     shoppingList.splice(shoppingList.indexOf(changeProduct),1);
     alert("You removed "+changeProduct+" but you already have "+putProduct+" \n New shopping list is: "+shoppingList);
 }else {
     alert("There is no "+changeProduct+" on your list and you already have "+putProduct+" \n New shopping list is: "+shoppingList);
 }
}else if(userOption==4){
    alert("Your current shopping list is: "+shoppingList.toString());
}
}while(userOption!=5)
alert("\t \t \t Thank you! \nNow you can go for shopping!");




















//var addRemoveElement,newElement,shoppingList=["Orange","Apple"];
//newElement=prompt("Currently you have "+shoppingList+" what do you want to add?");
//shoppingList.push(newElement);
//alert("Your new shopping list: "+shoppingList.toString());
//removeElement=prompt("Your shopping list is: "+shoppingList+" Which product you want to remove?");
//for(i=0;i<shoppingList.length;i++){
//    if(removeElement==shoppingList[i]){
//        shoppingList.splice(i,1);
//        alert("Your new shopping list: "+shoppingList.toString());
//    }else if(shoppingList.indexOf(removeElement)==-1){
//        
//    }
//}alert(removeElement+" is not on the list!");
//addRemoveElement=prompt("Your shopping list is: "+shoppingList+" Which product you want to add instead of "+shoppingList[0]);
//shoppingList.splice(0,1,addRemoveElement);
//alert("Your new shopping list: "+shoppingList.toString());
