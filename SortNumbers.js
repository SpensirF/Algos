function solution(nums){
    if(nums === []){
        return []
    }else if(nums === null){
        return [] 
    }else{

    let result = nums.sort((a,b) => (a-b)) 
    return result
    }
     
}   
console.log(solution([1,2,3,10,5]))