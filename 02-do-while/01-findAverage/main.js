let isValid;
let ansNumber;
let isEmpty;
let isNan;
let outOfRange;

// do{
//      //null ||  ""

//     isEmpty = ansNumber.trim() === '';
//     isNan = isNaN(ansNumber);
//     outOfRange = Number(ansNumber) < 1 || Number(ansNumber) > 99;
//     if(isEmpty || isNan){
//         alert("Invalid Input, Try 1-99");
//     } else if(outOfRange){
//         alert("Invalid Range, Try 1-99");
//     }
// }while (isEmpty || isNan || isEmpty || isNan)


let start = true
let count = 0
let sum = 0
let average = 0 // x = sum/count
do{
    ansNumber = prompt('Enter your magic number'); // one input
    isNan = isNaN(ansNumber);
    if(parseInt(ansNumber) === 0 || parseInt(ansNumber) < 0 || ansNumber.trim() === '' || isNan ){ //สรุปผล
        alert("Done !");
        alert(`Count is: ${count}`)
        alert(`Sum is: ${sum}`)
        alert(`Average is: ${average = sum/count}`)
        start = false
    }else{
        alert("Continue...."); // input number -> ผลรวมจำนวนทั้งหมด
        if(parseInt(ansNumber) > 0 ){ // number only
            sum = sum + parseInt(ansNumber)
        }
        count = count + 1
    }
}
while(start)



