// normal function
// function sum(){
//     let num1 = 10;
//     let num2 = 20;

//     console.log("addition of numbers: " , num1+num2)
// }

// sum();


// function with argument
// function sum(num1,num2){
//     // let num1 = 10;
//     // let num2 = 20;

//     console.log("addition of numbers: " , num1+num2)
// }

// sum(5,8);


// function with return type
// function sum(num1,num2){
//     // let num1 = 10;
//     // let num2 = 20;
//     let result = num1 + num2 ;
//     return result;
// }

// let add = sum(50,50);
// console.log(add);


// functions on strings
// function URL(url,domain){
//     let con = "https://";
//     let result = con + url + domain ;
//     return result;
// }

// let website = URL('kaushikgabhane',543);
// console.log(website);

// passing array in argument
// function sum(arr){
//     let sum = 0 ;
//     for(let i=0;i<arr.length;i++){
//         sum = sum + arr[i];
//     }
//     return sum;
// }
// let summary = [1,2,2,4,3,5,6];
// let arrresult = sum(summary);
// console.log(arrresult);


// function sum(){

    // this will give array of arguments.
//     console.log(arguments);    
//     let sum = 0 ;
//     for(let i=0;i<arguments.length;i++){
//         sum = sum + arguments[i];
//     }
//     return sum;
// }
// this function accepts arguments automatically even if not declared.
// console.log(sum(21,4,53,65));

// Arrow function
// let ash = (x,y) => {
//     console.log("Hii myself",x,y);
// };

// ash("ash","kechum");




// creating user role in a feature

let getrole = function (name,role){
    switch(role){
        case "admin":
           return `${name} is a admin with all access`;

        case "sub-admin":
            return `${name} is a sub-admin`; 
        case "tester":
            return `${name} is a tester`;      
        case "user":
            return `${name} is a user`;
        default :"free-user" 
            return `${name} is a free-user`    
    }
}
// console.log(getrole("kaushik","admin"));



//   mini rating logic
function rate(star){
    if(star == 5){
        console.log(`${star} is the highest rating`)
    }
    else if (star == 4) {
        console.log( `${star} is the second highest rating `)
    } else if(star == 3){
        console.log(`${star} is a medium rating`)
    }else if(star == 2){
        console.log(`${star} is a low rating`)
    }else if(star == 1){
        console.log(`${star} is a lowest rating`)
    }else if(star == 0){
        console.log(`The app is not rated`)
    }
}
// rate(1);
// rate(4);
// rate(0);