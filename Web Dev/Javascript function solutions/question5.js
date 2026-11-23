// Question 5: Employee Salary Processing System
// A company wants to calculate the monthly salary of its employees.
// Every employee receives a basic salary. In addition:
// • Employees receive a 10% bonus if their basic salary is Rs. 40,000 or above.
// • Employees receive a 5% bonus if their basic salary is below Rs. 40,000.
// • Every employee has a fixed tax deduction of 5% from their basic salary.
// Your task:
// 1. Create an arrow function calculateBonus(salary) that returns the bonus amount.
// 2. Create an arrow function calculateTax(salary) that returns the tax amount.
// 3. Create an arrow function calculateNetSalary(salary, bonusCallback,
// taxCallback) that accepts two callback functions.
// 4. Use those callbacks to calculate the final salary.
// 5. Create another arrow function generatePayslip(name, salary, callback) that
// displays the employee's payslip.


const calculateBonus = (salary) => {
    if (salary >= 40000) {
        return salary * 0.10;
    }
    else {
        return salary * 0.05;
    }
};
 
const calculateTax = (salary) => {
    return salary * 0.05;
};

const calculateNetSalary = (salary, bonusCallback, taxCallback) => {
    let bonus = bonusCallback(salary);
    let tax = taxCallback(salary);

    return salary + bonus - tax;
};

const generatePayslip = (name, salary, callback) => {
    let bonus = calculateBonus(salary);
    let tax = calculateTax(salary);
    let netSalary = callback(salary, calculateBonus, calculateTax);

    console.log("Employee:", name);
    console.log("Basic Salary: Rs.", salary);
    console.log("Bonus: Rs.", bonus);
    console.log("Tax: Rs.", tax);
    console.log("Net Salary: Rs.", netSalary);
};

generatePayslip("Ram", 50000, calculateNetSalary);
