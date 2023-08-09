
//V2 : รับ input ได้เรื่อยๆ กว่าจะถูก // แต่ให้กด ESC เพื่อจบโปรแกรมได้

//Program 1

let isValid;
let ansNumber;
let isEmpty;
let isNan;
let outOfRange;

do{
    ansNumber = prompt('Enter your magic number') || ''; //null ||  ""

    isEmpty = ansNumber.trim() === '';
    isNan = isNaN(ansNumber);
    outOfRange = Number(ansNumber) < 1 || Number(ansNumber) > 99;
    if(isEmpty || isNan){
        alert("Invalid Range, Try 1-99");
    } else if(outOfRange){
        alert("Invalid Range, Try 1-99");
    }
}while (isEmpty || isNan || isEmpty || isNan)
// Program 2 : Guess
// - ทายซ้ำ
// - Hint OutOfRange
// - Hint Invalid Range 
// - Hint Too High , Too Low
let guessNumber;

do{
    guessNumber = prompt("Enter your answer") || ''
    isEmpty = ansNumber.trim() === '';
    isNan = isNaN(ansNumber);
    outOfRange = Number(ansNumber) < 1 || Number(ansNumber) > 99;
    if(isEmpty || isNan){
        alert("Invalid Range, Try 1-99");
    } else if(outOfRange){
        alert("Invalid Range, Try 1-99");
    } else if (+guessNumber > +ansNumber){
        alert("Too Hight");
    } else if(+guessNumber < +ansNumber){
        alert("Too Low");
    } else if(+guessNumber === +ansNumber){
        alert("Correct");
    }
} while(+guessNumber != +ansNumber)
