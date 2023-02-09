// Use the Date object to do the following activities

let today = new Date();



// What is the year today?
let year = today.getFullYear();
console.log("Today's year is ",year);


// What is the month today as a number?
let month = today.getMonth();
console.log("Today's month is ",month);


// What is the date today?
let date = today.getDate();
console.log("Today's date is ",date);


// What is the day today as a number?
let day = today.getDay();
console.log("Today's day is ",day);


// What is the hours now?
let hours = today.getHours();
console.log("hour's are ",hours);


// What is the minutes now?
let minutes = today.getMinutes();
console.log("minute's are ", minutes);



// Find out the numbers of seconds elapsed from January 1, 1970 to now.
let seconds =Math.floor(Date.now() / 1000);
console.log("the numbers of seconds elapsed from January 1, 1970 to now are ", seconds,".");