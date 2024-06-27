let aElement = document.querySelector(".a");
let bElement = document.querySelector(".b");
let cElement = document.querySelector(".c");

document.querySelector(".mt").addEventListener("click", () => {
    let a = parseInt(aElement.value); // Get value from input and convert to integer
    let b = parseInt(bElement.value); // Get value from input and convert to integer
    let c = parseInt(cElement.value); // Get value from input and convert to integer
    let ac = a * c; // Product of a and c
    let fac = []; // Initialize the array to store factors

    // Find all factors of ac
    for (let i = 1; i <= ac; i++) { // Start from 1 to avoid division by 0
        if (ac % i === 0) {
            fac.push(i);
        }
    }

    // Find two factors x and y such that x + y = b and x * y = ac
    let x, y;
    for (let i = 0; i < fac.length; i++) {
        for (let j = i; j < fac.length; j++) {
            if (fac[i] + fac[j] === b && fac[i] * fac[j] === ac) {
                x = fac[i];
                y = fac[j];
                break;
            }
        }
        if (x && y) break; // If we found the numbers, break the outer loop as well
    }

    if (x && y) {
        console.log(`The numbers are x = ${x} and y = ${y}`);
    } else {
        console.log('No such numbers found.');
    }
});
