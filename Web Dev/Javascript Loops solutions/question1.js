// 1. Shopping Discount
// • Task: Calculate the final price of an item based on a
// purchaseAmount:
// • $100 or more: 20% discount
// • $50 to $99.99: 10% discount
// • Under $50: No discount

let purchaseAmount = 150;
let discount = 0;

if (purchaseAmount >= 100) {
    discount=20;
}
else if (purchaseAmount >= 50) {
    discount=10;
}
else {
    discount=0;
}
let finalprice = purchaseAmount - (purchaseAmount * discount / 100);
console.log("purchaseAmount: $" + purchaseAmount);
console.log("Discount: " + discount + "%");
console.log("Final Price: $" + finalprice.toFixed(2));