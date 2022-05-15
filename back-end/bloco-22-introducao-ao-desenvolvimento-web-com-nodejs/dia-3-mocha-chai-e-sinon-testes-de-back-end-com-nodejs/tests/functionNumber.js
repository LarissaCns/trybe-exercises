const functionNumber = require('../arquivos/numbers');
const { expect } = require('chai');

describe('Verificando os retornos na função', () => {
    it('Retorna "positivo" se o número for maior que zero', () => {
        const result = functionNumber(5)
        expect(result).to.be.equal("positivo")
    });
    it('Retorna "negativo" se o número for menor que zero', () => {
        const result = functionNumber(-5)
        expect(result).to.be.equal("negativo")
    });
    it('Retorna "neutro" se o número for igual a zero', () => {
        const result = functionNumber(0)
        expect(result).to.be.equal("neutro")
    });
    it('Retorna "o valor deve ser um número" em caso de string', () => {
        const result = functionNumber('Alo')
        expect(result).to.be.equal("o valor deve ser um número")
    });
    
});
