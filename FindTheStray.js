function stray(numbers) {
    let odd = 0 
    for(let num of numbers){
        // methods to determine if the current element appears only once in the array. If it does, it is the single different number and the method returns it.
        if(numbers.indexOf(num) === numbers.lastIndexOf(num)){
            odd = num; 
        }
    }
       return odd 
}
console.log(stray([2, 1, 1])) 