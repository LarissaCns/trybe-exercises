//Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function indiceMaior(array){
    maiorNumero = array[0];
    index = 0;
    for(let i = 0; i < array.length; i += 1){
        if(maiorNumero < array[i]){
            maiorNumero = array.indexOf(array[i]);
        }
    }
    return maiorNumero; 
}
console.log(indiceMaior([2, 3, 6, 7, 10, 1]));