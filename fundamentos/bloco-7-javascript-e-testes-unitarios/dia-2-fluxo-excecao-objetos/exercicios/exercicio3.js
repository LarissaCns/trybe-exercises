const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};
//Exercicio 1
const adicionaTurno = (objeto,chave,valor) => objeto[chave] = valor;
adicionaTurno(lesson2, 'turno', 'noite');
//console.table(lesson2);

//Exercicio 2
const listarKeys = (objeto) => Object.keys(objeto);
//console.log(listarKeys(lesson1));

//Exercicio 3
const tamanhoObjeto = (objeto) => Object.keys(objeto).length;
//console.log(tamanhoObjeto(lesson1));

//Exercicio 4
const valoresObjeto = (objeto) => Object.values(objeto);
//console.log(valoresObjeto(lesson3));

//Exercicio 5
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3 });
//console.log(allLessons);

const alunosObjetoCriado = (objeto) => {
    let total = 0;
    const array = Object.keys(objeto);
    for ( index in array) {
        total += objeto[array[index]].numeroEstudantes;
    }
    return total;
} 
//console.log(alunosObjetoCriado(allLessons));

const valorChave = (objeto,posicao) => Object.values(objeto)[posicao];
//console.log(valorChave(lesson1, 0));

const verifyPair = (obj, key, value) => {
    const arr = Object.entries(obj); //Cria um array com todas as chaves do objeto
    let isEqual = false; //Começa com falso 
    for (let index in arr) { //Percorre o array 
      if (arr[index][0] === key && arr[index][1] === value) isEqual = true; //Se a chave e o valor forem iguais
    } 
    return isEqual;
  };
  console.log(verifyPair(lesson2,'materia','Maria Clara'));







