document.addEventListener("DOMContentLoaded", function () {
  // Seleciona os elementos relacionados ao tipo de veículo e à placa
  const txtplaca = document.getElementById("placaautomovel");
  const labelplaca = document.getElementById("labelplaca");
  const radios = document.querySelectorAll('input[type="radio"]');

  // Adiciona evento de mudança nos rádios
  radios.forEach((radio) => {
    radio.addEventListener("change", function () {
      const moto = document.getElementById("moto");
      const bicicleta = document.getElementById("bicicleta");
      const carro = document.getElementById("carro");

      if (moto.checked) {
        txtplaca.classList.add("visible");
        labelplaca.textContent = "Placa da Moto:";
      } else if (bicicleta.checked) {
        txtplaca.classList.add("visible");
        labelplaca.textContent = "Placa da Bicicleta:";
      } else if (carro.checked) {
        txtplaca.classList.add("visible");
        labelplaca.textContent = "Placa do Carro:";
      } else {
        txtplaca.classList.remove("visible");
      }
    });
  });

  // ===============================================
  // Parte do DATALIST (simulando os dados da API)
  // ===============================================
  // Quando sua API estiver pronta, você vai trocar esta parte por um fetch:
  //
  // fetch('/api/moradores')
  //   .then(response => response.json())
  //   .then(data => {
  //     data.forEach((morador) => {
  //       const option = document.createElement("option");
  //       option.value = morador.nome;
  //       datalist.appendChild(option);
  //     });
  //   });

  // Simulação com dados fictícios
  // Simulação com dados fictícios (array de objetos)
  const moradoresFake = [
    { nome: "João Afonso" },
    { nome: "Maria Clara" },
    { nome: "Lucas Santos" },
    { nome: "Ana Souza" },
    { nome: "Pedro Almeida" },
    { nome: "Juliana Ferreira" },
    { nome: "Rafael Mendes" },
    { nome: "Beatriz Cardoso" },
    { nome: "Guilherme Oliveira" },
    { nome: "Fernanda Pereira" },
    { nome: "Daniel Santos" },
    { nome: "Letícia Rodrigues" },
    { nome: "Gabriel Ferreira" },
    { nome: "Mariana Lima" },
    { nome: "Caio Almeida" },
    { nome: "Juliana Santos" },
    { nome: "Lucas Cardoso" },
    { nome: "Fernanda Mendes" },
  ];

  const datalist = document.getElementById("moradores");
  const input = document.getElementById("acesso");

  // Adiciona as options no datalist
  moradoresFake.forEach((morador) => {
    const option = document.createElement("option");
    option.value = morador.nome;
    datalist.appendChild(option);
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // evita o submit padrão

      const val = input.value.toLowerCase().trim();
      if (!val) return;

      // Busca o primeiro morador que começa com o texto digitado
      const match = moradoresFake.find((morador) =>
        morador.nome.toLowerCase().startsWith(val)
      );

      if (match) {
        input.value = match.nome; // preenche o input com o nome encontrado
      }

      input.blur();
    }
  });
});
