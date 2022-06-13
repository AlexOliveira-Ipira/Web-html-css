//While - Executa instruções até que a condição se torne falsa.
function exemploWile() {
    let num = 0;

    while (num <=5) {
        console.log(num)
        num ++;       
    }
    
}
exemploWile()

//Do - While - Executa instruções até que a condição se torne falsa,
// mais ele execulta pelo menos uma ver.
// Exemplo 1
function exemploDoWhile() {
    let num = 0
    
    do { 
        console.log(num);
        num++;
    } while (num <=5);
}

exemploDoWhile()

//Exemplo 2
function exemploDoWhile2() {
    let num = 6;

    do {
        console.log(num);
        num++;
    } while (num <= 5); 
}

exemploDoWhile2()
