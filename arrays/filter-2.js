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

Array.prototype.myFilter = function (callback) {
    const newArray = []

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }

    return newArray
}

const frageis = product => product.fragil
const maior500 = product => product.preco >= 500

const result = produtos.myFilter(frageis).myFilter(maior500)
console.log(result)