const grades = {
    portugues: 'Aprovado',
    matematica: 'Reprovado',
    ingles: 'Aprovado',
  };
  
  const verifyGrades = (studentGrades) => (
    Object.values(studentGrades).every((grade) => grade === 'Aprovado')
    // Object.values vai retornar um array contendo apenas os valores do objeto
    // O every irá percorrer esse mesmo array com a condição proposta
  );
  
  console.log(verifyGrades(grades));