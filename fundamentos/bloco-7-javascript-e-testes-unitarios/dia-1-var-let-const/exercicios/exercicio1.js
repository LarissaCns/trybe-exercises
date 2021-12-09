// 1 - Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
// 2 - Modifique a estrutura da função para que ela seja uma arrow function .
// 3 - Modifique as concatenações para template literals .
// 4 - Copie o código abaixo.

const testingScope = (escopo) => {
    if (escopo === true) {
      let ifScope = `Não devo ser utilizada fora do meu escopo (if) `;
      ifScope = ifScope + `ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
      const elseScope = `Não devo ser utilizada fora meu escopo (else)`;
      console.log(elseScope);
    }
}

testingScope(true);