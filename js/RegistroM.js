const naopossuo = document.getElementById("naopossuo");
const carro = document.getElementById("carro");
const moto = document.getElementById("moto");
const outro = document.getElementById("outros");

const inner = document.getElementById("inner");

const paraDiv = document.getElementById("field-para-inputs");

//-----------------------------------------------------------//

outro.addEventListener("click", function () {
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

carro.addEventListener("click", function () {
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

moto.addEventListener("click", function () {
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

//------------------------------------------------------------//

const btnHover = document.getElementById("add-automovel");
const CardHover = document.getElementById("automovel-hover");
const closeHover = document.getElementById("voltar-automovel-hover");

btnHover.addEventListener("click", function () {
  CardHover.classList.add("automovel-hover-ativo");
});

closeHover.addEventListener("click", function () {
  CardHover.classList.remove("automovel-hover-ativo");
  const input = document.querySelector("input"); // pega o primeiro input, por exemplo
  [...paraDiv.children].forEach((child) => {
    if (child.tagName.toLowerCase() !== "legend") {
      child.remove();
    }
  });
});

// Mostrar ou esconder o campo "outro" se for marcado
checkboxs.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    if (checkbox.value === "outro") {
      divoutroinput.classList.toggle("ativo", checkbox.checked);
    }
  });
});

// Se "não possuo" for marcado, desmarca os outros e esconde o campo adicional
naopossuo.addEventListener("change", function () {
  if (naopossuo.checked) {
    checkboxs.forEach((cb) => (cb.checked = false));
    divoutroinput.classList.remove("ativo"); // garante que o campo "outro" seja escondido
  }
});

// Se qualquer outro for marcado, desmarca "não possuo"
checkboxs.forEach((cb) => {
  cb.addEventListener("change", function () {
    if (cb.checked) {
      naopossuo.checked = false;
    }
  });
});

const tempodepermanenciadiv = document.getElementById("tempodepermanenciadiv");
const radio1 = document.getElementById("radio1");
const radio2 = document.getElementById("radio2");

// Mostrar/ocultar div com base no tipo de morador
radio1.addEventListener("change", () => {
  tempodepermanenciadiv.classList.remove("ativaa"); // Proprietário: esconde
});
radio2.addEventListener("change", () => {
  tempodepermanenciadiv.classList.add("ativaa"); // Inquilino: mostra
});

const cpfInput = document.getElementById("CPF");

cpfInput.addEventListener("input", function () {
  let valor = this.value.replace(/\D/g, "");

  if (valor.length > 11) valor = valor.slice(0, 11);

  valor = valor
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");

  this.value = valor;
});

//------------------------------------------------------------//
