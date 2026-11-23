// Question 9: Mobile Recharge System
// A telecom company wants to automate its mobile recharge system.
// The company provides the following recharge offers:
// Recharge amount Bonus
// Rs. 1,000 or above 15%
// Rs. 500 or above 10%
// Rs. 100 or above 5%
// Below Rs. 100 No bonus
// The bonus is added to the customer's main recharge amount.
// Your task:
// 1. Create an arrow function calculateBonus(amount) that returns the bonus amount.
// 2. Create an arrow function calculateTotalBalance(amount, bonus) that returns the
// total balance.
// 3. Create an arrow function recharge(number, amount, callback) that accepts a
// callback to process the recharge.
// 4. Display the mobile number, recharge amount, bonus received, and total balance credited.


const calculateBonus = (amount) => {
    if (amount >= 1000) {
        return amount * 0.15;
    }
    else if (amount >= 500) {
        return amount * 0.10;
    }
    else if (amount >= 100) {
        return amount * 0.05;
    }
    else {
        return 0;
    }
};

const calculateTotalBalance = (amount, bonus) => {
    return amount + bonus;
};

const recharge = (number, amount, callback) => {
    let bonus = calculateBonus(amount);
    let total = callback(amount, bonus);

    console.log("Mobile Number:", number);
    console.log("Recharge Amount: Rs.", amount);
    console.log("Bonus Received: Rs.", bonus);
    console.log("Total Balance: Rs.", total);
};

recharge("9800000000", 1000, calculateTotalBalance);
