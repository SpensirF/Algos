const reverseSeq = n => {
    //
    let newArr = []
    while(n > 0){
        newArr.push(n)
        n-- 
    }


    return newArr;
};
console.log(reverseSeq(8)) 