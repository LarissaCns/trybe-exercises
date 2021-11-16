//Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .

function verificaFimPalavra(inicio,fim){
    let inversoInicio = inicio.split('').reverse().join('');
    let inversoFim = fim.split('').reverse().join('');
    let result;

    for (let index = 0; index < inversoFim.length; index += 1){
        if(inversoInicio[index] !== inversoFim[index]){
            return false;
        } else {
            return true;
        }
    }
}
console.log(verificaFimPalavra('larissa', 'issa'));