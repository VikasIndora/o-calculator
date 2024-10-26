function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return (a / b).toFixed(5);
}

function operate(operand1, operand2, operator) {
    switch (operator) {
        case "+":
            return add(operand1, operand2);
        case "-":
            return subtract(operand1, operand2);
        case "*":
            return multiply(operand1, operand2);
        case "/":
            return divide(operand1, operand2);
    }
}

const number = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operator");
const equalTo = document.querySelector("button:last-child");
const allClear = document.querySelector("button:nth-child(14)");
const display = document.querySelector(".display");
