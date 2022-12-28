//o - true or false 
//i- 3 varibles distance, mpg, fuel left 
//c - na
//e- na


function zeroFuel(distanceToPump, mpg, fuelLeft){
    if(distanceToPump <= mpg * fuelLeft){
        return true 
    }else{
        return false 
    }
    
};
console.log(zeroFuel(100, 50, 1)) 

//25 miles per gallon 