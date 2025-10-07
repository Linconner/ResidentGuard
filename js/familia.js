// familia.js - JavaScript para funcionalidades da página

document.addEventListener("DOMContentLoaded", function () {
  // Máscaras para os campos
  $("#cpf").mask("000.000.000-00");
  $("#data_nascimento").mask("00/00/0000");
  $("#numero-telefone").mask("(00) 00000-0000");

  // Elementos principais
  const tipoGrupoSelect = document.getElementById("morador1");
  const registroFamilia = document.getElementById("registroFamilia");
  const registroAluguel = document.getElementById("registroAluguel");
  const botaoAddMorador = document.getElementById("botao-add");
  const contatoSection = document.getElementById("contato");
  const numTelefone = document.getElementById("num-telefone");
  const email = document.getElementById("e-mail");

  // Controle de visibilidade baseado na seleção do tipo de grupo
  tipoGrupoSelect.addEventListener("change", function () {
    const valor = this.value;

    // Resetar todos os estados
    registroFamilia.classList.remove("familia-selecionada");
    registroFamilia.classList.add("familia-nao-selecionada");
    registroAluguel.classList.remove("aluguel-selecionado");
    registroAluguel.classList.add("aluguel-nao-selecionado");

    // Aplicar estados baseados na seleção
    if (valor === "familia" || valor === "familia-aluguel") {
      registroFamilia.classList.remove("familia-nao-selecionada");
      registroFamilia.classList.add("familia-selecionada");
    }

    if (valor === "aluguel" || valor === "familia-aluguel") {
      registroAluguel.classList.remove("aluguel-nao-selecionado");
      registroAluguel.classList.add("aluguel-selecionado");
    }
  });

  // Controle de campos de contato
  document.getElementById("nome").addEventListener("blur", function () {
    if (this.value.trim() !== "") {
      contatoSection.classList.remove("contato-invisivel");
      contatoSection.classList.add("contato-visivel");
      numTelefone.classList.remove("num-telefone-invisivel");
      numTelefone.classList.add("num-telefone-visivel");
      email.classList.remove("e-mail-invisivel");
      email.classList.add("e-mail-visivel");
      botaoAddMorador.classList.remove("btn-desativado");
      botaoAddMorador.classList.add("btn-ativado");
    }
  });

  // Adicionar outro morador
  document
    .getElementById("add-outro-morador")
    .addEventListener("click", function () {
      // Limpar os campos do formulário
      document.getElementById("parentesco").value = "";
      document.getElementById("cpf").value = "";
      document.getElementById("nome").value = "";
      document.getElementById("data_nascimento").value = "";
      document.getElementById("numero-telefone").value = "";
      document.getElementById("email").value = "";

      // Focar no primeiro campo
      document.getElementById("parentesco").focus();
    });

  // Validação de idade
  document
    .getElementById("data_nascimento")
    .addEventListener("blur", function () {
      const dataNascimento = this.value;
      const resultado = document.getElementById("resultado");

      if (dataNascimento.length === 10) {
        const partesData = dataNascimento.split("/");
        const data = new Date(partesData[2], partesData[1] - 1, partesData[0]);
        const hoje = new Date();
        const idade = hoje.getFullYear() - data.getFullYear();

        if (idade < 18) {
          resultado.textContent = "Menor de idade";
          resultado.style.color = "#ff6b6b";
        } else {
          resultado.textContent = "Maior de idade";
          resultado.style.color = "#51cf66";
        }
      } else {
        resultado.textContent = "";
      }
    });

  // Botões do formulário de aluguel
  document
    .getElementById("adicionar-automóvel")
    .addEventListener("click", function () {
      alert("Funcionalidade de adicionar automóvel será implementada aqui.");
    });

  document
    .getElementById("adicionar-aluguel")
    .addEventListener("click", function () {
      alert("Registro de aluguel será processado aqui.");
    });
});
