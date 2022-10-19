String.prototype.toJadenCase = function () {
    if(this.length !== 0){
        result = this.split(" ").map(function(capStr){
            return capStr.substring(0,1).toUpperCase() + capStr.substring(1);
        }).join(" ");
        }
        return result; 

    };


function toJadenCase(string){

    let capStr = []
    let newStr = string.split(" ")
    console.log(newStr)
    for(let x of newStr){
        capStr.push(x.charAt(0).toUpperCase() + x.slice(1))  
    }
    let myStr = capStr.join(" ")
    return myStr


};

console.log(toJadenCase("How can mirrors be real if our eyes aren't real")) 


// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

