function descendingOrder(n){
    
    // typecasting the num, Splitting the num, so that we got an array of strings
    // Then use map function to convert the array of strings into array of numbers
    let arr = String(n).split("").map((n)=>{
        return Number(n)

        // return Number(n.sort((a,b) => (b-a)).join(""))
    })
    // let newarr  = arr.sort((a,b) => (b-a))
    // console.log(newarr)
    return Number(arr.sort((a,b) => (b-a)).join("")) 
    
    
    
}
console.log(descendingOrder(1021)) 