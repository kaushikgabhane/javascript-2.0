// 13. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.


// let age;
let input = prompt("Enter your age: ");

if (input >= 18) {
    console.log(`You are old enough to drive`);
}
else{
    console.log(`You have to wait for ${18 - input} years.`);
}