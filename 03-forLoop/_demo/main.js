console.log("learn couting loop");

console.log("Starting...");
// () = parenthesis
// {} = bracket
// [] = square bracket 


// for( let i = 1 ;i<=20 ;i = i++) {  
//     if(i % 5 == 0 && i % 5 == 0)  console.log("Fizzbuzz");
//     else if(i % 5 == 0) console.log("Buzz");
//     else if(i % 3 == 0) console.log("Fizz");
//     else console.log(i);

// }

// // Skip Fizz
// for( let i = 1 ;i<=20 ;i = i++) {  
//     if(i % 5 == 0 && i % 5 == 0)  console.log("Fizzbuzz");
//     else if(i % 5 == 0) console.log("Buzz");
//     else if(i % 3 == 0) console.log("Fizz");
//     else console.log(i);

// }

// for (let i = 1 ; i <= 20; i++){
//     if (i % 2 == 0) console.log(i);
//     else continue;
//     console.log('even');
// }

// let str = ""
//     for(let i = 1; i <= 10; i++){
//         // Guard
//         if(i % 3 == 0) continue; // หาร เอาเศษ 3 ลงตัว เจอ continue จะข้ามไป skip loop ไปที่ i++ เลย 
//         str = str + i 
    
//     }


// remove vowel [a,e,,i,o,u]
// let src = "codecamp"
// let res = "" //cdcmp

// //src.length ==> 8
// //src[0] ==> c  || ตัวแรก
// //src[1] ==> o  || ตัวที่สอง

// for(let i = 0; i < src.length; i++){
//     let c = src[i]
//     let isVowel = c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u' 
//     if(isVowel) continue;
//     res = res + src[i]
//     // '' + src[0] == '' + 'c' => 'c'
//     // 'c' + src[1] == 'c' + 'o' => 'co'
// }

// console.log(res);
// console.log(str); //12345678910


//ADVANCE : Nested Loop;
for(let i = 2; i <= 12; i++){

    console.log(`เริ่มท่องสูตรคูณแม่ ${i}` );

    for (let j = 1; j<= 12; j++){ 
        console.log(`${i} * ${j} = ${i * j}`);
    }
    console.log('\n'); 
}

console.log("end....");