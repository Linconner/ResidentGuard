const checkboxs = document.querySelectorAll(
  'input[type="checkbox"]:not(#naopossuo)'
);
const naopossuo = document.getElementById("naopossuo");
const carro = document.getElementById("carro");
const moto = document.getElementById("moto");
const outro = document.getElementById("outro");

const outroinput = document.getElementById("outroinput");
const divoutroinput = document.getElementById("containeradicional");
const inner = document.getElementById("inner");

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
  //remover letras
  let valor = this.value.replace(/\D/g, "");

  //aplica a mascara

  // Aplica a máscara: 000.000.000-00
  if (valor.length > 3 && valor.length <= 6) {
    valor = valor.replace(/(\d{3})(\d+)/, "$1.$2");
  } else if (valor.length > 6 && valor.length <= 9) {
    valor = valor.replace(/(\d{3})(\d{3})(\d+)/, "$1.$2.$3");
  } else if (valor.length > 9) {
    valor = valor.replace(/(\d{3})(\d{3})(\d{3})(\d+)/, "$1.$2.$3-$4");
  }

  // Atualiza o valor do input
  this.value = valor;
});
cpfInput.setAttribute("maxlength", 14);

const divRadio = document.querySelector(".div-check-automovel");

divs.forEach((div) => {
  div.addEventListener("click", () => {
    const checkbox = div.querySelector(".checkBoxautomovel"); // pega o checkbox dentro da div clicada
    checkbox.checked = !checkbox.checked; // alterna entre marcado/desmarcado
  });
});

//elementos novos

//elementos padrões
document.addEventListener("DOMContentLoaded", function () {
  const botoesIds = ["carro", "moto", "bicicleta", "outros"];
  const botoes = botoesIds.map((id) => document.getElementById(id));

  botoes.forEach((botao) => {
    if (botao) {
      botao.addEventListener("click", function () {
        const prefixo = botao.id;
        if (prefixo == "btnCarro") {
          alert("clicaste no carro");
        }
        console.log("Botão clicado:", prefixo);
      });
    }
  });
});
