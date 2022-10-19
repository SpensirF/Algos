// Implement the function unique_in_order which takes as argument a sequence 
// and returns a list of items without any elements with the same value next to 
// each other and preserving the original order of elements.

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]



function uniqueInorder(iterable){
    let newArr = []
    //iterate through array
    //index 0 will be push
    //starting at index 1
    // if its not I push to new array 
    newArr.push(iterable[0])

    for( let i = 1; i < iterable.length; i++){
        if(iterable[i] == iterable[i-1]){
        }else{
            newArr.push(iterable[i])
        }
        
    }
console.log(newArr)
}
uniqueInorder([])
