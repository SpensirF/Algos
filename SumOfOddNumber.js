function rowSumOddNumbers(n) {
    // let firstNumber = 2 * (n+2) + 1;
    // let sum = 0 
    // for(let i = 0; i < n; i++){
    //     sum += firstNumber; 
    // }

    // return sum
    // return n*n*n
    let start = n * n - n + 1;
    let result = 0;  
  
    for(i = 0; i < n; i++)
    {
        result =  result + (start + (i*2));
    }
        
    return result;
}
console.log(rowSumOddNumbers(42))