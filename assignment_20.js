//Question-1
//For Mark and John:
//1. For each of them, create an object with properties for their full name,mass,and height 
//2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
//3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Do not forget they might have the same BMI 
//Remember: BMI = mass/(height*height);
//
//var markBmi={
//    Full_name: "Mark Smith",
//    mass:       80,
//    height:     1.83,
//    bmi: function(mass,height){
//    this.mass=mass;
//    this.height=height;    
//    return (this.mass/(this.height*this.height)).toFixed(2);
//    }
//}
//var johnBmi={
//    Full_name: "John Brown",
//    mass:       130,
//    height:     1.75,
//    bmi: function(mass,height){
//    this.mass=mass;
//    this.height=height;    
//    return (this.mass/(this.height*this.height)).toFixed(2);
//    }
//}
//if(johnBmi.bmi(130,1.75)>markBmi.bmi(80,1.83)){
//    console.log(johnBmi.Full_name+" has "+johnBmi.bmi(130,1.75)+" it should be between 20.00 & 25.00!");
//}else if(johnBmi.bmi(130,1.75)<markBmi.bmi(80,1.83)){
//    console.log(markBmi.Full_name+" has "+markBmi.bmi(80,1.83)+" it should be between 20.00 & 25.00!");
//}else {
//    console.log(markBmi.Full_name+" & "+johnBmi.Full_name+" has equal BMI-s");
//}
//function bmIndex(fullName,mass,height){
//    this.fullName=fullName;
//    this.mass=mass;
//    this.height=height;
//    this.bmi= function(){
//        return this.mass/this.height*this.height;
//    }
//}



//Question-2
//
//1. Build a function constructor called Salary to calculate the average salary of Cybertek Student. Salary constructor should include:
//
//    - First Name of the student
//
//    - Last Name of the student
//
//    - Gender of the student
//
//    - Age of the student
//
//    - Studying Hours of the student
//
//2. Ask student to enter how many hours he/she studied for 5 weeks and store these hours in the array. (Weekly hours should be 0-10 hours max)
//
//3. Create a method in your constructor to calculate your average studying hours for 5 weeks.
//
//4. Create another method to calculate the salary.
//
//        - if average hours is less than 4 hours, you need to tell student: "Not eligible to go to market, and study more"
//
//        - if average hours is between 4 and 6(included) , salary for that person will be 10 percent more than base salary
//
//        - if average hours is between 6 and 8(included) , salary for that person will be 20 percent more than base salary
//
//        - if average hours is between 8 and 10(included) , salary for that person will be 50 percent more than base salary      
//
//        base salary will be a parameter of the salaryCalculate method. 
//
//5- Print the student salary with his name:  "Mike Smith Salary is $150000"
//
//var Salary=function(firstName,lastName,gender,age,studyHours){
//    this.firstName=firstName;
//    this.lastName=lastName;
//    this.gender=gender;
//    this.age=age;
//    this.studyHours=function(){
//        let x=0;
//        for(var i of this.studyHours){
//             x +=i;            
//        }
//        return x;
//    }
//}
//
//
//sal1=new Salary("ali","bey","M",18,[1,2,3,4]);
//console.log(sal1.studyHours());

function salaryToCalc(firstName,lastName,age,gender){
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
    this.gender=gender;
    this.stdHours=function(){
        let weekHours=[],weekSum=0;
        for (let i=1;i<=5;i++){
        weekHours.push(+prompt("Enter study hours(0-10 hour) for  week:"+i));
        weekSum+=weekHours[i-1];
        }return weekSum/5;
    }
    this.avrgHours=function(base){
        let avrg=this.stdHours();
        let salary=0;
        if(avrg<4){
          console.log(this.firstName+" "+this.lastName+" is not eligible to go to market you should study more!");  
        }else if(avrg<=6){
            salary=1.10*base;
            console.log(this.firstName+" "+this.lastName+"  Salary is $"+salary.toFixed(2));
        }else if(avrg<=8){
            salary=1.20*base;
            console.log(this.firstName+" "+this.lastName+" Salary is $"+salary.toFixed(2));
        }else if(avrg<=10){
            salary=1.50*base;
            console.log(this.firstName+" "+this.lastName+" Salary is $"+salary.toFixed(2));
        }
    }
}

let average_1= new salaryToCalc("Farhan","Khan",40,"Male");
average_1.avrgHours(100000);

let average_2= new salaryToCalc("Mike","Smith",34,"Male");
average_2.avrgHours(100000);