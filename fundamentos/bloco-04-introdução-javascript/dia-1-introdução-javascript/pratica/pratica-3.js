//Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const numb1 = 37;
const numb2 = 28;
const numb3 = 75;

if (numb1 > numb2 && numb1 > numb3) {
    console.log('O primeiro número',numb1,'é o maior dos três !!');
} else if(numb2 > numb3){
    console.log('O segundo número', numb2,' é o maior dos três !!');
} else {
    console.log('O terceiro número', numb3,' é o maior dos três!!');
}