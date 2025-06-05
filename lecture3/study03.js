//เจาะลึก Arrow Function
let aa = () => {
    console.log('Hello....');
}

//หากคำสั่งใน {  } มีเพียง 1 คําสั่ง ไม่จำเป็นต้องใส่ {  }
let bb = () => console.log('Hello....');

//------------------------------------------------------

let cc = () => {
    return 'Wow wow wow'
}

//หากคำสั่งใน {  } มีเพียง 1 คําสั่ง และเป็นคำสั่ง return หากไม่ใส่ {  } ก็ไม่ต้องใส่คำว่า return
let dd = () => 'Wow wow wow'

aa()
aa()
bb()
aa()
console.log( cc() );
console.log( dd() );