// Frase ou palava que pode ser lida 
//de frente pra traz ou de traz pra frente
/*
//Solução 1
function verificaPalindro(string){
    if(!string) return "String inexistente";

    return string.split("").reverse().join("") === string
}
console.log(verificaPalindro('gato'));*/

//Solução 2
function verificaPalindro2(string){
    if(!string) return "String inexistent";

    for (let i = 0; i < string.length / 2; i++){
       if(string[i] !== string[string.length -1 - i]){
           return false;
       }
    }
    return true;
}
console.log(verificaPalindro2('gata'))