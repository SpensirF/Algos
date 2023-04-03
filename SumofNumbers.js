function getSum(a, b){
    let sum = 0 
    if(a === b ){
        return a
    }else if(a < b ) {
        //loop to add up all the integers between a and b
        for (let i = a; i <= b; i++) {
            sum += i;
            }  
    }else {
        for (let i = b; i <= a; i++) {
            sum += i;
          }
        }
        return sum;
    }
console.log(getSum(0,-1))