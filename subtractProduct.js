var subtractProductAndSum = function(n) {
    
    let p =0 ;
    let s= 0 ;
    let j = n.toString()
    let arr = Array.from(String(j), Number);
    // console.log(arr)
    for(let i = 0; i < arr.length; i++){
        s += arr[i]
        p = arr.reduce((a, b) => a*b, 1)
        // console.log(s)
        // console.log(p)
        // console.log(results)
    }
    results = p - s
    return results;
};
console.log(subtractProductAndSum(234)) 