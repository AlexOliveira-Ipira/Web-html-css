const alunos = [
    {
        nome: 'João',
        nota: 5,
    },
    {
        nome:'Sofia',
        nota: 9,
    },
    {
        nome: 'Paulo',
        nota: 6
    },
    {
        nome:'Miguel',
        nota: 7
    }
];


//Exemplo 1 sem o uso do object
/*function alunosAprovados(arry, media) {
    let aprovados = [];

    for(let i = 0; i < arry.length; i++){
        if(arry[i].nota >= media){
            aprovados.push(arry[i].nome)
        }
    }
    return aprovados
}*/
//Exemplo 2 com o uso do objext

function alunosAprovados2(arry, media) {
    let aprovados = [];

    for(let i = 0; i < arry.length; i++){

        const {nota, nome} = arry[i];

        if(nota >= media){
            aprovados.push(nome)
        }
    }
    return aprovados
}

console.log(alunosAprovados2(alunos, 7));

