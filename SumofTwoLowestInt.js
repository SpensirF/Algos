function sumTwoSmallestNumbers(numbers) {  
    //sort arr ascending order
    let order = numbers.sort((a, b )=>(a-b));
    
    //add the first 2 
    let result = order[0]+order[1] 
    // for(i = 0; i < order.length; i++){
       
    //     result += order[0] + order[1]
    //     console.log(order[0])
    // }
    return result
}
console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22])) 