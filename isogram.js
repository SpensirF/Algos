function isIsogram(str){
    // convert the string to lowercase
    str = str.toLowerCase();

    // create a set to store the unique characters
    let chars = new Set();

    // iterate through each character in the string
    for (let char of str) {
        // if the character is already in the set, return false
        if (chars.has(char)) {
            return false;
        }
        // otherwise, add the character to the set
        chars.add(char);
    }

    // if the loop completes, return true (the string is an isogram)
    return true;
}
console.log( isIsogram("aba"))