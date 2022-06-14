const pessoa1 = {
    nome: 'Maria',
    idade: 30
}

const pessoa2 = {
    nome: 'Carla',
    idade: 26
}



function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.;`  
}

//Exemplo usando o Call
console.log('Metodo usando o call')
console.log(calculaIdade.call(pessoa1, 10) + `\n`);

//Exemplo usando o Apply
console.log('Metodo usando o apply.')
console.log(calculaIdade.apply(pessoa2,[20]) + `\n`);
