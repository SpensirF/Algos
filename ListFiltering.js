function filter_list(l) {
    //typeof is used to check the data type of each element in the array 
    let x = l.filter((z) => typeof z !== 'string')

    return x
}

console.log(filter_list([1,2,'a','b'])) 