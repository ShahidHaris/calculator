const numberKeys = document.querySelectorAll('[data-number]');
const functionKeys = document.querySelectorAll('[data-function]');
const deleteKey = document.querySelector('[data-delete]');
const clearKey = document.querySelector('[data-clear]');
const equalsKey = document.querySelector('[data-equals]');
const mainConsole = document.querySelector('[data-main-console]');
const resultConsole = document.querySelector('[data-result-console]');



let func;
let num;

numberKeys.forEach(key => {
    key.addEventListener('click', () => {
        mainConsole.textContent = key.textContent;
        //mainConsole.append(num);
    })
})

functionKeys.forEach(key => {
    key.addEventListener('click', () => {
        let console = mainConsole.textContent;
        var lastChar = console[console.length - 1];
        if (console == '') {
            return;
        } else if (lastChar == '+' || lastChar == '-' || lastChar == 'x' || lastChar == '÷') {
            return;
        } else {
            func = num + key.textContent;
            mainConsole.append(func);
        }
        resultConsole.textContent = func;
    })
})

clearKey.addEventListener('click', clear)
deleteKey.addEventListener('click', deleteEntry)

function clear() {
    mainConsole.textContent = '';
    resultConsole.textContent = '';
}

function deleteEntry() {
    let deleted = mainConsole.textContent;
    deleted.substring(0, deleted.length - 1);
}








function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

function operate(operator, a, b) {
    if (operator == '+') {
        return add(a, b)
    } else if (operator == '-') {
        return subtract(a, b)
    } else if (operator == '*') {
        return multiply(a, b)
    } else if (operator == '÷') {
        return divide(a, b)
    } else {
        return;
    }
}