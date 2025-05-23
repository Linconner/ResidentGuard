 // Lógica para o Menu e Popup
 const menu = document.getElementById('menu');
 const popup = document.getElementById('popup');
 const btnfechar = document.getElementById('btnfechar');

 menu.addEventListener('click', () => {
   if (popup.style.display === 'none' || popup.style.display === '') {
     popup.style.display = 'flex'; // Ou 'block', dependendo do seu CSS
   } else {
     popup.style.display = 'none';
   }
 });

 btnfechar.addEventListener('click', () => {
   popup.style.display = 'none';
 });

 // Opções de pagamento
 const opcoesPagamento = [
  "Pix",
  "PicPay",
  "Débito/Crédito",
  "Dinheiro comum",
  "Carnê",
  "Cheque"
];

const btnPagamento = document.getElementById("btn-pagamento");
const listaPagamento = document.getElementById("lista-pagamento");

btnPagamento.addEventListener("click", () => {
  // Alterna a visibilidade da lista de opções de pagamento
  if (listaPagamento.style.display === "none" || listaPagamento.style.display === "") {
    listaPagamento.style.display = "block"; // Mostra as opções
    listaPagamento.innerHTML = ""; // Limpa qualquer conteúdo anterior

    // Adiciona as opções de pagamento na lista
    opcoesPagamento.forEach(opcao => {
      const div = document.createElement("div");
      div.textContent = opcao;
      div.onclick = () => {
        btnPagamento.textContent = opcao; // Atualiza o botão com a opção selecionada
        listaPagamento.style.display = "none"; // Esconde a lista após a seleção
      };
      listaPagamento.appendChild(div);
    });
  } else {
    listaPagamento.style.display = "none"; // Esconde as opções se estiverem visíveis
  }
});

document.addEventListener("click", (e) => {
  // Fecha a lista de opções se o clique for fora do botão ou da lista
  if (!e.target.closest(".datalist-container")) {
    listaPagamento.style.display = "none";
  }
});


 // Opções de pagamento
 const opcoesArea = [
  "Pix",
  "PicPay",
  "Débito/Crédito",
  "Dinheiro comum",
  "Carnê",
  "Cheque"
];

const btnArea = document.getElementById("btn-areaexterna");
const listaArea = document.getElementById("lista-areaexterna");


btnArea.addEventListener("click", () => {
  // Alterna a visibilidade da lista de opções de Area
  if (listaArea.style.display === "none" || listaArea.style.display === "") {
    listaArea.style.display = "block"; // Mostra as opções
    listaArea.innerHTML = ""; // Limpa qualquer conteúdo anterior

    // Adiciona as opções de Area na lista
    opcoesArea.forEach(opcao => {
      const div = document.createElement("div");
      div.textContent = opcao;
      div.onclick = () => {
        btnArea.textContent = opcao; // Atualiza o botão com a opção selecionada
        listaArea.style.display = "none"; // Esconde a lista após a seleção
      };
      listaArea.appendChild(div);
    });
  } else {
    listaArea.style.display = "none"; // Esconde as opções se estiverem visíveis
  }
});

document.addEventListener("click", (e) => {
  // Fecha a lista de opções se o clique for fora do botão ou da lista
  if (!e.target.closest(".datalist-container")) {
    listaArea.style.display = "none";
  }
});



document.addEventListener('DOMContentLoaded', function () {
  const radios = document.querySelectorAll('input[name="voceemorador"]');
  const moradia = document.getElementById('campomoradia');

  if (radios.length === 0 || !moradia) {
    console.warn('Elementos não encontrados no DOM');
    return;
  }

  radios.forEach(radio => {
    radio.addEventListener('change', () => {
      if (radio.value === 'Sim') {
        moradia.style.display = 'block';
      } else {
        moradia.style.display = 'none';
      }
    });
  });
});
