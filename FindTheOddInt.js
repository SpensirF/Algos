//o - number that shows up odd number of times. 
//i- arr of ints
//c- n/a
//e - retun arr if only one.

function findOdd(A) {
    for(let i = 0; i < A.length; i++){
        let oddone = A.filter((n) => n === A[i]).length;
        if(oddone % 2 == 1 ){
            return A[i]
        }
    }
    return 0;
}
console.log(findOdd([1,1,2])) 
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).