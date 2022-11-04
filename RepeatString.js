function repeatedString(s, n) {
    
    let top = Math.floor(n)
    let sumA = 0 
    let leftOver = 0
    for(i=0; i < s.length; i++){
        if(s.charAt(i) == "a"){
            sumA++
        } 
    }
    let repeat = n / s.length; 
    let newString = n - ( s.length * repeat)
    
    for(let i =0; i < newString; i++){
        if(s.charAt(i) == 'a')
        leftOver++
    }
    let result = (repeat * sumA) + leftOver; 

    return Math.ceil(result) 
}
console.log(repeatedString("aba", 10)) 