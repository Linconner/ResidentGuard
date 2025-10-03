// Elementos principais
const inner = document.getElementById("inner");
const paraDiv = document.getElementById("field-para-inputs");

//-----------------------------------------------------------//
// Funções auxiliares

function CreateInput(placeholder) {
  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = placeholder;
  input.classList.add("input-novo");
  return input;
}

function CreateButton() {
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = "Remover";
  button.classList.add("button-novo");
  return button;
}

function CreateDiv() {
  const div = document.createElement("div");
  div.classList.add("div-para-input");
  return div;
}

function CreateSubmitButton() {
  const button = document.createElement("button");
  button.type = "submit";
  button.textContent = "Enviar";
  button.classList.add("button-enviar");
  return button;
}

//-----------------------------------------------------------//
// Eventos de adicionar veículos

const outro = document.getElementById("outro");
const carro = document.getElementById("carro");
const moto = document.getElementById("moto");

[outro, carro, moto].forEach(btn => {
  btn?.addEventListener("click", function () {
    const newDiv = CreateDiv();
    let placeholder = "";

    if (btn === outro) placeholder = "Outro veículo - Placa";
    if (btn === carro) placeholder = "Placa do Carro";
    if (btn === moto) placeholder = "Placa da Moto";

    const newInput = CreateInput(placeholder);
    const newButton = CreateButton();

    newButton.addEventListener("click", () => newDiv.remove());

    newDiv.appendChild(newInput);
    newDiv.appendChild(newButton);
    paraDiv.appendChild(newDiv);
  });
});

//-----------------------------------------------------------//
// Hover do automóvel

const btnHover = document.getElementById("add-automovel");
const CardHover = document.getElementById("automovel-hover");
const closeHover = document.getElementById("voltar-automovel-hover");
const voltarHover = document.getElementById("cancelar");


btnHover?.addEventListener("click", () => {
  CardHover?.classList.add("automovel-hover-ativo");
  
});
closeHover?.addEventListener("click", () => {
  CardHover?.classList.remove("automovel-hover-ativo");
  
});
voltarHover?.addEventListener("click", () => {
  CardHover?.classList.remove("automovel-hover-ativo");
  
});

//-----------------------------------------------------------//
// Proprietário x Inquilino

const btnInquilino = document.getElementById("botao-inquilino");
const btnProprietario = document.getElementById("botao-proprietario");

const inputContratodiv = document.getElementById("input-para-contrato-div");
const inputContratoinput = document.getElementById("input-para-contrato-input");

btnInquilino?.addEventListener("click", () => {
  inputContratodiv?.classList.add("input-para-contrato-div-ativo");
  inputContratoinput?.classList.add("input-para-contrato-input-ativo");
});

btnProprietario?.addEventListener("click", () => {
  inputContratodiv?.classList.remove("input-para-contrato-div-ativo");
  inputContratoinput?.classList.remove("input-para-contrato-input-ativo");
});

//-----------------------------------------------------------//
// Formatação CPF

