// Question 6: Food Delivery Charge Calculator
// A food delivery company calculates delivery charges based on the distance between the
// restaurant and the customer.
// The delivery charge is:
// • First 2 km: Rs. 30
// • Every additional kilometre: Rs. 15
// Additionally:
// • If the order amount is Rs. 1,000 or above, delivery is free.
// • Otherwise, the customer must pay the calculated delivery charge.
// Your task:
// 1. Create an arrow function calculateDelivery(distance) that returns the delivery
// charge.
// 2. Create an arrow function checkFreeDelivery(orderAmount) that returns whether the
// order qualifies for free delivery.
// 3. Create an arrow function processOrder(customer, distance, orderAmount,
// callback) that accepts a callback to calculate the final delivery charge.
// 4. Display the customer's name, order amount, distance, and delivery charge.



const calculateDelivery = (distance) => {
    if (distance <= 2) {
        return 30;
    }
    else {
        return 30 + (distance - 2) * 15;
    }
};

const checkFreeDelivery = (orderAmount) => {
    return orderAmount >= 1000;
};

const processOrder = (customer, distance, orderAmount, callback) => {
    let deliveryCharge = callback(distance, orderAmount);

    console.log("Customer:", customer);
    console.log("Order Amount: Rs.", orderAmount);
    console.log("Distance:", distance, "km");
    console.log("Delivery Charge: Rs.", deliveryCharge);
};

const getDeliveryCharge = (distance, orderAmount) => {
    if (checkFreeDelivery(orderAmount)) {
        return 0;
    }
    else {
        return calculateDelivery(distance);
    }
};

processOrder("Shyam", 5, 800, getDeliveryCharge);
