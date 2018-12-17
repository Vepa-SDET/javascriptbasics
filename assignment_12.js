//Question 1:
//Write a javascript program to create an array of 8 * 8 size and initialize all the array elements starting from 1 till 64 (using for loop) as follows:
//1 2 3 4 5 6 7 8
//9 10 11 12 13 14 15 16
//17 18 19 20 21 22 23 24
//25 26 27 28 29 30 31 32
//33 34 35 36 37 38 39 40
//41 42 43 44 45 46 47 48
//49 50 51 52 53 54 55 56
//57 58 59 60 61 62 63 64
//
//Write a nested for loop to print all the elements of 2-Dimensional array in above format.

let multiArray=Array(8),x=0,line;
for(let i=0;i<multiArray.length;i++){
    multiArray[i]=Array(multiArray.length);
    line="";
    for(let j=0;j<multiArray[i].length;j++){
        x++;
        multiArray[i][j]=x;
        line+=multiArray[i][j]+" ";
    }console.log(line);
}

//Question 2:
//Write a javascript program to create following 2-Dimensional array of 8 * 8 size [to resemble chess board] using Data instantiation:
//
//W B W B W B W B
//B W B W B W B W
//W B W B W B W B
//B W B W B W B W
//W B W B W B W B
//B W B W B W B W
//W B W B W B W B
//B W B W B W B W
//
//Write a nested for loop to print all the elements of 2-Dimensional array in above format.

let chessArray=Array(8),chessLine;
for(let i=0;i<chessArray.length;i++){
    chessArray[i]=Array(chessArray.length);
    chessLine="";
    for(j=0;j<chessArray.length;j++){
        if(i%2==0 && j%2==0){
            chessArray[i][j]="W";
        }else if(i%2==0 && j%2!=0){
            chessArray[i][j]="B";
        }else if(i%2!=0 && j%2==0){
            chessArray[i][j]="B";
        }else{
            chessArray[i][j]="W";
        }chessLine+=chessArray[i][j]+" ";
    }console.log(chessLine);
}
//Question 3:
//
//var numbers = [
//[90, 10, 231],
//[-20, 80, 100, 23, 54],
//[45, 22],
//[87, 98, -100, 49, 73, 35, 19]
//];
//
//
//Write logic to find out highest number in above array.

let numbers = [[90, 10, 231],[-20, 80, 100, 23, 54],[45, 22],[87, 98, -100, 49, 73, 35, 19]],allNumbers=[],highestNumber=numbers[0][0];
for(i=0;i<numbers.length;i++){
    for(j=0;j<numbers[i].length;j++){
        if(numbers[i][j]>highestNumber){
            highestNumber=numbers[i][j];
        }
    }
}console.log(highestNumber);

//var a=0,b=1,c=0;
//for(var i=0;i<15;i++)
// {
//   a=b+c;
//   b=c;
//   c=a;
//   console.log(b);
// }







