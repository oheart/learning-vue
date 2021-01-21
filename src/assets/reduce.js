/* reduce实现数值的累加计算 */

const arr = [3, 8, 9, 12, 89, 54, 37]

// forEach实现
let total = 0;
arr.forEach((item) => total += item)
console.log('total-forEach', total)

// reduce实现
const sum = (accumulator, currentValue) => accumulator + currentValue;

total = arr.reduce(sum, 0)
console.log('total-reduce', total)



