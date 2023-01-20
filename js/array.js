// Declaration

// let arr1 = [1,2,"kaushik",4,5];
// console.log(arr1);

// length
// console.log(arr1.length);

// index
// console.log(arr1[2]);

// last element
// console.log(arr1[arr1.length-1]);

// replace element
// arr1[1] = "I got replaced";
// console.log(arr1);


// push
// arr1.push("I got pushed");
// console.log(arr1);

// slice
// console.log(arr1.slice(1,3));
// console.log(arr1);


// splice
let fruit = ['apple', 'banana', 'chiku', 'dryFruit'];
fruit.splice(1,1,"fjjg",2,5,3,"end");                     // here in third param. we can give as many values we want at position of       deleted elements .

// console.log(fruit);



// concatenation
let arr1 = [1,2,3,4];
let arr2 = [5,6,7,8];
let arr3 = [9,10,11,21];
// console.log(arr1.concat(arr2.concat(arr3)));
// console.log(arr1.concat(arr2,arr3));

// fill
// let arr4 = [1,2,3,4,5,6,8,7,8];
// arr4.fill(49,5,7);
// console.log(arr4);


// includes
// console.log(arr4.includes(5,4));

// indexOf
// console.log(arr4.indexOf(8));

// isArray
// let num = [11,12,13,14,15,16,17];
// console.log(Array.isArray(num));


// join 
// console.log(num.join(" and "));
// console.log(num.join("  "));
// console.log(num.join(" - "));
// console.log(num.join());

//lastIndexOf
// let num = [1,2,3,1,4,5,2,6,3];
// console.log(num.lastIndexOf(1));

// map
let math = [1,4,9,16,25,49];
// console.log(math.map());
// console.log(math)


//pop
// console.log(math.pop());
// console.log(math);

// reverse
let names = ["kaushik","ash",25,"tom","mohit",1];
// console.log(names.reverse());

// shift
// console.log(math.shift());
// console.log(math);

// sorting
// console.log(names.sort());
// console.log(names.reverse(names.sort()));  //reverse sorted array

// unshift
// names.unshift("gaurav");
// console.log(names);

// converting to ARRAY
// let name = 'kaushik';
// let arr8 = name.split('');
// console.log(arr8);

// keys 
// let array1 = ['a', 'b', 'c'];
// let iterator = names.keys();

// for (const key of iterator) {
//   console.log(key);
// }

//values
// let iterator = names.values();

// for (const value of iterator) {
//   console.log(value);
// }

// for of loop
let fruits = ["apple","badaApple","ChotaApple","DoubleApple","everyApple"];

// let Upperfruit = [];

// for(const element of fruits){
  // Upperfruit.push(element.toUpperCase());
  // Upperfruit.push(element.toLowerCase());
  // Upperfruit.push(element.split());
  // Upperfruit.push(element.toLowerCase());

// }
// console.log(Upperfruit);




// break and continue

// for(let i=0;i<=5;i++){
  //   // console.log(i);
  
  //   if(i==4){
    //     break;
    //   }
    //   console.log(i);
    // }
    
// for(let element of fruits){  
//   if(element=="DoubleApple"){
//     continue;
//   }
//   console.log(element);  
// }




// every  :- The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a             Boolean value.


var result = [1,2,5,9].every((e)=> (e%2 === 1));  //one way for every method with callback function with odd no. logic
// console.log(result);


var outcome = [2,4,10,8,22].every((e) => {         //other way for every method with callback function with even no. logic
  return e%2 === 0;
});

// console.log(outcome);



// use case of fill method 

let arr10 = [1,2,3,4,5,6,8,7,8];

let solution = arr10.fill("49",5,7);

// console.log(solution.fill("filled",1,3));  // in thos fashion we can fill two items at a time.




// filter
var arr11 = [1,10,23,565,48,59,04,24,775,45,14,500];

let conclusion = arr11.filter((ele) => (ele>=500 && ele<=600) );

// console.log(conclusion);


function avg(arr) {
  let sum = 0;
  let result ;

  for (const values of arr) {
    sum += values;
  }
  const noOfElement = arr.length;
  result = sum/noOfElement;
  console.log(result);
}

avg([10,50,43,89,67,345]);