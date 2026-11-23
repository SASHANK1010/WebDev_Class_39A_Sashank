// Question 2: Student Result Processing System
// A college wants to automate its student result processing system.
// Each student has marks in three subjects: Mathematics, Science, and Computer Science.
// The college follows these rules:
// • Calculate the total marks.
// • Calculate the average marks.
// • If the average is 70 or above, the student gets First Division.
// • If the average is 60 or above, the student gets Second Division.
// • If the average is 50 or above, the student gets Third Division.
// • Otherwise, the student fails.
// Your task:
// 1. Create an arrow function calculateAverage(m1, m2, m3) that returns the average.
// 2. Create an arrow function getDivision(average) that returns the division.
// 3. Create an arrow function processResult(name, m1, m2, m3, callback) that accepts
// a callback to process the student's result.
// 4. Display the student's name, average, and division.

const calculateAverage = (m1, m2, m3) => {
    let total = m1 + m2 + m3;
    return total / 3;
};

const getDivision = (average) => {
    if (average >= 70) {
        return "First Division";
    } else if (average >= 60) {
        return "Second Division";
    } else if (average >= 50) {
        return "Third Division";
    }
    else {
    return "Fail";
    }
};

const processResult = (name, m1, m2, m3, callback) => {
    let average = calculateAverage(m1, m2, m3);
    let division = getDivision(average);
    console.log(`Student Name: ${name}`);
    console.log(`Average Marks: ${average.toFixed(2)}`);
    console.log(`Division: ${division}`);
}

processResult("Sashank Shilpakar", 75, 80, 90, calculateAverage);