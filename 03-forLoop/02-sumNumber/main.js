// - หาผลรวมตัวเลขทุกตัว
let sum = 0
for(let i = 1 ;i <=100; i++){ //ผลรวม
    sum = sum + i; 
}
console.log(sum);

//-----------------------------------------------------------
// - หาผลรวมเฉพาะเลขคู่ และผลรวมเฉพาะเลขคี่
let sumEven = 0
let sumOdd = 0
let sum = 0

for (let i = 1; i<= 100; i++){
    sum += i;
    if(i % 2 == 0) sumEven += i;
    else sumOdd += i;

}
console.log(sumEven, sum - sumEven , sumOdd);

//-------------------------------------------------------------

// - หาผลรวมของเลขที่หาร 2 ลงตัว ยกกำลังสอง (2^2 + 4^2 + ...) ลบด้วยผลรวมของเลขที่หาร 3 ลงตัว ยกกำลัง 2 (3^2 + 6^2 + ...)

let sumEvenSquare = 0
let sumThirdSquare = 0
for (let i = 1; i<=100; i++){
    if(i % 2 === 0){
        sumEvenSquare = sumEvenSquare +i **2
    }

    if(i % 3 === 0){
        sumThirdSquare = sumThirdSquare + i **2
    }
       
    }

console.log(`sumEvenSQ : ${sumEvenSquare}`);
console.log(`sumEvenSQ : ${sumThirdSquare}`);
console.log(`sumEvenSQ : ${sumEvenSquare - sumThirdSquare}`);