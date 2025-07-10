const dataFutura = new Date('2024-01-01T00:00:00Z');

function calcularTempoRestante(dataFutura) {
  const dataAtual = new Date();
  const diferenca = dataFutura - agora;

  if (diferenca <= 0) {
    console.log("A data já passou ou é hoje."); 
  }

  const segundos = Math.floor((diferenca / 1000) % 60);
  const minutos = Math.floor((diferenca / 1000 / 60) % 60);
  const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

  return { dias, horas, minutos, segundos };
}


function atualizarTemporizador() {
  const tempo = calcularTempoRestante(dataFutura);
  const elemento = document.getElementById("temporizador");

  if (!tempo) {
    elemento.textContent = "O tempo acabou!";
    clearInterval(intervalo);
    return;
  }

  const { dias, horas, minutos, segundos } = tempo;
  elemento.textContent = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
}


const intervalo = setInterval(atualizarTemporizador, 1000);