const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
  };
  
  const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
  };

const exibirHabilidades = (student) => {
    const habilidades = Object.keys(student); //habilidades é igual aos itens dos objetos
    for(item in habilidades){ //para cada item das habilidades 
        console.log(`${habilidades[item]} Nível: ${student[habilidades[item]]}`); 
    }
}

console.log(`Estudante 1` );
exibirHabilidades(student1);
console.log(`Estudante 2` );
exibirHabilidades(student2);
