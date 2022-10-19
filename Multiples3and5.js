function solution(number){
    let natural = []
    let count = 0 
    //loop through range 1 and 10 
    for(let i = 0; i < number; i++){
        if (i % 3 == 0 || i % 5 == 0){
            natural.push(i) 
            count += i
        }
        
    }
    return count

}

// check if the number is divisible by 3 or 5 
// if now store it in natural "list" and only count it once. 
// return the sum of the added the numbers stored 
//else return 0 


console.log(solution(10))