// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// patrick feeney => P.F\

function abbrevName(name){
    let result = []
    let spl = name.split(" ")
    for(x of spl){
        result.push(x.charAt(0) ) 
        
    }
    
    return result.join('.').toUpperCase()

}
console.log(abbrevName("Sam chris")) 