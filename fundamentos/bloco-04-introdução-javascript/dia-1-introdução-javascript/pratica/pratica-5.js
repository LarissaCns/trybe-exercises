//Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

//Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
//Um ângulo será considerado inválido se não tiver um valor positivo.

const ang1 = 30;
const ang2 = 100;
const ang3 = 10;

if ( ang1 > 0 && ang2 > 0 && ang3 > 0){
    let soma = ang1 + ang2 + ang3;

    if ( soma === 180) {
        console.log('True');
    } else if ( soma !== 180) {
        console.log('False');
    }
} else {
    console.log('erro, ângulo inválido (negativo)');
}
    


