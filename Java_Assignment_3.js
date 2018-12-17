
//Question-1
//How do you define a for loop in JAVASCRIPT.
let n = 10;
for (let i = 1; i <= n; i++) {
    console.log(`${i} For loop will run n times which is 10!`);
}

//Question-2
//Write a for loop that prints the numbers from 1 to 100.

for (let i = 1; i <= 100; i++) {
    console.log(i);
}

//Question-3
//Write a JAVASCRIPT program that displays from 1 mile to 10 miles to kilometers.

for (let i = 1; i <= 10; i++) {
    console.log(`${(i*1.60934).toFixed(2)} kilometers!`)
}

//Question-4
//Write a JavaScript program to print all the numbers between 30 and 200 (including 30 and 200)
//which are divisible by 4 and 6.

for (let i = 30; i <= 200; i++) {
    if (i % 4 == 0 && i % 6 == 0) {
        console.log(i);
    }
}

//Question-5
//Print the table of 6 using for loop.
//Output should be in following format:
//6 X 1 = 6
//6 X 2 = 12
//6 X 3 = 18
//6 X 4 = 24
//6 X 5 = 30
//6 X 6 = 36
//6 X 7 = 42
//6 X 8 = 48
//6 X 9 = 54
//6 X 10 = 60

for (let i = 1; i <= 10; i++) {
    console.log(`6 x ${i} = ${6*i}`);
}






















