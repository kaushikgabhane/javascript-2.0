// Here it will work fine.

// function x() {
//     var i = 10;
//     setTimeout(() => {
//         console.log(i);
//     }, 3000);
// }
// x();

// console.log("hello closure!!");


//  Here we have to print up to 5 using condition but it behaves tricky.
//  Here it just refers to the same memory location of i hence printing 6 after 1 sec each time after execution of loop.
function x() {
    for(var i=1;i<=5;i++){
        setTimeout(() => {
            console.log(i);
        }, i*1000);
    }
}
// x();

// console.log("hello closure!!");


//  As let have block level scope hence it always reffers to new copy of i variable and desired output is achived.
function x() {
    for(let i=1;i<=5;i++){
        setTimeout(() => {
            console.log(i);
        }, i*1000);
    }
}
// x();
// console.log("hello closure!!");


// If there is a situation that you have to do it with the use of var keyword only then
function x() {
    for(let i=1;i<=5;i++){
        function close(x) {
            setTimeout(() => {
                console.log(x);
            }, x*1000);
        }
        close(i);
    }
}
x();
console.log("hello closure!!");
// With the above arrangement of closure you can achive that also.
// if not understood then watch this video once : https://www.youtube.com/watch?v=eBTBG4nda2A&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=13