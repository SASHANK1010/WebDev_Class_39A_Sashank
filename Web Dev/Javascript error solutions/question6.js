
function countDown(n){
console.log(n);
return countDown(n-1);
}
// The function calls itself repeatedly: However, there is no stopping condition.

// This means the function continues calling itself forever until JavaScript eventually produces a stack overflow error.


function countDown(n) {

    if (n <= 0) {
        console.log("Countdown finished!");
        return;
    }

    console.log(n);
    countDown(n - 1);
}

countDown(5);

