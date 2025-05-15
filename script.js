function sum(a, b) {
    return a + b;
}

function mult(a, b) {
    return a * b;
}

function minus(a, b) {
    return a - b;
}

function divide(a, b) {
    let temp = a /b;
    return Math.ceil(temp * 100) / 100;
}

let a = 20
let b =24

console.log(divide(a, b))
