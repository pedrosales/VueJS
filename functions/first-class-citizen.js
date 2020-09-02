// Função em JS é First-Class Object (Citizen)
// Higher-Order function

// criar de forma literal
function fun1() {}

// Armazenar em uma variável
const fun2 = function () {}

// Armazena dentro de um array
const array = [function (a, b) {
    return a + b
}, fun1, fun2]
console.log(array[0](2, 3))

// Armazenar em um atributo de objeto
const obj = {}
obj.speak = function () {
    return 'Hello'
}
console.log(obj.speak())

// Passar função como param
function run(fn) {
    fn()
}

run(function () {
    console.log('Executando...')
})

// Uma função pode retornar/conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(5)