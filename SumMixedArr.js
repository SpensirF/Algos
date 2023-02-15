function sumMix(x){
    //.map creates new array and parseint converts strings to ints
    let numArr = x.map((x) => parseInt(x, 10));
    
    let result = 0
    for(let i = 0; i < numArr.length; i++){
       result += numArr[i]++
    }
    return result
}
console.log(sumMix([9, 3, '7', '3']));  