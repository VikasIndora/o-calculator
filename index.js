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
    return a / b;
}

// calculation operation variables
// let operand1;
// let operator;
// let operand2;

// operation function
function operate(operand1, operand2, operator) {
    switch (operator) {
        case '+':
            return add(operand1, operand2);
        case '-':
            return subtract(operand1, operand2);
        case '*':
            return multiply(operand1, operand2);
        case '/':
            return divide(operand1, operand2);
    }
}

const number = document.querySelectorAll('.number') // getting a node list
const operator = document.querySelectorAll('.operator')
const equalTo = document.querySelector('button:last-child')
const allClear = document.querySelector('button:nth-child(14)')
const display = document.querySelector('.display')

// iterating over each value of the node list (forEach loop?)
// for (let i = 0; i < number.length; i++) {
//     number[i].addEventListener('click', () => {
//         display.textContent = number[i].textContent
//     })
// }

let currentNumber = ''
let previousNumber = ''
let currentOperator = ''

number.forEach((element) => {
    element.addEventListener('click', () => {
        if (display.textContent === '0' || display.textContent === previousNumber) {
            display.textContent = element.textContent
        } else {
            display.textContent += element.textContent
        }
        currentNumber = display.textContent
    })
})

operator.forEach((element) => {
    element.addEventListener('click', () => {
        if (currentNumber && currentOperator) {
            previousNumber = operate(parseFloat(previousNumber), parseFloat(currentNumber), currentOperator);
            display.textContent = previousNumber;
        } else {
            previousNumber = currentNumber
        }
        currentOperator = element.textContent;
        currentNumber = '';
    })
})

equalTo.addEventListener('click', () => {
    if (currentNumber && previousNumber && currentOperator) {
        display.textContent = operate(parseFloat(previousNumber), parseFloat(currentNumber), currentOperator);
        previousNumber = display.textContent;
        currentNumber = '';
        currentOperator = '';
    }
})

allClear.addEventListener('click', () => {
    currentNumber = '';
    previousNumber = '';
    currentOperator = '';
    display.textContent = '0';
})