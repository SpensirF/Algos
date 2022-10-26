function positiveSum(arr) {
    let sum = 0
    // iterate through the array and check to see the number is positive
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 0){
        sum += arr[i]
        }
    }
    return sum 
    // if number is positive += sum 
    // then return sum
}
