"use strict";

let currentInput = "";
let display = document.querySelector("#display");

const updateDisplay = () => {
  display.textContent = currentInput || "0";
};

const appendNumber = (num) => {
  currentInput += num;
  updateDisplay();
};

const appendOperator = (op) => {
  if (currentInput === "") return;
  const lastChar = currentInput.slice(-1);
  if ("+-*/%".includes(lastChar)) {
    currentInput = currentInput.slice(0, -1);
  }
  currentInput += op;
  updateDisplay();
};

const appendDot = () => {
  const parts = currentInput.split(/[\+\-\*\/%]/);
  if (!parts[parts.length - 1].includes(".")) {
    currentInput += ".";
    updateDisplay();
  }
};

const clearDisplay = () => {
  currentInput = "";
  updateDisplay();
};

const deleteLast = () => {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
};

const calculateResult = () => {
  try {
    currentInput = parseFloat(eval(currentInput.replace(/%/g, "/100"))).toFixed(2).toString();
    updateDisplay();
  } catch {
    currentInput = "Error";
    updateDisplay();
  }
};
