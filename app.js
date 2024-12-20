// As a user, I want to be able to select numbers so that I can perform operations with them.
// As a user, I want to be able to add two numbers together.
// As a user, I want to be able to subtract one number from another.
// As a user, I want to be able to multiply two numbers together.
// As a user, I want to be able to divide one number by another.
// As a user, I want to be able to see the output of the mathematical operation.
// As a user, I want to be able to clear all operations and start from 0

/*-------------------------------- Constants --------------------------------*/
const displayEl = document.querySelector('.display');
const clear = document.getElementById('#clear');
const plus = document.getElementById('#plus');
const divide = document.getElementById('#divide');
const equals = document.getElementById('#equals');
const add = document.getElementById('#add');
 
/*-------------------------------- Variables --------------------------------*/

let firstOperand = 0;
let secondOperand = 0;
let operator = "";
let result = 0;


/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
// buttons.forEach((button)=> {
//     button.addEventListener("click",()=> { 
//         displayAnswerTextElement.append(button.innerText);
//         calculator.update();
        

//     });
// });


calculator.addEventListener('click', (event)=> {    
  if (event.target.classList.contains('number')) {
    displayEl.textContent = displayEl.textContent + event.target.textContent;
    
    
  }

  // Example
  if (event.target.innerText === 'C') {
    displayEl.textContent = "";
  } else if (event.target.innerText === '*') {
    displayEl.textContent = displayEl.textContent + "*";
  } else if (event.target.innerText === '+') {
    displayEl.textContent = displayEl.textContent + "+";
  } else if (event.target.innerText === '-') {
    displayEl.textContent = displayEl.textContent + "-";
  } else if (event.target.innerText === '/') {
    displayEl.textContent = displayEl.textContent + "/";
  } else if (event.target.innerText === '=') {
    displayEl.textContent;
  }
    });




