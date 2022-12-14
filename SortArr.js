var sortArrayByParity = function(nums){
    //o - going to arr with evens in front of the odds. 
    //i - an arr 
    //c - 1 <= nums.length <= 5000,0 <= nums[i] <= 5000
    //e - 
    const evens = nums.filter( val => val % 2 === 0 );
    const odds = nums.filter( val => val % 2 !== 0 );
    
    return evens.concat(odds)
    
};
sortArrayByParity([3,1,2,4])

function sortArr(arr){
    let newArr = arr.sort((a,b) => a-b)
    console.log(newArr)
}
sortArr([2,3,4,6,7,8,9,5])