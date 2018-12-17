//Question-1
//Print following output using nested for loops:
//      1
//     22
//    333
//   4444
//  55555
// 666666
//7777777
//var numBer="";
//for(var j=1; j<=7 ; j++ ){
//numBer="";
//    for (var b=7;b>j;b--){
//        numBer=numBer+" ";
//    }
//    for (var i=1; i<=j ; i++ ){
//        numBer=numBer+j
//   }console.log(numBer); 
//}





//var numBer="";
//for(var j=1; j<=7 ; j++ ){
//numBer="";
//    for(var i=1; i<=j ; i++ ){
//        numBer=numBer+j
//   }console.log(numBer); 
//}
//Question-2
//
//Print following output using nested for loops.
//
//4     3     2     1
//
//   3     2      1
//
//      2      1
//
//         1
//
//for (var a=4;a>0;a--){
//    var nums="";
//    if (a==3){
//        nums="  ";
//    }else if(a==2){
//        nums="    ";
//    }else if(a==1){
//        nums="      ";
//    }for(var i=a;i>0;i--){
//        nums=nums+i+"   ";
//    }console.log(nums);
//}

////Question-3
////Print following output using nested for loops.
////1    2    3    4    5    6    7    8    9    10    
////2    4    6    8    10    12    14    16    18    20    
////3    6    9    12    15    18    21    24    27    30    
////4    8    12    16    20    24    28    32    36    40    
////5    10    15    20    25    30    35    40    45    50    
////6    12    18    24    30    36    42    48    54    60    
////7    14    21    28    35    42    49    56    63    70    
////8    16    24    32    40    48    56    64    72    80    
////9    18    27    36    45    54    63    72    81    90    
////10    20    30    40    50    60    70    80    90    100    
////
////NOTE: 
////1. 1st row is table of 1, 2nd row is table of 2 and so on.
////2. You can use space between the digits on the same row.
////
//
var string="";
for (var i=1;i<=10;i++){
    string=""; 
    for(var t=1;t<11;t++){
    string=string+(t*i)+"  ";
}console.log(string);
}
////Question-4
////Print following chess board using nested for loops.
////W B W B W B W B 
////B W B W B W B W 
////W B W B W B W B 
////B W B W B W B W 
////W B W B W B W B 
////B W B W B W B W 
////W B W B W B W B 
////B W B W B W B W
////
////NOTE: 
////1. Total 8 rows and 8 columns.
////2. "W" and "B" are in alternate positions (row-wise or column-wise), you will not find consecutive W or B.
//
//var chessLine="";
//for (var i=1;i<=8;i++){
//    chessLine="";
//    if (i%2!=0){
//        for(var j=1;j<=8;j++){
//            if (j%2==0){
//        chessLine=chessLine+"B ";
//            }else{
//        chessLine=chessLine+"W ";
//            }
//        }
//    }else{
//        for(var j=1;j<=8;j++){
//            if (j%2==0){
//        chessLine=chessLine+"W ";
//            }else{
//        chessLine=chessLine+"B ";
//            }
//    }
//}
//    console.log(chessLine);
//}
//
//
//for (var i=1; i<=8; i++){
//    var output="";
//    
//    for(var j=1; j<=8; j++){
//        if(j%2==0&&i%2!=0){
//            output=output+ " " + "B";
//            
//        }else if(j%2==1&&i%2==0){
//            output=output+ " " + "B";
//                       
//        }else{
//            output=output+ " " + "W";
//        }
//        
//    } console.log(output);
//} 
//
//var start=1;
//var sum=0;
//do{
//    if(start%2==0){
//        start++;
//    }
//    sum+=start;
//}while(++start<=10);
//console.log(sum);
//var x=0;
//while(x++<10){}
//if(x>10){
//        console.log("Greater than"+","+x);
//}else{
//    console.log("Not greater than"+","+x);
//}

//var x=1,y=15;
//while(x<10){
//    y--;
//    x++;
//}
//console.log(x+","+y);

//var x=5;
//while(x<10){
//    console.log(x);
//    x++;
//}


//var i=3;
//while(i<6){
//    console.log(i);
//    i+=1;
//}

//
//
//var c=" ";
//for(i=1;i<=10;i++){
//c=c+" ";
//var star=""+c;
//    for(x=0;x<i;x++){
//        star=star+"*";
//    }console.log(star);
//}
//


//var statement1="";
//var satir="";
//var spaces="";
//    for(var i = 4; i>0; i--){ 
//    statement1 ="";
//    for(j=i; j>0; j--){           
//    statement1 += satir +j + "  ";
//    }
//        console.log(statement1)
//    satir +="  "   
//}


//HINDI Pyramid
//var statement1="";
//
//var spaces="";
//
//    for(var i = 4; i>0; i--){
//        spaces="";
//     for(k=1; k<=(4-i); k++){
//         spaces+=" ";
//     }
//  
//      statement1 =spaces;
//      
//    for(j=i; j>0; j--){
//      
//    
//    statement1 += j +" " ;
//    }
//  
//        console.log(statement1)
//      
//}


//var wb ;
//var bw ;
//    for(var i=0; i<4; i++)
//        { wb="WB";
//         bw="BW";
//            for(var j =0; j<2; j++){
//                wb+=wb;
//                bw+=bw;
//                
//            }
//            console.log(wb + "\n" + bw);
//        }






