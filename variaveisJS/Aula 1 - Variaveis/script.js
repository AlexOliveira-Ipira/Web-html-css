//Variaveis JavaScript

// Variáveis
// var - Variavel de escopo global
// let - Variável de escopo de bloco


//Exemplo de variaveis dentro e fora do bloco de código
var a = 1;
var b = 2;

if (a === 1){
    var a = 11;
    let b = 22;

    console.log(a);
    console.log(b);
}

console.log('Variaveis fora do codigo de bloco')
console.log(a);
console.log(b);

//Hoisting - Atribui um valor a uma variável antes de declarar a variavel


//Redeclaração - So pode ser feito com o var


//Reatribuição - Pode ser feito com o var e o let, nome da variáel sem a palavra reservada var e let

//JavaScript é sensitive a cameCase

// Constantes
//Declaradas em SNAKE_UPPER_CASE
//Escopo de bloco
//Não faz hoisting

//Essa parte do código vai dar certo.
const FIRST_NAME = 'Alex';
console.log(FIRST_NAME)

//Essa parte do código vai dar erro.
FIRST_NAME = 'Samuel';
console.log(FIRST_NAME)

