//4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function caracteres(nomes) {
  let maiorQuantidade = nomes[0];
  for (let i in nomes) {
    if (maiorQuantidade.length < nomes[i].length) {
      maiorQuantidade = nomes[i];
    }
  }
  return maiorQuantidade;
}
console.log(caracteres(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
