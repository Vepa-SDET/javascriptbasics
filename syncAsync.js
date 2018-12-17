/////////// setTimeout  ///////////////
//function first(){
//    setTimeout(function (){
//    console.log("first one");    
//    },1000);
//}
//function second(){
//    setTimeout(function (){
//    console.log("second one");    
//    },2000);
//}
//function third(){
//    console.log("third one");
//}
//
//first();
//second();
//third();

/////// CALLBACK  //////////////////
//function first(callback){
//    setTimeout(function (){
//    console.log("first one");
//    callback(third);    
//    },3000);
//}
//function second(callback){
//    setTimeout(function (){
//    console.log("second one");
//    callback();
//    },1000);
//}
//function third(){
//    console.log("third one");
//}
//
//first(second);

//const async = function(number,callback){
//    const result=number+2;
//    setTimeout(function (){
//    callback(result); },1000);
//}
//
//async(5,function(result){
//    console.log(result);
//        async(7,function(result){
//        console.log(result);
//            async(9,function(result){
//            console.log(result);
//})
//})
//});

//function prepareTea(){
//
//   setTimeout(function(){
//       console.log("1.Find Vessel");
//
//       setTimeout(function(){
//           console.log("2.Put water,sugar and tea");
//
//           setTimeout(function(){
//               console.log("3.Bring the mixture to a boil");
//
//               setTimeout(function(){
//                   console.log("4.Filter the tea");
//
//                   setTimeout(function(){
//                       console.log("5.Serve the tea");
//                   },2000)
//
//               },2000)
//
//
//           },2000)
//
//
//       },2000)
//
//
//   },2000)
//}
//
//prepareTea();


/////////  PROMISE  /////////////////////////////////

//let promiseToCleanTheRoom = new Promise(function(resolve,reject){
//    //clean the room
//    let isClean=true;
//    if(isClean){
//        resolve("Clean");
//    }else{
//        reject("Not clean");
//    }
//}); 
//
//promiseToCleanTheRoom.then(function(fromResolve){
//    console.log(`The room is ${fromResolve}`);   //Clean
//}).catch(function(fromReject){
//    console.log(`The room is ${fromReject}`);   //Not Clean
//});

//////// Now we have dependencies  ////////////////////

let cleanRoom = function(){
    return new Promise(function(resolve,reject){
        resolve("Cleaned the room. ");
    })
}

let removeGarbage =function(msg){
    return new Promise(function(resolve,reject){
        resolve(msg+"Garbage removed. ");
    })
}

let winIceCream= function(msg){
    return new Promise(function(resolve,reject){
        resolve(msg+ "Won Icecream!");
    })
}

cleanRoom().then(function(result){
    return removeGarbage(result);    
}).then(function(result){
    return winIceCream(result);
}).then(function(result){
    console.log(result+" Finished");
});

const async= () =>{
    return new Promise((resolve,reject)=>{
        resolve("Everything is good!");
    })
}

async().then((data)=>{
    console.log(data);
    return 1;
}).then((data)=>{
    console.log(data);
    return 2;
}).then((data)=>{
    console.log(data);
})

const async1= (num) =>{
    return new Promise((resolve,reject)=>{
        if(num==4){
            resolve("Everything is good!");
        }else{
            reject("Everything is not good!")
        }
    })
}

async1(3).then((data)=>{
    console.log(data);
    return 1;
}).then((data)=>{
    console.log(data);
    return 2;
}).then((data)=>{
    console.log(data);
}).catch((data)=>{
    console.log(data);
})






