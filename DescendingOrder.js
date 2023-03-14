function descendingOrder(n){
    
    // typecasting the num, Splitting the num, so that we got an array of strings
    // Then use map function to convert the array of strings into array of numbers
    let arr = String(n).split("").map((n)=>{
        return Number(n)
    })
    let newarr  = arr.sort((a,b) => (b-a))
    let num = Number(newarr.join("")) 
    return num
    
    
}
console.log(descendingOrder(1021)) 