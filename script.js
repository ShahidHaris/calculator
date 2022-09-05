const numberKeys = document.querySelectorAll('[data-number]');
const functionKeys = document.querySelectorAll('[data-function]');
const deleteKey = document.querySelector('[data-delete]');
const clearKey = document.querySelector('[data-clear]');
const equalsKey = document.querySelector('[data-equals]');
const mainConsole = document.querySelector('[data-main-console]');
const resultConsole = document.querySelector('[data-result-console]');

// Initials
let console = '';
let operation = '';
let result = null;


numberKeys.forEach(key => {
    key.addEventListener('click', (e) => {
        updateDisplay(e.target.innerText);
    });
});

function updateDisplay(clicked) {
    if (clicked === '.' && mainConsole.innerText.includes('.')) return;
    console += clicked;
    mainConsole.innerText = console;
}


functionKeys.forEach(key => {
    key.addEventListener('click', (e) => {
        computation()

        resultConsole.innerText = mainConsole.innerText;
        operation = e.target.innerText;
        mainConsole.innerText = '';
        console = '';
    })
})

function computation() {
    if (mainConsole.innerText === '') return;
    if (resultConsole.innerText && mainConsole.innerText && operation) {
        operate();
    }
}

clearKey.addEventListener('click', clear)
deleteKey.addEventListener('click', deleteEntry)
equalsKey.addEventListener('click', computation);

function clear() {
    mainConsole.textContent = '';
    resultConsole.textContent = '';
    console2 = '';
}

function deleteEntry() {
    mainConsole.innerText = mainConsole.innerText.toString().slice(0, -1);
    console = '';
    if (clicked === '.' && mainConsole.innerText.includes('.')) return;
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

function operate() {
    let a = parseFloat(resultConsole.innerText);
    let b = parseFloat(mainConsole.innerText);
    if (operation == '+') {
        result = add(a, b)
    } else if (operation == '-') {
        result = subtract(a, b)
    } else if (operation == '*') {
        result = multiply(a, b)
    } else if (operation == '÷') {
        result = divide(a, b)
    } else {
        return;
    }

    if (result == Infinity) result = 0;
    mainConsole.innerText = Math.round(result * 10) / 10;
    operation = undefined;
    resultConsole.innerText = '';
}

// Set Up Keydown