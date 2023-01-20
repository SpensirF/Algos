function isPalindrome(x) {
    let reverse = x.split('').reverse().join('').toLowerCase();
    // console.log(reverse)
    if (x.toLowerCase() === reverse) {
        return true;
    }else{
        return false;
    }
}
console.log(isPalindrome("ana"))