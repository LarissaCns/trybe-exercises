const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C']; //respostas corretas
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B']; //respostas estudante 
                         
const corrigeGabarito = (respostasCertas, respostasEstudante, callback) => { //HOF 
    let contadorPontos = 0;
    for(let i = 0; i < respostasCertas.length; i += 1){
        const retorno = callback(respostasCertas[i], respostasEstudante[i]);
        console.log(respostasCertas[i]);
        contadorPontos += retorno;
    }
    return `Resultado final: ${contadorPontos} pontos`;
}

const verificaNotas = (respostasCertas, respostasEstudante) => {
     if(respostasCertas === respostasEstudante){
        return 1;
     } if(respostasEstudante === 'N.A') {
        return 0;
     }
        return -0.5;
};


console.log(corrigeGabarito(RIGHT_ANSWERS, STUDENT_ANSWERS, verificaNotas));
