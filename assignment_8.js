//var counter=10;
//while(counter>=0){
//    if(counter==7){
//        counter--;
//        continue;
//    }
//    console.log(counter+" ");
//    counter--;
//}
//var num=15;
//var val=0;
//OUTER_LOOP:
//for(var i=0;i<num;i++){
//    for(var j=0;j<num;j++){
//        if(i+j>=2*val)
//            break OUTER_LOOP;
//        val=val/2;
//    }
//}
//console.log(val);
//
//var i=0;
//outer:
//while(true){
//    console.log("Outer while loop");
//    while(true){
//        i++;
//        console.log("i = "+i);
//        if(i==1){
//            console.log("continue");
//            continue;
//        }if(i==3){
//            console.log("continue outer");
//            continue outer;
//        }if(i==5){
//            console.log("break");
//            break;
//        }if(i==7){
//            console.log("break outer");
//            break outer;
//
//        }
//        }
//    }  
for(var i=1;i<5;i++){
    for(var j=1;j<3;j++){
        if(i==1&&j==1){
            continue;
       }else if(i==2&&j==2){
           break;
       }else if(i==3&&j==2){
           continue;
       }else if(i==4&&j==2){
           break;
       }
        console.log(i," ", j)
    console.log(i);    
    }
}

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
