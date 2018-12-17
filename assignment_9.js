//Question-1
//
//Write a JS program to print the following pattern
//
//1
//1 2
//1 2 3
//1 2 3 4
//1 2 3 4 5
//1 2 3 4 5 6
//1 2 3 4 5 6 7
//1 2 3 4 5 6
//1 2 3 4 5
//1 2 3 4
//1 2 3
//1 2
//1

//Solution-1
var string,x=0;
for (var r=1;r<=13;r++){
    string="";
    if(r<=7){
        for (var i=1;i<=r;i++){
            string+=(i+" ");
        }
    }else{
        x+=2;
        for(var i=1;i<=r-x;i++){
            string+=(i+" ");
        }
    }console.log(string);
}

//Solution-2


var string;
for (var i=1;i<=7;i++){
    string="";
    for(var j=1;j<=i;j++){
        string=string+j+" ";
    }console.log(string);
}for (var i=6;i>=1;i--){
    string="";
    for(var j=1;j<=i;j++){
        string=string+j+" ";
    }console.log(string);
}


//Question-2
//
//Write a JS program to print the following pattern
//
//1 2 3 4 5 6 7
//1 2 3 4 5 6
//1 2 3 4 5
//1 2 3 4
//1 2 3
//1 2
//1
//1 2
//1 2 3
//1 2 3 4
//1 2 3 4 5
//1 2 3 4 5 6
//1 2 3 4 5 6 7

var string;
for (var i=7;i>=1;i--){
    string="";
    for(var j=1;j<=i;j++){
        string=string+j+" ";
    }console.log(string);
}for (var i=2;i<=7;i++){
    string="";
    for(var j=1;j<=i;j++){
        string=string+j+" ";
    }console.log(string);
}


//Question-3
//
//Write a JS program to print the following pattern
//
//1 2 3 4 5 6 7
// 2 3 4 5 6 7
//  3 4 5 6 7
//   4 5 6 7
//    5 6 7
//     6 7
//      7
//     6 7
//    5 6 7
//   4 5 6 7
//  3 4 5 6 7
// 2 3 4 5 6 7
//1 2 3 4 5 6 7

var rows="";
var spaces="";
for(var i = 1; i<=7; i++){
        rows="";
     for(k=1; k<i; k++){
         rows+=" ";
     }for(j=i; j<=7; j++){
      rows+= j +" " ;
     }
  console.log(rows)
}for(var i = 6; i>=1; i--){
        rows="";
     for(k=1; k<i; k++){
         rows+=" ";
     }for(j=i; j<=7; j++){
      rows+= j +" " ;
     }
  console.log(rows)
}

var rows="";
for(var i = 1; i<=7; i++){
        rows="";
     for(k=1; k<i; k++){
         rows+=" ";
     }for(j=i; j<=7; j++){
      rows+= j +" " ;
     }
  console.log(rows)
}for(var i = 6; i>=1; i--){
        rows="";
     for(k=1; k<i; k++){
         rows+=" ";
     }for(j=i; j<=7; j++){
      rows+= j +" " ;
     }
  console.log(rows)
}





//Question-4
//Write a JS program to print the following pattern
//
//1
//10
//101
//1010
//10101
//101010
//1010101

var line;
for (var i=1;i<=7;i++){ 
    line="";
    for(var j=1;j<=i;j++){
        if(j%2==0){
        line+=0;    
        }else{
        line+=1;    
        }
        
    }console.log(line);
}

//Question-5
//Write a JS program to print the following pattern
//
//1111111
//1111122
//1111333
//1114444
//1155555
//1666666
//7777777

var line;

for (var i=1;i<=7;i++){
    line="";
    for (var x=7;x>i;x--){
        line+=1;
    }for (var y=1;y<=i;y++){
        line+=i;
    }console.log(line);
}

//Question-6
//Write a JS program to print the following pattern
//
//1
//2 6
//3 7 10
//4 8 11 13
//5 9 12 14 15

//Solution-1

var line;
for (var i=1;i<=5;i++){
    line="";
    switch(i){
        case 1:
        line+=i;
        break;
        case 2:
        line=i+" "+(i+4);
        break;    
        case 3:
        line=i+" "+(i+4)+" "+(i+7);
        break;
        case 4:
        line=i+" "+(i+4)+" "+(i+7)+" "+(i+9);
        break;
        case 5:
        line=i+" "+(i+4)+" "+(i+7)+" "+(i+9)+" "+(i+10);
        break;
 }console.log(line); 
}
//Solution 2
var line1="";
var line2="";
var line3="";
var line4="";
var line5="";
for (var i=1;i<=15;i++){
    switch(i){
        case 1:
        line1+=i+" ";
        break;
        case 2: case 6:
        line2+=i+" ";
        break;    
        case 3: case 7: case 10:
        line3+=i+" ";
        break;
        case 4: case 8: case 11: case 13:
        line4+=i+" ";
        break;
        case 5: case 9: case 12: case 14: case 15:
        line5+=i+" ";
        break;
 } 
}
console.log(line1);
console.log(line2);
console.log(line3);
console.log(line4);
console.log(line5);


var j;
for(i=1; i<=5; i++){
    j=i;
    var a="";
    for(p=1; p<=i; p++){
        a = a + j + " ";
        j = j + 5-p;    
    }
    console.log(a);
}

var myArray=[10,3,4];
var bool=false;
function findElement(myArray,element){
    for (var i=0;i<myArray.length;i++){
        if(myArray[i]==element){
        bool=true;
    }
    }
            
            if (bool == true) {
      console.log("I found it");
            
        }else {
            myArray.push(element);
            console.log("I add "+ element);
            console.log(myArray);
    }  

}
findElement(myArray,6);
findElement(myArray,7);
findElement(myArray,10);

findElement(myArray,3);


























