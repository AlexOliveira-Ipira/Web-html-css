//Laço de repetição - loop
//for - loop dentro de elementos interáveis (arrays, strings)

function multiplicaPorDois(num) {
    let multiplicados = [];

    for(let i = 0; i < num.length; i++){
        multiplicados.push(num[i] * 2);
    }
    return multiplicados;  
}

const mmeusNumeros = [2,33,456,356,40];

multiplicaPorDois(mmeusNumeros);

//For ... in
//Loop entre propriedades enumeráveis de um objeto.
//Exemplo 1 - Pega as chaves
function forInExemplo(obj) {
    for(prop in obj){
        console.log(prop);
    }
}

const meuObjeto = {
    nome : "João",
    idade : "20",
    cidade: 'Salvador'
}

forInExemplo(meuObjeto);

//Exemplo 2 - Pega os valores
function forInExemplo2(obj) {
    for(prop in obj){
        console.log(obj[prop]);
    }
}

forInExemplo2(meuObjeto);

//for...of
//Loop entre estruturas interáveis (arrays, strings)
//Exemplo 1
function logLetras(palavras) {
    for(letra of palavras){
        console.log(letra)
    }
}

const palavra = "abacaxi";

logLetras(palavra)

//Exemplo 2
function logNumeros(numeros) {
    for(numero of numeros){
        console.log(numero);
    } 
}

const numeros = [30,20,233,2];
logNumeros(numeros)

