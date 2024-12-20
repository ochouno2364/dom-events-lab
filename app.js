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



/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/



calculator.addEventListener('click', (event)=> {    // add event listener click to the entire calculator
  if (event.target.classList.contains('number')) { // if it containes a number 
    displayEl.textContent = displayEl.textContent + event.target.textContent; // show the number(s) in the display
    
    
  }

  // Example
  if (event.target.innerText === 'C') { // if the string is C clear the display
    displayEl.textContent = "";
  } else if (event.target.innerText === '*') {
    displayEl.textContent = displayEl.textContent + "*";
  } else if (event.target.innerText === '+') {
    displayEl.textContent = displayEl.textContent + "+"; // display each operator 
  } else if (event.target.innerText === '-') {
    displayEl.textContent = displayEl.textContent + "-";
  } else if (event.target.innerText === '/') {
    displayEl.textContent = displayEl.textContent + "/";
  } else if (event.target.innerText === '=') {
    result(); // call the result function
  }
    });


    function result() {
      displayEl.textContent = eval(displayEl.textContent) // use the result function to evaluate everything in the display
    }
    

