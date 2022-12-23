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
// let fruit = ['apple', 'banana', 'chiku', 'dryFruit'];
// fruit.splice(1,1,"orange");
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