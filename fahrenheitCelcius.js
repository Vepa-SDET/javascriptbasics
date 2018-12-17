//celcius to fahrenheit conversion
var f,c;
c=prompt("Weather in Celcius?");
c=Number(c);
f=(c*9/5)+32; // celcius to fahrenheit
console.log(f+" Fahrenheit");

//fahrenheit to celcius conversion
var fah,cel;
fah=prompt("Weather in Fahrenheit?");
fah=Number(fah);
cel=(fah-32)*5/9;
console.log(cel+" Celcius");

//conversion mile to km
var ml,km;
ml=prompt("How much mile you did?");
km=parseInt(ml)*1.609344;
console.log("You did "+km+" kilometer!")

//precedence of operators
console.log(3+5*4-6);

var a=50;
a=--a + a++ + a-- + a++;
console.log(a);

var a=1;
a=-a-- + a++/-a--*--a;
console.log(a);


