// let e const
{
    var a = 2
    let b = 3
    console.log(b)
}

console.log(a)
// console.log(b) // erro

// Template String `` quebras de linha
const produto = "iPad"
console.log(`${produto} é caro`)

// Destructuring
const [l, e, ...tras] = "Code3r"
console.log(l, e, tras)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const {
    idade: i,
    nome
} = {
    nome: "Ana",
    idade: 20
}

console.log(nome, i)