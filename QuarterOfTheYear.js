//o - the quarter 1-4 
//i- int of month
//c- between 1-4
//e- 

function quarterOf(month){
    if(month < 4 ){
        return 1
    }else if(month > 4 && month < 7){
        return 2
    }else if(month > 6 && month < 10){
        return 3
    }else if(month > 10){
        return 4
    }
    
}
console.log(quarterOf(9)) 
//months 1-3 first quarter 
//months 4-6 second quarter
//months 7-9 third quarter 
//months 10-12 fourth quarter 