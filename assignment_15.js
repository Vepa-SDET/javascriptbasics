//Question-1
//
//Write a function that accepts an array, and if there is a 2 in the array immediately followed by a 3, set the 3 element to 0. Print the changed Array
//Sample Output:
//fix23([1,2,3]); - > [1,2,0]
//fix23([2,0,5]); - > [2,0,5]
//fix23([1,2,1]); - > [1,2,1]
//fix23([11,2,13,3,2]); - >[11,2,13,3,2]
//=========================================================================
function fix23(array){
    for(var i=0;i<array.length;i++){
        if(array[i]==2 && array[i+1]==3){
            array[i+1]=0;
        }
    }console.log(array);
}
fix23([1,2,3]);       //[1,2,0]
fix23([2,0,5]);       // [2,0,5]
fix23([1,2,1]);       // [1,2,1]
fix23([11,2,13,3,2]); //[11,2,13,3,2]
//=========================================================================
//Question-2
//Write a function that accepts two arrays and prints how many of the arrays have 1 as their first Element
//Sample Output:
//start1([1,2,3],[1,3]); - >2
//start1([7,2,3],[1]); - >1
//start1([1,2],[]); - >1
//start1([3,2,4],[4,3,4]); - >0
//=========================================================================

var start1=function(array1,array2){
    if(array1.indexOf(1)==0 && array2.indexOf(1)==0){
        console.log(2);
    }else if(array1[0]==1 || array2[0]==1){
        console.log(1);
    }else{
        console.log(0);
    }
}
start1([1,2,3],[1,3]);   //2
start1([7,2,3],[1]);     //1
start1([1,2],[]);        //1
start1([3,2,4],[4,3,4]); //0

//=========================================================================
//Question-3
//Write a function that accepts 2 arrays and consider the sum of the values in each array. Print the array which has the largest sum. In event of a tie, print "equal"
//Sample Output:
//biggerTwo([1, 2], [3, 4]); - >[3,4]
//biggerTwo([5, 6], [3, 8]); - >equal
//biggerTwo([1, 1], [1, 0]); - >[1,1]
//=========================================================================

function biggerTwo(array1,array2){
var sum1=0,sum2=0;
    for(var i=0;i<array1.length;i++){
        sum1+=array1[i];}
    for(var i=0;i<array2.length;i++){
        sum2+=array2[i];}
    if(sum1>sum2){
        console.log(array1);
    }else if(sum1<sum2){
        console.log(array2);
    }else{
        console.log("Equal");
    }
}
biggerTwo([1, 2], [3, 4]);  //[3,4]
biggerTwo([5, 6], [3, 8]);  //equal
biggerTwo([1, 1], [1, 0]);  //[1,1]

//=========================================================================
//Question-4
//Write a function that accepts 2 arrays and prints a new array containing all their elements
//Sample Output:
//plusTwo([1, 2], [3, 4]); - >[1,2,3,4]
//plusTwo([4, 4], [2, 2]); - >[4,4,2,2]
//plusTwo([9, 2], [3, 4]); - >[9,2,3,4]
//=========================================================================

var plusTwo=function(array1,array2){
    var output=array1.concat(array2);
   console.log(output);
}
plusTwo([1, 2], [3, 4]); //[1,2,3,4]
plusTwo([4, 4], [2, 2]); //[4,4,2,2]
plusTwo([9, 2], [3, 4]); //[9,2,3,4]

//=========================================================================
//Question-5
//Write a function that accepts an array and swap the first and last element in the array. Print the modified array
//Sample Output:
//swapEnds([1, 2, 3, 4]) -> [4,2,3,1];
//swapEnds([1, 2, 3]) -> [3,2,1]
//swapEnds([8, 6, 7, 9, 5]) -> [5,6,7,9,8]
//=========================================================================

function swapEnds(array){
    array.push(array[0]);
    array.splice(0,1,array[array.length-2]);
    array.splice(array.length-2,1);
    console.log(array);
}
swapEnds([1, 2, 3, 4]);      //[4,2,3,1];
swapEnds([1, 2, 3]);         //[3,2,1]
swapEnds([8, 6, 7, 9, 5]);   //[5,6,7,9,8]

//=========================================================================
//Question-6
//Write a function that accepts an array and prints the number of even numbers in the array.
// 
//Sample Output:
//Sample Output:
//countEvens([2, 1, 2, 3, 4]) ->3
//countEvens([2, 2, 0]) ->3
//countEvens([1, 3, 5]) ->0
//=========================================================================

var countEvens=function(array){
var counter=0;
    for(var i=0;i<array.length;i++){
        if(array[i]%2==0){
            counter++;
        }
    }console.log(counter);
}
countEvens([2, 1, 2, 3, 4]) //3
countEvens([2, 2, 0])       //3
countEvens([1, 3, 5])       //0

//=========================================================================
//Question-7
//Write a function that accepts an array and print the difference between the largest and smallest values in the array.
// 
//Sample Output:
//bigDiff([10, 3, 5, 6]); → 7
//bigDiff([7, 2, 10, 9]); → 8
//bigDiff([2, 10, 7, 2]); → 8
//=========================================================================

function bigDiff(array){
var smallest=array[0],biggest=array[0];
    for(var i=1;i<array.length;i++){
        if(array[i]>biggest){
            biggest=array[i];
        }else if(array[i]<smallest){
            smallest=array[i];
        }
    }console.log(biggest-smallest);
}
bigDiff([10, 3, 5, 6]); //7
bigDiff([7, 2, 10, 9]); //8
bigDiff([2, 10, 7, 2]); //8

//=========================================================================
//Question-8
//Write a function that accepts an array and prints the sum of the numbers in the array. Except the number 13 is very unlucky,so it does not count and numbers that come immediately after a 13 also do not count
// 
//Sample Output:
//sum13([1, 2, 2, 1]); ->6
//sum13([1, 1]); ->2
//sum13([1, 2, 2, 1, 13]); ->6
//sum13([1, 2, 2, 1, 13,3]); ->6
//=========================================================================

function sum13(array){
    var sum=0;
    for(i=0;i<array.length;i++){
        if(array[i]!=13){
            sum+=array[i];
        }else if(array[i+1]!=13){
            i++;
        }
    }console.log(sum);
}
sum13([1, 2, 2, 1]);        //6
sum13([1, 1,13,13,13,3]);   //2
sum13([1, 2, 2, 1, 13]);    //6
sum13([1, 2, 2, 1, 13,3]);  //6

//=========================================================================
//Question-9
//Write a function that accepts an array and prints the total of the numbers in the array, except ignore sections of numbers starting with a 6 and extending to the next 7 (every 6 will be followed by at least one 7).
// 
//Sample Output:
//sum67([1, 2, 2]); ->5
//sum67([1, 2, 2, 6, 99, 99, 7]); ->5
//sum67([1, 1, 6, 7, 2]); ->4
//sum67([1, 1, 6, 2]); ->2
//sum67([1, 2, 2, 6, 99, 99, 7,3,4]); ->12
//=========================================================================
function sum67(array){
    var sum=0;
    if(array.includes(6) && array.includes(7)){
        for(var i=0;i<array.indexOf(6);i++){
        sum+=array[i];
       }for(var i=(array.indexOf(7)+1);i<array.length;i++){
        sum+=array[i];
       }
   }else if(array.includes(6)){
        for(var i=0;i<array.indexOf(6);i++){
        sum+=array[i];
        }
    }else{
        for(var i=0;i<array.length;i++){
        sum+=array[i];
        }
    }console.log(sum);
}
function sum67(array){
    var total=0;
    var bolean=true;
    for(var i =0; i < array.length; i++) {
        if(array[i]==6){
            bolean =false;
            continue;
        }else if(array[i] ==7){
            bolean=true;
            continue;
        }
        else if(bolean == true){
            total += array[i];
        }
    }
    console.log(total);
}
sum67([1, 2, 2]);                   //5
sum67([1, 2, 2, 6, 99, 99, 7]);     //5
sum67([1, 1, 6, 7, 2]);             //4
sum67([1, 1, 6, 2]);                //2
sum67([1, 2, 2, 6, 99, 99, 7,3,4]); //12

//=========================================================================
//Question-10
//Write a function that accepts an array and prints true if the array contains a 2 next to a 2 somewhere.
// 
//Sample Output:
//has22([1, 2, 2]); ->true
//has22([1, 2, 1, 2]); ->false
//has22([2, 1, 2]); ->false
//has22([2,2, 1, 2]); ->true
//=========================================================================

function has22(array){
    var decision=false;
    for(var i=0;i<array.length;i++){
        if(array[i]==2 && array[i+1]==2){
            decision=true;
       }
    }console.log(decision);
}
has22([1, 2, 2]);       //true
has22([1, 2, 1, 2]);    //false
has22([2, 1, 2]);       //false
has22([2,2, 1, 2]);     //true

//=========================================================================
