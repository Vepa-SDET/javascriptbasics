var hotel={
    name:"Hilton",
    room:40,
    booked:true
};
console.log(hotel.name);
console.log(hotel.room);
console.log(hotel.booked);

var plan_1={
    name:"Basic",
    price:3.99,
    space:100,
    data:1000,
    pages:10
};

var plan_2={
    name:"Professional",
    price:5.99,
    space:500,
    data:5000,
    pages:50
};

var plan_3={
    name:"Ultimate",
    price:9.99,
    space:2000,
    data:20000,
    pages:500
};

console.log("The cost of the "+ plan_1.name+" package is $"+plan_1.price+" per month.");
console.log("The cost of the "+ plan_2.name+" package is $"+plan_2.price+" per month.");
console.log("The cost of the "+ plan_3.name+" package is $"+plan_3.price+" per month.");
console.log(plan_1);
plan_1.discountMonths=[7,8,12];
delete plan_1.data;
plan_1.price=4.99;
console.log(plan_1);
console.log("name" in plan_1);
var isNameInPlan_1="name" in plan_1;
var car={
    make:"Fiat",
    model:500,
    year:1957,
    color:"Medium Blue",
    passengers:2,
    convertible:false,
    mileage:8800
}
car.mileage=500;

if(car.make=="Fiat" && car.mileage<5000){
    console.log("Buy it!");
}else{
    console.log("Do not buy it!");
}

var salaries={
    John:100,
    Ann:160,
    Pete:130
}
var condition="John" in salaries;
if(condition && salaries.John<=100){
    salaries.John=120;
}
var condition="Adam" in salaries;
if(!condition){
    salaries.Adam=1000;
}
console.log(salaries);



var myHonda={
    color:"red",
    wheels:4,
    engine:{
        cylinders:4,
        size:2.2
    },
    hp:[300,500,100]
};
console.log("My Honda Engine Size is "+myHonda.engine.size+" and hp is "+myHonda.hp[1]);

var plan1={
    name:"Basic",
    price:3.99,
    space:100,
    data:1000,
    pages:10,
    discountMonths:[7,8,12],
    calcAnnual: function(percentDisc){
    var bestPrice=plan1.price;
    for (var i=0; i<plan1.discountMonths.length;i++){
        if(plan1.discountMonths[i]==7||plan1.discountMonths[i]==8){
            bestPrice=plan1.price*percentDisc;
        }
    }
    return bestPrice*12;
}
};
// if user sign up in certain months, gets discount for entire year
// if user sign up for the basic plan in July or August gets 20% off


var annualPrice=plan1.calcAnnual(0.85);
console.log(annualPrice);

var car={
    make: "Honda",
    model: "Civic",
    year: 2000,
    color:"red",
    mileage: 75000,
    started:false,
    start:function(){
        this.started=true;
    },
    stop:function(){
        this.started=false;
    },
    drive: function(){
        if(this.started){
            console.log("It is running");
        }else{
            console.log("you need to start the engine first");
        }
    }
    
};
car.drive();
car.start();
car.drive();
car.stop();
car.drive();

var song={
    name:"Walk This Way",
    artist: "Run-D.M.C",
    minutes:4,
    seconds:3,
    genre:"80s",
    playing:false,
    play:function(){
        if(!this.playing){
            this.playing=true;
            console.log("Playing "+this.name+" by "+this.artist);
        }
    },
    pause:function(){
        if(this.playing){
            this.playing=false;
        }
    }
};
song.play();
song.pause();
song.play();

var personalInfo={
    name:"Vepa",
    lastName:"Orazov",
    yearOfBirth:1984,
    job:"SDET",
    isMarried:true,
    family:["x","y","z"],
    calculateAge:function(currentYear){
        var age=currentYear-this.yearOfBirth;
        return age;
    }
}
for(var x in personalInfo){
console.log(x+":"+personalInfo[x]);
}

var car={
    make:"Ford",
    model:"Mustang",
    year:1955,
    color:"black",
    mileage:281341
}
for(var x in car){
console.log(x+":"+car[x]);
}

var object1={a:1,b:2,c:3};
var concat="";
for(var x in object1){
concat+=object1[x];
}
console.log(concat);


function adam(name, lastName, age){
    this.name = name;
    this.lastName = lastName;
    this.age = age;
}

var adam1 = new adam("John", "Mike", 20);
var adam2 = new adam("Mike", "John", 25);
var adam3 = new adam("Kevin", "Eric", 30);
var adam4 = new adam("Eric", "Kevin", 32);

console.log(adam2);

function rectangle(height,width){
    this.height=height;
    this.width=width;
    this.area=function(){
       return this.height*this.width;
    } 
}

var rect1= new rectangle(10,20);
var rect2= new rectangle(20,30);
console.log(rect1.area());
console.log(rect2.area());


function hostingPlans(monthly,diskSpace,dataTransfer,sitePages,discMonths,calcAnnual){
    this.monthly=monthly;
    this.diskSpace=diskSpace;
    this.dataTransfer=dataTransfer;
    this.sitePages=sitePages;
    this.discMonths=discMonths;
    this.calcAnnual= function(percentDisc){
    var bestPrice=this.monthly;
    for (var i=0; i<this.discMonths.length;i++){
        if(this.discMonths[i]==7||this.discMonths[i]==8){
            bestPrice=this.monthly*((100-percentDisc)/100);
        }
    }
    return bestPrice*12;
}
}

var basic= new hostingPlans(3.99,100,1000,10,[7,8]);
var professional= new hostingPlans(5.99,500,5000,50,[7,8,12]);
var ultimate= new hostingPlans(9.99,2000,20000,500,[7,8]);
console.log(basic.calcAnnual(10));
console.log(professional.calcAnnual(10));
console.log(ultimate.calcAnnual(10));








