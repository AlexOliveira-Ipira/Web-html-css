let anyEstaDeVoolta: any;
let unknowValor: unknown;

//Funcionamento do any
anyEstaDeVoolta= 3;
anyEstaDeVoolta = 'teste';
anyEstaDeVoolta = 5;

let stringTestAny: string = 'TesteNovo'
stringTestAny = anyEstaDeVoolta;


//Funcionandmento do unknown;
unknowValor = 3;
unknowValor = 'opa';
unknowValor = true;
unknowValor = 'Vai sim'

let stringTesteUnknow: string = 'Agora vai';
//Isso gera um erro
// stringTesteUnknow = unknowValor;

//Para usar o tipo unknow tem de valiadr os ddos
if(typeof unknowValor === 'string'){
    stringTesteUnknow = unknowValor
}

//Tipo never - Um código que não finzalizou 
function jogaErro(erro: string, codigo: number): never {
    throw {error: erro, code: codigo}
}

jogaErro('Deu erro' , 500)