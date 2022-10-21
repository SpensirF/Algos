// Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

// Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMIIIV" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000

function solution (roman) {
    let sum = 0
    for(let i = 0; i<roman.length; i++){ 
        switch(roman[i]){
            case  "I" :  
            if(roman[i+1] == "V"|| roman[i+1] == "X"){
                sum -= 1;}else{
                    sum += 1
                } 
                break;
            case  "V" : sum += 5; break;
            case  "X" : if(roman[i+1] == "L"|| roman[i+1] == "C"){
                sum -= 10; break;}else{
                    sum += 10
                }
                break;
            case  "L" : sum += 50; break;
            case  "C"  : if(roman[i+1] == "D"|| roman[i+1] == "M"){
                sum -= 100; break;}else{
                    sum += 100
                }
                break;
            case  "D"  : if(roman[i+1] == "M"){
                sum -= 500; break;}else{
                    sum += 500
                }
                break;
            case  "M"  : sum += 1000;
        }
    }
    
    // complete the solution by transforming the 
    // string roman numeral into an integer
    return sum;
}

console.log(solution('MMMCDXCIII')) ; // should return 3493