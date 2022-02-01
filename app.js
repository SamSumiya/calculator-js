let currentRunningSum = 0 
let buffer = '0'
let previousSymbol; 

const screen = document.querySelector('.screen')


function buttonClick(clickedButton) {
  if (isNaN(parseInt(clickedButton))) {
    handleSymbol(clickedButton)
  } else {
    handleNumber(clickedButton)
  }
  screen.innerText = buffer;
}

function handleSymbol(symbol) {
  switch (symbol) {
    // case 'C':
  }
}


function handleNumber(number) {
  buffer === '0' ? buffer = number : buffer += number
 
  screen.innerText = buffer
}

function init() {
  document
    .querySelector('.calc-buttons')
    .addEventListener('click', (event) => {
     buttonClick(event.target.innerText)
    })
}

init()