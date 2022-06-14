//Chamadas utilizando o This
// Metodo Call

//Exemplo 1 - Metodo Call
const pessoa = {
    nome: 'Miguel',   
}

const animal = {
    nome: 'Murphy',
}

function getSomething() {
    console.log(this.nome);
    
}

getSomething.call(pessoa)

//É possível passar parâmetros para essa função separando-os por vírgulas.
//Exemplo 2 - Metodo call

const myObj = {
    num1 : 2,
    num2 : 4,
}

function soma(a,b) {
    console.log(this.num1 + this.num2 + a + b);    
}

soma.call(myObj, 1, 5)