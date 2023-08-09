
// PATTERN RECOGNITION
// 1150/10 => 115 => count = 1;
// 115/10 => 11.5 => count = 2;
// 11.5/10 => 1.15 => count = 3;
// 1.15/10 => 0.115 => count = 4;

// PATTERN RECOGNITION
// 1152 => (1150 + 2) =>(115 * 10) + 2
// (1152 - 2) / 10 => n' = 115
// (115 - 5) / 10  => n'= 11
//  (11 - 1) / 10 => n' = 1
// (7-7) / 10 => n' = 0
let n = +prompt('Enter number');
let count = 0; //จำนวนรอบ

if (n < 0) n = -n;
let sum = 0; //จำนวนผลรวม
while (n) { // n = T in loop
    let remainder = n % 10;
    n = (n - remainder) / 10;
    sum += remainder;
    count++;
}

console.log(count, sum);
