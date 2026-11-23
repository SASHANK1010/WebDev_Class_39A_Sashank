// Question 3: Online Shopping Discount System
// An online shopping platform provides discounts based on the customer's purchase amount.
// The discount rules are:
// Purchase amount Discount
// Rs. 5,000 or above 20%
// Rs. 3,000 or above 15%
// Rs. 1,000 or above 10%
// Below Rs. 1,000 No discount
// Your task:
// 1. Create an arrow function calculateDiscount(amount) that returns the discount
// percentage.
// 2. Create an arrow function calculateFinalPrice(amount, discount) that calculates
// the final price after applying the discount.
// 3. Create an arrow function checkout(customerName, amount, callback) that accepts a
// callback function.
// 4. Pass the necessary calculation function as a callback to calculate the final price.
// 5. Display the original price, discount, and final price



const calculateDiscount = (amount) => {
    if (amount >= 5000) {
        return 20;
    }
    else if (amount >= 3000) {
        return 15;
    }
    else if (amount >= 1000) {
        return 10;
    }
    else {
        return 0;
    }
};


const calculateFinalPrice = (amount, discount) => {
    return amount - (amount * discount / 100);
};

const checkout = (customerName, amount, callback) => {
    let discount = calculateDiscount(amount);
    let finalPrice = callback(amount, discount);

    console.log("Customer:", customerName);
    console.log("Original Price: Rs.", amount);
    console.log("Discount:", discount + "%");
    console.log("Final Price: Rs.", finalPrice);
};

checkout("Nikesh", 6000, calculateFinalPrice);
