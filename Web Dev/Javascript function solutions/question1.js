// Question 1: Smart Electricity Bill Calculator
// A local electricity authority wants to automate its monthly electricity billing system.
// The electricity charge depends on the number of units consumed:
// Units consumed Rate per unit
// First 20 units Rs. 5
// Next 30 units Rs. 7
// Above 50 units Rs. 10
// The authority also charges a fixed service fee of Rs. 50.
// Your task:
// 1. Create an arrow function calculateBill(units) that calculates the total electricity bill.
// 2. Create another arrow function displayBill(name, units, callback) that accepts a
// customer's name, consumed units, and a callback function.
// 3. The callback should calculate the bill and return the amount.
// 4. Display the customer's name, consumed units, and final bill.

const calculateBill = (units) => {
    let bill = 0;
    if (units <= 20) {
        bill = units * 5;
    }
    else if (units <= 50) {
        bill = (20 * 5) + ((units - 20) * 7);
    }
    else {
        bill = (20 * 5) + (30 * 7) + ((units - 50) * 10);
    }
    return bill + 50; 
};
const displayBill = (name, units, callback) => {
    let totalBill = callback(units);
    console.log(`Customer Name: ${name}`);
    console.log(`Units Consumed: ${units}`);
    console.log(`Total Bill: Rs. ${totalBill}`);
};
displayBill("John Doe", 60, calculateBill);
