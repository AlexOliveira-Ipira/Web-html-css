//Parâmetros 
// Valor padrão pós-ES2015:
//Exemplo de um parâmetro com valor opcional
function exponencial(array, num = 1) {
    const result = [];
    
    for(let i ; i < array.length; i++){
        result.push(array[i] ** num);
    }
   return result; 
}

exponencial([1,2,3,4])
exponencial([1,2,3,4],4)

//Arguments
// Um array com todos os parâmetros passados quando a função foi invocada.
// Não tem necessidade de definir um argumentos na função quando usa o arguments
function findMax() {
    let max = -Infinity; //Aceita numeros positivos e negativos

    for(let i = 0; i < arguments.length; i++){
        if(arguments[i] > max){
            max = arguments[i];
        }
    }
    return max;
}

findMax(1,2,3,5,90,1) // Resultado esperado 90

// Objeto "arguments"
//Exemplo
function showArrgs() {
    return arguments;
}

showArrgs(1,2,[2,3,4], "string")
