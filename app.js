let currentRunningSum = 0;
let buffer = '0';
let previousSymbol = null;

const screen = document.querySelector('.screen');

function buttonClick(clickedButton) {
  if (isNaN(parseInt(clickedButton))) {
    handleSymbol(clickedButton);
  } else {
    handleBufferNumber(clickedButton);
  }
  screen.innerText = buffer;
}

function handleSymbol(symbol) {
  switch (symbol) {
    case 'C':
      buffer = '0', currentRunningSum = 0
      break;
    case '=': 
      if (previousSymbol === null) return 
      doMathFn(+buffer)
      previousSymbol = null
      buffer = currentRunningSum 
      currentRunningSum = 0
      break
    case '←': 
      if (buffer.length <= 1) buffer = '0'
      buffer = buffer.slice(0, -1)
      break
    case '+':
    case '-':
    case '*':
    case '/':
      handleMath(symbol);
      break;
  }
}

function handleMath(symbol) {
  if (buffer === '0') return;
  const intBuffer = +buffer;
  if (currentRunningSum === 0) {
    currentRunningSum = intBuffer;
  } else {
    doMathFn(intBuffer);
  }
  previousSymbol = symbol;
  buffer = '0';
}

function doMathFn(int) {
  if (previousSymbol === '+') {
    currentRunningSum += int;
  } else if (previousSymbol === '-') {
    currentRunningSum -= int;
  } else if (previousSymbol === '*') {
    currentRunningSum *= int;
  } else if (previousSymbol === '/') {
    currentRunningSum /= int;
  }
}



function handleBufferNumber(number) {
  buffer === '0' ? (buffer = number) : (buffer += number);
}

function init() {
  document.querySelector('.calc-buttons').addEventListener('click', (event) => {
    buttonClick(event.target.innerText);
  });
}

init();
