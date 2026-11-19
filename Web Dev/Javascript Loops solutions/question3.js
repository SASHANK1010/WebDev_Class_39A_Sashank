// 3. Leap Year Checker
// • Task: Determine if a given year is a leap year.
// • Rule: A year is a leap year if it is divisible by 4 and not
// divisible by 100, or if it is divisible by 400

let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a leap year.");
}
else {
    console.log(year + " is not a leap year.");
}
