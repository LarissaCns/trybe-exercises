const retornoObjeto = (nomeCompleto) => {
    const email = nomeCompleto.toLowerCase().split(' ').join('_'); //email não começa com letra maiúscula.
    return {nomeCompleto , email: `${email}@trybe.com`};
}

const newEmployees = (retornoObjeto) => {
    const employees = {
      id1: retornoObjeto('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: retornoObjeto('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: retornoObjeto('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

  console.log(newEmployees(retornoObjeto));