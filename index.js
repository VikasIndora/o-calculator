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
    if (a % b === 0) {
        return a / b;
    } else if (b === 0) {
        return `Nope!`;
    } else {
        return (a / b).toFixed(2);
    }
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

let firstOperand;
let secondOperand;
let operation;
let result;
let tempResult;

number.forEach(function (element) {
    element.addEventListener("click", function () {
        if (display.textContent == operation) {
            display.textContent = null;
        }
        display.textContent += element.textContent;
    });
});

operator.forEach(function (element) {
    element.addEventListener("click", function () {
        if (operation && firstOperand) {
            secondOperand = display.textContent;
            tempResult = operate(+firstOperand, +secondOperand, operation);
            firstOperand = tempResult;
            operation = element.textContent;
        } else {
            operation = element.textContent;
            firstOperand = display.textContent;
        }
        if (display.textContent == result) {
            firstOperand = display.textContent;
        }
        display.textContent = element.textContent;
    });
});

equalTo.addEventListener("click", function () {
    secondOperand = display.textContent;
    result = operate(+firstOperand, +secondOperand, operation);
    display.textContent = result;
    firstOperand = result;
    operation = null;
});

allClear.addEventListener("click", function () {
    display.textContent = null;
    firstOperand = null;
    secondOperand = null;
    operation = null;
    result = null;
    tempResult = null;
});
