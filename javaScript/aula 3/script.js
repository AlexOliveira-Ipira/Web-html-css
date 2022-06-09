// Vetores ou arrays

let array = ['string array1', 1 , true ];
console.log(array);

// Variso tipos de dados
let array2 = ['string array2', 1, true, ['array']];
console.log(array2)

// Acessando um valor especifico do array
console.log(array2[0])

// Manipulando o array
// forEach() - itera uma array
// push() - add item no fial do array
// pop() - remove item no final do array
// shift() - remove item no início do array
// unshift() - add item no início do array
// indexOf() - retorna o indice de um valor
// splice() - remove ou substitui um item pelo indice
// slice() - retorna uma parte de um array existente

array2.forEach(function(item, index){console.log(item, index)})

console.log(array2.push('novo item final'))

console.log(array2.pop());

console.log(array2.shift(array2));

console.log(array2.unshift('novo item no inidio'))

console.log(array2.indexOf(true))

console.log(array.splice(0, 3))

console.log(array.slice(0, 3))

//Objetos - São dados que possui propriedades e valores

var xicara = {
    cor: 'azul',
    tamanho : 'p',
    funcao : 'tomarCafe()'
}

let object = {
    string : 'string',
    number: 1,
    Boolean: true,
    array: ["array"]
}
console.log(object);

//acessando apenas uma propriedade do object, digitando a propriédade do objecto
console.log(object.Boolean);

//desestruturação do objeto
var string  = object.string;
console.log(string)

//OUtra forma de desistruturar o objeto
var {string, Boolean} = object;
console.log(string, Boolean)