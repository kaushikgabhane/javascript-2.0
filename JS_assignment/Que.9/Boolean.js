// Boolean value is either true or false.

// - Write three JavaScript statement example which provide truthy value.


// Example 1) :

let x = 5;

if (x === 5) {
    console.log("Truthy example 1 : It's a truthy value.");
}



// Example 2) :

for(let i=0; i<=2; i++){
    console.log(" Truthy example 2 : i=5 is the condition which have truthy value");
}


// Example 3) :

let self = null;
console.log("Truthy example 3 : It's a ",(Object.is(self,null)));





// - Write three JavaScript statement example which provide falsy value.


// 1) undefined

let result;

console.log("Falsy example 1 : " , (typeof (result)));


// 2)  '' => empty string 
let arr = [] ;
console.log("Falsy example 2 : " ,(arr.length));



// 3)  NaN => not a number
let num1 = "n";
let num2 = 12345;

console.log("Falsy example 3 : " ,(parseInt(num1) + num2));