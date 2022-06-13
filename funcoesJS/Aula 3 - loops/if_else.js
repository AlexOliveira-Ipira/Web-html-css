//sintax
//Exemplo 1
function numeroPositivo(num) {
    if(num < 0){
        resultado = false;
    }else{
        resultado = true;
    }
    return resultado;    
}

numeroPositivo(2)

numeroPositivo(-9)

//Exemplo 2
function numeroPositivo2(num) {
    let resultado;
    const ehNegativo = num < 0;

    if(ehNegativo){
        resultado = false;
    }else{
        resultado = true;
    }
  return resultado   
}

numeroPositivo2(2)

numeroPositivo2(-9)

//Exemplo 3
function numeroPositivo3(num) {
    const ehNegativo = num < 0;
    
    if(ehNegativo){
        return false;
    }
    return true;
}

numeroPositivo3(2);

numeroPositivo3(-9);

//Função de aninhamento de if, JS não tem elseif
//Exemplo 4
function numeroPositivo4(num) {
    const ehNegativo = num < 0;
    const maiorQueDez = num > 10;

    if(ehNegativo){
        return "Esse numero é negativo!";
    }else if(!ehNegativo && maiorQueDez){
        return "Esse numero é positivo e maior que 10!";
    }
    return "Esse número é positivo!";
}

numeroPositivo4(2)

numeroPositivo4(-2)

numeroPositivo4(40)

//Switch/case
// Equivale a uma comparação de tipo de valor (===)
// Sempre precisa de um valor "default"
// Idea para quando se precisa comparar muitos valores
//Exemplo
function getAnimal(id) {
    switch (id) {
        case 1:
            return "cão";
            break;
        case 2:
            return "gato";
            break;
        case 3:
            return "pássaro";
            break;
        default:
            return "peixe";
            break;
    }
    
}

getAnimal(1); //Cão
getAnimal(2); //Gato
getAnimal(3); //Pâssaro
getAnimal(4); //Peixe
getAnimal('1'); // Peixe - nesse caso o 1 esta como scting.