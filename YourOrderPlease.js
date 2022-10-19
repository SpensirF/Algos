function order(words){
    if(!words){
        return words; 
    }

    var arr = words.split(' '); 

    var obj = {};
    for(var el of arr){
        var number = getNumber(el); 
        obj[number] = el; 
    }
    return Object.values(obj).join(' ');

}

function getNumber(str){
    return str.match(/\d/)[0];
}

console.log(order("is2 Thi1s 3all T4est"))
console.log(order("4of Fo1r pe6ople g3ood th5e the2"))
console.log(order(""))