// Create a simple calculator program in JavaScript which can perform the addition, substraction, multiplication and division on given numbers.

function calc(operator,num1,num2){
    switch (operator) {
        case "+":
            return `${num1 + num2} is your desired sum.`
        case "-":
            return `${num1 - num2} is your desired subtraction.`            
        case "*":
            return `${num1 * num2} is your desired multiplication.`
        case "/":
            return `${num1 / num2} is your desired division.`
        case "%":
            return `${num1 % num2} is your desired remainder of this operation.`    

        default:
            return `invalid operation.`
    }
}

console.log(calc("%",10,5));