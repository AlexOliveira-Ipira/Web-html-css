//Definindo variaveis e importes
let botao = document.getElementById('button');
let entrada1 = document.getElementById('input1') as HTMLInputElement;
let entrada2 = document.getElementById('input2') as HTMLInputElement;
let devePrinta = true;
let frase: string


//Funçção principal
function adicionarNumeros(num1: number, num2: number, devePrinta: boolean,  frase:string) {
    let resultado = num1 + num2
    if(devePrinta){
        console.log(frase + resultado)
    }  
    return num1 + num2
}


//Validação do botão
if(botao){
    botao.addEventListener("click", () => {
        if(entrada1 && entrada2){
            console.log(adicionarNumeros(Number(entrada1.value), Number(entrada2.value), devePrinta ,frase='O resultado é: '))
        }
    }
    )   
}
   

