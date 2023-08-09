let a = prompt("number")
//Pattern 
//1150/10 => 115 => count = 1
//115/10 => 11.5 => count = 2
//11.5/10 => 1.15 => count = 3
//1.15/10 => 0.115 => count = 4
let count = 0
while(a>=1){
    console.log(a);
    count++
    a = a / 10
}
console.log(count);