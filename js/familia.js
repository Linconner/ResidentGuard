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

dataNascimento.addEventListener("change", function () {
  const dataNasc = new Date(this.value);
  const hoje = new Date();

  let idade = hoje.getFullYear() - dataNasc.getFullYear();
  const mes = hoje.getMonth() - dataNasc.getMonth();

  // ajusta se ainda não fez aniversário neste ano
  if (mes < 0 || (mes === 0 && hoje.getDate() < dataNasc.getDate())) {
    idade--;
  }

  // mostra na tela
  resultadoData.textContent = "Idade calculada: " + idade + " anos";

  // se quiser "guardar" esse valor, você pode salvar em variável
  console.log("Idade: ", idade);
});
