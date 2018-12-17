//let n = [5, [2, 4, [6, [1, [], 8, [9, [19], 23], 50]], 100], 25];
// let arr=[];
//function flattering(n){
//   for(let i=0;i<n.length;i++){
//        if(typeof(n)==typeof(n[i])){
//            flattering(n[i]);
//        }else{
//            arr.push(n[i]);
//        }
//    }
//    return arr;
//}
//function flatten(n) {
//    for (let value of n) {
//        if (Array.isArray(value)){
//            flatten(value)
//        } else{
//            arr.push(value)
//        }
//    }
//    return arr
//}
//let arr=[]
//let iterable = [5, [2, 4, [6, [1, [], 8, [9, [19], 23], 50]], 100], 25]
//console.log(flatten(iterable))
//
//console.log(flattering(n));
//
//function fibonacci(n){
//    if(n>0 && n<3){
//        return 1;
//    }else{
//        return (fibonacci(n-1)+fibonacci(n-2));
//    } 
//}
//console.log(fibonacci(6));


//let scores=[10,5,20, 20, 4, 5, 2, 25, 1];
//function breakingRecords(scores) {
//let sCount=0,lCount=0,smallest=scores[0],largest=scores[0];
//    for(let i=1;i<scores.length;i++){
//        if(scores[i]>largest){
//            lCount++;
//            largest=scores[i];
//        }else if(scores[i]<smallest){
//            sCount++;
//            smallest=scores[i];
//        }
//    }
//return lCount,sCount;
//}
//
//console.log(breakingRecords(scores));
//
//let scores=[10,5,20, 20, 4, 5, 2, 25, 1];
//function breakingRecords(scores) {
//let sCount=0,lCount=0,smallest=scores[0],largest=scores[0];
//    for(let i=0;i<scores.length;i++){
//        if(scores[i]>largest){
//            lCount++;
//            largest=scores[i];
//        }else if(scores[i]<smallest){
//            sCount++;
//            smallest=scores[i];
//        }
//    }
//return [lCount,sCount];
//}

//console.log(breakingRecords(scores));

let s=[1, 2, 1, 3, 2];
function birthday(s, d, m) {
    let sum=0,count=0;
    for(let i=0;i<s.length;i++){
        sum=0;
        for(j=i;j<m+i;j++){
            sum+=s[j];
        }
        if(sum==d){
//        console.log(sum);    
        count++;
        }
    }
    return count;
}
console.log(birthday(s, 3, 2));
