//Definindo uma função
// Variáveis criadas dentro de uma função apenas podem ser utilizadas dentro dela.
// Quando invocamos o "Return", a função para de ser executada.
// Exemplo de uma função
function nomeDaFuncao(parametros){
    return 'O que a função retorna';
}

//Funções anônima
// Exemplo de uma função anônima
// Uma variável pode armazenar uma função
const soma = function(a,b){
    return a + b;
}

//Chamada da função
//soma(1,2)
//soma(5,4)

//Função autoinvocável
// IIFE (Immediately Invoked Function Expression)
// Uma função anônima entre parênteses, seguida por outro par de parênteses, que representa sua chama
// Exemplo de uma função autoinvocável

//Exemplo 1
/*(
    function(){
        let name = "Alex";
        return console.log(name);
    }
)();*/

//Exemplo 2
/*(
    function(a,b){
        return a + b;
    }
)(1,2);*/

//Exemplo 3
/*const soma3 = (
    function() {
        return a + b;   
    }
)(1,2);
console.log(soma3)*/

//Callbacks
// Uma função passad como argumento para outra função
//Utilizando callbacks, você tem maior controle da ordem de chamadas.
//Exemplo 4
const calc = function (operacao, num1, num2) {
    return operacao(num1, num2);
    
}

function soma(num1, num2) {
    return num1 + num2;
}

const sub = function(num1, num2){
    return num1 - num3;
}

const resultSoma = calc(soma, 1, 2)
const resultSub = calc(sub, 1,2)

