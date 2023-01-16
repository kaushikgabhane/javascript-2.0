// b. Print a square pattern, if the input is 3 then the output should be similar to the given output
// 	   ***
// 	   ***
// 	   ***

let num = prompt("Enter a number to get left-aligned triangle pattern : ");

let string = "";
for(var i=0; i < num; i++){
    for(var j=0; j<num; j++){
        string += "*";
    }
    string += "\n";
}

console.log(string);