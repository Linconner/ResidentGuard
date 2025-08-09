// --- DATA HOJE NO INPUT ---
const input = document.getElementById("data");

if (input) {
  const hoje = new Date();
  const ano = hoje.getFullYear();
  const mes = String(hoje.getMonth() + 1).padStart(2, "0");
  const dia = String(hoje.getDate()).padStart(2, "0");
  const dataFormatada = `${ano}-${mes}-${dia}`;

  input.value = dataFormatada;
  input.min = dataFormatada;
} else {
  console.error("Input de data não encontrado.");
}

document.addEventListener("DOMContentLoaded", function () {
  const radios = document.querySelectorAll('input[name="tipoAluguel"]');
  const outroInputDiv = document.getElementById("outroopcao");
  const outraSelectDiv = document.getElementById("outraopcao");

  const areaexterna = document.getElementById("area-externa");
  const comercioitinerante = document.getElementById("comercio-itinerante");
  const outroaluguel = document.getElementById("outro-radio");

  // Esconde os campos inicialmente
  outroInputDiv.classList.remove("visivel");
  outraSelectDiv.classList.remove("visivel");

  radios.forEach((radio) => {
    radio.addEventListener("change", () => {
      if (outroaluguel.checked) {
        outroInputDiv.classList.add("visivel");
        outraSelectDiv.classList.remove("visivel");
      } else if (areaexterna.checked) {
        outraSelectDiv.classList.add("visivel");
        outroInputDiv.classList.remove("visivel");
      } else {
        // caso seja "comercio-itinerante" ou qualquer outro, esconde ambos
        outraSelectDiv.classList.remove("visivel");
        outroInputDiv.classList.remove("visivel");
      }
    });
  });
});
