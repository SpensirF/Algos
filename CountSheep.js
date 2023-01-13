function countSheeps(arrayOfSheep) {
    let split = arrayOfSheep.slice("")
    let count = 0
    for(let i = 0; i < split.length; i++){
        if(split[i] == true){
            count++
        }
    }
    return count
}
console.log(countSheeps([true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true])) 