const produtos = [{
        nome: "Notebook",
        preco: 2499,
        fragil: true
    },
    {
        nome: "iPad Pro",
        preco: 4199,
        fragil: true
    },
    {
        nome: "Copo de Vidro",
        preco: 12.49,
        fragil: true
    },
    {
        nome: "Copo de Plático",
        preco: 18.99,
        fragil: false
    }
]

console.log(produtos.filter(function (p) {
    return p.preco > 2500
}))

const frageis = product => product.fragil
const maior500 = product => product.preco >= 500

const result = produtos.filter(frageis).filter(maior500)
console.log(result)