// -----------------------------
// Função para carregar componentes via fetch
// -----------------------------
async function carregarComponente(id, arquivo) {
  try {
    const resp = await fetch(`/components/${arquivo}`);
    if (!resp.ok)
      throw new Error(`Erro ao carregar ${arquivo}: ${resp.status}`);
    const html = await resp.text();
    document.getElementById(id).innerHTML = html;

    // Inicializa a navbar
    inicializarNavbar();

    // Atualiza o span do título após a navbar estar carregada
    atualizarTituloSpan();
  } catch (err) {
    console.error(err);
  }
}

// -----------------------------
// Função que inicializa toda a lógica da navbar
// -----------------------------
function inicializarNavbar() {
  const botaoicone = document.getElementById("botaoicone");
  const navbar = document.getElementById("navbarmenu");
  const blurOverlay = document.getElementById("blurOverlay");
  const navItems = document.querySelectorAll(".nav-item");

  if (!botaoicone || !navbar || !blurOverlay) {
    console.error("Elementos essenciais da navbar não encontrados!");
    return;
  }

  // Marca o link ativo
  navItems.forEach((link) => {
    if (link.href === location.href) link.classList.add("active");
  });

  // Toggle do menu
  botaoicone.addEventListener("click", (event) => {
    event.stopPropagation();
    navbar.classList.toggle("ativa");
    blurOverlay.classList.toggle("ativo");
  });

  // Fecha o menu clicando fora
  document.addEventListener("click", (event) => {
    const isClickInsideNavbar = navbar.contains(event.target);
    const isClickOnButton = event.target.closest("#botaoicone");
    if (
      !isClickInsideNavbar &&
      !isClickOnButton &&
      navbar.classList.contains("ativa")
    ) {
      navbar.classList.remove("ativa");
      blurOverlay.classList.remove("ativo");
    }
  });

  // Item clicado
  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      navItems.forEach((navItem) => navItem.classList.remove("active"));
      this.classList.add("active");
      setTimeout(() => {
        navbar.classList.remove("ativa");
        blurOverlay.classList.remove("ativo");
      }, 300);
    });
  });
}

// -----------------------------
// Atualiza o span do título da navbar conforme a página
// -----------------------------
function atualizarTituloSpan() {
  const span = document.getElementById("titulo-span");
  const page = document.body.dataset.page;

  if (!span) return;

  const titulos = {
    morador: "REGISTRO DE MORADORES",
    consulta: "CONSULTA",
    visitante: "REGISTRO DE VISITANTES",
    encomenda: "REGISTRO DE ENCOMENDAS",
    evento: "REGISTRO DE EVENTOS",
    adm: "ADMIN",
    familia: "REGISTRO DE FAMILIA",
    consultaM: "TELA DE CONSULTA DO MORADOR",

    // Adicione outras páginas aqui
  };

  span.textContent = titulos[page] || "sistema";
}

// -----------------------------
// Carrega a navbar automaticamente
// -----------------------------
carregarComponente("navbar", "navbar.html");
