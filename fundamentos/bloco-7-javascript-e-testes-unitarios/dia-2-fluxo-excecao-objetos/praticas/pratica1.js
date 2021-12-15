/* --------------------
const sum = (value1, value2) => value1 + value2;

console.log(sum(2, 3));
-------------------- */

/* -----------------
const sum = (value1, value2) => value1 + value2; //houve uma concatenação de strings 

console.log(sum(2, '3')); // resultado: 23 
----------------- */

/* -----------------
const sum = (value1, value2) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
      return 'Os valores devem ser numéricos';
    }
    return value1 + value2;
  };
  
  console.log(sum(2, '3'));
----------------- */

/* -----------------
const sum = (value1, value2) => {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    throw new Error('Os valores devem ser numéricos');
  }
  return value1 + value2;
};

console.log(sum(2, '3'));
----------------- */

const verifyIsNumber = (value1, value2) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
      throw new Error('Os valores devem ser numéricos'); //cria o Error com a mensagem
    }
  };
  
  const sum = (value1, value2) => {
    try { //Função executada com sucesso 
      verifyIsNumber(value1, value2);
      return value1 + value2;
    } catch (error) { //Função deu erro, o catch captura esse erro (pode ser utilizado qualquer nome aqui).
      throw error.message; //propriedade do objeto nativo Error que contém a mensagem criada
    }
  };
  
  console.log(sum(2, '3'));
