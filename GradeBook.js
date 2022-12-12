//o- letter grade of the avg 
//i- 3 ints 
//c- 
//e - all ints will be between 0-100 

function getGrade (s1, s2, s3) {
    let avg = (s1 + s2 + s3 )/3
    // let result = avg/3;
    if(avg <= 100 && avg >= 90){
        return 'A'
    }
    if(avg <= 90 && avg >= 80){
        return 'B'
    }
    if(avg <= 80 && avg >= 70){
        return 'C'
    }
    if(avg <= 70 && avg >= 60){
        return 'D'
    }
    if(avg <= 60 && avg >= 0){
        return 'F'
    }
}
console.log(getGrade(80,67,77)) 


// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'