//o - int of smallest word
//i- string 
//c - 
//e- 

function findShort(s){
    let arr = s.split(" ");
    let smallest = arr[0];
    console.log(smallest)
    for (var i = 0; i < arr.length; i++) {
        if(arr[i].length < smallest.length){
            smallest = arr[i];
        }
    }   
    return smallest.length;

}

console.log(findShort("turns out random test cases are easier than writing out basic ones"))
