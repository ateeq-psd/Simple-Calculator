
function operate(firstNumber, secondNumber, operand) {
    if (operand === "+") {
        return firstNumber + secondNumber;
    }

     if (operand === "-") {
        return firstNumber - secondNumber;
    }

     if (operand === "*") {
        return firstNumber * secondNumber;
    }

     if (operand === "/") {
        if (secondNumber === 0){
            return "Cant divide by 0"
        }
        let temp = firstNumber / secondNumber; //Used for rounding 
        return firstNumber / secondNumber;
    }
}



let a = 20
let b = 0

console.log(divide(a, b))
