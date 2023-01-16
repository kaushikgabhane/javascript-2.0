//   . Write a program to print the given patterns using the loops-

//   a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output

// *
// **
// ***


let num = prompt("Enter a number to get left-aligned triangle pattern : ");

let string = "";
for(var i=0; i <=num; i++){
    for(var j=0; j < i; j++){
        string += "*";
    }
    string += "\n";
}

console.log(string);