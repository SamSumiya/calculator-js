let currentRunningSum = 0;
let buffer = '0';
let previousSymbol;

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
      (buffer = '0'), (currentRunningSum = 0);
      break;
    case '+':
    case '-':
    case '*':
    case '/':
      handleMath(symbol);
      break;
  }
}

function handleMath(symbol) {
  if (currentRunningSum === '0') return;

  const intBuffer = +buffer;
  if (intBuffer === 0) {
    currentRunningSum = intBuffer;
  } else {
    doMathFn(intBuffer);
  }
  previousSymbol = symbol;
  buffer = 0;
}

function doMathFn(number) {
  if (previousSymbol === '+') {
    currentRunningSum += number;
  } else if (previousSymbol === '-') {
    currentRunningSum -= number;
  } else if (previousSymbol === '*') {
    currentRunningSum *= number;
  } else if (previousSymbol === '/') {
    currentRunningSum /= number;
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
