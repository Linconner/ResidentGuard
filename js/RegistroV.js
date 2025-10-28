const radiocarro = document.getElementById("carro");
const radiomoto = document.getElementById("moto");
const radiobicicleta = document.getElementById("bicicleta");
const placa = document.getElementById("placa");
const acessocomum = document.getElementById("acessocomum");

document.addEventListener("change", function () {
  if (radiocarro.checked || radiomoto.checked) {
    placa.classList.add("placavisible");
  } else if (acessocomum.checked || radiobicicleta.checked) {
    placa.classList.remove("placavisible");
  } else {
    placa.classList.remove("placavisible");
  }
});

const btnHover = document.getElementById("add-automovel");
const cardHover = document.getElementById("automovel-hover");
const cancelarHover = document.getElementById("cancelar");
const blurOverlay = document.getElementById("blurOverlay");

// 🟢 Abrir modal
btnHover?.addEventListener("click", () => {
  cardHover?.classList.add("automovel-hover-ativo");
  blurOverlay?.classList.add("ativo");
});

// 🟠 Fechar modal com o botão Cancelar
cancelarHover?.addEventListener("click", () => {
  cardHover?.classList.remove("automovel-hover-ativo");
  blurOverlay?.classList.remove("ativo");
});

// ⚫ Fechar modal clicando fora (no blur)
blurOverlay?.addEventListener("click", () => {
  cardHover?.classList.remove("automovel-hover-ativo");
  blurOverlay?.classList.remove("ativo");
});
