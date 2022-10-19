// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
// If the function is passed a valid PIN string, return true, else return false.

// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false




function validatePIN (pin) {
    let spChars = /[!@#$%^&*~() _+\-=\[\]{};':"\\|,.<>\/?]+/ + /[a-zA-Z]/ ;
    if(pin.match(/[a-zA-Z]/g) || pin.match('123 ')){
        return false
    }
    else if(spChars.test(pin)){
        return false;
    }
    else if(pin.length == 4 || pin.length == 6){
        return true
    }
    return false
    
}

function validatePIN (pin) {
    let n = pin.length; 
    if(n != 4 && n != 6){
        return false 
    }
    for (let i in pin){
        console.log(pin)
        if (pin[i] > '9' || pin[i] < '0'){
            return false
        }
    }
    return true 
}



// function validatePIN (pin) {
//     //return true or false
//     var n = pin.length;
//     if( n != 4 && n != 6)
//     return false;
//     for (var i in pin)
//     if (pin[i] > '9' || pin[i] < '0')
//     return false;
//     return true;
// }
console.log(validatePIN("1112")) 

function validatePIN (pin) {
    for (let i of pin) {
        if (!isFinite(parseInt(i))) return false;
    }
    return pin.length === 4 || pin.length === 6;
}
