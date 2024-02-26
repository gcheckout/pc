// scripts.js

// Function to check if all input fields are filled
function checkInputs() {
  const inputs = document.querySelectorAll('.inputs');
  let allFilled = true;
  
  inputs.forEach(input => {
    if (input.value.trim() === '') {
      allFilled = false;
      return;
    }
  });
  
  return allFilled;
}

// Function to change the background color of the button
function updateButtonBackground() {
  //console.log('Input changed'); // Debugging statement
  const button = document.querySelector('.buttons');
  if (checkInputs()) {
    //console.log('All fields filled'); // Debugging statement
    button.classList.add('active'); // Add new class when all fields are filled
  } else {
    //console.log('Not all fields filled'); // Debugging statement
    button.classList.remove('active'); // Remove class if fields are not filled
  }
}

// Add event listeners to input fields to check for changes
const inputs = document.querySelectorAll('.inputs');
inputs.forEach(input => {
  input.addEventListener('input', updateButtonBackground);

});

// Get the input element
const inputElement = document.getElementById('creditCardInput');

// Add an event listener to listen for the 'input' event
inputElement.addEventListener('input', function(event) {
  //console.log('Input event triggered'); // Log message to confirm event triggering

  // Get the current value of the input field
  let value = inputElement.value;
  //console.log('Current value:', value); // Log current value

  // Remove any non-digit characters from the input value
  value = value.replace(/\D/g, '');
  //console.log('Value after removing non-digits:', value); // Log value after removing non-digits

  // Limit the input to 16 digits
  if (value.length > 16) {
    value = value.slice(0, 16);
    //console.log('Value after limiting to 16 digits:', value); // Log value after limiting
  }

  // Add space every four digits
  value = value.replace(/(\d{4})(?=\d)/g, '$1 ');
  //console.log('Value after adding spaces:', value); // Log value after adding spaces

  // Update the value of the input field
  inputElement.value = value;

  
});

const creditCardInput = document.getElementById('creditCardInput');
const textWrapper = document.querySelector('.cardNumber');

const errorText = document.createElement('div');
errorText.textContent = 'Your card number is incomplete';
errorText.classList.add('error-text');
creditCardInput.parentNode.appendChild(errorText); // Append error text to the parent of the input field

creditCardInput.addEventListener('blur', function() {
  const cardNumberValue = creditCardInput.value;
  
 if (!cardNumberValue) {
    creditCardInput.classList.remove('error'); // Remove error class from input
    removeErrorClass(textWrapper);
    errorText.style.display = 'none'; // Hide error text
  } else if (cardNumberValue.length < 16) {
    creditCardInput.classList.add('error'); // Add error class to input
    addErrorClass(textWrapper);
    errorText.style.display = 'block'; // Show error text
  } else {
    creditCardInput.classList.remove('error'); // Remove error class from input
    removeErrorClass(textWrapper);
    errorText.style.display = 'none'; // Hide error text
  }
});


// Get the card scheme icon element
const cardSchemeIcon = document.getElementById('cardSchemeIcon');

// Add an event listener to listen for the 'input' event
inputElement.addEventListener('input', function(event) {
  // Get the current value of the input field
  let value = inputElement.value;

  // Check if the input value has at least two digits
  if (value.length >= 2) {
    // Extract the first two digits
    const firstTwoDigits = value.substring(0, 2);

  
    // Check if the first two digits are '42'
    if (firstTwoDigits === '42') {
      // Add the class to display the card scheme icon
      cardSchemeIcon.classList.add('visa');
    } else {
      // Remove the class to hide the card scheme icon
      cardSchemeIcon.classList.remove('visa');
    }
  } else {
    // Remove the class to hide the card scheme icon if less than two digits are entered
    cardSchemeIcon.classList.remove('visa');
  }
});


// Get the expiry date input element
const expiryDateInput = document.getElementById('expiryDateInput');

// Add an event listener to listen for input events
expiryDateInput.addEventListener('input', function(event) {
  // Get the current value of the input field
  let value = expiryDateInput.value;

  // Remove any non-numeric characters from the input value
  value = value.replace(/\D/g, '');

  // Format the input value as MM / YY
  if (value.length > 2) {
    value = value.substring(0, 2) + ' / ' + value.substring(2, 4);
  }

  // Update the input field value
  expiryDateInput.value = value;
});

// Get the input element
const cvvElement = document.getElementById('cvvInput');

// Add an event listener to listen for the 'input' event
cvvElement.addEventListener('input', function(event) {
  //console.log('Input event triggered'); // Log message to confirm event triggering

  // Get the current value of the input field
  let value = cvvElement.value;
  //console.log('Current value:', value); // Log current value

  // Remove any non-digit characters from the input value
  value = value.replace(/\D/g, '');
  //console.log('Value after removing non-digits:', value); // Log value after removing non-digits

  // Limit the input to 3 digits
  if (value.length > 3) {
    value = value.slice(0, 3);
    //console.log('Value after limiting to 3 digits:', value); // Log value after limiting
  }

  // Update the value of the input field
  cvvElement.value = value;
});


// Function to add error class
function addErrorClass(element) {
  element.classList.add('error');
}

// Function to remove error class
function removeErrorClass(element) {
  element.classList.remove('error');
}

// Get the input elements

