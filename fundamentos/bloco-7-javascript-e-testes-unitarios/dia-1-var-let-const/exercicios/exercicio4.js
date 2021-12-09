//Crie uma função que receba uma frase e retorne qual a maior palavra.

const longestWord = text => {
    let wordArray = text.split(' ');
    let maxLength = 0;
    let result = '';

    for ( const word of wordArray){
        if ( word.length > maxLength) {
            maxLength = word.length;
            result = word;
        }
    }
    return result;
}

console.log(longestWord("Larissa Cristina"));