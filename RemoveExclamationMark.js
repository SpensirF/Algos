function removeExclamationMarks(s) {
    // for loop to check for !
    // remove ! 
    let testy = ""
    for(let i = 0; i < s.length; i++){
        if(s[i] !== "!"){
            testy += s[i]
        }
    }
    return testy;
}
console.log(removeExclamationMarks("hello world!")) 