// Number
// Numero pode ser interiro ou float
// + - * / ** %
// soma - numero + numero
// subtraçaõ - numero - numero
// multiplicaçao - numero * numero
// divisao - numero / numero
// potenciação - numero ** numero
// resto = numero % 2 -- Indica se o numero é impar ou par

// O numero tem o metodo Math
// Para mostrar uma porcentagem tem de ser feito o calculo interno e depois colocar o valor
// em uma string

let numero = 100;
let soma = numero + 10;
let subtracao = numero - 10;
let divisao = numero / 10;
let multiplicaçao = numero * 10;
let potenciação = numero ** 10;
let divisao_inteiro = numero % 10;

console.log(`O valor usado para o teste foi ${numero}
sendo usado o 10 como base para todas as operações
a soma do ${numero} com 10 é ${soma} 
a subtração é ${subtracao}
a divisão é ${divisao}
a multiplicaçção é ${multiplicaçao}
a potenciação é ${potenciação}
e a divisão com resto o resto é ${divisao_inteiro}`)
