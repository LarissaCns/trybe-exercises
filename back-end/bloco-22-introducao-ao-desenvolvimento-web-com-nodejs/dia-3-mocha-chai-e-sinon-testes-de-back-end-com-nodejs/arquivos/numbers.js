const thisNumberIs = (number) => {
    if(number > 0) {
        return "positivo";
    } else if(number === 0) {
        return "neutro"
    } else if(typeof number === "string") {
        return "o valor deve ser um número"
    }
    return "negativo"
}

module.exports = thisNumberIs;