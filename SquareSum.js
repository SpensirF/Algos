function squareSum(numbers){
    let count = 0 

    let Newnum = numbers.map(x => x * x)
    // console.log(Newnum)
    for(let i = 0; i < Newnum.length; i++){
         count += Newnum[i]
        
    }
    return count
}
console.log(squareSum([1,2])) 