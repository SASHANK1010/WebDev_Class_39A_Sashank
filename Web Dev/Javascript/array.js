// const students = [
//   { name: "Ram",  marks: 90, age: 20 },
//   { name: "Sita", marks: 85, age: 21 },
//   { name: "Hari", marks: 55, age: 19 },
//   { name: "Gita", marks: 65, age: 22 }
// ];
// const calculateGrade=(marks)=>{
//     if(marks>=70){
//         return("First Division");
//     }
//     else if(marks>=60){
//         return("Second Division");
//     }
//     else if(marks>=50){
//         return("Lower Second Division");
//     }
//     else if(marks>=40){
//         return("Third Division");
//     }
// }
// console.log(calculateGrade(75));

// const grading=students.map(
//     sutdent=>calculateGrade(sutdent.marks)
// )
// console.log(grading);

const students = [
  { name: "Ram",  marks: 90, age: 20 },
  { name: "Sita", marks: 85, age: 21 },
  { name: "Hari", marks: 55, age: 19 },
  { name: "Gita", marks: 65, age: 22 }
];

// const toppers=students.filter(student=>student.marks>60);
// console.log(toppers);

// const everyIsTopper = students.every(
//     student =>student.marks>70
// )
// console.log(everyIsTopper);


// const someIsTopper = students.some(
//     student =>student.marks>70
// )
// console.log(someIsTopper);

// const student = students.find(
//   student => student.age === 21
// );

// console.log(student);
// // { name: "Sita", marks: 85, age: 21 }

// const index = students.findIndex(
//   student => student.age === 21
// );

// console.log(index); // 1

// const totalMarks = students.reduce(
//   (total, student) => total + student.marks,
//   0
// );

// console.log(totalMarks); // 295

// const arr=[20,50,90,100];
// arr.sort((a,b)=>b-a);
// console.log(arr);

// const sortesStudents=[...students].sort(
//   (a,b)=>b.marks-a.marks
// )
// console.log(sortesStudents);
// console.log(students);


const numbers=[1,2,3,4,5];
numbers.forEach(number=>console.log(number+1));
console.log(numbers.includes(3));
