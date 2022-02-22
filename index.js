// Task: 
// Create fizz bazz appliaction with the function in a seperate file and the main loop in index.js file. Import the function in the index.js file.
// Run the fizz bazz for numbers from 1 - 100 

// if a number is divisible by 2 without a reminder, log out "Fizz"
// if a number is divisible by 3 without a reminder, log out "Bazz"
// if a number is divisible by 2 and 3 without a reminder, log out "Fizz Bazz"
// if it is not divisible by 2 or 3, the log out the number




import fizzBazz from './src/fizzBazz.js';


for (let i = 1; i <= 100; i++) {
    console.log(fizzBazz(i));
}