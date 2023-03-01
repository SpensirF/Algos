function lovefunc(flower1, flower2){
    
    if(flower1 % 2 === 0 && flower2 % 2 === 1){
         return true
    }else if(flower1 % 2 === 1 && flower2 % 2 === 0){
        return true
    }else{
        return false 
    }
    // console.log(his)
    // console.log(hers)
    // if(hers === his){
    //     return false
    // }else{
    //     return true 
    // }
    
    // if(flower1 === flower2){
    //     return false
    // }else{
    //     return true
    // }
}
console.log(lovefunc(738, 222))  