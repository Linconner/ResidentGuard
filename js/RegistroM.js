const naopossuo = document.getElementById("naopossuo");
const carro = document.getElementById("carro");
const moto = document.getElementById("moto");
const outro = document.getElementById("outros");

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

outro?.addEventListener("click", function () {
  const newDiv = CreateDiv();
  const newInput = CreateInput("Outro veículo - Placa");
  const newButton = CreateButton();

  newButton.addEventListener("click", function () {
    newDiv.remove();
  });

  newDiv.appendChild(newInput);
  newDiv.appendChild(newButton);
  paraDiv.appendChild(newDiv);
});

carro?.addEventListener("click", function () {
  const newDiv = CreateDiv();
  const newInput = CreateInput("Placa do Carro");
  const newButton = CreateButton();

  newButton.addEventListener("click", function () {
    newDiv.remove();
  });

  newDiv.appendChild(newInput);
  newDiv.appendChild(newButton);
  paraDiv.appendChild(newDiv);
});

moto?.addEventListener("click", function () {
  const newDiv = CreateDiv();
  const newInput = CreateInput("Placa da Moto");
  const newButton = CreateButton();

  newButton.addEventListener("click", function () {
    newDiv.remove();
  });

  newDiv.appendChild(newInput);
  newDiv.appendChild(newButton);
  paraDiv.appendChild(newDiv);
});

//-----------------------------------------------------------//
// Hover do automóvel

const btnHover = document.getElementById("add-automovel");
const CardHover = document.getElementById("automovel-hover");
const closeHover = document.getElementById("voltar-automovel-hover");

btnHover?.addEventListener("click", function () {
  CardHover.classList.add("automovel-hover-ativo");
});

closeHover?.addEventListener("click", function () {
  CardHover.classList.remove("automovel-hover-ativo");
  [...paraDiv.children].forEach((child) => {
    if (child.tagName.toLowerCase() !== "legend") {
      child.remove();
    }
  });
});

//-----------------------------------------------------------//
// Proprietário x Inquilino

const tempodepermanenciadiv = document.getElementById("tempodepermanenciadiv");
const tempoInput = document.getElementById("tempodepermanencia");
const radioProprietario = document.getElementById("radio1"); // Proprietário
const radioInquilino = document.getElementById("radio2"); // Inquilino

function atualizarTempoDePermanencia() {
  const mostrar = radioInquilino && radioInquilino.checked;
  tempodepermanenciadiv.classList.toggle("ativaa", mostrar);
  if (tempoInput) tempoInput.required = !!mostrar;
}

[radioProprietario, radioInquilino].forEach((radio) => {
  if (radio) {
    radio.addEventListener("change", atualizarTempoDePermanencia);
  }
});

// estado inicial
atualizarTempoDePermanencia();

//-----------------------------------------------------------//
// Formatação CPF

const cpfInput = document.getElementById("CPF");

cpfInput?.addEventListener("input", function () {
  let valor = this.value.replace(/\D/g, "");

  if (valor.length > 11) valor = valor.slice(0, 11);

  valor = valor
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");

  this.value = valor;
});
