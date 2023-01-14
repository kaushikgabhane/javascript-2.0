// . Write a program to check that the number given by the user is a prime number or not.

const number = prompt("Enter a number : ");

let flag = false;


if (number == 1) {
   console.log(`Oop's it's not a prime number 👍♨️`);
}
else if (number > 1) {
   for (let i = 2; i < number / 2; i++) {
      if (number % i == 0) {
         flag = true;
         break;
      }
   }

   if (flag == true) {
    console.log(`Oop's it's not a prime number 👍♨️`);
   }
   else {
    console.log(`It's a prime number 💥🫡👍♨️`);
   }
}
else {
   console.log(`Oop's it's not a prime number 👍♨️`);
}
