//Question-1
//Write a function that accepts a string and a non-negative number, and prints a larger string that is number copies of the original String
//stringTimes("Hi", 2) → "HiHi"
//stringTimes("Hi", 3) → "HiHiHi"
//stringTimes("Hi", 1) → "Hi"

function howManyHis(Hi,howmany){
    if(howmany<0){
        console.log("Enter positive number!");
    }else{
        for(var i=1;i<howmany;i++){
            Hi+="Hi";
        }
        console.log(Hi);
    }
}
howManyHis("Hi",2);    //HiHi
howManyHis("Hi", 3);   //HiHiHi
howManyHis("Hi", 1);   //Hi

//Question-2
//The number 6 is a truly great number. Write a function that accepts num1 and num2, prints true if either one is 6. Or if their sum or difference is 6. 
//love6(6, 4) → true
//love6(4, 5) → false
//love6(1, 5) → true
//love6(12, 6); ->true

function Great_6_Number(n1,n2){
    if(n1==6 || n2==6 || n1+n2==6 || n1-n2==6 || n2-n1==6){
        console.log("true");
    }else{
        console.log("false");
    }
}
Great_6_Number(6,5); //true
Great_6_Number(5,6); //true
Great_6_Number(2,4); //true
Great_6_Number(7,1); //true
Great_6_Number(2,8); //true
Great_6_Number(2,5); //false

//Question-3
//We'll say a number is special if it is a multiple of 11 or if it is one more than a multiple of 11. Write a function that accepts a number and prints true if the given number is special.
//specialEleven(22) → true
//specialEleven(23) → true
//specialEleven(24) → false

function special_11(n11){
    if(n11%11==0 || n11%11==1) {
        console.log("true");
    }else{
        console.log("false");
    }
}
special_11(22); //true
special_11(23); //true
special_11(24); //false

//Question-4
//You and your date are trying to get a table at a restaurant. The parameter "yourStyle" is the stylishness of your clothes, in the range 0..10, and "dateStyle" is the stylishness of your date's clothes. The result getting the table is encoded as an int value with 0=no, 1=maybe, 2=yes. If either of you is very stylish, 8 or more, then the result is 2 (yes). With the exception that if either of you has style of 2 or less, then the result is 0 (no). Otherwise the result is 1 (maybe). 
//Write a function that accepts yourStyle and dateStyle and prints the result
//dateFashion(5, 10) → 2
//dateFashion(5, 2) → 0
//dateFashion(5, 5) → 1
function dateFashion(yourStile,dateStyle){
    if((yourStile>=8 || dateStyle>=8)&&(yourStile>2 && dateStyle>2)){
        console.log("2");
    }else if(yourStile<=2 || dateStyle<=2){
        console.log("0");
    }else{
        console.log("1");
    }
}
dateFashion(5, 10) //→ 2
dateFashion(5, 2) //→ 0
dateFashion(5, 5) //→ 1

//Question-5
//Write a function that accepts an array and prints the number of 9 s in the array
//arrayCount9([1, 2, 9]) → 1
//arrayCount9([1, 9, 9]) → 2
//arrayCount9([1, 9, 9, 3, 9]) → 3

function count_9s(array){
    if(Array.isArray(array)){
        var numberOf9s=0;
        for(var i=0;i<array.length;i++){
            if(array[i]==9){
                numberOf9s++;
            }
        }
    }else{
        console.log("Your input is not an Array!")
    }console.log(numberOf9s);
}
count_9s([1,2,9]);          //1
count_9s([1, 9, 9]);        //2
count_9s([1, 9, 9, 3, 9]);  //3

//Question-6
//When chipmonks get together for a party, they like to have cigars. A chipmonk party is successfull when the number of cigars is between 40 and 60. Unless it is the weekend, in which case there is no upper bound on the number of cigars. Write a function that accepts number of cigars and a boolean for weekend, and prints true if the party with the given values is successful, or false otherwise.
//cigarParty(30, false) → false
//cigarParty(50, false) → true
//cigarParty(70, true) → true

function cigarParty(cigars,weekend){
    if(weekend==true && cigars>=40 ){
        console.log("true");
    }else if (weekend==false && cigars>=40 && cigars<=60){
        console.log("true");
    }else{
        console.log("false");
    }
}
cigarParty(30, false) //false
cigarParty(50, false) //true
cigarParty(70, true) //true

//Question-7
//Write a function that accepts an array and prints true if the first instance of "x" in the array is immediately followed by another "x". if array doesnt have "x", print "not found"
//doubleX(["a","x","x","b","b"]) → true
//doubleX(["a","x","a","x","a","x"]) → false
//doubleX(["x","x","x","x","x"]) → true
//doubleX(["a","a"]); -> not found

function howManyX(xArray){
    if(Array.isArray(xArray)){
        var x_s=0;
        for(var i=0;i<xArray.length;i++){
            if(xArray[i]=="x"){
                x_s++;
            }
        }
    if(x_s==2 || x_s==xArray.length){
        console.log("True");
    }else if(x_s==0){
        console.log("Not found");
    }else{
        console.log("False");
    }    
    }else{
        console.log("Your input is not an Array!")
    }
}
howManyX(["a","x","x","b","b"])     // true
howManyX(["a","x","a","x","a","x"]) // false
howManyX(["x","x","x","x","x"])     // true
howManyX(["a","a"]);                // not found

//Question-8
//The deers in VA spend most of the day playing. In particular, they play if the temperature is between 60 and 90. Unless it is summer, then the upper limit is 100 instead of 90.
//Write a function that accempts temperature and a boolean isSummer, prints true if the deers play and false otherwise.
//squirrelPlay(70, false) → true
//squirrelPlay(95, false) → false
//squirrelPlay(95, true) → true

function vaWeather(temp,season){
    if(season==true && temp>=60 && temp<=100){
        console.log("true");
    }else if (season==false && temp>=60 && temp<=90){
        console.log("true");
    }else{
        console.log("false");
    }
}
vaWeather(70,false);  //true
vaWeather(95,false);  //false
vaWeather(95,true);   //true

//Question-9
//You are driving a little too fast, and a police officer stops you. Write a function to compute the result: 0=no ticket, 1=small ticket, 2=big ticket. If speed is 60 or less, the result is 0. If speed is between 61 and 80 inclusive, the result is 1. If speed is 81 or more, the result is 2. Unless it is your birthday -- on that day, your speed can be 5 higher in all cases.
//caughtSpeeding(60, false) → 0
//caughtSpeeding(65, false) → 1
//caughtSpeeding(65, true) → 0

function caughtSpeeding(speed,birthday){
    if(birthday==true){
        if(speed<=65){
            console.log(0);
        }else if(speed<=85){
            console.log(1);
        }else{
            console.log(2);
        }
    }else if(birthday==false){
        if(speed<=60){
            console.log(0);
        }else if(speed<=80){
            console.log(1);
        }else{
            console.log(2);
        }
    }
}
caughtSpeeding(60, false)  // 0
caughtSpeeding(65, false)  // 1
caughtSpeeding(65, true)   // 0

//Question-10
//Given a day of the week encoded as 0=Sun, 1=Mon, 2=Tue, ...6=Sat, and a boolean indicating if we are on vacation, write a funtion that accepts the indexOfDay and isVacation and prints a string of the form "7:00" indicating when the alarm clock should ring. Weekdays, the alarm should be "7:00" and on the weekend it should be "10:00". Unless we are on vacation -- then on weekdays it should be "10:00" and weekends it should be "off".
//alarmClock(1, false); ->"7:00"
//alarmClock(5, false); ->"7:00"
//alarmClock(0, false); ->"10:00"
//alarmClock(2,true); ->"10:00"
//alarmClock(7,true); ->off

function alarmClock(day,vacation){
    if(vacation==true){
        if(day>=1&&day<=5){
            console.log("10:00");
        }else if(day==0||day==6){
            console.log("off");
        }
    }else{
        if(day>=1&&day<=5){
            console.log("7:00");
        }else if(day==0||day==6){
            console.log("10:00");
        }
    } 
}
alarmClock(1, false); //"7:00"
alarmClock(5, false); //"7:00"
alarmClock(0, false); //"10:00"
alarmClock(2,true);   //"10:00"
alarmClock(6,true);   //off

function alarmClock(indexOfDay,isVacation){
    if(isVacation==false){
        if(indexOfDay>=1 && indexOfDay<=5){
            console.log("7:00");
        }else if(indexOfDay==0 || indexOfDay==6){
            console.log("10:00");
        }
    }else{
        if(indexOfDay>=1 && indexOfDay<=5){
            console.log("10:00");
        }else if(indexOfDay==0 || indexOfDay==6){
            console.log("off");
        }
    }
         
}

alarmClock(1, false); 
alarmClock(5, false); 
alarmClock(0, false); 
alarmClock(2,true); 
alarmClock(6,true); 



//https://analytics.gatech.edu/













