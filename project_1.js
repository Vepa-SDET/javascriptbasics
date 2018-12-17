//Project Requirements
//
//1. Build a function constructor called Question to describe a question. A question should include:
//   a)Question itself
//   b)The answer from which the player can choose the correct one (choose an adequate data structure here, array, object,etc)
//   c)Correct answer(I would use a number for this)

function question(q,ans_ar,ans){
    this.q=q;
    this.ans_ar=ans_ar;
    this.ans=ans;
    this.method=function method(){
        let questArr=[];
    questArr.push(this.q);
    questArr.push(this.ans_ar);
    questArr.push(this.ans);
    return questArr;    
    }
}

let q1=new question("Is JavaScript the coolest programming language in the world?",["Yes","No"],"Yes");

let q2=new question("What is the name of this course's teacher?",["Mike","John","Ozzy","Arman"],"Ozzy");

let q3=new question("What does best describe coding?",["Boring","Hard","Fun","Tedious"],"Fun");

let q4=new question("What is the best coding school?",["CyberTek","App-Academy","Flatiron","Digital-Craft"],"CyberTek");

let q5=new question("What is the best IT job?",["Developer","Automation tester","Functional tester","Architect"],"Automation tester");

let quests=[q1.method(),q2.method(),q3.method(),q4.method(),q5.method()];
let i=Math.random()*(quests.length-0);
i=parseInt(i.toPrecision(1));

function questions(){
this.ask=function ask(){
console.log((i+1)+"-"+quests[i][0]);
for(let j=0;j<quests[i][1].length;j++){
    console.log(j+":"+quests[i][1][j]);
}
}
this.compare=function compare(){
this.ask();
let r=+prompt("Please select correct answer:");
if((quests[i][2])==quests[i][1][r] && r>=0 && r<=quests[i][1].length-1){
    console.log("Correct answer!");
}else if(r>=0 && r<=quests[i][1].length-1){
    console.log("Wrong answer, please try again!");
}else{
    console.log("Wrong input!");
}
}
}
let x=new questions();
x.compare(); 
    
//console.log(Math.floor(Math.random() * 4+0)); 
//
//let y=(Math.random()*(5-1)).toFixed();
//console.log(typeof(y)+y);

//2. Create a couple of questions using the constructor
//
//   Question 1-Is JavaScript the coolest programming language in the world?
//   Answers 1-Yes,No
//   Correct Answer1-Yes
//
//   Question 2-What is the name of this course's teacher?
//   Answers 2-Mike,John,Ozzy
//   Correct Answer2-Ozzy
//
//   Question 3-What does best describe coding?
//   Answers 3-Boring,Hard,Fun,Tedious
//   Correct Answer3-Fun
//
//3. Store them all inside an array
//
//4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint:write a method for the question objects for this task)
//
//5. Use the prompt function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4
//
//6. Check if the answer is correct and print to the console whether the answer is correct or not (Hint: write another method for this)