//Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

let n = 5;
let espaco = ''; //string vazia 
let simbolo = '*'; //simbolo utilizado
let inputPosition = n;

for (let linha = 0; linha < n; linha += 1) { // linha 
    for(let coluna = 0; coluna <= n; coluna += 1){
        if(coluna < inputPosition){
            espaco = espaco + ' ';
        } else {
            espaco = espaco + simbolo;
        }
    }
    console.log(espaco); 
    espaco = '';
    inputPosition -= 1;
}