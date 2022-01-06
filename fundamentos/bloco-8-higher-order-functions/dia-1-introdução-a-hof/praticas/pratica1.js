const acordei = () => `Acordando!!`;
const cafezinho = () => `Bora tomar café!!`;
const dormindo = () => `Partiu dormir!!`;

const rotina = (func) => {
    const result = func();
    console.log(result);
};

rotina(acordei);

//HOF Simples ----------------------
/* const repeat = (number, action) => { // função contadora 
    for (let count = 0; count <= number; count += 1) {
      action(count);
    }
  };
  
repeat(5, console.log); */

// HOF mais complexa --------------------
/* const repeat = (number, action) => { // função contadora 
    for (let count = 0; count <= number; count += 1) {
      action(count);
    }
  };
  
  repeat(3, (number) => { //Um número até que ponto gostaríamos de testar, neste caso 3 ;
    if (number % 2 === 0) { // numeros pares 
      console.log(number, 'is even');
    }
  }); */

//----------------------------
/* const repeat = (number, action) => {
    for (let count = 0; count <= number; count += 1) {
      action(count);
    }
  };
  
  //callback
  const isEven = (number) => {
    if (number % 2 === 0) {
      console.log(number, 'is even');
    }
  };
  
  //callback
  const isOdd = (number) => {
    if ((number % 2) > 0) {
      console.log(number, 'is odd');
    }
  };
  
  repeat(3, isEven); // Testa quais números serão pares;
  repeat(3, isOdd); // Testa quais números serão ímpares; */


