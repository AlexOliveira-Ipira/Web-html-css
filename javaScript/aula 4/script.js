//Estrutura condicionais

//Estrutura de decisão 
/*
var jogador1 = 0;
var jogador2 = 1;
var placar;

if (jogador1 != - 1){
    if(jogador1 > 0){
    console.log('Jogador1 marcou ponto')
    }
else if (jogador2 > 0){
    console.log('Jogador2 marcou ponto')
    }
else{
    console.log('Ninguém Marvou ponto')
    }
}

//If ternario
jogador1 |= -1 && jogador2 != -1 ? console.log('Os ogadores são validos'):
console.log('Jogadores invalidos');
if(jogador1 > 0){
    console.log('Jogador1 marcou ponto')
    }
else if (jogador2 > 0){
    console.log('Jogador2 marcou ponto')
    }
else{
    console.log('Ninguém Marvou ponto')
    }

//Melhorando a verificação
if(jogador1 > 0 && jogador2 == 0){
    console.log('Jogador1 marcou pronto!');
    placar = jogador1 > jogador2;
}else if (jogador2 >0){
    console.log('jogador2 marcou ponto!');
    placar = jogador2 > jogador1;
}
else{
    console.log('Ninguém marcou ponto!')
}

//Switch/case
 Ex; switch (${expresao}){
    case 1:
        ${instrucao};
        break
    case 2:
        ${instrução2};
        break      
    }

switch (placar) {
    case jogador1 > jogador2:
        console.log('Jogador1 foi o ganhador')
        break;
    case jogador2 > jogador1:
            console.log('Jogador2 foi o ganhador')
            break;
    default:
        console.log('Ninguém ganho!')
        break;
}*/


//Estrutura de repetição
//For
//For/in
//For/of
//While
//Do/while
/*
let array = ['valor1', 'valor2','valor3','valor4','valor5'];

let object = {
    propriedade1: 'valor1',
    propriedade2: 'vaore2',
    propriedade3: 'valor3'
}

//For executa uma instruçaõ até que ela seja falsa
for (let indice = 0; indice<array.length; indice++){
    console.log(indice)
}

//IMprime o indice
for(let i in array){
    console.log(i)
}

//Imprime o indice
for(i in object){
    console.log(i)
}

//Imprime o valor
for(i of array){
    console.log(i)
}
//Não da pra usar for of com object, como mostra no exemplo abaixo ele
//vai imprimir cada letra em uma linha
for(i of object.propriedade1){
    console.log(i)
}

//while - Executa uma instrução "enquanto" determinada condição for verdadeira.
var a = 0;
while(a < 10){
    a++;
    console.log(a);
}

//DO/While - Executa uma instrução "até que" determinada condição seja falsa, eseculta pelo menos uma vez.
var a = 0;
do{
    a==;
    console.log(a)
}while(a < 10)*/