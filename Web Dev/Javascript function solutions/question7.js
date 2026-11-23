// Question 7: ATM Withdrawal System
// A bank wants to create a simple ATM withdrawal system.
// The system follows these rules:
// • A customer cannot withdraw more money than their available balance.
// • The withdrawal amount must be a multiple of 500.
// • A withdrawal fee of Rs. 25 is charged for every successful withdrawal.
// • If the withdrawal is unsuccessful, the balance must remain unchanged.
// Your task:
// 1. Create an arrow function validateWithdrawal(amount, balance) that checks whether
// the withdrawal is valid.
// 2. Create an arrow function withdrawMoney(amount, balance, callback) that accepts a
// callback to validate the transaction.
// 3. If the transaction is valid, deduct the withdrawal amount and transaction fee from the
// balance.
// 4. If invalid, display an appropriate error message.
// 5. Display the remaining balance after the transaction.


const validateWithdrawal = (amount, balance) => {
    if (amount <= 0) {
        return false;
    }
    else if (amount % 500 !== 0) {
        return false;
    }
    else if (amount + 25 > balance) {
        return false;
    }
    else {
        return true;
    }
};

const withdrawMoney = (amount, balance, callback) => {
    if (callback(amount, balance)) {
        balance = balance - amount - 25;

        console.log("Withdrawal Successful!");
        console.log("Transaction Fee: Rs. 25");
    }
    else {
        console.log("Withdrawal Failed!");
        console.log("Invalid amount or insufficient balance.");
    }

    console.log("Remaining Balance: Rs.", balance);
};

withdrawMoney(3000, 10000, validateWithdrawal);
