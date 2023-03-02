//The apply() method calls the specified function with a given this value, and arguments provided as an array
function min(list){
   
    return Math.min.apply(Math, list);
}

function max(list){
    
    return Math.max(...list);
}



console.log(min([-52, 56, 30, 29, -54, 0, -110]))
console.log( max([4,6,2,1,9,63,-134,566]))