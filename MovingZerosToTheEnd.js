//Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

//iterate through arr 
//check if index is equal to 0, if so move to back of arr


function moveZeros(arr) {
    let zeros = 0
    for (let i = 0; i < arr.length; i++) {
        let isZero = arr[i] === 0
            if (isZero){
                zeros++
                arr.splice(i, 1)
                i--
    }
    }
    for (let i = 0; i < zeros; i++){
        arr.push(0)
    }
    return arr
}
console.log(moveZeros([false,1,0,1,2,0,1,3,"a"])) 


// var moveZeros = function (arr) {
//     return [
//         ...(arr.filter(n => n !== 0)),
//         ...(arr.filter(n => n === 0)),
        
//     ];
// }
// console.log(moveZeros([false,1,0,1,2,0,1,3,"a"])) 