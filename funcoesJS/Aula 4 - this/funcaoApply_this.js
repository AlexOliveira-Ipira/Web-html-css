//Função Apply
//Exemplo 1
const pessoa={
    nome:'miguel', 
};

const animal = {
    nome:'Godi',
};

function getSomething() {
     console.log(this.nome);   
}

getSomething.apply(pessoa);

//Diferença entre o Apply e o Call
// É possível passar parâmetros para essa função dentro de um array
// Para passar argumentos no call é passado utilizando a ", " - Vírgula como separador
// no Apply utilizase um array. 
// Exemplo passando parâmetros usando o apply
const myObj = {
    num1 : 2,
    num2 : 4,
}

function soma(a,b) {
    console.log(this.num1 + this.num2 + a + b);    
}

soma.apply(myObj, [1, 5])