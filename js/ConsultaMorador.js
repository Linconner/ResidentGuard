//MASKS dos inputs de editar-familia
document.addEventListener("DOMContentLoaded", function () {
  $("#cpf-editar-familia").mask("000.000.000-00");

  $("#telefone-editar-familia").mask("(00) 00000-0000");
});

const modalDesativado = document.getElementById("modal-desativado");
const botaoEditar = document.querySelector(".botao-editar");
const botoes = document.querySelectorAll(
  "#confirmar-e-editar, #voltar-e-fechar"
);

botaoEditar.addEventListener("click", function () {
  modalDesativado.classList.remove("modal-desativado");
  modalDesativado.classList.add("modal-ativo");
});

botoes.forEach((botao) => {
  botao.addEventListener("click", function (event) {
    switch (event.target.id) {
      case "confirmar-e-editar":
        modalDesativado.classList.remove("modal-desativado");
        modalDesativado.classList.add("modal-ativo");
        break;

      case "voltar-e-fechar":
        modalDesativado.classList.remove("modal-ativo");
        modalDesativado.classList.add("modal-desativado");
        break;
    }
  });
});
