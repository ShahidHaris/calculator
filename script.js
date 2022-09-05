const numberKeys = document.querySelectorAll('[data-number]');
const operationKeys = document.querySelectorAll('[data-function]');
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

operationKeys.forEach(key => {
    key.addEventListener('click', (e) => {
        computation()

        resultConsole.innerText = mainConsole.innerText;
        operation = e.target.innerText;
        mainConsole.innerText = '';
        console = '';
    })
})

clearKey.addEventListener('click', cleared)
deleteKey.addEventListener('click', deleteEntry)
equalsKey.addEventListener('click', computation);

function updateDisplay(clicked) {
    if (clicked === '.' && mainConsole.innerText.includes('.')) return;
    console += clicked;
    mainConsole.innerText = console;
}

function computation() {
    if (mainConsole.innerText === '') return;
    if (resultConsole.innerText && mainConsole.innerText && operation) {
        operate();
    }
}

function cleared() {
    mainConsole.textContent = '';
    resultConsole.textContent = '';
    console2 = '';
}

function deleteEntry() {
    mainConsole.innerText = mainConsole.innerText.toString().slice(0, -1);
    console = mainConsole.innerText;
}

function operate() {
    let a = parseFloat(resultConsole.innerText);
    let b = parseFloat(mainConsole.innerText);
    if (operation == '+') {
        result = a + b;
    } else if (operation == '-') {
        result = a - b;
    } else if (operation == 'x') {
        result = a * b;
    } else if (operation == '÷') {
        result = a / b;
    } else {
        return;
    }

    if (result == Infinity) result = 0;
    mainConsole.innerText = Math.round(result * 10) / 10;
    operation = undefined;
    resultConsole.innerText = '';
}

window.addEventListener('keydown', (e) => {
    if (e.key == '0' || e.key == '1' || e.key == '2' ||
        e.key == '3' || e.key == '4' || e.key == '5' ||
        e.key == '6' || e.key == '7' || e.key == '8' ||
        e.key == '9' || e.key == '.') {
        displayNumber(e.key)
    } else if (e.key == '+' || e.key == '-') {
        displayOperaion(e.key)
    } else if (e.key == '/') {
        displayOperaion('÷')
    } else if (e.key === '*') {
        displayOperaion('x')
    } else if (e.key == 'Enter' || e.key == '=') {
        displayEquals(e.key)
    } else if (e.keyCode == '8') {
        clickDelete(e.keyCode);
    }
});

function displayNumber(key) {
    numberKeys.forEach(button => {
        if (button.innerText == key) {
            button.click();
        }
    })
}

function displayOperaion(key) {
    operationKeys.forEach(operation => {
        if (operation.innerText === key) {
            operation.click();
        }
    })
}

function displayEquals() {
    equalsKey.click();
}

function clickDelete() {
    deleteKey.click();
}