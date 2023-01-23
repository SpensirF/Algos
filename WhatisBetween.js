function between(a, b) {
    let arr = [];

    //iterate through all the integers between the input parameters
    for (let i = a; i <= b; i++) {
        //pushes each integer to an array
        arr.push(i);
    }
    return arr;
}
console.log(between(1, 4)) 