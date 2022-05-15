const fs = require('fs');
const sinon = require('sinon');
const { expect } = require('chai');

const functionWriting = require('../arquivos/writing')

describe('Executa a função writing', () => {
    before(() => {
        sinon.stub(fs, 'writeFileSync');
      });
    
      after(() => {
        fs.writeFileSync.restore();
      });
    it('Verifica se o retorno é um "ok"', () => {
        const resposta = functionWriting('arquivo.txt', '#vqv conteúdo');
        expect(resposta).to.be.a('string')
        expect(resposta).to.be.equals('ok');
    });
});
