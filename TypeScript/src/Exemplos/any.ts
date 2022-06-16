//Valor any recebe qualquer coisa, não é bom usar
let valorany: any;
valorany = 3;
valorany = 'Valor';
valorany = true;

//Tipo de erro que pode ocorrer utilizando o any
let valorString: string = 'teste';
valorString = valorany;
let valorString2: string = 'Testao';
valorString2 = valorany

function somarStrings(string1: string, string2: string) {
    console.log(string1 + string2)
}

somarStrings(valorString, valorString2)
somarStrings('Olá', ', como vai?')
