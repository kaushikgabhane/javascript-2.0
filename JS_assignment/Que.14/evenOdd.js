// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript? Create a program which checks that the given number is even or odd.


function isEven(num){
    if (num % 2 == 0) {
        console.log(`The given number ${num} is an even.`);
    } 
    else {
        console.log(`The given number ${num} is an Odd number.`);
    }
};

isEven(5);
isEven(145752217);