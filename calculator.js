const calculatorArea = document.getElementsByClassName('calculator-container');
const numberArea = document.getElementById('output-area');

let number_btns = []
number_btns[0] = document.getElementById('0');
number_btns[1] = document.getElementById('1');
number_btns[2] = document.getElementById('2');
number_btns[3] = document.getElementById('3');
number_btns[4] = document.getElementById('4');
number_btns[5] = document.getElementById('5');
number_btns[6] = document.getElementById('6');
number_btns[7] = document.getElementById('7');
number_btns[8] = document.getElementById('8');
number_btns[9] = document.getElementById('9');

const btn_add = document.getElementById('+');
const btn_sub = document.getElementById('-');
const btn_mult = document.getElementById('*');
const btn_div = document.getElementById('/');

const btn_equal = document.getElementById('=');
const btn_clear = document.getElementById('clear');

// calculation functions
function add(numA, numB) {
  let sum = numA + numB;
  return sum;
}

function subtract(numA, numB) {
  let difference = numA - numB;
  return difference;
}

function multiply(numA, numB) {
  let product = numA * numB;
  return product;
}

function divide(numA, numB) {
  let quotient = numA / numB;
  return quotient;
}

function operate(operator, numA, numB) {
  switch(operator){
    case '+':
      return add(numA, numB);
      break;
    case '-':
      return subtract(numA, numB);
      break;
    case '*':
      return multiply(numA, numB);
      break;
    case '/':
      return divide(numA, numB);
      break;
    default:
      break;
  }
}

let currentNum = parseInt(numberArea.value);
let previousNum = '';
let currentOperator = '';

numberArea.addEventListener('change', function(){
  currentNum = parseInt(numberArea.value);
})

// assign number buttons with equivalent functions
for(let i = 0; i < 10; i++){
  number_btns[i].addEventListener('click', function(){
    numberArea.value += i;
    currentNum = parseInt(numberArea.value);
  });
}

btn_add.addEventListener('click', function(){
  previousNum = currentNum;
  currentOperator = '+';
  numberArea.value = '';
});

btn_sub.addEventListener('click', function(){
  previousNum = currentNum;
  currentOperator = '-';
  numberArea.value = '';
});

btn_mult.addEventListener('click', function(){
  previousNum = currentNum;
  currentOperator = '*';
  numberArea.value = '';
});

btn_div.addEventListener('click', function(){
  previousNum = currentNum;
  currentOperator = '/';
  numberArea.value = '';
});

btn_equal.addEventListener('click', function(){
  result = operate(currentOperator, previousNum, currentNum);
  numberArea.value = result;
  return result;
});

btn_clear.addEventListener('click', function(){
  numberArea.value = '';
  currentNum = NaN;
  previousNum = NaN;
  currentOperator = '';
});

