const selectMorador = document.getElementById("morador1");
const registroFamilia = document.getElementById("registroFamilia");
const registroAluguel = document.getElementById("registroAluguel");

if (selectMorador) {
  selectMorador.addEventListener("change", () => {
    let valor = selectMorador.value;
    switch (valor) {
      case "familia":
        registroFamilia.classList.remove("familia-nao-selecionada");
        registroFamilia.classList.add("familia-selecionada");
        registroAluguel.classList.remove("aluguel-selecionado");
        registroAluguel.classList.add("aluguel-nao-selecionado");
        break;
      case "aluguel":
        registroFamilia.classList.remove("familia-selecionada");
        registroFamilia.classList.add("familia-nao-selecionada");
        registroAluguel.classList.remove("aluguel-nao-selecionado");
        registroAluguel.classList.add("aluguel-selecionado");
        break;
      case "familia-aluguel":
        registroFamilia.classList.remove("familia-nao-selecionada");
        registroFamilia.classList.add("familia-selecionada");
        registroAluguel.classList.remove("aluguel-nao-selecionado");
        registroAluguel.classList.add("aluguel-selecionado");
        break;

      default:
        registroFamilia.classList.remove("familia-selecionada");
        registroFamilia.classList.add("familia-nao-selecionada");
        registroAluguel.classList.remove("aluguel-selecionado");
        registroAluguel.classList.add("aluguel-nao-selecionado");
        break;
      // Adicione outros casos aqui, se necessário
    }
  });
}

//lógica para a data de nascimento

const dataNascimento = document.getElementById("data_nascimento");
const resultadoData = document.getElementById("resultado");
const contato = document.getElementById("contato");
const numTelefone = document.getElementById("num-telefone");
const email = document.getElementById("e-mail");

dataNascimento.addEventListener("change", function () {
  const dataNasc = new Date(this.value);
  const hoje = new Date();

  let idade = hoje.getFullYear() - dataNasc.getFullYear();
  const mes = hoje.getMonth() - dataNasc.getMonth();

  // ajusta se ainda não fez aniversário neste ano
  if (mes < 0 || (mes === 0 && hoje.getDate() < dataNasc.getDate())) {
    idade--;
  }

  if (idade >= 14) {
    contato.classList.remove("contato-invisivel");
    contato.classList.add("contato-visivel");
    numTelefone.classList.remove("num-telefone-invisivel");
    numTelefone.classList.add("num-telefone-visivel");

    email.classList.remove("e-mail-invisivel");
    email.classList.add("e-mail.visivel");
  } else if (idade < 14) {
    contato.classList.remove("contato-visivel");
    contato.classList.add("contato-invisivel");
  }

  // mostra na tela
  resultadoData.textContent = "Idade calculada: " + idade + " anos";

  // se quiser "guardar" esse valor, você pode salvar em variável
  console.log("Idade: ", idade);
});

//masks

$(document).ready(function () {
  $("#numero-telefone").mask("(00) 0000-0000");
  $("#cpf").mask("000.000.000-00", { reverse: true });
  $("#data_nascimento").mask("00/00/0000");
});
