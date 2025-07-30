const result = document.querySelector("#result");
const second = document.querySelector("#second");
let firstNumber = "";
let secondNumber = "";

function clearAll() {
  firstNumber = "";
  secondNumber = "";
  result.textContent = "";
  second.textContent = "";
}

function add(a, b) {
  return parseFloat(a) + parseFloat(b);
}

function subtract(a, b) {
  return parseFloat(a) - parseFloat(b);
}

function multiply(a, b) {
  return parseFloat(a) * parseFloat(b);
}

function divide(a, b) {
  return parseFloat(a) / parseFloat(b);
}

const operandas = ["+", "-", "/", "*"];

function operate() {
  let operator = secondNumber.charAt(secondNumber.length - 2);
  switch (operator) {
    case "+":
      firstNumber = add(secondNumber.slice(0, -2), firstNumber);
      result.textContent = firstNumber;
      secondNumber = 0;
      break;
    case "-":
      firstNumber = subtract(secondNumber.slice(0, -2), firstNumber);
      result.textContent = firstNumber;
      secondNumber = 0;
      break;
    case "*":
      firstNumber = multiply(secondNumber.slice(0, -2), firstNumber);
      result.textContent = firstNumber;
      secondNumber = 0;
      break;
    case "/":
      firstNumber = divide(secondNumber.slice(0, -2), firstNumber);
      result.textContent = firstNumber;
      secondNumber = 0;
      break;
    default:
      break;
  }
}
function addNumber(a) {
  if (operandas.includes(a[a.length - 2])) {
    if (operandas.includes(secondNumber[secondNumber.length - 2])) {
      operate();
    }
    secondNumber = firstNumber + a;
    second.textContent = result.textContent + a;
    firstNumber = "";
  } else {
    firstNumber += a.toString();
    result.textContent = firstNumber;
  }
}
