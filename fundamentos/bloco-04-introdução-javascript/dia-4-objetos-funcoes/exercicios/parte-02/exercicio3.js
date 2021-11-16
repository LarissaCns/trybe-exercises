//3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function indiceMenor(array){
    menorNumero = array[0];
    index = 0;
    for(let i = 0; i < array.length; i += 1){
        if(menorNumero > array[i]){
            menorNumero = array.indexOf(array[i]);
        }
    }
    return menorNumero; 
}
console.log(indiceMenor([2, 4, 6, 7, 10, 0, -3]));