//You just turned 18 years old and your dad promises you that he will get you a new car. You do not know if you will get that car. Your dad can either really buy you a brand new car or stand you up and withhold the car if he is not happy.  You promised your friend that you will show them the new car when your dad buy you one. 
//
//Please create a promise chain for this question.

//let promiseToRide=new Promise((resolve,reject)=>{
//    let didBuy=true;
//    if(didBuy){
//        resolve("We can go for a ride!");
//    }else{
//        reject("Didn`t buy the car!");
//    }
//})
//
//promiseToRide.then()



let isFatherHappy = function(){
    return new Promise(function(resolve,reject){
        resolve("Father is Happy!");
    })
}

let didBuyAcar =function(str){
    return new Promise(function(resolve,reject){
        resolve(str+"He bought me a new car! ");
    })
}

let goForAride= function(str){
    return new Promise(function(resolve,reject){
        resolve(str+ "Let us go for a ride! ");
    })
}

isFatherHappy().then(function(result){
    return didBuyAcar(result);    
}).then(function(result){
    return goForAride(result);
}).then(function(result){
    console.log(result+"Finished!");
});