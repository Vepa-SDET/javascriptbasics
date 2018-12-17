////////How many biggest numbers?
//let ar=[1,4,3,4,4,];
//function birthdayCakeCandles(ar) {
//    let greatest=0,count=0;
//   greatest=Math.max(...ar);
//    for(let i=0;i<ar.length;i++){
//        if(ar[i]==greatest){
//            count++;
//        }
//            
//    }
//    console.log(count);
//}
//
//birthdayCakeCandles(ar);
//////
///////*Given a time in -hour AM/PM format, convert it to military (24-hour) time.
//////
//////Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock. */
//////
//////let x="06:40:03AM";
//////let hour=x.slice(0,2);
//////if(x.slice(-2)=="PM"){
//////    hour=+hour+12;
//////}else if(x.slice(-2)=="AM" && hour==12 ){
//////    hour+="00";
//////}
//////x=x.replace(x.slice(0,2),hour).replace(x.slice(-2),"");
//////console.log(x);
//////
///////*Numeros the Artist had two lists that were permutations of one another. He was very proud. Unfortunately, while transporting them from one exhibition to another, some numbers were lost out of the first list. Can you find the missing numbers?
//////
//////As an example, the array with some numbers missing, . The original array of numbers . The numbers missing are .*/
//////let array_2=[203,204,205,206,207,208,203,204,205,206];
//////let array_1=[203,204,204,205,206,207,205,208,203,206,205,206,204];
//////let misArr=[];
//////for(let i=0;i<array_1.length;i++){
//////let count=0;    
//////    for(let j=0;j<array_1.length;j++){
//////        if(array_1[i]==array_1[j]){
//////            count++;
//////        }
//////    }for(let x=0;x<array_2.length;x++){
//////        if(array_1[i]==array_2[x]){
//////        count--;
//////        }   
//////    }
//////if(count>0 && misArr.indexOf(array_1[i])==-1){
//////    misArr.push(array_1[i]);
//////    }
//////}
//////
//////
//////
//////console.log(misArr);
//////
//////var arr=[1,5,3,4,2];
//////
//////  var i=0,j=1,count=0,k=2;
//////    
//////    while(j < arr.length) {
//////        var diff = arr[j] - arr[i];
//////        
//////        if (diff == k) {
//////            count++;
//////            j++;
//////        } else if (diff > k) {
//////            i++;
//////        } else if (diff < k) {
//////            j++;
//////        }
//////    }
//////console.log(count);
//////
////////Recursion
//////
//////arr = [1, 2, [3, [[5], 4]], [6], 7];
//////
////////[1, 2, 3, 5, 4, 6, 7]
//////
//////
//////function kangaroo(x1, v1, x2, v2) {
//////let diff=Math.abs(x1-x2);
//////do{
//////    x1=x1+v1;
//////    x2=x2+v2;
//////}while(diff>Math.abs(x1-x2) && x1!=x2);
//////    if(x1==x2){
//////        return "YES";
//////    }else{
//////        return "NO";
//////    }
//////    
//////}
//////
//////console.log(kangaroo(0,3, 4, 2));
////////console.log(Math.abs(3-6));
//////let scores=[3,4,21,36,10,28,35,5,24,42];
function breakingRecords(scores) {
let sCount=0,lCount=0,smallest=scores[0],largest=scores[0];
    for(let i=0;i<scores.length;i++){
        if(scores[i]>largest){
            lCount++;
            largest=scores[i];
        }else if(scores[i]<smallest){
            sCount++;
            smallest=scores[i];
        }
    }
console.log(lCount+" "+sCount);
}
//////
//////breakingRecords(scores);
//////
//////
//////var scores=[100,100, 90 ,90 ,80, 75 ,60];
//////var alice=[50,65,77 ,90, 102];
//////function climbingLeaderboard(scores, alice) {
//////for(var i=0;i<alice.length;i++){
//////var rank=[];
//////rank.push(alice[i]);
//////for(var j=0;j<scores.length;j++){
//////    if(alice[i]!=scores[j] && rank.indexOf(scores[j])==-1){
//////        rank.push(scores[j]);
//////    }
//////}
//////rank.sort(function (a, b) {  return b - a;  });    
//////console.log(rank.indexOf(alice[i])+1);
//////}
//////}
//////
//////climbingLeaderboard([100,100, 90 ,90 ,80, 75 ,60], [50,65,77 ,90, 102]);
//////
//////function cutTheSticks(arr) {
//////var sn=0,cut=[],newArr=[];
//////for(var j=0;j<=arr.length;j++){
//////arr.sort((function(a, b){return a-b}));
//////for(var i=0;i<arr.length;i++){
//////    sn=arr[0];
//////    if(arr[i]>sn){
//////    newArr.push(arr[i]-sn);
//////    }
//////}
//////cut.push(arr.length);
//////arr=[];
//////arr=newArr;
//////newArr=[];
//////j=0;
//////}
//////return cut;
//////}
//////
//////console.log(cutTheSticks([5,4,4,2,2,8]));
//////var a=[5,4,4,1,4,2,2,8];
////let a=[4, 6, 5, 3, 3, 1];
////let b=[1, 2, 2 ,3, 1, 2];
////function pickingNumbers(a) {
////a.sort((function(a, b){return a-b}));
////var longestArray =0,j=0;  
////var testArray=[a[0]];
////    for(var i=1; i<a.length; i++){
////        if(a[j]<=a[i] && a[j]+1>=a[i]){
////          testArray.push(a[i]);  
////        }else if(a[i]>a[j]+1){
////            j=testArray.length;
////            testArray=[a[j]];
////            if(j>longestArray){
////                longestArray=j;
////            }
////            
////        }
////    }
////return longestArray;
////}
////console.log(pickingNumbers(b));
////console.log(pickingNumbers(a));
////
////
////var i1=1,i2=2,i3=4,i2=i3%3;
////var i4=i1+(i2*i3)+i3;
////console.log(i4);
////
////var c=0;
////var flag=true;
////for(var i=0;i<8;i++){
////    while(flag){
////          c++;
////          if(i>c||c>3){
////        flag=false;
////    }
//// }
////}
////console.log(c);
////
////label1: for(var i=0;i<10;i++){
////    for(var j=0;j<10;j++){
////        if(i+j-1>10){
////            break label1;
////        }
////    }
////console.log("Hello");
////}
////
////var a=[1,2,3,4];
////var b=[2,[3,1,0],[[4,7,8,],[9,0,2,1]],"true","apple"];
////
////console.log(b[a.length-2][0][b.length-4]);
////
////var str="JavaScript"
////console.log(getMsg(str));
////
////function getMsg(x){
////    var msg ="Input value must be";
////    msg=msg.concat("smaller than X");
////    msg.replace('X',x);
////    var rest=" and larger than 0";
////    msg.concat(rest);
////    return msg;
////}
////
////var i=getLoad();
////var d=getLoad();
////console.log(i+d);
////
////function getLoad(){
////    return 3;
////}
////
////function getLoad(x1,x2){
////    return x1+x2;
////}
////
////function getLoad(){
////    return 4;
////}
////
////var k=2;
////do{
////    console.log(k);
////}while(k-->0);
////
////var count=4;
////outer:
////for(var i=0;i<4;i++){
////    middle:
////    for(var j=0;j<4;j++){
////        inner:
////        for(var k=0;k<4;k++){
////            if(k-j>0){
////                break middle;
////            }
////            count++;
////        }
////    }
////}
////console.log(count);
////
////var val=[10,30,50,100];
////for(var i=0;i<val.length;i++){
////    var x=0;
////    while(x<val.length){
////        console.log(x+" "+val[i]);
////        x++;
////    }
////}
////
////var b=false;
////var i=1;
////do{
////    i++;
////}while(b= !b);
////console.log(i);
////
////var str,x;
////str="After all this time?";
////strArry=str.split(" ");
////x=strArry[0].substring(0,1);
////x=x.concat(strArry[2].substr(2,1));
////x=x.concat("w");
////x=x.concat(str.charAt(7));
////x=x.concat("y").concat(str.substr(-8,1));
////console.log(x.concat("."));
////
////let c=[0, 0, 1, 0, 0, 1, 0,1,0];
////function jumpingOnClouds(c) {
////let jump=0;
////for(let i=0;i<c.length-1;i++){
////console.log(c[i+2]==0); 
////if(c[i+2]==0){
////     i++;
//// }
//////console.log(i);    
////jump++;
////}
////console.log(jump);
////}
////
////jumpingOnClouds(c);
////let arr=[3, 3, 2, 1, 3];
////function equalizeArray(arr) {
////arr.sort((function(a, b){return a-b}));
////let x=arr[0],count=0,returnCount=0;
////for(let i=0;i<arr.length;i++){
////if(x==arr[i]){
////    count++;
////    if(returnCount<count){
////    returnCount=count;
//// }
////}else if(x!=arr[i]){
////    x=arr[i];
////    count=1;
////}    
////}
////return returnCount;
////}
////
//////console.log(equalizeArray(arr));
////
////console.log(arr.splice(arr.indexOf(1),1));
////console.log(arr);
//
////let a=[7, 1, 3, 4, 1, 7];
//
////function minimumDistances(a) {
////let lengt=a.length+1;
////for(let i=0;i<a.length;i++){
////   if(a.lastIndexOf(a[i])-a.indexOf(a[i])<lengt && a.lastIndexOf(a[i])-a.indexOf(a[i])>0){
////       lengt=a.lastIndexOf(a[i])-a.indexOf(a[i]);
////       a.splice(a.lastIndexOf(a[i]),1);
////       }
////}if(lengt==a.length+1){
////  return -1;  
////}else{
////    return lengt;
////}
////
////}
////
////console.log(minimumDistances(a));
//
//
////function beautifulTriplets(d, arr) {
////let count=0;
////for(let i=0;i<arr.length;i++){
////   if(arr.indexOf(arr[i]+d)>arr.indexOf(arr[i]) && arr.indexOf(arr[i]+d+d)>arr.indexOf(arr[i]+d)){
////        count++;
////    }
////}    
////return count;
////}
////let s="aba"; 
////let n=10;
////
////function repeatedString(s, n) {
////let a=0,c=0,str="";
////for(let i=0;i<s.length;i++){
////    if(s[i]=="a"){
////        a++;
////    }
////}
////a=a*(n-n%s.length)/s.length;
////for(let j=0;j<n%s.length;j++){
////    if(s[j]=="a"){
////        a++;
////    }
////}    
////return a;
////}
////
////console.log(repeatedString(s, n));
//
////function repeatedString(s, n) {
////let a_s=0,c=0,str="";
////for(let i=0;i<n;i++){
////    str=str.concat(s[c]);
////    if(s[c]=="a"){
////        a_s++;
////    }
////    c++;
////    if(c==s.length){
////        c=0;
////    }
////}
////return a_s;
////}
////let n=10,c=2,m=5;
////let n=12,c=4,m=4;
////let n=6,c=2,m=2;
////function chocolateFeast(n, c, m) {
////let ch=Math.floor(n/c),w=ch,x=0;
////while(w>=m){
////    x=(w-w%m)/m;
////    ch+=x;
////    w=w%m+x;
////}
////return ch;
////}
////
////console.log(chocolateFeast(12,4, 4));
////console.log(chocolateFeast(10,2, 5));
////console.log(chocolateFeast(7,3,2));
//
////let arr=[1,2,3];
////arr.unshift(arr[arr.length-1]);
////arr.pop(arr[arr.length-1]);
////console.log(arr);
////
////for(let j of arr){
////    console.log(j);
////}
//
////var number=6;
////for(var i=1;i<=number;i++){
////   var a = "";
////   for(var j=number; j>i;j--){
////       a=a+" ";
////
////   }for(var k=0;k<i;k++){
////       a=a+"*";
////
////   } console.log(a);
////
////}
//
////function miniMaxSum(arr) {
////var s=arr[0];
////var b=arr[0];
////var sum=0;
////for(var i=0;i<arr.length;i++){
////   sum=sum+arr[i];
////   if(arr[i]>b){
////       b=arr[i];
////   }else if (arr[i]<s){
////       s=arr[i];
////   }
////} 
////console.log(sum-s,sum-b);
////}
////miniMaxSum(arr);
//
////let arr=[11,4,11,7, 13, 4, 12, 11, 10, 14];
////let brr=[11, 4, 11, 7, 3, 7, 10, 13, 4, 8, 12, 11, 10, 14, 12];
////function missingNumbers(arr, brr) {
////arr.sort((function(a, b){return a-b}));
////brr.sort((function(a, b){return a-b}));
////let array=[];
////for(let i=0;i<brr.length;i++){
////    if(arr.lastIndexOf(brr[i])-arr.indexOf(brr[i])!=brr.lastIndexOf(brr[i])-brr.indexOf(brr[i]) && array.indexOf(brr[i])==-1){
////        array.push(brr[i]);
////    }else if(arr.indexOf(brr[i])==-1&&array.indexOf(brr[i])==-1){
////        array.push(brr[i]);
////    }
////}
////return array;
////}
////
////console.log(missingNumbers(arr,brr));
//
////let a=[4, 6, 5, 3, 3, 1]; 
////let b=[1, 2, 2 ,3, 1, 2];
////let y=[66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66];
////function pickingNumbers(a) {
////a.sort((function(a, b){return a-b}));
////let longestArray =0,j=0;  
////let testArray=[a[0]];
////    for(let i=1; i<a.length; i++){
////        if(a[j]<=a[i] && a[j]+1>=a[i]){
////          testArray.push(a[i]);
////        }else if(a[i]>a[j]+1&&testArray.length>longestArray){
////            j=i;
////            longestArray=testArray.length;
////            testArray=[a[j]];
////        }else if(a[i]>a[j]+1){
////            j=i;
////            testArray=[a[j]];
////        }
////        if(testArray.length==a.length){
////            longestArray=testArray.length;
////        }
////    }
////return longestArray;
////}
////console.log(pickingNumbers(y));
////console.log(pickingNumbers(a));
//
////let a = m =>m*2; 
////let z=0;
////
////console.log(z,a());
////
////function mileConverter(){
////var useriInput=parseInt(prompt("Enter your car mileage and program will convert it to kilometer:"));
////var kiloMeter=useriInput*1.6;
////console.log("You have done "+kiloMeter+" kilometers!");
////}
//
//
//
////let mileConverter= () =>
////{let userInput=parseInt(prompt("Enter your car mileage and program will convert it to kilometer:"));
////let kiloMeter=userInput*1.6;
////return `You have done ${kiloMeter} kilometers!`;
////};
////
////console.log(mileConverter());
////
////
////let a = (b) => 
////{
////let c = 2;
////return b * c;
////}
////
////
////console.log(a(4));
//
////const obj={
////    firstName:"Mike",
////    lastName: "Smith"
////}
////const {firstName,lastName,age}=obj;
////console.log(obj.firstName);
////console.log(firstName);
//
//let ages=[2,6,12,20,17,8,21,14,11,25];
//
////let index=ages.findIndex(a=>a>=18);
////let index=ages.find(a=>a>=18);
////let index=ages.indexOf(12);
////console.log(index);
////
////console.log(...ages);
////
////console.log(...(1,2,3,4,5));
//
//
//
////let obj={
////    keystring:"value with a string",
////    key2:6
////}
//
//let myMap=new Map(); 
//myMap.set("2","x");
//myMap.set(1,"y");
//myMap.set("a","v");
//
//console.log(myMap.size);
//console.log(myMap.get("1"));
//
//for(let [x,y] of myMap.entries()){
//    console.log(`${x} ${y}`);
//}
//
//console.log(myMap.entries());
//
//var i=0,j=10;
//var count=0;
//while(i<j){
//    i++;
//    j--;
//    count++;
//}
//console.log(i+" "+j+" "+count);
//
//var args=[];
//function m1(i){
//    return ++i;
//}
//var k =m1(args.length);
//k+=3+ ++k;
//console.log(k);
//
//var k =9, s=5;
//switch(k){
//    default:
//        if(k==10){
//           s=s*2;
//       }else{
//           s=s+4;
//           break;
//       }
//    case 7: s=s+3;
//}
//console.log(s);
//
//var count=0, sum=0;
//do{
//    if(count%3==0){
//        continue;
//    }
//    sum+=count;
//}while(count++ <5);
//
//console.log(sum);
//
//var a=false,b=false,c=false;
//
//var bool=(a=true)||(b=true)&&(c=true);
//
//console.log(a+","+b+","+c);
//
//
//var ab=[[1,2,3],[4,5]];
//for(var i=0; i<ab.length;i++){
//    for(var j=0;j<ab[i].length;j++){ console.log(ab[i][j]+" ");  
//    if(ab[i][j]==2){
//        break;
//    }                                
//    }
//   continue;
//}
//
//
//var bool1=true,bool2=false,bool=false;
//
//bool=(bool2 && method1(i++));
//bool=(bool1||method1(i++));
//console.log(i);
//
//function method1(i){
//    if(i>0){
//       return true;
//    }else{
//       return false;
//       }
//}
//
//var s="MINIMUM";
//
//console.log(s.substring(4,7));
//
//var k=0;
//while(k<=5){
//    for(var j=1; j<=5;j++){
//        console.log(j+" ");
//        j++;
//    }
//    k++;
//}
//
//var i=0;
//var iA=[10,20];
//iA[i]=i=30;
//console.log(""+iA[0]+" "+iA[1]+" "+i);
//
//
//var args=["Test","closed"];
//if(args[0].includes("open")){
//    if(args[1].includes("someone")){
//        console.log("Hello!");
//    }
//}else{
//    console.log("Go away "+args[1]);
//}
////
////
////var k=0,m=0;
////
////for(var i=0;i<=3;i++){
////    k++;
////    if(i==2){
////        continue;
////    }
////    m++;
////}
////
////console.log(k+","+m);
////
////function mx(s){
////    for(var i=0; i<2;i++){
////        s=s+i;
////    }
////    return s;
////}
////
////
////var s=5;
////s+=s+mx(s)+ ++s;
////console.log(s);
////
////var str="01234567";
////console.log(str.substring(4,7));
////
////
////var i=0,j=1;
////if(i++==0&&j++==2){
////    i=12;
////}
////console.log(i+" "+j);
//

//let b=736418699,w=754161925,bc=912285746,wc=841360803,z=736841333;
//function taumBday(b, w, bc, wc, z) {
//let sum=0;
//if(Math.abs(bc-wc)>z){
//    if(bc-wc>0){
//    sum=(b+w)*wc+b*z;    
//    }else{
//    sum=(b+w)*bc+w*z;  
//    }
//}else{
//    sum=b*bc+w*wc;
//}
//sum=sum.toPrecision();
//return sum;
//
//}
//
//console.log(taumBday(b, w, bc, wc, z));
//let p=1,q=100;  //1 9 45 55 99
//function kaprekarNumbers(p, q) {
//let x=0,y=0,z=0,r=[];
//for(let i=p;i<=q;i++){
//    x=i*i;
//    z=x.toString();
//    y=z.substr(0,Math.ceil(z.length/2));
//    z=z.substr(Math.ceil(z.length/2),z.length);
////    console.log(+y, +z);
//    if(x==i){
//        r.push(i);
//    }else if(i==(+y + +z)){
////        console.log(i);
//        r.push(i);
//    }
//    console.log(r);
//}
//}
// 
//kaprekarNumbers(p, q);  

//let b="GNC_OGTQCW_R__QLKQ_NG_GOWCNWKWCNGR____OQ__OW_TOGC_";
//function happyLadybugs(b) {
//let result="YES";
//b=b.split("").sort();
//b=b.join("");
//console.log(b);
//if(b.includes("_") && b.indexOf("_")!=0){
//b=b.substring(0,b.indexOf("_"));
//}
//if(b[0]!=b[b.length-1]){
//    for(let i=0;i<b.length;i++){
//        if(b[i]==b[i+1] && b[i]!=b[i+2]){
//            result="YES";
//            i++;
//        }else if(b[i]==b[i+1]){
//            result="YES";
//        }else{
//            result="NO";
//            break;
//        }
//    }
//    return result;
//}else{
//    return result;
//}
//}
//            
//console.log(happyLadybugs(b));



//function strangeCounter(t) {
//let v=3,n=0,r=0;
//while(true){
//    n=+v;
//    if(n>t){
//        n=v/2-2;
//        v=v/2;
//        break;
//    }
//    v=2*v;
//}
//for(let i=v;i>1;i--){
//    n++;
//    if(n==t){
//    r=v-1;
//    break;
//    }
//}
//console.log(r);
//}
//
//strangeCounter(4);
/*
 */
//let bill=parseInt(a.split(" "));
//let k=2814,b=249990732;
//
//function bonAppetit(bill, k, b) {
//let sum=0;
//    for(let i of bill){
//        if(i!=bill[k]){
//            sum+=i;
//        }
//    }
//    if(b==sum/2){
//        return "Bon Appetit"
//    }else{
//        return b-sum/2; 
//    }
//
//}
//
//
let ab=[1,23,5];
////console.log(bonAppetit(bill, k, b));
//const reducer = (accumulator, currentValue) => accumulator + currentValue;
//console.log(bill);
//console.log(ab.reduce(reducer));

function matchingStrings(strings, queries) {
strings=strings.sort();
let x=0,n=0;
let arr=[];
for(let i of queries){
if(strings.includes(i)){
    arr.push(1+strings.lastIndexOf(i)-strings.indexOf(i));
}else{
    arr.push(0);
}

}
    return arr;
}

strings=["aba","baba","aba","xzxb"];
queries=["aba","xzxb","ab"];

matchingStrings(strings, queries);

let arr=ab.sort((function(a, b){return a-b}));

console.log(arr);








