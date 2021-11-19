const header = document.getElementById('header-container');
header.style.backgroundColor = 'rgb(0, 176, 105)';

const urgente = document.querySelector('.emergency-tasks');
urgente.style.backgroundColor = 'rgb(255, 159, 132)';

const tituloUrgente = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < tituloUrgente.length; index += 1) {
    tituloUrgente[index].style.backgroundColor = 'rgb(165, 0, 243)';
  }

const naoUrgente = document.querySelector('.no-emergency-tasks');
naoUrgente.style.backgroundColor = 'rgb(249, 219, 94)';

const tituloNaoUrgente = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < tituloNaoUrgente.length; index += 1) {
    tituloNaoUrgente[index].style.backgroundColor = 'rgb(35, 37, 37)';
  }

const footer = document.querySelector('#footer-container');
footer.style.backgroundColor = 'rgb(0, 53, 51)';