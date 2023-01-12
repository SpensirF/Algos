function diffArray(arr1, arr2) {
    //concat merges two or more arrays 
    //filter method with .includes to find which isnt included in both 
    let newArr = arr1.concat(arr2).filter(item => !arr1.includes(item) || !arr2.includes(item))

    return newArr
}
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])); 