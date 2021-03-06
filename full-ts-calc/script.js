var operationBtns = document.querySelectorAll('.operators > div');
var resultBtn = document.querySelector('#result');
var clearBtn = document.querySelector('#clear');
var numberBtns = document.querySelectorAll('.numbers > div:not(#clear)');
var display = document.querySelector('#input');
var leftNumber = '', rightNumber = '', operation = '', result = '';
var calculate = function () {
    var _left = Number(leftNumber);
    var _right = Number(rightNumber);
    var _result;
    switch (operation) {
        case '+':
            _result = _left + _right;
            break;
        case '-':
            _result = _left - _right;
            break;
        case '×':
            _result = _left * _right;
            break;
        case '÷':
            _result = _left / _right;
            break;
        default:
            return;
    }
    result = _result.toString();
};
var updateDisplay = function () {
    if (result !== '') {
        display.innerText = result;
    }
    else {
        display.innerText = leftNumber
            + operation
            + rightNumber;
    }
};
var clear = function () {
    leftNumber = '';
    rightNumber = '';
    operation = '';
    result = '';
};
var updateNumbers = function (number) {
    if (number === '.' && rightNumber.indexOf('.') > -1) {
        return;
    }
    rightNumber += number;
};
var updateOperation = function (opr) {
    leftNumber = rightNumber;
    rightNumber = '';
    operation = opr;
};
numberBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
        updateNumbers(btn.innerText);
        updateDisplay();
    });
});
operationBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
        updateOperation(btn.innerText);
        updateDisplay();
    });
});
clearBtn.addEventListener('click', function () {
    clear();
    updateDisplay();
});
resultBtn.addEventListener('click', function () {
    calculate();
    updateDisplay();
});
