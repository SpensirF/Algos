//o - array with everyother element removed
//i- array
//c- keep every other element 
//e- 
function removeEveryOther(arr){
    let arrL = arr.length
    while(arrL--) (arrL + 1) % 2 === 0 && (arr.splice(arrL, 1))
    return arr
    
}
console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"])) 
// for (var i = 1; i < arr.length;i++){
//     arr.splice(i,1);