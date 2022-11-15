function alphabetPosition(text) {
    let splitText = text.split('')
    let newText = splitText.replace(/[a-zA-Z]/g, m => m.charCodeAt() - 26)

    return newText;
}
console.log(alphabetPosition("The sunset sets at twelve o' clock.")) 