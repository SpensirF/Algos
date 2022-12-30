//o - arr with the count of positives numbers and the sum of negative numbers 
//i - arr of positive and negative numbers 
//c- 0 is neither positive nor negative 
//e- if arr is empty or not a number return [] or null 

function countPositivesSumNegatives(input) {
    if (input == null || input.length < 1){
        return [];
    }
    let positive = []
    let negative = 0 
    
    for(let i = 0; i < input.length; i++){
        if(input[i] > 0){
            positive.push(input[i])
        }else if(input[i] < 0){
            negative += input[i]
        }
    }
    return [positive.length, negative]

    
}
console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14])) 
