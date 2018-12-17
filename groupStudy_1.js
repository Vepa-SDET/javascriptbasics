
var apple,
    orange,
    banana,
    applePrice = 1.5,
    orangePrice =2.5,
    bananaPrice= 3.5,
    totalOrder,
    payment;
apple=parseInt(prompt("How much kg apple?"));
orange=parseInt(prompt("How much kg orange?"));
banana=parseInt(prompt("How much kg banana?"));
totalOrder=apple*applePrice+orange*orangePrice+banana*bananaPrice;
alert(totalOrder);
payment=parseInt(prompt("Please enter the amount of payment:"));
if (payment===totalOrder){
    alert("Thank you for shopping!");
}
else if (payment>totalOrder){
    alert("Thank you for shopping!Here is your change:"+(payment-totalOrder));
}
else {
     alert("Please you need to add:"+(totalOrder-payment));
}



















