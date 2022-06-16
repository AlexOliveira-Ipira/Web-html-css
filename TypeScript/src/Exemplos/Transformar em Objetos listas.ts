const pesso={
    nome: "Mariana",
    idade: 28,
    profissao: 'desenvolvedora'
}

const andre: {nome: string, idade: number, profissao: string} = {
    nome: 'André',
    idade: 25,
    profissao: 'pintor'
}

const paula: {nome: string, idade: number, profissao: string} = {
    nome: 'Paula',
    idade: 25,
    profissao: 'Desenvolvedora'
}

enum Profissao{
    Professora,
    Atriz,
    Desenvolvedora,
    JogadorDeFutrbol
}

interface Pessoa{
    nome: string,
    idade: number,
    profissao?: Profissao
}

interface IEstudantes extends Pessoa {
    materias: string[]
}

const vanessa: Pessoa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Desenvolvedora
}

const jessica: IEstudantes = {
    nome: 'Jessica',
    idade: 28,
    profissao: Profissao.Desenvolvedora,
    materias: ['Matematica', 'programação']
}

const monica: IEstudantes = {
    nome: 'Monica',
    idade: 25,
    materias: ['Portugues', 'Historia']
}

function listar(lista: string[]) {
    for (const item of lista){
        console.log(' ', item)
    }
}

listar(monica.materias)

