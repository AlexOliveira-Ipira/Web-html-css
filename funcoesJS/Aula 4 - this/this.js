// This
// A palavra reservada this é uma referência de contexto.

// No exemplo abaixo , this refere-se ao objeto pessoa.
const pessoa = {
    id: 1,
    firstName: "Alex",
    lastName: "Oliveira",
    fullName : function () {
        return this.firstName + "  " + this.lastName;
    },
    getId: function () {
        return this.id;        
    }
};
pessoa.fullName();

//Exemplo 2
// Fora do objeto
//console.log(this);

// Dentro de uma função
/*(
    function(){
        console.log(this)
})();*/


//Dentro de um objeto(método)
const pessoaThis = {
    firstNameThis: "Alex",
    lastNameThis: "Oliveira",
    getFullName: function(){
        console.log(`${this.firstNameThis} ${this.lastNameThis}`);
    },
}

pessoaThis.getFullName();