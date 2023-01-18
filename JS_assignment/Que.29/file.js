// Write a javascript program which takes the input of filename as string and prints the extension of the file in the console.


let fileName = prompt("Enter your file name with extension :");


let result = fileName.split(".").pop();

console.log(result);