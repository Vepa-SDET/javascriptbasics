//CAR GAS PRICE CALCULATOR
//
//1-Ask user to enter min and max mileage and create 4 random mileage between max and min and store them into an array
//2-Ask user to enter the gas prices for regular, premium and supper and put them into an object with key and values
//3-Create a constructor called Car which includes properties:
//make,model,year,mileage,level,tank
//4-Add a method to calculate the average mileage
//
//5-Add a method to calculate the how much gas comsume:
//if average mileage is between 0 and 500, car comsumes 10 percent more than full tank
//if average mileage is between 500 and 1000, car comsumes 20 percent more than full tank
//if average mileage is between 1000 and 5000, car comsumes 30 percent more than full tank
//if average mileage is between 5000 and 10000, car comsumes 40 percent more than full tank
//otherwise car consumes 50 percent more than full tank
//
//
//6-Add a method to calculate the cost of the gas:
//if car year is 2018, that car needs super level gas
//if car year is between 2010 and 2018, that car needs premium level gas
//if car year is between 2000 and 2010, that car needs regular gas
//
//cost of the gas = gas price * tank
//
//7-Create couple of car objects and console the cost of the gas
var minMile=+prompt("Enter minimum mileage:");
var maxMile=+prompt("Enter maximum mileage:");
var randMile=0,arrMile=[];
console.log(minMile,maxMile);
for(var i=0;i<4;i++){
randMile=Math.random() * (maxMile - minMile) + minMile;
//randMile=Math.random()* (maxMile-  minMile)+minMile;
arrMile.push(Number(randMile.toFixed()));
}
console.log(arrMile);

var regFuel=+prompt("Enter gas price for regular:");
var premFuel=+prompt("Enter gas price for premium:");
var supPFuel=+prompt("Enter gas price for regular:");

var gasPrice={
    regular:regFuel,
    premium:premFuel,
    super:supPFuel
};

function car(make,model,year,mileage,level,tank){
    this.avrgMile=function(){
        var sum=0;
        for(var i=0;i<mileage.length;i++){
            sum+=mileage[i];
        }
    return sum/mileage.length;
    }
    this.calcGasConsm=function(){
        var consm=0,avrg=this.avrgMile();
        if(avrg<500){
            consm=tank*1.10;
        }else if(avrg<1000){
            consm=tank*1.20;
        }else if(avrg<5000){
            consm=tank*1.30;
        }else if(avrg<10000){
            consm=tank*1.40;
        }else{
            consm=tank*1.50;
        }
        return consm;
    }
    this.calcCost= function (){
        var cost=0,tankk=this.calcGasConsm();
        if(year==2018){
            cost=tankk*level;
            return cost;
        }else if(year>=2010 && year<2018 ){
        cost=tankk*level;
        return cost;
        }else if(year>=2000 && year<2010 ){
        cost=tankk*level;
        return cost;
        }else{
            return "This one is old sell it!";
        }
    }
}

var camry=new car("Toyota","Camry",2018,arrMile,gasPrice.super,15);

var avalon=new car("Toyota","Avalon",2000,arrMile,gasPrice.regular,15);

var corolla=new car("Toyota","Corolla",2010,arrMile,gasPrice.premium,15);

console.log(camry.calcCost());
console.log(avalon.calcCost());
console.log(corolla.calcCost());

//
//var c="";
//var i=0;
//c="1";
//i=c;
//i=i+1;
//c=i;
//c=c+2;
//console.log(c);
//
//function xyz(str1){
//    if(klm(str1)>4){
//        return "true";
//    }else{
//        return false;
//    }
//}
//
//function klm(str2){
//    var z=(str2+str2)%3;
//    return z;
//}
//
//console.log(xyz(3));
//
//var i=2,j=4,k=0;
//i=k=j/4;
//console.log(i);
//
//
//function x(inp){
//    switch(inp){
//        case "a": console.log("apple");
//        default : console.log("none");
//        case "b" : console.log("bat");
//            break;
//        case "B" : console.log("big bat");
//    }
//}
//
//x("A");
//
//var str="Online Students";
//console.log(str.search("tud"));
//
//
//function testInts(str1,str2){
//    str1=str2++;
//    str1++;
//    return str1+str2;
//}
//
//var val1=5;
//var val2=9;
//testInts(val1--,++val2);
//console.log(val1+" "+val2);
//
//var abc="abc";
//abc.concat("abc");
//abc.concat("def");
//console.log(abc);
//
//var str="Online Students";
//console.log(str.substr(-6,2));
//
//var i=2;
//var j=-3;
//for(i=1,j=0;j<i;++j,i--){
//    console.log(i+" "+j);
//}
// console.log(i+" "+j);
//var n=101;
//var count=0,s=n.toString();
//for(var i=0;i<s.length;i++){
//    if(n%Number(s[i])==0){
//        count++;
//    }
//}    
//console.log(count);









