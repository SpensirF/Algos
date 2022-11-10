function foursum(nums, target) {
    //o arr of nums equalling the target in unique possibilities 
    //i arr of nums 
    //c 1 <= nums.length <= 200, -109 <= nums[i] <= 109, -109 <= target <= 109
    //e if less than 4 return that same arr of ints
    if(nums.length < 4){
        return [];
    }
    let newArr = nums.map(e=>(e));
    newArr.sort((a,b) => a - b)
    let result =[];

    for(let i = 0; i < newArr.length - 3; i++){
        if(i > 0 && newArr[i] === newArr[i-1]){
            continue; 
        }
        // if(newArr[i] + newArr[i+1] + newArr[i+2] + newArr[i+3] > target){
        //     break;
        // }
        for(let j = i + 1; j < newArr.length - 2; j++){
            if(j != i + 1 && newArr[j] === newArr[j-1]){
                // console.log(newArr[j])
                continue;
            }
            let left = j + 1; 
            let right = newArr.length - 1; 
            // console.log(newArr[i])
            // console.log(newArr[j])
            // console.log(newArr[left])
            // console.log(newArr[right])
            while(left < right){
                let sum = newArr[i] + newArr[j] + newArr[left] + newArr[right]; 
                if(sum < target){
                    left++;
                    }else if(sum > target){
                        right--;
                    }else{
                        result.push([newArr[i], newArr[j], newArr[left], newArr[right]]);
                        left++;
                        right--;
                        while(left < right && newArr[left] === newArr[left-1]){
                            left++;
                        }
                        while(left < right && newArr[right] === newArr[right+1]){
                            right--;
                        }
                    }
            }
        }
    }
    return result
};

console.log(foursum([1,0,-1,0,-2,2], 0)) 
// Input: nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
// 0 <= a, b, c, d < n
// nums[a] + nums[b] + nums[c] + nums[d] == target