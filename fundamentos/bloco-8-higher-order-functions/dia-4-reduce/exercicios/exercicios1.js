// Array.map
/* const numeros = [1,2,3,4];

const somandoNumeros = (numero) => numero += 1;

const arraySomado = numeros.map(somandoNumeros);
console.log(arraySomado); */

// Array.filter
/* const numeros = [1,2,3,4];
const somandoNumeros = (numero) => numero > 2;
const arraySomado = numeros.filter(somandoNumeros);
console.log(arraySomado); */

// Array.reduce 
/* const numeros = [1,2,3,4,5,6,7];
const somandoNumeros = (numero, acumulador) => numero + acumulador;
const somaTotal = numeros.reduce(somandoNumeros,0);
console.log(somandoNumeros); */

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];

  const a = arrays.concat([]);
  
  /* function flatten() {
    return arrays.reduce((acc, curr) => acc.concat(curr), []);
  } */

console.log(a);