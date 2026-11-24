// const convertToUppercase = (text) => {
//     return text.toUpperCase();
// }

// console.log(convertToUppercase(12345));



const convertToUppercase = (text) => {
    return String(text).toUpperCase();
}

console.log(convertToUppercase(12345));

// The toUpperCase() method works with strings, not numbers.
// Here, we are passing 12345, which is a number. We used String(text) to convert the number into a string before applying toUpperCase().