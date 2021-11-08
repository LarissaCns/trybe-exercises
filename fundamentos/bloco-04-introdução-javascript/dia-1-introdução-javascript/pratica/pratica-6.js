//Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
//Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
//Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
//Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
//Exemplo: bishop (bispo) -> diagonals (diagonais)
let peca1 = 'cavalo'.toLowerCase();

if (peca1 === 'bispo'){
    console.log('diagonal');
} else if (peca1 === 'peao'){
    console.log('horizontal');
} else if (peca1 === 'torre'){
    console.log('horizontal');
} else if (peca1 === 'cavalo'){
    console.log('em L');
} else {
    console.log('peça inválida');
}

