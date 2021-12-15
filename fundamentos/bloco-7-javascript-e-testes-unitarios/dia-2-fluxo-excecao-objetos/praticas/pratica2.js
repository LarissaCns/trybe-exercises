/* ----------------------------------
const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };
  
  let newKey = 'lastName'; //criou uma nova chave lastName
  const lastName = 'Ferreira'; //criou uma const para armazenar o sobrenome
  customer[newKey] = lastName; // a chave criada recebe o sobrenome e é colocada no objeto
  newKey = 'fullName'; // agora a chave recebe o valor de fullName
  const fullName = `${customer.firstName} ${customer.lastName}`; // cria uma const fullName que recebe o primeiro nome e o lastName
  customer[newKey] = fullName; // a chave criada recebe o sobrenome e é colocada no objeto
  console.log(customer);
---------------------------------- */
objeto = {};

const criaObjeto = (objeto, chave, valor) => {
    let newKey = chave;
    objeto[newKey] = valor;
    return objeto;
}

console.log(criaObjeto(objeto, 'palavra', 'alo'));