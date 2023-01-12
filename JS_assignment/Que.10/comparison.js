// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

//    4 > 3
//    4 >= 3
//    4 < 3
//    4 <= 3
//    4 == 4
//    4 === 4
//    4 != 4
//    4 !== 4
//    4 != '4'
//    4 == '4'
//    4 === '4'


// Example 1 :

if (4 > 3) {
    console.log("it's a ",(4>3), " statement.");
}
else{
    console.log("It's a false statement.");
}



// Example 2 :

if (4 >= 3) {
    console.log("it's a ",(4>=3), " statement.");
}
else{
    console.log("It's a false statement.");
}



// Example 3 :

if ( 4 < 3) {
    console.log("it's a ",( 4 < 3), " statement.");
}
else{
    console.log("It's a false statement.");
}



// Example 4 :

if (4 <= 3) {
    console.log("it's a ",(4 <= 3), " statement.");
}
else{
    console.log("It's a false statement.");
}


// Example 5 :

if (4 == 4) {
    console.log("it's a ",(4 == 4), " statement.");
}
else{
    console.log("It's a false statement.");
}




// Example 6 :

if (4 === 4) {
    console.log("it's a ",(4 === 4), " statement.");
}else{
    console.log("It's a false statement.");
}



// Example 7 :

if (4 != 4) {
    console.log("it's a ",(4 != 4), " statement.");
}
else{
    console.log("It's a false statement.");
}




// Example 8 :

if (4 !== 4) {
    console.log("it's a ",(4 !== 4), " statement.");
}
else{
    console.log("It's a false statement.");
}




// Example 9 :

if (4 != '4') {
    console.log("it's a ",(4 != '4'), " statement.");
}
else{
    console.log("It's a false statement.");
}




// Example 10 :

if (4 == '4') {
    console.log("it's a ",(4 == '4'), " statement.");
}
else{
    console.log("It's a false statement.");
}




// Example 11 : 
if (4 === '4') {
    console.log("it's a ",(4 === '4'), " statement.");
}
else{
    console.log("It's a false statement.");
}

// - Find the length of python and jargon and make a falsy comparison statement.

let string1 = "python";

let string2 = "jargon";

console.log(`The length of python is ${string1.length} whereas of jargon is also ${string2.length} .`);


if (string1 === string2) {
    console.log(`It's a truthy comparison statement`);  
} else {
    console.log(`It's a falsy comaprison statement`);
}