const tipoEvento = document.getElementById("tipoEvento");
const ifMorador = document.getElementById("ifMorador");
const ifNaoMorador = document.getElementById("ifNaoMorador");
const dadosAluguel = document.getElementById("dados-aluguel"); 
const cadastrarBtn = document.getElementById("cadastrar-btn");
const tipoAluguel = document.getElementById("tipoAluguel");



document.addEventListener("DOMContentLoaded", function () {
  $("#cpf-morador").mask("000.000.000-00");
  $("#telefone-morador").mask("00")
  $('#valorPago').mask("#.##0,00", {reverse: true});
 
});


tipoEvento.addEventListener("change", (event) => {
  const valor = event.target.value;
  switch (valor) {
    case "1":
      ifMorador.style.display = "block";
      ifNaoMorador.style.display = "none";
      dadosAluguel.style.display = "block";
      cadastrarBtn.style.display = "block";
      tipoAluguel.remove(1);
      break;
    case "2":
      ifNaoMorador.style.display = "block";
      ifMorador.style.display = "none";
      dadosAluguel.style.display = "block";
      cadastrarBtn.style.display = "block";
      tipoAluguel.remove(2);
      break;
   default:
      ifNaoMorador.style.display = "none";
      ifMorador.style.display = "none";
      dadosAluguel.style.display = "none";
      cadastrarBtn.style.display = "none";
      break;
  }
});



