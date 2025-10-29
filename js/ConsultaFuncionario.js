// MASKS dos inputs de editar-funcionario
document.addEventListener("DOMContentLoaded", function () {
  //desativa e ativa
  const spanStatus = document.getElementById("ativo-desativo");
  const BtnStatus = document.getElementById("desativar-btn");

  BtnStatus.addEventListener("click", () => {
    if (spanStatus.textContent === "Ativo") {
      spanStatus.textContent = "Inativo";
    } else {
      spanStatus.textContent = "Ativo";
    }
  });

  //-----------------------------------------------------------------------------

  // Aplica máscaras (necessário jQuery Mask)
  $("#cpf-editar-funcionario").mask("000.000.000-00");
  $("#telefone-editar-funcionario").mask("(00) 00000-0000");

  // Seleciona o modal
  const modal = document.querySelector(".modal-editar-funcionario");

  // Seleciona todos os botões de editar
  const botoesEditar = document.querySelectorAll(".botao-editar");

  // Adiciona evento para abrir o modal ao clicar nos botões de editar
  botoesEditar.forEach((botao) => {
    botao.addEventListener("click", function () {
      if (modal) {
        modal.classList.remove("modal-desativado");
        modal.classList.add("modal-ativo");
      }
    });
  });

  // Controle dos botões do modal
  const confirmarBtn = document.getElementById("confirmar-e-editar");
  const voltarBtn = document.getElementById("voltar-e-fechar");

  if (confirmarBtn) {
    confirmarBtn.addEventListener("click", function () {
      // Lógica para confirmar alterações (pode adicionar validação ou envio de dados)
      console.log("Alterações confirmadas");
      if (modal) {
        modal.classList.remove("modal-ativo");
        modal.classList.add("modal-desativado");
      }
    });
  }

  if (voltarBtn) {
    voltarBtn.addEventListener("click", function () {
      if (modal) {
        modal.classList.remove("modal-ativo");
        modal.classList.add("modal-desativado");
      }
    });
  }
});
