//1- Ask employee to enter the hours he/she worked for 4 weeks. and put those hours into an array

//2- Ask employee to enter his/her wage and assign it to a variable

//3- Create an employee constructor with properties   ' fName, lName, birthYear'
//4- Add a method to employee constructor that creates an employee id. 
//
//    Employee id will be first character of first and last name and the age. 
//
//    Example: First Name: Mike
//
//                    Last Name:Smith
//
//                    Age:30
//
//                    Employee ID: MS30
//
//    **For age calculation, use date object.
//5- Create a Payroll constructor with properties 'hours and insurance'
//
//6- Add a method to Payroll constructor that calculates the total hours that employee worked for 4 weeks. 
//
//    **You have the hours from requirement-1
//
//7- Add a method to Payroll constructor that calculates the earning for 1 month
//
//    ** earning is wage * total hours
//
//    if employee has insurance, add another $600
//
//8- Create a method that will calculate the overtime hours that employee worked for 4 weeks.
//
//    **work hours is weekly 40 hours. Anything more than is overtime.
//
//9- For the overtime hours, increase the wage %50.
//
//    **if employee worked 20 hours overtime, his earning will be  "earning + (wage * 1.5 * 20)"
//
//10-Run the program
//
//     Output should be : Employee ID:___'s overtime hours for this month is:__ and earning is $__
//
//11- Develop your code such a way that calculate overtime hours method (requirement-8) should be shared by both constructor. 
//
//12- Try to use ES6 methods we learned like let, const, spread/rest operators, arrow functions, etc
//
// 
//

let hoursArr=[];
for(let i=1;i<5;i++){
    hoursArr.push(+prompt(`How many hours did you work at week ${i}:`));
}
let wage=+prompt(`Enter your wage:`);

function Employee(fName, lName, birthYear){
    this.fName=fName;
    this.lName=lName;
    this.birthYear=birthYear;
    this.empId=function(){
        let age=new Date().getFullYear()-birthYear;
        let id=`${this.fName[0]}${this.lName[0]}${age}`;
        return id;
    }
}




function Payroll(hours,insurance){
    this.hours=hours;
    this.insurance=insurance;
    this.totalHours=function(){
        let totHours=0;
        for(let i of this.hours){
            totHours+=i;
        }
    return totHours;
    }
    this.overTime=function(){
        let overT=0;
        if(this.totalHours()>160){
            overT=wage*1.5*(this.totalHours()-160);
        }else{
            overT=0;
        }
    return overT;
    }
    this.calcEarn=function(){
        let earnings=0;
        if(this.totalHours()<160){
            earnings=wage*this.totalHours();
        }else{
            earnings=wage*this.totalHours()+this.overTime();
        }
        if(this.insurance){
            earnings+=600;
        }
    console.log(`Employee ID:${emp1.empId()}'s overtime hours for this month is:${this.totalHours()-160} and earning is $:${earnings}`);
    }
}



let emp1=new Employee("Mike","Smith",1988);
let p1=new Payroll(hoursArr,true);
let p2=new Payroll(hoursArr,true);

Payroll.prototype.overTime=function(){
        let overT=0;
        if(this.totalHours()>160){
            overT=wage*1.5*(this.totalHours()-160);
        }else{
            overT=0;
        }
    return overT;
    }
Payroll.prototype.calcEarn=function(){
        let earnings=0;
        if(this.totalHours()<160){
            earnings=wage*this.totalHours();
        }else{
            earnings=wage*this.totalHours()+this.overTime();
        }
        if(this.insurance){
            earnings+=600;
        }
    console.log(`Employee ID:${emp1.empId()}'s overtime hours for this month is:${this.totalHours()-160} and earning is $:${earnings}`);
    }
Employee.prototype=Payroll.prototype;

//emp1.calcEarn();
p1.calcEarn();
//p2.calcEarn();
//Payroll.prototype.calcEarn();
//Employee.prototype.calcEarn();

//Sample Input:
//
//Week1 hours: 45
//
//Week2 hours: 45
//
//Week3 hours: 45
//
//Week4 hours: 45
//
//var emp1=new Employee("mike","smith",1980);
//let p1=new Payroll(arr,true);
//let wage=20;
//
//Console: Employee ID:ms38's overtime hours for this month is:20 and earning is $4800




