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

let displayValue;
let userInputOfNumber = []
let userInputOfOperator = []

number.forEach((element) => {
    element.addEventListener('click', () => {
        display.textContent = element.textContent;
        displayValue = display.textContent;
        userInputOfNumber.push(displayValue) //push() throws the value back to global scope!
    })
})

operator.forEach((element) => {
    element.addEventListener('click', () => {
        userInputOfOperator.push(element.textContent)
    })
})

equalTo.addEventListener('click', () => {
    let result = operate(+userInputOfNumber[0], +userInputOfNumber[1], userInputOfOperator[0]);
    display.textContent = result;
})

allClear.addEventListener('click', () => {
    while (userInputOfNumber[0]) {
        userInputOfNumber.pop()
    }
    while (userInputOfOperator[0]) {
        userInputOfOperator.pop()
    }
    display.textContent = '0';
})