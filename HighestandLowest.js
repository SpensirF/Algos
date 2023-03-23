function highAndLow(numbers){

    let newnum = numbers.split(' ').map(Number);
  
    
    let low = Math.min(...newnum)
    let high = Math.max(...newnum)
    return `${low} ${high}`
}
console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))