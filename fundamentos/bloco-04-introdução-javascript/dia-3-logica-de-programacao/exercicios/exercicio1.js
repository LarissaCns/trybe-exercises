//Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:

/* n = 5

*****
*****
*****
*****
***** */

let n = 5;
let espaco = ''; //string vazia 
let simbolo = '*'; //simbolo utilizado

for(let index = 0; index < n; index += 1){ //colunas
    espaco = espaco + simbolo;
}

for (let index = 0; index < n; index += 1) { //linhas
    console.log(espaco);
}
