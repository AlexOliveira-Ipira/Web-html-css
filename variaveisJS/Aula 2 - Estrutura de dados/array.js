// Arrays - Lista iteráveis de elementos
// O arrey sempre começa com indice zero(0)
let array = []
console.log(`Tipo ${typeof(array)}\n`)

//Adicionar um item no final do array
array.push(3)
array.push(4)
console.log(`Adicionando um valor ao array ${array} \n`)

//Retirar um item do array
array.pop() //Retira o ultimo elemento do array
console.log(`Retirando um valor do array, com o POP 
o valor que sera retirado sempre é o ultimo valor ${array}\n`)


//Adicionar no incio da lsita
console.log(`Array antes da inclusão do item ${array} \n`)
array.unshift(1)
console.log(`Adicionado o item no inicio do array ${array} \n`)


//Retirar um item do primeiro elemento
array.shift()
console.log(`Retirado o primeiro item do array ${array}\n`)

//Interabilidade
array.pop()
array.push(1,2,3,4,5,6,7,9)
console.log('Algumas formas de ter interatividades com array.')
for (let i = 0; i <array.length; i++){
    console.log(array[i])
}

//Verificar se o item tem dentro do array
console.log('\n')
array.includes(3)
console.log(`Verificar se o numero 3 tem no array, resposta: ${array.includes(3)}\n`)


//Verificar se todos os itens são do numero definido
array.every(item => item === 5)
console.log(`Verificar se todos os iten do array é o numero 5, resposta: ${array.every(item => item === 5)}\n`)
array = []
array.push(5,5,5,5,5)
console.log(`Verificar se todos os iten do array é o numero 5, resposta: ${array.every(item => item === 5)}\n`)

//Saber se tem um item especifico
array = []
array.push(1,2,3,4,5,6,7,9)
array.some(item => item === 5)
console.log(`Verificar se todos os iten especifico, resposta: ${array.some(item => item === 5)}\n`)

//Reverter o arry
let arrayReverse = array.reverse()
console.log(`Inverte o valor do array, resultado: ${arrayReverse} \n`)