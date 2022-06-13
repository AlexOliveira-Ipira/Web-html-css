//Array

// O que era parte de um array se torna um elemento independente.
//Exemplo de array Spread: Uma forma de lidar separadamente com elementos.
// Usa quando esta chamando a função
/*function sum(x,y,z) {
    return x + y + z;    
}

const numbers = [1,2,3];
console.log(sum(...numbers));*/

//Exemplo de array Rest: Combina os argumentos em um array
// Usa quando esta declarando a função
//O que era um elemento independente se torna parte de um array.
function confereTamanho(...args) {
    console.log(args.length) 
}

confereTamanho();
confereTamanho(1,2);
confereTamanho(3,4,5);

//Objetos
//Object Destructuring
//Entre chaves{}, pode filtrar apenas os dados que nos interessam em um objeto
//Exemplo
const user = {
    id: 42,
    displayName: 'jdoe',
    fulName:{
        firstName : 'john',
        lastName: 'Doe'
    }
};

function userId({id}) {
    return id;
}

function getFulName({fullName: {firstName: first, lastNamen: last}}) {
    return `${first} ${last}`;  
}

userId(user)

getFulName(user)
