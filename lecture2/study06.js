//Operator เครื่องหมายในการทำ Process ต่าง
//1. Arithmetic Operators
// +, -, *, /, %, **, ++, -- 
console.log(50 % 20); //10
console.log(2 ** 4); //16

//2. Comparison Operators (ผลลัพธ์เป็น Boolean)
// ==, ===, !=, !==, >, <, >=, <=
console.log('Sombat' > 'Somjai');
console.log('Bangna' <= 'Banana');
console.log('Thailand' == 'thailand');
console.log('20' == 20);  //เปรียบเทียบแบบไม่สนใจชนิดข้อมูล
console.log('20' === 20); //เปรียบเทียบแบบสนใจชนิดข้อมูล

//3. Logical Operators (ผลลัพธ์เป็น Boolean)
// !, &&, ||

//4. *** Ternary Operator (Conditional Operator)
// condition ? expressionIfTrue : expressionIfFalse
console.log( 20 > 100 ? 'Wow....' : 'Oh...No!');
console.log( 'sau' === 'SAU' ? 'Hi...' : 'Hey...');