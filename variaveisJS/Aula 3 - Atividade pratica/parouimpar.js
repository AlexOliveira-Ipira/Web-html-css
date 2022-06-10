//Identifica se o número é par ou impar , 
// numeração sequeicnail utilizando o Math.floar e o math.randon
function substituiPares(numero){
    if(!numero) return -1;
        if(numero % 2 === 0){
            console.log(`O número ${numero} é Par \n`)
        }else{
            console.log(`O número ${numero} é Impar \n`)
        }
    }

let num = Math.floor(Math.random() * 100) 
console.log(substituiPares(num))

