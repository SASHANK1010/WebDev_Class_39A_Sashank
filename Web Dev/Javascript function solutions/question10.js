// Question 10: Smart Function Based Calculator
// You are developing a calculator application that can perform four mathematical operations:
// • Addition
// • Subtraction
// • Multiplication
// • Division
// Instead of writing separate conditions for every calculation inside one large function, you must
// create a callback based calculator.
// Your task:
// 1. Create four arrow functions:
// o add(a, b)
// o subtract(a, b)
// o multiply(a, b)
// o divide(a, b)
// 2. Create an arrow function calculate(a, b, operationCallback) that accepts two
// numbers and a callback function.
// 3. Pass the appropriate operation function as a callback when calling calculate().
// 4. Display the result of each operation.
// 5. Handle division by zero appropriately


const add = (a, b) => {
    return a + b;
};

const subtract = (a, b) => {
    return a - b;
};

const multiply = (a, b) => {
    return a * b;
};

const divide = (a, b) => {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    else {
        return a / b;
    }
};

const calculate = (a, b, operationCallback) => {
    return operationCallback(a, b);
};

console.log("Addition:", calculate(20, 10, add));
console.log("Subtraction:", calculate(20, 10, subtract));
console.log("Multiplication:", calculate(20, 10, multiply));
console.log("Division:", calculate(20, 10, divide));
console.log("Division:", calculate(20, 0, divide));
