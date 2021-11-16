//5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function repeticao(array){
    let numero = array[0];
    let seRepete = 0;
    for ( let numeros in array){
        if(numero === array[numeros]){
            seRepete = array[numeros];
        }
    }
    return seRepete;
}
console.log(repeticao([2, 3, 2, 5, 8, 2, 3]));
