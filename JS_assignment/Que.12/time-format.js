// Create a human readable time format using the Date time object.


// Some building blocks.
let format = new Date();

let year = format.getFullYear();

let month = format.getMonth();

let date = format.getDate();

let hours = format.getHours();

let minutes = format.getMinutes();


// First format will be like  YYYY-MM-DD HH:mm
console.log(`The first format is ${year}-${month}-${date} ${hours}:${minutes}`);


// second format will be like  DD-MM-YYYY HH:mm
console.log(`The second format is ${date}-${month}-${year} ${hours}:${minutes}`);


// Third format will be like  DD/MM/YYYY HH:mm
console.log(`The third format is ${date}/${month}/${year} ${hours}:${minutes}`);