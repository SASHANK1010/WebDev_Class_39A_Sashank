// Write a JavaScript program that takes the number of electricity units consumed and calculates the bill according to these rules:

// Up to 50 units → Rs. 5 per unit
// 51–100 units → Rs. 7 per unit
// 101–200 units → Rs. 10 per unit
// Above 200 units → Rs. 12 per unit

let units=50;
if(units<=50){
    unitCost=units*5;
    console.log("Total cost for " + units + " units is: Rs. " + unitCost);
}
else if(units>50 && units<=100){
    unitCost=units*7;
    console.log("Total cost for " + units + " units is: Rs. " + unitCost);
}
else if(units>100 && units<=200){
    unitCost=units*10;
    console.log("Total cost for " + units + " units is: Rs. " + unitCost);
}
else{
    unitCost=units*12;
    console.log("Total cost for " + units + " units is: Rs. " + unitCost);
}