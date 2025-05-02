"use strict";

let currentInput = "";
let display = document.querySelector("#display");

const updateDisplay = () => {
  display.textContent = currentInput || "0";
};

const appendNumber = (num) => {
  const parts = currentInput.split(/[\+\-\*\/%]/);
  const lastPart = parts[parts.length - 1];

  if (lastPart === "0" && num === "0") return;
  if (lastPart === "0" && num !== "." && num !== "0") {
    currentInput = currentInput.slice(0, -1) + num;
  } else {
    currentInput += num;
  }
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
    currentInput = eval(currentInput.replace(/%/g, "/100")).toString();
    updateDisplay();
  } catch {
    currentInput = "Error";
    updateDisplay();
  }
};
