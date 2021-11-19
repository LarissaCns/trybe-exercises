//Parte 1
/* let color = document.getElementById("elementoOndeVoceEsta").parentElement;
color.style.color = "blue";

let primeiroFilhoDoFilho = document.getElementById("primeiroFilhoDoFilho");
primeiroFilhoDoFilho.innerText = "Atenção de novo só que azul!!";

let primeiroFilho = document.getElementById("pai").firstElementChild;

let elementoOndeVoceEsta = document.getElementById(
  "elementoOndeVoceEsta"
).previousElementSibling;

let texto = document.getElementById("elementoOndeVoceEsta").nextSibling;
console.log(texto);

let terceiroFilho = document.getElementById(
  "elementoOndeVoceEsta"
).nextElementSibling;

let pai =
  document.getElementById("pai").lastElementChild.previousElementSibling;
*/
//Parte 2

const pai = document.getElementById("pai");
const irmao = document.createElement("section");
irmao.id = "irmaoElementoOndeVoceEsta";
pai.appendChild(irmao);

const elementoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta");
const filhoElementoOndeVoceEsta = document.createElement("section");
filhoElementoOndeVoceEsta.id = 'filhoElementoOndeVoceEsta';
elementoOndeVoceEsta.appendChild(filhoElementoOndeVoceEsta);

const paiPrimeiroFilho = document.getElementById("primeiroFilhoDoFilho");
const filhoPrimeiroFilhoDoFilho = document.createElement("section");
filhoPrimeiroFilhoDoFilho.id = "filhoPrimeiroFilhoDoFilho";
paiPrimeiroFilho.appendChild(filhoPrimeiroFilhoDoFilho);

const acessarTerceiroFilho = filhoPrimeiroFilhoDoFilho
.parentElement
.parentElement
.nextElementSibling;
console.log(acessarTerceiroFilho);



