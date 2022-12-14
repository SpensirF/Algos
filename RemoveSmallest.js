//o - same array not mod
//i- arr 
//c- do nto mod original arr 
//e- If you get an empty array/list, return an empty array/list.If you get an empty array/list, return an empty array/list.

function removeSmallest(numbers) {
    let nums = numbers.slice(0)
    
    let smallNum = numbers.indexOf(Math.min(...numbers))
    nums.splice(smallNum, 1);

    return nums 

}
console.log(removeSmallest([1,2,3,4,5])) 
// Input: [1,2,3,4,5], output = [2,3,4,5]