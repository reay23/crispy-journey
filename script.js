// Get the display input field 
const display = document.getElementById("display"); 
// Get all buttons 
const buttons = document.querySelectorAll(".btn"); 
// Variable to store current input 
let currentInput = ""; 
// Add event listeners to buttons
buttons.forEach(button => { button.addEventListener("click", function() { 
const value = this.textContent; 
if (value === "C") { 
  // Clear the display
 currentInput = ""; display.value = ""; 
} else if (value === "=") { 
  try { 
    // Evaluate the expression 
  currentInput = eval(currentInput).toString(); 
  display.value = currentInput; 
} catch (error) { 
  display.value = "Error"; 
} } else { 
  // Append the clicked button value to the input 
currentInput += value; display.value = currentInput; 
} }); 
});