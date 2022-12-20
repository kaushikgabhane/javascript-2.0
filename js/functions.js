// normal function
function sum(){
    let num1 = 10;
    let num2 = 20;

    console.log("addition of numbers: " , num1+num2)
}

// sum();


// function with argument
function sum(num1,num2){
    // let num1 = 10;
    // let num2 = 20;

    console.log("addition of numbers: " , num1+num2)
}

// sum(5,8);


// function with return type
function sum(num1,num2){
    // let num1 = 10;
    // let num2 = 20;
    let result = num1 + num2 ;
    return result;
}

// let add = sum(50,50);
// console.log(add);


// functions on strings
function URL(url,domain){
    let con = "https://";
    let result = con + url + domain ;
    return result;
}

let website = URL('kaushikgabhane',543);
// console.log(website);

