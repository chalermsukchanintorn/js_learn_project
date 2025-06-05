//ชนิดข้อมูล (Data Type) ต่างๆ ใน JavaScript
//1. String
let aa = 'Hello...'
let bb = "Hi..."
let cc = `Hey...` // Alt+9+6

//2. Number
let dd = 1234    // Integer
let ee = 12.34   // Float

//3. Boolean
let ff = true 
let gg = false

//4. Null
let hh = null

//5. Undefined
let ii // Undefined (ไม่ได้กำหนดค่าให้ตัวแปร)

//6. Object จะเป็น key:value ภายใต้ {  }  ***
let xx = {
    stuName: 'John',
    stuAge: 20,
    stuAddress: {
        noHome: '1/222',
        street: 'Sukhumvit',
        city: 'Bangkok',
    },
    stuSubjects: ['Math', 'Science', 'English'],
}

//7. Array ***
let jj = [1, 2, 3, 4, 5] ; // Array of Numbers
let kk = [1, 'A', true, null] ; // Mixed Array
let ll = [
    { name: 'John', age: 20 },
    { name: 'Jane', age: 22 },
    { name: 'Doe', age: 25 }
]