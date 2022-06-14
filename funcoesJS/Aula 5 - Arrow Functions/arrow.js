// Arrow functions.
// Uma arrow functions é representada pelo simbolo =>
//Exemplo 1
//Função sem arrow function
const helloWorld = function () {
    return console.log("Função normal. " + "Hello World!");
    
}
//Função com arrow function
const helloWorldArou = () => {
    return console.log("Função com arrow function. " + "Hello World!");
}

const helloWorldArowSemRetorno = () => console.log(" Arrow Function com uma linha. " + " Hello World!")

helloWorld()
helloWorldArou()
helloWorldArowSemRetorno()

//Regras para usa arrow function
//Caso exista apenas uma linha, pode dispensar as chaves e o return.
//Caso exista apenas um parâmetro, pode dispensar os parênteses.
//Exemplo sem parênteses
/*const soma = a => a;
console.log(soma(4))*/

// Arrow funcition Não faz hoisting!
//Exemplo - Esse código abaixo vai gerar um erro

/*
console.log(soma(2,4))

const soma = (a,b ) => a + b;*/
//O erro que vai apresenar aqui vai ser
//Soma is not defined. Informando que a soma não foi definida.


//Outras restrições
// O valor "this" sempre será o objeto glocal. Métodos para modificar seu vaor não irão funcionar;
// Call e apllay não pode ser utilizado
// Não existe o objeto "arguments";
// O construtur( ex: new MeuObjeto()) também não pode ser utilizado.
// Não façam Arrow funcition sem serem metodos de objeto, para metodos sempre utilizar uma função comum.

