
// A calculator script that can add, subtract, multiply and divide and show its operations/results on a screen


const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const formatButtons = document.querySelectorAll('[data-format]')
const equalsButton = document.querySelector('[data-equals]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')





// Operate function that takes two numbers and an operator, and returns the result
    
function operate(a, b, operator) {
    // If operator equals the given operator 
    // Return that operation passing in a and b 

    if (operator === '+') {
        return a + b;
    } else if (operator === '-') {
        return a - b;
    } else if (operator === '*') {
        return a * b;
    } else if (operator === '/') {
        return a / b;
    }
}

    
    
    
    
function updateDisplay() { 
    // Display zero by default
    // If user inputs a number or a string 
    
    // If an operator after a number 
    // Or a number after an operator 
    
    // Clear the display
    // Evaluate the equation if possible 
    // Update it to show new number 
    
    // If the number is long, round it 
    
    // Make sure equals only works with all operators/ numbers added
    
    // If user tries to divide by zero, send them an error message
    }
    
function clear() {
    // Wipe the current memory
    // Wipe display and reset to zero  
}
    
    