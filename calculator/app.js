let firstVal = null;
let secondVal = null;
let operator = null;
let input = 'NaN';

function add (a,b){
  return a + b;
}
function subtract(a,b){
  return a - b;
}
function multiply(a,b){
  return a * b;
}
function divide(a,b){
  return a / b;
}
function operate(valA, operator, valB){
  if(operator === '+'){
    return add(valA, valB);
  }if(operator === '-'){
    return subtract(valA, valB);
  }if(operator === '*' || operator === 'x'){
    return multiply(valA, valB);
  }if(operator === '/'){
    return divide(valA, valB);
  }else{
    return 'INVALID OPERATOR'
  }
}

const display = document.querySelector('.calcDisplay');
display.textContent = input;

function updateInput(val){
  if(input === 'NaN'){
    input = val;
  }else{
    input += '' + val;
  }
  display.textContent = input;
}
function updateValues(val){
  if(operator === null && firstVal !== null){
    firstVal = null;
  }
  if(operator === null) {
    if(firstVal === null){
      firstVal = val;
    }else{
      firstVal += '' + val;
    }
  }else{
    if(secondVal === null){
      secondVal = parseFloat(val);
    }else{
      secondVal += '' + val;
    }
  }
}
function updateOperator(val){
  if(operator === null){
  operator = val;
  }else{
    firstVal = operate(parseFloat(firstVal), operator, parseFloat(secondVal))
    operator = val;
    secondVal = null;
  }
}

const buttons = document.querySelectorAll('input');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    updateInput(button.value);
  })
})
const opBtns = document.querySelectorAll('.operBtn');
opBtns.forEach((button) => {
  button.addEventListener('click', () => {
    updateOperator(button.value);
  })
})
const numBtns = document.querySelectorAll('.numBtn');
numBtns.forEach((button) => {
  button.addEventListener('click', () => {
    updateValues(button.value);
  })
})
const clearBtn = document.querySelector('.clearBtn');
clearBtn.addEventListener('click', () => {
  input = 'NaN';
  firstVal = null;
  secondVal = null;
  operator = null;
  display.textContent = input;
})
const calcBtn = document.querySelector('.calcBtn');
calcBtn.addEventListener('click', () => {
  input = operate(parseFloat(firstVal), operator, parseFloat(secondVal));
  display.textContent = input;
  console.log(firstVal, secondVal, operator, input);
  firstVal = parseFloat(input);
  input = 'NaN';
  secondVal = null;
  operator = null;
})