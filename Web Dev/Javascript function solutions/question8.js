// Question 8: Restaurant Order Management System
// A restaurant wants to automate its food ordering system.
// The restaurant offers the following items:
// Food item Price
// Burger Rs. 250
// Pizza Rs. 500
// Momo Rs. 150
// Chowmein Rs. 180
// Customers can order any one of these items in any quantity.
// The restaurant also applies a 5% service charge to the total food amount.
// Your task:
// 1. Create an arrow function getFoodPrice(foodName) that returns the price of the selected
// food.
// 2. Create an arrow function calculateServiceCharge(total) that calculates the service
// charge.
// 3. Create an arrow function calculateOrder(foodName, quantity, callback) that
// accepts a callback to calculate the food amount.
// 4. Create an arrow function generateReceipt(customerName, foodName, quantity,
// callback) that generates the final receipt.
// 5. Display the food name, quantity, food amount, service charge, and final amount.


// Get food price
const getFoodPrice = (foodName) => {
    if (foodName === "Burger") {
        return 250;
    }
    else if (foodName === "Pizza") {
        return 500;
    }
    else if (foodName === "Momo") {
        return 150;
    }
    else if (foodName === "Chowmein") {
        return 180;
    }
    else {
        return 0;
    }
};

const calculateServiceCharge = (total) => {
    return total * 0.05;
};

const calculateOrder = (foodName, quantity, callback) => {
    let price = getFoodPrice(foodName);

    if (price === 0) {
        return 0;
    }

    return callback(price, quantity);
};

const generateReceipt = (customerName, foodName, quantity, callback) => {
    let foodAmount = callback(foodName, quantity);

    if (foodAmount === 0) {
        console.log("Invalid food item!");
        return;
    }

    let serviceCharge = calculateServiceCharge(foodAmount);
    let finalAmount = foodAmount + serviceCharge;

    console.log("Customer:", customerName);
    console.log("Food:", foodName);
    console.log("Quantity:", quantity);
    console.log("Food Amount: Rs.", foodAmount);
    console.log("Service Charge: Rs.", serviceCharge);
    console.log("Final Amount: Rs.", finalAmount);
};

generateReceipt("Suman", "Burger", 2, calculateOrder);
