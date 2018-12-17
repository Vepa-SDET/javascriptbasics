function myFunction() {
    return this;
}

console.log(myFunction()); 


let person={name:"Mike",surname:"Smith",age:25}
let str="";
person.__proto__.gender="male";
for (x in person) {
    str+=person[x]+" ";
}
console.log(str); 

//Mike Smith 25 male

function myFunction() {
    return this;
}

//to what refers this in the function?  
//Global Object
//
//let obj={name:"Mike",surname:"Smith",age:25}
//let obj2=Object.create(obj);
//obj.name="Jack";
//console.log(obj2.name); 
//
////Jack
//
//
//let car={make:"Toyota",model:"Corolla",year:2018}
//let car2={make:"Toyota",model:"Corolla",year:2018}
//console.log(car==car2);
//
////false
//
//let car={make:"BMW",model:"X5",year:2018}
//let car2={make:"Toyota",model:"Corolla",year:2018}
//car=car2;
//console.log(car==car2);
//
////true
//
//
//let objs=[{x: 2,y: 5},{x: 3,y: 4},{x: 9,y: 5},{x: 7,y: 1}];
//let sum=0;
//for(i in objs){
//for (j in objs[i]){
//    sum+=objs[i][j];
//    }
//}
//console.log(sum);

//36