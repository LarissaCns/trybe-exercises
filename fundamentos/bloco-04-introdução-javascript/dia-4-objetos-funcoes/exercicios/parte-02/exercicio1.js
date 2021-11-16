//Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function verificaPalindrome(string){
    let inverso = string.split("").reverse().join("")
    if ( inverso === string){
        return true;
    } 
    return false;
}
console.log(verificaPalindrome('banana'));