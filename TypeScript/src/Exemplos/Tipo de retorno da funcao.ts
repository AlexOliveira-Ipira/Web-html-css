// Deixando esplicito o que a função realmente retorna, não permitindo alterar os dados internos
// dos tipos
function somarValoresNumericos(numero1: number , numero2: number): number {
    return numero1 + numero2    
}

console.log(somarValoresNumericos(1,3))

