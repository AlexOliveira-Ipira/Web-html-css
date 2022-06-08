const currentNumberValor = document.getElementById('currentNumber')
var interNumber = 0;

function increment(){
        interNumber ++;
        currentNumberValor.innerHTML = interNumber;
}

function decrement(){
        interNumber --;
        currentNumberValor.innerHTML = interNumber; 
}