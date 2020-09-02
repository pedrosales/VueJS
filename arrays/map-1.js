const nums = [1, 2, 3, 4, 5]

const doubles = nums.map(num => num * 2)
console.log(doubles)

const sum10 = el => el + 10
const triple = el => el * 3
const toCurrency = el => `R$ ${parseFloat(el).toFixed(2).replace(".", ",")}`

const resultado = nums.map(sum10).map(triple).map(toCurrency)
console.log(resultado)