//Suppose that you are working in a small town administration, and you are in charge of two town elements:
//1-Parks
//2-Streets
//It is a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.
//At an end-of-year meeting, your boss wants a final report with the following:
//1. Tree density of each park in the town (formula: number of trees / park area)
//3. The name of the park that has more than 1000 trees
//5. Size classification of all streets: tiny/small/normal/big/huge. 
//All the report data should be printed to the console.
//Hint: Use some of the ES6 features: classes, subclasses, template strings, maps, arrow functions, destructing, etc

class Streets{
    constructor(name,buildYear,size){
        this.name=name;
        this.buildYear=buildYear;
        this.size=size;
    }
    strSize(){
        return this.size;
    }
}

class Parks extends Streets {
    constructor(name,buildYear,area,trees){
        super(name,buildYear);
        this.area=area;
        this.trees=trees;
    }
    density(){
        return this.trees/this.area;}
}

let s1=new Streets("Sam Houston",1972,"huge");
let s2=new Streets("Westpark",1985,"big");
let s3=new Streets("Westheimer",1990,"normal");
let s4=new Streets("Belfort",1995,"small");


let p1=new Parks("Miracle","1995",50000,2000);
let p2=new Parks("Flower","1970",100000,5000);
let p3=new Parks("Botanic","1990",10000,800);

let streets=[s1,s2,s3,s4];
let parks=[p1,p2,p3];

let report=(data)=>{
console.log(`List of the streets:`);
    for(let i=0;i<data.length;i++){
console.log(`${data[i].name} ${data[i].buildYear} size:${data[i].strSize()}`);       
}
}



let parkReport=(data,c_back)=>{
console.log(`List of the parks which has more than 1000 trees:`);
    for(let i=0;i<data.length;i++){
        if(data[i].trees>1000){
            c_back(data[i]);
        }else{
console.log(`List of the parks which has less than 1000 trees:`);                   c_back(data[i]);
        }
    }
}

let x=(d)=>{
console.log(`${d.name} ${d.buildYear} number of trees:${d.trees} density:${d.density()}`);   
}

report(streets);
parkReport(parks,x);






















