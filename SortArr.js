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