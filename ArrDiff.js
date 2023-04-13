function arrayDiff(a, b) {
  let arr = a.filter(num => !b.includes(num))
  return arr
}
console.log(arrayDiff([1,2,2], [1])) 