function squareDigits(num){
    //convert to string 
    let str = num.toString();
    //convert to arr with seperating at each index
    let arr = str.split('')
    //taking each index and multiplying itself to get square - then joining string back together 
    let Newnum = arr.map(x => x * x).join('')
    //convert string back to int
    let result = parseInt(Newnum)
    return result 
}
console.log(squareDigits(466)) 