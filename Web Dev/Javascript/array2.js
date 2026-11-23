// wap using for loop, slice, and toUpperCase to add DragEvent.prefix to the given names in an array
// names=["ram","Sita","hari","norman"] names[i][0].toUpperCase() + names[i].slice(1)
// output:Hello Dr.Ram, welcome to the clinic

let names = ["ram", "Sita", "hari", "norman"];
for (let i = 0; i < names.length; i++) {
    let name =names[i][0].toUpperCase() + names[i].slice(1);
    console.log(`Hello Dr.${name}, welcome to the clinic`);
}




