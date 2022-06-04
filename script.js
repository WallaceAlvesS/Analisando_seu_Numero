const Numero = Number(prompt("Digite um numero: "));
const NumEscolhido = document.getElementById('NumEscolhido');
const texto = document.getElementById('texto');

NumEscolhido.innerHTML = Numero;

texto.innerHTML = '';
texto.innerHTML += `<p>Raiz quadrada: ${Numero ** 0.5}.</p>`;
texto.innerHTML += `<p>${Numero} é inteiro: ${Number.isInteger(Numero)}.</p>`;
texto.innerHTML += `<p>É Nan? ${Number.isNaN(Numero)}.</p>`;
texto.innerHTML += `Arredondando pra baixo: ${Math.floor(Numero)}. </p>`;
texto.innerHTML += `Arredondando pra cima: ${Math.ceil(Numero)}. </p>`;
texto.innerHTML += `Com duas casas decimais: ${Numero.toFixed(2)}. </p>`;
