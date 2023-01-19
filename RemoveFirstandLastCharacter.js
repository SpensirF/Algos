function removeChar(str){
    // let arr = str.split('')
    // let test = arr.pop()
    // let result = test.splice(1)

    // for(let i = 0; i < str.length; i++){
    //     console.log(str[i])
    // }
    // slice params is (start, end)
    return str.slice(1, -1);
    

};
console.log(removeChar('eloquent')) 