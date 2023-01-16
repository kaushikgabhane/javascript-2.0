// c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
// 	     *
// 	    ***
//     *****




let num = prompt("Enter a number to get left-aligned triangle pattern : ");

let string = "";

for (let i = 1; i <= num; i++) {

    for (let j = 1; j <= num - i; j++) {
    string += " ";
  }

  for (let k = 0; k < 2 * i - 1; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);