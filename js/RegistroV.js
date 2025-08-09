const radiocarro = document.getElementById("carro");
const radiomoto = document.getElementById("moto");
const radiobicicleta = document.getElementById("bicicleta");
const placa = document.getElementById("placa");

document.addEventListener("change", function () {
  if (radiocarro.checked || radiomoto.checked) {
    placa.classList.add("placavisible");
  } else {
    placa.classList.remove("placavisible");
  }
});
