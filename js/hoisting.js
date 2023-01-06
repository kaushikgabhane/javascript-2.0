// bigtipper("200");

// let bigtipper = function (a){           //  this function will throw a error "can not access before initialization"
//     var bill = parseInt(a);
//     console.log(bill + 20);
// }

let bigtipper = function (a) {
  //  this function will throw a error "bigtipper is not a function"
  var bill = parseInt(a);
  console.log(bill + 20);
};

console.log(name); //it will give result as undefined because "variable declaration are scanned and made undefined in global context.

var name = "kaushik";

function sayHello() {
  var name = "hello";
  console.log(name);
}
sayHello();

console.log(name);
