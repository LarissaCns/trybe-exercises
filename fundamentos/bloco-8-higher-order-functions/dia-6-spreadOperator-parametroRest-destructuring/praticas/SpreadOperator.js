const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [60, 1.7];

console.log(imc(...patientInfo)); // 20.76

// ------------------------

const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

console.log(Math.max(...randomNumbers)); // 800
console.log(Math.min(...randomNumbers)); // 5

// -------------------------

const people = {
    id: 101,
    name: 'Alysson',
    age: 25,
  };
  
  const about = {
    address: 'Av. Getúlio Vargas, 1000',
    occupation: 'Developer',
  };
  
  const customer = { ...people, ...about };
  console.log(customer); /* {
    id: 101,
    name: 'Alysson',
    age: 25,
    address: 'Av. Getúlio Vargas, 1000',
    occupation: 'Developer'
  } */

// --------------------------
// Para fixar 

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Morango', 'Uva', 'Maçã'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Melancia', 'Kiwi', 'Banana'];

const fruitSalad = (fruit, additional) => {
  return [...fruit,...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));

// --------------------------
