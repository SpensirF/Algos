function FindIntersection(strArr) { 
    let firstArr = strArr[0].split(',').map(e => Number(e));
    let secondArr = strArr[1].split(',').map(e =>Number(e));
    console.log(firstArr)
    console.log(secondArr)
    let sameValues = firstArr.filter(element => secondArr.includes(element));
    console.log(sameValues)


    return sameValues.join(); 

}

// console.log(FindIntersection(readline()));
console.log(FindIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"])) 
//  1,4,13