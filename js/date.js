// console.log(Date.now());
// console.log(typeof(Date.now()));

let date = new Date();

// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getMilliseconds());
// console.log(date.toDateString());
// console.log(date.toLocaleDateString());
// console.log(date.valueOf());
const seconds = Math.floor(Date.now() / 1000);
console.log(seconds);


let birthY = new Date('october 9 2001');
let x = birthY.getDay();
birthY.setFullYear('2000');
// console.log(birthY.getFullYear());
// let option = { month: "long"};

// console.log(new Intl.DateTimeFormat("en-US", option).format(birthY));