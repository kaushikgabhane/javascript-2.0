// let number = 10;


// function number(num){

//     if (num % 2 == 0 ){
//         console.log(`${num} is a even number`);
//     }
//     if()
//     else{
//         console.log(`${num} is a odd number`);
//     }
// }

// number(2);

function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return
  {
      bar: "hello"
  };
}
console.log("foo1 returns:");
console.log(foo1());
console.log("foo2 returns:");
console.log(foo2());