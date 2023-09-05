let display = document.getElementById('display');
let currentValue = '';

function appendToDisplay(value) {
  currentValue += value;
  display.value = currentValue;
}

function clearDisplay() {
  currentValue = '';
  display.value = '';
}

function calculate() {
  try {
    currentValue = eval(currentValue); 
    display.value = currentValue;
  } catch (error) {
    display.value = 'Error';
    currentValue = '';
  }
}

function calculatePercentage() {
  try {
    currentValue = eval(currentValue + '/100');
    display.value = currentValue;
  } catch (error) {
    display.value = 'Error';
    currentValue = '';
  }
}

function calculateSquareRoot() {
  try {
    currentValue = Math.sqrt(eval(currentValue));
    display.value = currentValue;
  } catch (error) {
    display.value = 'Error';
    currentValue = '';
  }
}
