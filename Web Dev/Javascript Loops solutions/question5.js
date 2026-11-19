// 5. Largest of Three Numbers
// • Task: Given three numbers a, b, and c, find and log the
// largest one without using Math.max().

let a = 10;
let b = 20;
let c = 30;

if (a >= b && a >= c) {
    console.log(a + " is the largest number.");
}
else if (b >= a && b >= c) {
    console.log(b + " is the largest number.");
}
else {
    console.log(c + " is the largest number.");
}
