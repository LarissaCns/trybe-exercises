// Cria os options na tag Select dos Estados
function createStateOptions() {
    let states = document.getElementById('state');
    let stateOptions = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
  
    for (let index = 0; index < stateOptions.length; index += 1) {
      let option = document.createElement('option');
      option.innerText = stateOptions[index];
      option.value = stateOptions[index];
      states.appendChild(option);
    }
  }
  //Todos os inputs e suas validações obrigatórias 
  let inputs = {
    name: {
      maxLength: 40,
      required: true,
    },
    email: {
      maxLength: 50,
      required: true
    },
    cpf: {
      maxLength: 11,
      required: true
    },
    address: {
      maxLength: 200,
      required: true
    },
    city: {
      maxLength: 28,
      required: true,
    },
    state: {
      type: 'select',
      required: true,
    },
    houseType: {
      type: 'radio',
      required: true,
    },
    resume: {
      maxLength: 1000,
      required: true,
    },
    role: {
      maxLength: 40,
      required: true,
    },
    roleDescription: {
      maxLength: 500,
      required: true,
    },
    startDate: {
      type: 'date',
      required: true,
    }
  }
  //Inicio das validações ---------- 
  
  //Validação padrão
  function defaultValidation(input, name){ //nome do input e o input em si 
    let trimmed = input.value.trim(); //remove os espaços em branco no início e no fim da string.
    let validation = inputs[name]; //insere na variável validation o valor que vamos acessar no objeto 'inputs' usando o parâmetro name como busca por chave.
  
    if(validation.required && trimmed.length === 0){ //verifica se o número de caracteres é zero.
      return false;
    }
  
    if(validation.maxLength && trimmed.length > validation.maxLength){ //verifica se o comprimento da string é maior que o permitido.
      return false;
    }
    
    return true; //retorna true se passar pelas duas validações if.
  }

  //Validação de data 
  function dateValidation(input, name){ //recebe o input e seu nome por parâmetro
    if(input.value.length === 0){ //verifica se existe algum caracter na data 
      return {
        message: 'A data não foi preenchida!' //se não, retorna a mensagem 
      }
    }
    //regex - regular expression
    let regex = /^\d\d\/\d\d\/\d\d\d\d$/; 
    /* 
        ^ - ignora quebras de linhas antes de qualquer caractere que digitarmos.
        \d - o campo deve ser preenchido com um número entre 0 e 9,999...
        - Os dois primeiros \d referenciam ao dia.
        / - separa os campos de dia, mês e ano.
        - A configuração se repete até o final 
        $ - sinaliza que nosso input não aceita quebras de linha dali em diante.
    */ 
    if(!regex.test(input.value)){ // Retorna true ou false se a string estiver nos padrões do regex ou não.
      return {
        // !regex - se a string não estiver nos padrões, entra na condição para retornar uma mensagem de erro.
        message: 'Data: Formato inválido'
      };
    }
    
    // Se a string passar nos padrões, retorna o array da string 
    // a função split vai separar os elementos por '/' 
    let splitted = input.value.split('/'); //retorna o array separado por '/'.
    let day = splitted[0];
    let month = splitted[1];
    let year = splitted[2];
  
    if(day < 0 || day > 30){
      return {
        message: 'Dia inválido'
      };
    }
  
    if(month < 0 || month > 12){
      return {
        message: 'Mês inválido'
      }
    }
  
    if(year < 0) {
      return {
        message: 'Ano inválido'
      };
    }
  
    return true;
  }
  
  //função auxiliar de getSelectedOption
  function getSelectedOption(select){
    return select.options[select.selectedIndex]; //capta a chave que contém informações sobre a validação do input de selects.
  }
  
  function selectValidation(select, name){
    let option = getSelectedOption(select); //pega a option selecionada.
    let validation = inputs[name];
  
    if(validation.required && (!option || option.disabled)){
      return false;
    }
    //as condicionais apontam que se a opção for obrigatória e a opção selecionada estiver desabilitada ou não existir, a função vai retornar false . Se a informação passar por essa validação intacta, retorna true .

    return true;
  }
  

  function radioValidation(radio, name){
    let checked = document.querySelector(`[name=${name}]:checked`) //cria uma variável que capta o atributo checked do primeiro radio que tem o mesmo 'name' que a gente passou por argumento nessa função.
    
    if(checked === null){ //se o checked for null, isto é, não está checado, retorna false.
      return false;
    }
  
    return true; //caso contrário retorna true.
  }
  //Fim das validações ---------

  //objeto utilizado pelo validateInput para buscar uma determinada chave.
  let validationStrategies = {
    default: defaultValidation,
    date: dateValidation,
    select: selectValidation,
    radio: radioValidation,
  }
  
  function validateInput(inputName){ //pega o nome do input que a função validateData passou
    let inputType = inputs[inputName].type; //acessa a chave type
    let input = document.querySelector(`[name=${inputName}]`) //definimos outra variável que vai captar o primeiro elemento que case com o que a gente passar nos parênteses dele.
  
    if(inputType){ //Se inputType não for inválido, execute isso
      let validationFunction = validationStrategies[inputType];
      return validationFunction(input, inputName); //a variável busca uma chave em um objeto usando bracket notation e a variável com o tipo do objeto que inserimos na variável inputType de antes. 

    }
  
    return validationStrategies.default(input, inputName);
  }
    
  function renderErrorMessages(messages){
    let form = document.querySelector('#cv-form');
    let messageDiv = document.createElement('div');
    messageDiv.className = 'error';
    form.prepend(messageDiv);
  
    for(let message of messages){
      let p = document.createElement('p');
      p.innerText = message;
  
      messageDiv.appendChild(p);
    }
  }
  
  function defaultRendering(input){
    let p = document.createElement('p');
    p.innerText = input.value;
  
    return p;
  }
  
  function radioRendering(input){
    let p = document.createElement('p');
    let name = input.getAttribute('name');
    let checked = document.querySelector(`[name=${name}]:checked`);
  
    if(checked){
      p.innerText = checked.value;
    }
  
    return p;
  }
  
  function selectRendering(input){
    let p = document.createElement('p');
    let option = getSelectedOption(input)
    p.innerText = option.value;
    
    return p;
  }
  
  let renderStrategies = {
    default: defaultRendering,
    radio: radioRendering,
    select: selectRendering,
  }
  
  function renderData(){
    let dataDiv = document.createElement('div');
    dataDiv.className = 'data';
  
    let form = document.querySelector('#cv-form');
    form.prepend(dataDiv);
  
    for(let name in inputs){
      let inputType = inputs[name].type;
      let input = document.querySelector(`[name=${name}]`);
  
      let element;
  
      if(renderStrategies[inputType]){
        element = renderStrategies[inputType](input, dataDiv)
      } else {
        element = renderStrategies.default(input, dataDiv)
      }
  
      dataDiv.appendChild(element);
    }
  }
  
  function validateData(){
    let validationsList = {}; //começa com um objeto vazio 
  
    for(let inputName in inputs){ //percorre o objeto inputs do início do arquivo.
      let isValid = validateInput(inputName); //para cada chave do objeto, ele executa a função validadeInput.
      validationsList[inputName] = isValid;
    }
    
    let counter = 0;
    let messages = [];
  
    for(let index in validationsList){
      if(validationsList[index] === false){
        counter += 1;
      }
  
      if(validationsList[index].message){
        counter += 1;
        messages.push(validationsList[index].message);
      }
    }
  
    return {
      errorQtd: counter,
      messages,
    }
  }
  
  function clearDivs(){
    let errorDivs = document.querySelectorAll('.error');
  
    for(div of errorDivs){
      div.remove();
    }
  
    let dataDiv = document.querySelector('.data');
  
    if(dataDiv){
      dataDiv.remove();
    }
  }
  
  function handleSubmit(event) {
    event.preventDefault();
  
    let validation = validateData();
  
    clearDivs();
    
    if(validation.errorQtd === 0){
      renderData();
    } else {
      validation.messages.unshift('Dados Inválidos')
  
      renderErrorMessages(validation.messages)
    }
  }
  
  function clearFields() {
    let formElements = document.querySelectorAll('input');
    let textArea = document.querySelector('textarea')
    let div = document.querySelectorAll('.div-curriculum');
    for (let index = 0; index < formElements.length && index < div.length; index += 1) {
      let userInput = formElements[index];
      userInput.value = '';
      textArea.value = '';
      div[index].innerText = '';
    }
  }
  
  window.onload = function () {
    createStateOptions();
    let submitButton = document.querySelector('.submit-button');
    submitButton.addEventListener('click', handleSubmit);
  
    let clearButton = document.querySelector('.clear-button');
    clearButton.addEventListener('click', clearFields)
  }