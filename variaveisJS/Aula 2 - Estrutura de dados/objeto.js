//Não primitivos - Tem metodos dentro deles
//Objeto
// Para declarar um objeto é usado a seguinte forma:
/* Exemplo:
    let person = {
        keys : 'Valor',
    }*/
// Forma de declarar os objetos
// Iniciando um objeto
let person = {};

// Acrescentando dados no objeto
person.nome = 'Alex';
console.log('Acresentando valor no objeto vazio. ')
console.log(person)
console.log('\n')

//Acrescentado mais uma chave e valor
person.idade = 47
console.log('Acresentando novas chave e valor no objeto ')
console.log(person)
console.log('\n')

//Verificar valores do objeto
console.log('Verificando valor do objeto')
console.log(Object.values(person))
console.log('\n')

//Verificando chaves do objeto
console.log('Verifiando chaves do objeto')
console.log(Object.keys(person))
console.log('\n')

//Declarar objeto com valores definidos
let novasPersoas ={ 
    nome: 'Samuel',
    idade: 13
}
// OUtra forma de acessar o objeto
console.log(`Outra forma de acessar o objeto ${novasPersoas["nome"]}\n`)

//Declarar chave e valor de outra forma
novasPersoas["nome"] = "Davi"
novasPersoas["idade"] = 12
console.log(novasPersoas)