function calculadora() {
    const operacao = Number(prompt('Escolha uma operação:\n 1 - Soma(+)\n 2 - Subtração(-)\n 3 - Multiplicação(*\n 4 - Divisão\
real(/)\n 5 - Divisão Inteira(%)\n 6 - Potenciação(**)\n'));

if(!operacao || operacao >=7){
    alert('Erro - Opção Invalida!')
    calculadora();
}else{
    let n1 = Number(prompt('Insira o primerio valor'))
    let n2 = Number(prompt('Insira o segundo valor'))
    let resultado;
    if (!n1 || !n2){
        alert('Ero - Numero invalido e ou strig digitada na opção.')
        calculadora();
    }else{
        switch (operacao) {
            case 1:
                soma();
                break;
            case 2:
                subtracao();
                break;
            
            case 3:
                multiplicacao();
                break;
            case 4:
                divisaoReal();
                break;
            case 5:
                divisaoInteiro();
                break;
            case 6:
                potenciacao();
                break;
            default:
                alert('Valor escolhido errado, favor escolher um valor entre 1 a 6.')
                break;
        }   
    }
    //Inicio das funções
    function soma(){
        resultado = n1 + n2;
        alert(`${n1} + ${n2} = ${resultado}`)
        novaOperacao()
    }
    function subtracao(){
        if (n1 >= n2){
            resultado = n1 - n2;
            alert(`${n1} - ${n2} = ${resultado}`)
            novaOperacao()
        }else{
            resultado = n2 - n1;
            alert(`${n1} - ${n2} = ${resultado}`)
            novaOperacao()
        }
    }
    function multiplicacao(){
        resultado = n1 * n2;
        alert(`${n1} * ${n2} = ${resultado}`)
        novaOperacao()
    }
    function divisaoReal(){
        resultado = n1 / n2;
        alert(`${n1} / ${n2} = ${resultado}`)
        novaOperacao()
    }
    function divisaoInteiro(){
        resultado = n1 % n2;
        alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`)
        novaOperacao()
    }
    function potenciacao(){
        resultado = n1 ** n2;
            alert(`${n1} elevado a ${n2}ª é igual a ${resultado} `)
        novaOperacao()
    }
    //Fim das principais funções
    }




//Função para reiiciar o jogo ou sair dele.
function novaOperacao(){
    let opecao =Number(prompt('Deseja fazer outra operação?\n 1 - SIM\n 2 - Não '));
    if (opecao == 1){
        calculadora();
    }else if (opecao == 2){
        alert('Até mais!')
    }else{
        alerte('Digite uma opção valida!')
    }
}//Fim da NovaOperacao
} //Fim da função calculadora

calculadora();