document.addEventListener("DOMContentLoaded", function () {
  const txtplaca = document.getElementById("placaautomovel");
  const labelplaca = document.getElementById("labelplaca");

  //mudando label + fznd o txtbox aparecer
  const radios = document.querySelectorAll('input[type="radio"]');
  radios.forEach((radio) => {
    radio.addEventListener("change", function () {
      const moto = document.getElementById("moto");
      const bicicleta = document.getElementById("bicicleta");
      const carro = document.getElementById("carro");

      if (moto.checked) {
        txtplaca.classList.add("visible");
        labelplaca.textContent = "Placa da Moto:";
      } else if (bicicleta.checked) {
        txtplaca.classList.add("visible");
        labelplaca.textContent = "Placa da Bicicleta:";
      } else if (carro.checked) {
        txtplaca.classList.add("visible");
        labelplaca.textContent = "Placa do Carro:";
      } else {
        txtplaca.classList.remove("visible");
      }
    });
  });
});
function definirDataHoraAtual() {
  const agora = new Date();

  const ano = agora.getFullYear();
  const mes = String(agora.getMonth() + 1).padStart(2, "0");
  const dia = String(agora.getDate()).padStart(2, "0");
  const horas = String(agora.getHours()).padStart(2, "0");
  const minutos = String(agora.getMinutes()).padStart(2, "0");

  //Formato exigido: YYYY-MM-DDTHH:MM ->
  const dataHoraFormatada = "${ano}-${mes}-${dia}T${horas}:${minutos}";

  document.getElementById("data").value = dataHoraFormatada;
}

window.addEventListener("DOMContentLoaded", definirDataHoraAtual);
