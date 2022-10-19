function oddOrEven(array) {
    if(array == []){
        return [0]
    }
    
    let sum = 0
    //set varible of split array 
    //loop through the array 
    //add the numbers to the sum 
    //check sum if its even or odd 
    for(i = 0; i < array.length; i++){
        sum += array[i]
        console.log(sum)
    }
    if(sum % 2 == 0){
        return "even"
    }else{
        return "odd"
    }

}
console.log(oddOrEven([1,2,3,1,1])) 
