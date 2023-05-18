function WordChecker(min, max, str){
    
    let word = "happyCod"
    
    if(word.length < min || word.length > max ){
        return false
    }
    for(i = 0; i < word.length; i++){
        
        if(word[i] === str){
            return false
        }else{
            return true 
        }

    }
    

    

}

console.log(WordChecker(5, 8, "$"))