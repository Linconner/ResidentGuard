// MASKS dos inputs de editar-familia
document.addEventListener("DOMContentLoaded", function () {
  // Aplica máscaras
  $("#cpf-editar-familia").mask("000.000.000-00");
  $("#telefone-editar-familia").mask("(00) 00000-0000");

  // Controle dos botões do modal
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
});

// Seleciona todos os botões
const botoes = document.querySelectorAll(".botao-editar-individual");

// Adiciona evento para CADA botão
botoes.forEach((botao) => {
  botao.addEventListener("click", function () {
    // 1. Encontra o span mais próximo (pode ser irmão, pai, etc.)
    const spanEditar =
      this.closest(".campo-editavel")?.querySelector(".span-editar") ||
      this.previousElementSibling; // ajuste conforme sua estrutura

    if (!spanEditar || !spanEditar.classList.contains("span-editar")) return;

    // 2. Cria o input
    const newInput = document.createElement("input");
    const valor = spanEditar.textContent.trim();

    // 3. Define tipo: number só se for número válido
    const isNumeroValido =
      /^-?\d*\.?\d+$/.test(valor) &&
      valor !== "" &&
      valor !== "-" &&
      valor !== "." &&
      !isNaN(parseFloat(valor));

    newInput.type = isNumeroValido ? "number" : "text";
    newInput.value = valor;
    newInput.className = spanEditar.className; // mantém classes
    newInput.style.cssText = spanEditar.style.cssText;
    newInput.style.width = spanEditar.offsetWidth + "px"; // mantém largura

    // 4. Substitui o span pelo input
    spanEditar.replaceWith(newInput);
    newInput.focus();
    newInput.select();

    // 5. (Opcional) Ao pressionar Enter ou perder foco, volta para span
    function salvar() {
      const spanNovo = document.createElement("span");
      spanNovo.className =
        "span-editar " + newInput.className.replace("span-editar", "").trim();
      spanNovo.textContent = newInput.value;
      spanNovo.style.cssText = newInput.style.cssText;

      newInput.replaceWith(spanNovo);

      // Re-adiciona o botão de editar (se necessário)
      // ou apenas mantém o fluxo
    }

    newInput.addEventListener("blur", salvar);
    newInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        newInput.blur();
      }
      if (e.key === "Escape") {
        newInput.value = valor; // restaura valor original
        newInput.blur();
      }
    });
  });
});
