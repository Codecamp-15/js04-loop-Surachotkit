// // ให้เขียนโค้ดเพื่อหาจำนวนเฉพาะตั้งแต่ 1 ถึง 100  หารด้วย 1 กับ ตัวเองลงตัว

for (let i = 2; i <= 100; i++) {  //ตัวที่จะใช้
  let sum = 0;
  for (let j = 2; j <= 100; j++) {  //%
    //j นับให้ครบ 100 ก่อน i ถึงจะเพิ่ม 1
    if (i % j == 0) {
      sum = sum + 1;
    }

  }
  if (sum > 1){
    continue;
  }
  else{
    console.log(i);
  }
}




