let color = document.getElementById("elementoOndeVoceEsta").parentElement;
color.style.color = "blue";

let primeiroFilhoDoFilho = document.getElementById("primeiroFilhoDoFilho");
primeiroFilhoDoFilho.innerText = "Atenção de novo só que azul!!";

let primeiroFilho = document.getElementById("pai").firstElementChild;

let elementoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta").previousElementSibling;

let texto = document.getElementById("elementoOndeVoceEsta").nextSibling;
console.log(texto);

let terceiroFilho = document.getElementById("elementoOndeVoceEsta").nextElementSibling;

let pai = document.getElementById("pai").lastElementChild.previousElementSibling;


