function twoSum(numbers, target) {
    let indices = []
    let maps = {}
    
    for(let i = 0; i < numbers.length; i++){
        let complement = target - numbers[i]; 

        //If a complement is found in the maps object, it means that the current element and its complement add up to the target
        if(maps[complement] !== undefined){
            indices.push(maps[complement], i);

            break;
        }
        maps[numbers[i]] = i; 
    }
    return indices
}
console.log(twoSum([1234,5678,9012], 14690)) 