//let arr=[1,2,9,2,3,77,5,3,7,5,9,7,1];
//
//function sol(a){
//    let unique=0;
//    for(let i=0;i<a.length;i++){
//    if(a.indexOf(a[i])==a.lastIndexOf(a[i])){
//            unique=a[i];
//            break;
//        }
//    }
//console.log(unique);
//}
//
//sol(arr);

//function flatten(n) {
//   for (let value of n) {
//       if (Array.isArray(value)){
//           flatten(value)
//       } else{
//           arr.push(value)
//       }
//   }
//   return arr
//}
//let arr=[]
//let iterable = [5, [2, 4, [6, [1, [], 8, [9, [19], 23], 50]], 100], 25]
//console.log(flatten(iterable));

//console.log(flattering(n));
let arr=[1, 5, 4, 3, 2, 6];
function isSorted(arr){
    if (arr.length == 0 || arr.length == 1){
        return true;   
    }
    for (var i = 0; i < arr.length; i++){
        if (arr[i-1] > arr[i]){
            return false; 
        }
    }
    return true; 
}
function almostSorted(arr) {
    array = [];
    if (arr.length <= 2){
        if (isSorted(arr)){
            console.log('yes');
        }
        else {
            console.log('yes');
            console.log('swap 1 2');
        }
    }
    else {
        var i = 0;
        while (i < arr.length){
            if (arr[i-1] > arr[i]){
                array.push(arr[i-1]);
                if (arr[i] < arr[i+1]){
                    array.push(arr[i]);
                }
            }
            i++;
        }
        console.log(array);
        if (array.length == 1){
            console.log('no');
        }
        else if (array.length == 2){
            // try swapping 
            var temp = arr.indexOf(array[1]);
            var temp2 = arr.indexOf(array[0]);
            arr[temp] = array[0];
            arr[temp2] = array[1];
            if (isSorted(arr)){
                console.log('yes');
                console.log('swap ' + temp+1 + ' ' + temp2+1);
            }
            else {
                console.log('no');
            }
        }
        else if (array.length > 2){
            // try reversing 
            array = array.reverse();
            if (isSorted(array)){
                console.log('yes');
                console.log('reverse ' + (arr.indexOf(array[array.length-1])+1) + ' ' + (arr.indexOf(array[0])+1));
            }
            else {
                console.log('no');
            }
        }
    }
}

almostSorted(arr);