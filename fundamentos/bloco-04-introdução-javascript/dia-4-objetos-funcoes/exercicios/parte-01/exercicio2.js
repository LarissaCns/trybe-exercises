let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
  };
// Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:
//personagem
//origem
//nota
//recorrente
for ( let index in info){
    console.log(index);
}
//4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:
for ( let i in info){
    console.log(info[i]);
}
