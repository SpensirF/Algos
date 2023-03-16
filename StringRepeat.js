function repeatStr (n, s) {
    
    // let str = s.repeat(n)
    
    // return str

    let str = "";
    for(let i = 0; i < n; i++){
        str += s;
    }
    console.log(str) ;


}
repeatStr(5, "#")