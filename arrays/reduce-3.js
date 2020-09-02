Array.prototype.myReduce = function (callback, valorInicial) {
    const indiceInicial = valorInicial ? 0 : 1
    let acc = valorInicial || this[0]

    for (let i = indiceInicial; i < this.length; i++) {
        acc = callback(acc, this[i + 1], i + 1, this)
    }

    return acc
}

const alunos = [{
        nome: "Joao",
        nota: 7.3,
        bolsista: false
    },
    {
        nome: "Maria",
        nota: 9.2,
        bolsista: false
    },
    {
        nome: "Pedro",
        nota: 9.8,
        bolsista: false
    },
    {
        nome: "Ana",
        nota: 8.7,
        bolsista: true
    }
]

// Desafio 1: Todos os alunos são bolsistas?
const todosBolsistas = (result, bolsista) => result && bolsista
console.log(alunos.map(a => a.bolsista).myReduce(todosBolsistas))

// Desafio 2: Algum aluno é bolsista?
const algumBolsista = (result, bolsista) => result || bolsista
console.log(alunos.map(a => a.bolsista).myReduce(algumBolsista))

const soma = (a, b) => a + b
const nums = [1, 2, 3, 4, 5, 6]
console.log(nums.reduce(soma, 10))