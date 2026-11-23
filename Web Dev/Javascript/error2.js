
// const displayMessage = () => {
//   message = "Hello, World!";}
// displayMessage();
// console.log(message);
// let removed



const convertToUppercase = (text) => {
return text.toUpperCase();
}
console.log(convertToUppercase("hello world"));
// 12345 to asc

const calculateGrade = (name, marks) => {
let grade = "";
if (marks >= 80) {
grade = "A";
} else if (marks >= 60) {
grade = "B";
} else if (marks >= 40) {
grade = "C";
} else {
grade = "Fail";
}
console.log("Student: " + name);
console.log("Marks: " + marks);
console.log("Grade: " + grade);
return grade;
}
const student1 = calculateGrade("Ram", 85);
const student2 = calculateGrade("Sita", 55);
console.log("Final Grade: " + student1); // bracket left
console.log("Final Grade: " + student2);



const calculateBill = (price, quantity, discount) => {
let subtotal = price * quantity;
let discountAmount = subtotal * (discount / 100);
let finalAmount = subtotal - discountAmount;
if (quantity <= 0) {
console.log("Invalid quantity");
return;
}
if (discount < 0 || discount > 100) {
console.log("Invalid discount");
return;
}
console.log("Subtotal: " + subtotal);
console.log("Discount: " + discountAmount);
console.log("Final Amount: " + finalAmount);
return finalAmount;
}
let bill1 = calculateBill(500, 3, 10);
let bill2 = calculateBill(1000, 2, 20);
console.log("Total payable: " + bill1);
console.log("Total payable: " + bill2);


const calculateSalary = (employee, basicSalary, bonus) => {
let totalSalary = basicSalary + bonus;
let tax = totalSalary * 0.10;
let netSalary = totalSalary - tax;
console.log("Employee: " + employee);
console.log("Basic Salary: " + basicSalary);
console.log("Bonus: " + bonus);
console.log("Tax: " + tax);
return netSalary;  
}
const employee1 = calculateSalary("Ram", 30000, 5000);
const employee2 = calculateSalary("Sita", 40000, 8000);
console.log("Ram's Salary: " + employee1);
console.log("Sita's Salary: " + employee2);

// salary spelling mistake



function countDown(n){
console.log(n);
return countDown(n-1);
}