//o - int of the age the father was double 
//i - 2 ints Сalculate how many years ago the father was twice as old as his son
//c- 
//e 


function twiceAsOld(dadYearsOld, sonYearsOld) {
    let son = sonYearsOld * 2
    let dad = dadYearsOld - son
    return Math.abs(dad)

}

console.log(twiceAsOld(36,7))
//   it("Testing for dad's age: 36 and son's age: 7", function(){
//     assert.strictEqual(twiceAsOld(36,7) , 22);