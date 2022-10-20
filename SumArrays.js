// Sum Numbers
// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.


function sum (numbers) {
    // "use strict";
    //edge case if array is empty return 0 or if one index return that index
    // a varible for sum 
    // loop through array 
    // += sum 
    let newSum = 0
    for(i = 0; i < numbers.length; i++){
        newSum += numbers[i]
    }
    return newSum
    
};
console.log(sum([2]))

// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398