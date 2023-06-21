function getCount(str) {
    //convert to an array 
    //let sum = 0 
    //regx of just vowels and add to sum 
    let sum = 0 
    let vow = ["a", "e", "i", "o", "u"]
    let arr = str.split('')
    
    
    for(let i = 0; i < arr.length; i++){
        
        for(let j = 0; j < vow.length; j++){
            
            if(arr[i] == vow[j]){
                sum++
            }
        }
    }
    return sum
}
console.log(getCount("abewralllllloooo"))   //5