// Question 4: Movie Ticket Booking System
// A cinema hall has introduced an automated ticket booking system.
// Ticket prices depend on the customer's age:
// • Children below 12 years: Rs. 150
// • Teenagers between 12 and 17: Rs. 200
// • Adults between 18 and 59: Rs. 300
// • Senior citizens aged 60 or above: Rs. 200
// The cinema also offers a 10% discount if a customer books 5 or more tickets.
// Your task:
// 1. Create an arrow function getTicketPrice(age) that returns the ticket price.
// 2. Create an arrow function calculateTotal(price, quantity) that calculates the total
// amount.
// 3. Create an arrow function applyDiscount(total, quantity) that applies the discount
// when applicable.
// 4. Create an arrow function bookTicket(name, age, quantity, callback) that accepts
// a callback to process the booking.
// 5. Display the customer's name, ticket quantity, and final amount


const getTicketPrice = (age) => {
    if (age < 12) {
        return 150;
    }
    else if (age <= 17) {
        return 200;
    }
    else if (age <= 59) {
        return 300;
    }
    else {
        return 200;
    }
};

const calculateTotal = (price, quantity) => {
    return price * quantity;
};

const applyDiscount = (total, quantity) => {
    if (quantity >= 5) {
        return total * 0.10;
    }
    else {
        return 0;
    }
};

const bookTicket = (name, age, quantity, callback) => {
    let price = getTicketPrice(age);
    let total = calculateTotal(price, quantity);
    let discount = callback(total, quantity);
    let finalAmount = total - discount;

    console.log("Customer:", name);
    console.log("Age:", age);
    console.log("Tickets:", quantity);
    console.log("Total Before Discount: Rs.", total);
    console.log("Discount: Rs.", discount);
    console.log("Final Amount: Rs.", finalAmount);
};

bookTicket("Hari", 25, 5, applyDiscount);
