// Question-1
// What is variable? Please explain shortly.
// Variable is a kind of box or bucket where we can put some kind of data!
// Question-2
// Write a JAVASCRIPT program that asks you to enter:
//    YourName, 
//    Programming Language You are Learning,
//    The School You Are Going,
//    Start Date at School to Study,
//    Company Name,
//    Work Start Date,
//    Job Title,
//    Salary
//    Print in the console:
//    My name is "NAME". I started to study "LANGUAGE" in "SCHOOL" on "DATE". I will start working in               "COMPANY" on "START_DATE" as a "JOB_TITLE" with a salary of "SALARY"
function question_2(){
let q_arr=["YourName", 
    "Programming Language You are Learning","The School You Are Going","Start Date at School to Study","Company Name","Work Start Date","Job Title","Salary"],a_arr=[],x="";
for(let i=0;i<q_arr.length;i++){
    x=prompt(`What is ${q_arr[i]} ?`);
    a_arr.push(x);
}
 console.log(`My name is ${a_arr[0]}. I started to study ${a_arr[1]} in ${a_arr[2]} on ${a_arr[3]}. I will start working in ${a_arr[4]} on ${a_arr[5]} as a ${a_arr[6]} with a salary of ${a_arr[7]}`);
}
question_2();


// Question-3
// Which one/ones is not a legal identifier in JAVASCRIPT and why?

   var P2_a%88$; // this one is not because it includes % sign only $,_ allowed.
   var 2l_apple; // this one is not because it starts with number. 
   var $12bh_kl; // this one is ok. 
   var continue; // continue is JavaScript built in method. 
   var _______;  // this one is ok we cn use as many under scores as needed

// Question-4
// Write a JAVASCRIPT program that calculates BMI. 
// Ask user to enter his/her weight in lb
// Ask user to enter his/her height in inches
// Convert weight lb to kg
// Convert height inches to meter

// Calculate BMI=Weight(in kg)/(height(in meter)*height(in meter))

// Print in the console: Your BMI is "BMI"

function calcBMI(w,h){
   let kg=w*0.453592;
   let met=h*0.0254;
   let bmi=kg/(met*met);
   return `Your BMI is ${kg} ${met} ${bmi.toFixed(2)}`
}
function getValues(){
    let w=Number(prompt('Please enter you weight(lb):'));
    let h=Number(prompt('Please enter you height(inch):'));
    return calcBMI(w,h);
}
console.log(getValues());
// Question-5

// What will be the outputs of these codes?(do not use bracket or any other IDE)

//    var a=10, b=0;
//    console.log(!(a>b));                      false
//    console.log((a>b) && (b==0));             true
//    console.log((a>b) && !(a==10));           false
//    console.log((a===b)||(!true)&&(b>a));     true  