//MOdulos
//Modulos são aruivos JS que tem a capacidade de exportar e importar informações de outros
//arquivos do mesmo tipo. - Criando uma arvore de dependencias.
// Algumas vantagens:
// - Organização do código
// - Compartilhamento de variáveis em escopos diferentes;
// - Explicita as dependências dos arquivos.

// Exportar modulos
// Name de exportes
/* Exemplo 1
export function mostraIdade(pessoa){
    return (`A idade de ${pessoa.nome} é ${pessoa.idade}`)
}

export function mostraCidade(pessoa){
    return (`A idade de ${pessoa.nome} é ${pessoa.cidade}`)
}

export function mostraHobby(pessoa){
    return (`A idade de ${pessoa.nome} é ${pessoa.hobby}`)
}
*/

/* Exemplo 2
function mostraIdade(pessoa){
    return (`A idade de ${pessoa.nome} é ${pessoa.idade}`)
}

function mostraCidade(pessoa){
    return (`A idade de ${pessoa.nome} é ${pessoa.cidade}`)
}

function mostraHobby(pessoa){
    return (`A idade de ${pessoa.nome} é ${pessoa.hobby}`)
}

export {
    mostraIdade,
    mostraCidade,
    mostraHobby
}
*/

//Default exports
// Só pode haver um por arquivo;
// Será o retorno padrão do seu arquivo
/* Exemplo
function mostraIdade(pessoa){
    return `A idade de ${pessoa.nome} é ${pessoa.idade}`
}

function mostraCidade(pessoa){
    return `A idade de ${pessoa.nome} é ${pessoa.cidade}`
}

function mostraHobby(pessoa){
    return `A idade de ${pessoa.nome} é ${pessoa.hobby}`
}
export{
    mostraIdade,
    mostraCidade,
}

export default mostraHobby; */
// Formas de importar
// Named exports:
// import {funcao, variavel, classe} from './arquivo.js'

// Default exports
// import valorDefault from './arquivo.js'

// Apelidando funções
// import {arquivo as Apelido} form './arquivos.js'
// Apelido.metodo();

//Importe todos os dados de um arquivo
// import * as INFOS from './arquivos.js'
// INFOS.metodoA();
// console.log(INFOS.variavel);

// Vinculando ao HTM
// Na tag script tem de colocar o type="module"
// tem de rodar em um servidor. Podendo ser utilizado
// a extensão "Live Server"

