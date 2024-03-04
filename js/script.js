
const calcular = document.getElementById('calcular');
const nome = document.getElementById('nome');


function calculoNotas () {

  const nota1 = document.getElementById('nota1').value;
  const nota2 = document.getElementById('nota2').value;
  const nota3 = document.getElementById('nota3').value;
  const nota4 = document.getElementById('nota4').value;
  const resultado = document.getElementById('resultado');

  const valorTotal = (nota1 + nota2 + nota3 + nota4);
  resultado.textContent = valorTotal;

}

calcular.addEventListener('submit', calculoNotas);