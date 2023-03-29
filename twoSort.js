function twoSort(s) {
    let sortarr = s.sort()
    let firstWord = sortarr[0]
    let string = firstWord.split('').join('***');
    return string

}
console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]))