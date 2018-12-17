//Array of arrays;
//var myArray=[];
//var myArray=["Mike","Smith",20];
//myArray[0]=["x","y","z"];
//myArray[1]=["a","b","c"];
//console.log(myArray[0],myArray[1]);
//console.log(myArray[0][1],myArray[1][1]);

//*
//**    
//***
//****

//var i,j,x;
//for(i=1;i<=7;i++)
//{x="";
//for()
//for( j=1;j<=i;j++)
//    {
//        x+="*";
//       
//    }
//    console.log(x); 
//}

//let z=["t",1,true,false,"f"];
//let a=[z,"c","d"];
//let b=[];
//b=[a,"r",1];
//console.log(b[0],b[1]);
//console.log(b[0][0].length);

//var arrayLength=3;
//var multiArray=Array(arrayLength);
//multiArray[0]=Array(arrayLength);
//multiArray[1]=Array(arrayLength);
//multiArray[2]=Array(arrayLength);
//for(var i=0;i<multiArray.length;i++){
//    multiArray[i]=Array(arrayLength);
//    for(var j=0;j<multiArray[i].length;j++){
//        multiArray[i][j]=j+1;
//    }
//console.log(multiArray[i]);
//}console.log(multiArray);
//
//multiArray=[["apple","banana","cherry"],[2,20,5],[["test","again"],["Java","Script"],["read","books"]]];
//var allElementsInOneArray=[];
//for (i=0;i<multiArray.length;i++){
//    for(j=0;j<multiArray[i].length;j++){
//        console.log(multiArray[i][j]);
//        for(k=0;k<multiArray[i][j].length;k++){
//            console.log(multiArray[i][j][k]);
//        }
//    }
//}
//        for(k=0;j<multiArray[i][j].length;k++){
//            allElementsInOneArray.push(multiArray[i][j]);
//            for(m=0;j<multiArray[i][j][k].length;m++){
//                allElementsInOneArray.push(multiArray[i][j][k]);
//                
//            }
//        }
//    }
//    
//}
//console.log(allElementsInOneArray.length);

let multiArray=Array(8),x=0;
for(let i=0;i<multiArray.length;i++){
    multiArray[i]=Array(multiArray.length);
    for(let j=0;j<multiArray[i].length;j++){
        x++;
        multiArray[i][j]=x;
    }console.log(multiArray[i]);
}


























