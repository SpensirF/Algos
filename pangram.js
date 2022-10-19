//A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
function isPangram(string){
    letters = "abcdefghijklmnopqrstuvwxyz" 
    let regex = /\s/g;
    let lowercase = string.toLowerCase().replace(regex, "")
    for(let i = 0; i < letters.length; i++ ){
        if(lowercase.indexOf(letters[i]) < 0){
            return false
        }
        
    }
    return true;
}
console.log(isPangram("The quick brown fox jumps over the lazy dog"))
