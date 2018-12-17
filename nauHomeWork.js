/*
PP 3.2 Design and implement an application that reads a sentence from
the user and prints the sentence with the characters of each
word backwards. Use a stack to reverse the characters of each
word.
*/
let resultStr="";
let sentence=prompt("Enter a sentence to print each word backwards:");
let arr=sentence.split(" ");

for(let x in arr){
let s="";
    for(let i=arr[x].length-1;i>=0;i--){
        s+=arr[x][i];
    }
    arr[x]=s;
}
resultStr=arr.join(" ");
console.log(resultStr);