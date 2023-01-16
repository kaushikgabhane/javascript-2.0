//  Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.


let weight = prompt("Enter your weight ( in kg ) : ");
let height = prompt("Enter your height (in meter) : ");

function BMI(weight,height){
    return weight/(height*height);
}
let bmi = BMI(weight,height);
console.log(`Your BMI is ${bmi}`);

if (bmi<18.5) {

console.log(` You are underweight`);   
} 
else if(bmi=18.5 && bmi <=24.9){

console.log(` You are normalweight`);
}
else if (bmi=25 && bmi<=29.9) {

console.log(` You are overweight`);
}
else{

console.log(` You are obese.`);
}