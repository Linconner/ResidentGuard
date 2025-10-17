const tipoEvento = document.getElementById("tipoEvento");
const ifMorador = document.getElementById("ifMorador");
const ifNaoMorador = document.getElementById("ifNaoMorador");

tipoEvento.addEventListener("change", (event) => {
  const valor = event.target.value;
  switch (valor) {
    case "1":
      ifMorador.style.display = "block";
      ifNaoMorador.style.display = "none";
      break;
    case "2":
      ifNaoMorador.style.display = "block";
      ifMorador.style.display = "none";
      break;
    default:
      ifNaoMorador.style.display = "none";
      ifMorador.style.display = "none";
      break;
  }
});
