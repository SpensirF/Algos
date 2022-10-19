function printerError(s) {
    let count = 0
    // loop through string
    for(let i = 0; i < s.length; i++){
            if(s[i] == "n"){
                count ++
            }
            if(s[i] == "o"){
                count ++
            }
            if(s[i] == "p"){
                count ++
            }
            if(s[i] == "q"){
                count ++
            }
            if(s[i] == "r"){
                count ++
            }
            if(s[i] == "s"){
                count ++
            }
            if(s[i] == "t"){
                count ++
            }
            if(s[i] == "u"){
                count ++
            }
            if(s[i] == "v"){
                count ++
            }
            if(s[i] == "w"){
                count ++
            }
            if(s[i] == "x"){
                count ++
            }
            if(s[i] == "y"){
                count ++
            }
            if(s[i] == "z"){
                count ++
            }
    }
    return `${count}/${s.length}`;
}
console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"))
console.log(printerError("aaabbbbhaijjjm"))


// s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"