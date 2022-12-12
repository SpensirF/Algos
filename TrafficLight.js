//o - string
//i - sring 
//c- if red needs to be green, if yellow, needs to be red, if green needs to be yellow, 3 options output 
//e 
function updateLight(current) {
    if(current == "Green"){
        return "Yellow"
    }else if(current == "Yellow"){
        return "Red"
    }else{
        return "Green"
    }
}
console.log(updateLight("Yellow")) 