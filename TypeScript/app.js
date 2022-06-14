"use strict";
//Definindo variaveis e importes
var botao = document.getElementById('button');
var entrada1 = document.getElementById('input1');
var entrada2 = document.getElementById('input2');
var devePrinta = true;
var frase;
//Funçção principal
function adicionarNumeros(num1, num2, devePrinta, frase) {
    var resultado = num1 + num2;
    if (devePrinta) {
        console.log(frase + resultado);
    }
    return num1 + num2;
}
//Validação do botão
if (botao) {
    botao.addEventListener("click", function () {
        if (entrada1 && entrada2) {
            console.log(adicionarNumeros(Number(entrada1.value), Number(entrada2.value), devePrinta, frase = 'O resultado é: '));
        }
    });
}
