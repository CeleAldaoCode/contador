const valor = document.getElementById('valor');
const btnSumar = document.getElementById('sumar');
const btnRestar = document.getElementById('restar');
const btnReset = document.getElementById('reset');

let contador = 0;

btnSumar.addEventListener('click', () => {contador++; valor.textContent = contador;})
btnRestar.addEventListener('click', () => {contador--; valor.textContent = contador;})
btnReset.addEventListener('click', () => {contador = 0; valor.textContent = contador;})