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

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

const quantidadeEstudantesMatematica = (objeto) => {
    let total = 0;
    const array = Object.keys(objeto);
    for ( index in array) {
        if( objeto[array[index]].materia === 'Matemática') {
            total += objeto[array[index]].numeroEstudantes;
        }
    }
    return total;
} 
//console.log(quantidadeEstudantesMatematica(allLessons));

const getInfo = (obj, name) => {
    const allLessons = [];
    let allStudent = 0;
    const array = Object.values(obj);
    for (index in array) {
      if (array[index].professor === name) {
        allLessons.push(array[index].materia)
        allStudent += array[index].numeroEstudantes;
      }
    }
    return { aulas: allLessons, estudantes: allStudent };
  }
  const createRelatorio = (allLessons, name) => {
    const relatorio = {};
    relatorio.professor = name;
    Object.assign(relatorio, getInfo(allLessons, name));
    return relatorio;
  }

  console.log(createRelatorio(allLessons, 'Maria Clara'));


