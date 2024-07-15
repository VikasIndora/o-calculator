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
const display = document.querySelector('.display')

// iterating over each value of the node list (forEach loop?)
// for (let i = 0; i < displayButton.length; i++) {
//     displayButton[i].addEventListener('click', () => {
//         display.textContent = displayButton[i].textContent
//     })
// }

displayButton.forEach((element) => {
    element.addEventListener('click', ()=>{
        return display.textContent = element.textContent;
    })
})