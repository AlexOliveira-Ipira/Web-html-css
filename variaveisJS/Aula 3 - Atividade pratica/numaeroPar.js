// Substitui os números pares por zero no array
function substituiPares(numeros){
    if(!numeros || !numeros.length) return -1;

    for(let i = 0 ; i < numeros.length; i++){
        if (numeros[i] == 0){
            console.log("Você já é zero")
        }
        else if (numeros[i] % 2 === 0 ){
            console.log(`Sustituindo ${numeros[i]} por 0 ...`)
            numeros[i] = 0;
        }
    }
    return numeros
}

let num = [1,3,4,6,80,33,23,90]
console.log(substituiPares(num))