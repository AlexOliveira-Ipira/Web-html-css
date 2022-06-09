//Tipos primitivos

//Boleanos
var vBool = false;
console.log(vBool);
console.log(typeof(vBool));

//Number
var vNumber = 0;
console.log(vNumber);
console.log(typeof(vNumber));

//String
var vString = 'nome';
console.log(vString);
console.log(typeof(vString));

//Variaveis declaradas com VAR e LET podem sofrer alterações
//Variaveis declaradas com const não podem ser alteradas
// Var variavel de uso em scopo global
// let variavel de uso de scopo logal
// const variavel de scopo de bloco e não pode ter o valor null, sempre que criar 
// tem de ter um valor.

//Escopo global - Quando a variável é declarada fora de qualquer bloco, visivel em qualquer logal
//Escopo logal - Quando a variável é declarada dentro de uma função, por convenção é utilizado Let para 
//cria a variável 


//Exemplo de variavel de escopo global
var escopoGlobal = 'global';
console.log(escopoGlobal);

//Execmplo de variável de escopo local
function escopoLocal(){
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno);
}

escopoLocal();

//Regras de uso de variaveis 
// Iniciar com letras, underscor _ ou cifrão $; Não inicia com números
// Não usar espaços, caso seja necessário criar variaveis composta
// usar da seguinte forma nome_completo ou nomeCompleto
// Não usar palavras reservadas
// Exemplo: var funcrion - é uma palavra reservada para criar funções
// Declarar variáveis o topo do bloco de código

//Atribuição
// = significa atribuição
var nome = 'nome da pessoa'

//Comparação
// ==
var comparacao = 0 == 0;
console.log(comparacao)

//Coparação identica - Compara o valor e o tipo
//===
var comparacaoIdentica = '0'=== 0;
console.log(comparacaoIdentica)

//Operadores 
// + adição
// - subtração
// * multiplicação
// / divisão real
// % divisão inteira;
// ** potenciação

var adicao = 1 + 1;
console.log(adicao);

var subtracao = 3 - 1;
console.log(subtracao);

var multiplicacao = 3 * 2;
console.log(multiplicacao)

var divisao_real = 4 / 2;
console.log(divisao_real);

var divisao_inteira = 10 % 2;
console.log(divisao_inteira);
//Pode ser usado para identificar se um número é par ou impa
if(divisao_inteira == 1){
    console.log('Impar')
}
else{
    console.log('Par')
}
var potenciacao = 5 ** 2;
console.log(potenciacao);

//Operadores relacionais
// > maior que
// < menor que
// >= maior ou igual a
// <= menor ou igual a

var maiorque = 5 > 2;
console.log(maiorque);

var menorque = 5 < 2;
console.log(menorque);

var maior_ou_igual = 5 >= 5;
console.log(maior_ou_igual);

var menor_ou_igual = 4 <= 4;
console.log(menor_ou_igual);


// Operadores lógicos
// && "e" Todos os valores devem ser verdadeiro
// || "ou" Um dos valores tem de ser verdadeiro
// ! - "não" inverte o valor de true para false ou vice-versa;

var e = true && true;
console.log(e);

var ou = true || false;
console.log(ou)

var nao = !true;
console.log(nao);