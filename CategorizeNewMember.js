//output an array with open or senior for the input arr
//input arr with 2 ints, age and handicap 
//constraints 
//edge cases 55 years and handicap > 7


function openOrSenior(data){
    
    let result = []


    for(let i = 0; i < data.length; i++){
        // let chunk = data[i][0]
        // console.log(chunk)
        // console.log(data[i])
        result[i] = (data[i][0] >= 55 && data[i][1] > 7) ? 'Senior' : 'Open';
        
    }
    console.log(result)
}


openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]])
// ['Open', 'Senior', 'Open', 'Senior']