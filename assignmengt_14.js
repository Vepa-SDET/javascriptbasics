////Question-1
////Write a function that accepts an array and return true if 6 appears as either the first or last element in the array. The array will be length 1 or more.
////Sample Output:
////firstLast6([1, 2, 6]) → true
////firstLast6([6, 1, 2, 3]) → true
////firstLast6([13, 6, 1, 2, 3]) → false
////==================================================================

function sixFinder(array){
    if(array[0]==6 || array[array.length-1]==6){
        console.log(true);
    }else{
        console.log(false);
    }
}
sixFinder([1, 2, 6])         // true
sixFinder([6, 1, 2, 3])     // true
sixFinder([13, 6, 1, 2, 3]) // false
////==================================================================
////Question-2
////Write a function that accepts an array and check the length of the array first. If the length is more than one, check if the first element and last element are equal. if it is print true, if not print false. If the length is not more than 1, print not valid an array
////Sample Output:
////sameFirstLast([1, 2, 3]) → false
////sameFirstLast([1, 2, 3, 1]) → true
////sameFirstLast([1, 2, 1]) → true
////sameFirstLast([1]); → not a valid array
////==================================================================
function sameFirstLast(array){
    if(array.length>1){
        if(array[0]==array[array.length-1]){
            console.log(true);
        }else{
            console.log(false);
        }
    }else{
        console.log("not a valid array");
    }
}
sameFirstLast([1, 2, 3])        // false
sameFirstLast([1, 2, 3, 1])     // true
sameFirstLast([1, 2, 1])        // true
sameFirstLast([1]);             // not a valid array
//
////==================================================================
////Question-3
////Write a function that accepts 2 arrays and checks the lengths of the arrays first. If lengths are more than 1, it prints true if the arrays have the same first element or they have the same last element. If the length of the array is not more than 1, it prints the "array1 is not a valid array " or "array2 is not a valis array"
////Sample Output:
////commonEnd([1, 2, 3], [7, 3]); - >true
////commonEnd([1, 2, 3], [7, 3, 2]); - >false
////commonEnd([1, 2, 3], [1, 3]); - >true
////commonEnd([1], [7, 3]); - >array1 is not a valid array
////commonEnd([1, 2, 3], [1]); - >array2 is not a valid array
////==================================================================
var commonEnd=function(array1,array2){
    if(array1.length>1 && array2.length>1){
        if(array1[0]==array2[0]||array1[array1.length-1]==array2[array2.length-1]){
            console.log(true);
        }else{
            console.log(false);
        }
    }else if(array1.length>1){
        console.log("array2 is not a valid array");
    }else if(array2.length>1){
        console.log("array1 is not a valid array");
    }else{
        console.log("Both arrays are not valid arrays");
    }
}

commonEnd([1, 2, 3], [7, 3]);       //true
commonEnd([1, 2, 3], [7, 3, 2]);    //false
commonEnd([1, 2, 3], [1, 3]);       //true
commonEnd([1], [7, 3]);             //array1 is not a valid array
commonEnd([1, 2, 3], [1]);          //array2 is not a valid array
////==================================================================
////Question-4
////Write a function that accepts an array and prints the sum of all elements in the array
////Sample Output:
////sum([1, 2, 3]); - >6
////sum([5, 11, 2]); - > 18
////sum([7, 0, 0]); - >7
////sum([3, -2, 10,4]); - >15
////==================================================================
var sum=function(array){
    var total=0;
    for(var i=0;i<array.length;i++){
        total+=array[i];
    }
    console.log(total);
}
sum([1, 2, 3]);     //6
sum([5, 11, 2]);    //18
sum([7, 0, 0]);     //7
sum([3, -2, 10,4]); //15
////==================================================================
////Question-5
////Write a function that accepts an array and prints an array with the elements "rotated left"
////so [1,2,3] yields [2,3,1]
////Sample Output:
////rotateLeft([1, 2, 3]);  - >[2,3,1]
////rotateLeft([5, 11, 9]); - >[11,9,5]
////rotateLeft([7, 0, 0]); - >[0,0,7]
////rotateLeft([17, 12, 10, 8]); - >[12,10,8,17]
////==================================================================
var rotateLeft=function(array){
    var x=array[0];
    array.splice(0,1);
    array.push(x)
    console.log(array);
}

//function rotateLeft(array){
//    var shifted;
//        shifted=array.shift();
//        array[array.length-1+1]=shifted;
//        console.log(array);
//}

rotateLeft([1,2,3,4,5]);
rotateLeft([1, 2, 3]);       //[2,3,1]
rotateLeft([5, 11, 9]);      //[11,9,5]
rotateLeft([7, 0, 0]);       //[0,0,7]
rotateLeft([17, 12, 10, 8]); //[12,10,8,17]
////==================================================================
////Question-6
////Write a function that accepts an array and figure out which is greatest element in the array, and set all the other elements to be that value. Print the changed array.
////Sample Output:
////maxEnd([1,2,3]); - > [3,3,3]
////maxEnd([11,5,9]); - > [11,11,11]
////maxEnd([2,11,17]); - > [17,17,17]
////==================================================================
function maxEnd(array){
    var greatest=array[0];
    for(var i=1;i<array.length;i++){
        if(array[i]>greatest){
            greatest=array[i];
        }
    }
//    for(var i=0;i<array.length;i++){
//        array[i]=greatest;
//    }
    console.log(array.fill(greatest));
}
maxEnd([1,2,3]);   //[3,3,3]
maxEnd([11,5,9]);  //[11,11,11]
maxEnd([2,11,17]); //[17,17,17]

////==================================================================
////Question-7
////Write a function that accepts 2 arrays and prints the second array containing the first and last elements from the first array.
////Sample Output:
////makeEnds([1,2,3],[]);  - >[1,3]
////makeEnds([1,2,3,4],[]); - >[1,4]
////makeEnds([7,4,6,2],[]); - >[7,2]
////==================================================================
//function makeEnds(array1,array2){
//    array2=[(array1[0]),(array1[array1.length-1])];
//    console.log(array2);
//}
//makeEnds([1,2,3],[]);  //[1,3]
//makeEnds([1,2,3,4],[]); //[1,4]
//makeEnds([7,4,6,2],[]); //[7,2]
//
////==================================================================
////Question-8
////Write a function that accepts an array and prints true if it contains a 2 or a 3
////Sample Output:
////has23([2,5]); - >true
////has23([4,3]); - >true
////has23([4,5]); - >false
////==================================================================
//var has23=function(array){
//    if(array.includes(2)||array.includes(3)){
//        console.log(true);
//    }else{
//        console.log(false);
//    }
//}
//has23([2,5]); //true
//has23([4,3]); //true
//has23([4,5]); //false
//
////==================================================================
////Question-9
////Write a function that accepts an array and prints a new array with double the length where its last element is the same as the original array, and all the other elements are 0.
////Sample Output:
////makeLast([4, 5, 6]) → [0, 0, 0, 0, 0, 6]
////makeLast([1, 2]) → [0, 0, 0, 2]
////makeLast([3]) → [0, 3]
////==================================================================
//var makeLast=function(array){
//    var outputArray=Array(2*array.length);
//    for(var i=0;i<outputArray.length-1;i++){
//        outputArray[i]=0;
//    }outputArray[outputArray.length-1]=array[array.length-1];
//    console.log(outputArray);
//}
//makeLast([4, 5, 6]) // [0, 0, 0, 0, 0, 6]
//makeLast([1, 2])    // [0, 0, 0, 2]
//makeLast([3])       // [0, 3]
////==================================================================
////Question-10
////Write a function that accepts an array and prints true if the array contains 2 twice or 3 twice.
////Sample Output:
////double23([2,2]); - >true
////double23([3,3]); - >true
////double23([2,3]); - >false
////double23([12,20,42]); - >false
////double23([2,2,2]); - >false
////==================================================================
//var double23=function(array){
//    var x2=0,x3=0;
//    for(var i=0;i<array.length;i++){
//    if(array[i]==2){
//        x2++;
//    }else if(array[i]==3){
//        x3++;
//    }
//}if(x2==2||x3==2){
//    console.log(true);
//}else{
//    console.log(false);
//}
//}
//double23([2,2]);      //true
//double23([3,3]);      //true
//double23([2,3]);      //false
//double23([12,20,42]); //false
//double23([2,2,2]);    //false
////==================================================================
//
//
function howmanyHis(x,howmany){
    
    if(howmany<=0){
     console.log("Enter a Positve Number");
    }else {
      for(var i=howmany;i>0;i--){
      x=x+"Hi";
      }
        console.log(x)
        }
    }

howmanyHis("Hi",3);
howmanyHis("Hi",10);
howmanyHis("Hi",50);


function count_9s(array){
    
    if(Array.isArray(array)){
        var numberOf9s=0;
        for(var i=0;i<array.length;i++){
            if(array[i]==9){
                numberOf9s++;
            }
        }
    }else{
        console.log("Your input is not an Array!");
    }console.log(numberOf9s);
}
count_9s([1,2,9,9]);          //2
count_9s([1, 9, 9]);        //2


function passwordCreate(){
var string1=prompt("Enter first string");
var string2=prompt("Enter second string");
var a="";
for (var i=0;i<3;i++){
       a=a.concat(string1.charAt(i));
//     a+=string1.charAt(i);
             
   }
   
   return a.concat(string2.length);
   
}
var password=passwordCreate();

console.log(password);

var name="Farhan";
var surname="Khan";

function passwordCreate(string1,string2){
var b="";
for (var i=0;i<3;i++){
       b=b.concat(string1.charAt(i));
//     a+=string1.charAt(i);
             
   }
//   console.log(b.concat(string2.length));
   return b.concat(string2.length);
   
}

console.log(passwordCreate(name,surname));






//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
