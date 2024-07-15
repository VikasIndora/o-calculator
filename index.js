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
let operand1;
let operator;
let operand2;

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

const displayButton = document.querySelectorAll('.displayButton') // getting a node list
const operand = document.querySelectorAll('.operand')
const equalTo = document.querySelector('button:last-child')
const allClear = document.querySelector('button:nth-child(14)')
const display = document.querySelector('.display')

// iterating over each value of the node list (forEach loop?)
// for (let i = 0; i < displayButton.length; i++) {
//     displayButton[i].addEventListener('click', () => {
//         display.textContent = displayButton[i].textContent
//     })
// }

let displayValue;
let userInputOfNumber = []
let userInputOfOperand = []

displayButton.forEach((element) => {
    element.addEventListener('click', () => {
        display.textContent = element.textContent;
        displayValue = display.textContent;
        userInputOfNumber.push(displayValue) //push() throws the value back to global scope!
    })
})

operand.forEach((element) => {
    element.addEventListener('click', () => {
        userInputOfOperand.push(element.textContent)
    })
})

equalTo.addEventListener('click', () => {
    let result = operate(+userInputOfNumber[0], +userInputOfNumber[1], userInputOfOperand[0]);
    display.textContent = result;
})

allClear.addEventListener('click', () => {
    while (userInputOfNumber[0]) {
        userInputOfNumber.pop()
    }
    while (userInputOfOperand[0]) {
        userInputOfOperand.pop()
    }
    display.textContent = '0';
})