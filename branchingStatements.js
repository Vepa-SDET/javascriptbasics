//var i=0;
//while(i<6){
//    if(i==3){
//        break;
//    }
//    i++;
//    console.log(i);
//}

//var i=0;
//while(i<6){
//    i++;
//    if(i==4){
//          console.log("you skipped 4")
//        continue;
//    }
//   
//    console.log(i);
//}

//for (var i=0;i<=10;i++){
//    if(i%2==0){
//        continue;
//    }
//    console.log(i+" ");
//}

//var sum=0;
//do{
//var inPut=+prompt("Put numbers to calculate the sum:");
//    if(inPut<0){
//        break;
//    }
//sum=sum+inPut;    
//}while(true);
//console.log(sum);

//var start=1;
//var sum=0;
//do{
//    if(start%2==0){
//    continue;    
//    }
//    sum+=start;
//    console.log(sum);
//}while(++start<=10);
//console.log(sum);

//var i=0;
//outer:
//do{
//    i=8;
//    inner:
//    while(true){
//        console.log(i--);
//        if(i==4){
//            break outer;
//        }
//    }
//}while(true);

//loop1:
//for(i=0;i<3;i++){
//    loop2:
//    for(j=0;j<3;j++){
//        if((i==1&&j==1)){
//            continue loop1;
//        }
//        console.log("i= "+i+" ,j="+j);
//    }
//}
var i;
outer:
do{
    i=8;
    inner:
    while(true){
        console.log(i--);
        if(i==4){
            break outer;
        } 
    }
} while(true);




