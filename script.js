let digits = document.querySelectorAll("button.digit")
let operators = document.querySelectorAll("button.operator")
let equals = document.getElementById("equals")
let clear = document.getElementById("clear")

let entry = ""
let firstNumber = ""
let secondNumber = ""
let currentOperator = ""
let resultDisplayed = false

digits.forEach(btn => {
    btn.addEventListener('click', () => {
        if (resultDisplayed) {
            entry = ""
            resultDisplayed = false
        }
        entry += btn.textContent
        document.getElementById('result-text').textContent = entry
    })
})


operators.forEach(btn => {
    btn.addEventListener('click', () => {
        if (entry !== "") {
            firstNumber = entry;
            currentOperator = btn.textContent;
            entry = ""; // reset for second number
            
        }
    })
})

equals.addEventListener('click', () => {
    if (entry !== "" && firstNumber !== "" && currentOperator !== "") {
        secondNumber = entry;
        let result = operate(Number(firstNumber), Number(secondNumber), currentOperator);
        document.getElementById("result-text").textContent = result;
        entry = result.toString();
        resultDisplayed = true;
        firstNumber = "";
        secondNumber = "";
        currentOperator = "";
    }
})

clear.addEventListener('click', () => {
    entry = "";
    firstNumber = "";
    secondNumber = "";
    currentOperator = "";
    resultDisplayed = false;
    document.getElementById("result-text").textContent = "0";
});

function operate(firstNumber, secondNumber, operand) {
    if (operand === "+") return firstNumber + secondNumber;
    if (operand === "-") return firstNumber - secondNumber;
    if (operand === "*") return firstNumber * secondNumber;
    if (operand === "/") {
        if (secondNumber === 0) return "Can't divide by 0";
        return firstNumber / secondNumber;
    }
}