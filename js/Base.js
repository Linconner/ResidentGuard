document.addEventListener("DOMContentLoaded", function () {
  // Elementos do menu (mantido do original)
  const botaoicone = document.getElementById("botaoicone");
  const navbar = document.getElementById("navbarmenu");
  const blurOverlay = document.getElementById("blurOverlay");
  const navItems = document.querySelectorAll(".nav-item");
  // Verifica se os elementos existem
  if (!botaoicone || !navbar || !blurOverlay) {
    console.error("Elementos essenciais não encontrados!");
    return;
  }
  // Configuração do menu (mantido do original)
  document.querySelectorAll(".nav-item").forEach((link) => {
    if (link.href === location.href) link.classList.add("active");
  });
  botaoicone.addEventListener("click", function (event) {
    event.stopPropagation();
    navbar.classList.toggle("ativa");
    blurOverlay.classList.toggle("ativo");
  });
  document.addEventListener("click", function (event) {
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
  navItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      navItems.forEach((navItem) => navItem.classList.remove("active"));
      this.classList.add("active");
      setTimeout(() => {
        navbar.classList.remove("ativa");
        blurOverlay.classList.remove("ativo");
      }, 300);
    });
  });

  const telefoneInput = document.getElementById("telefone");

  telefoneInput.addEventListener("input", function (e) {
    let valor = e.target.value;

    // Remove tudo que não for número
    valor = valor.replace(/\D/g, "");

    // Aplica formatação: XX-XXXXX-XXXX
    if (valor.length > 2 && valor.length <= 7) {
      valor = valor.replace(/^(\d{2})(\d+)/, "$1-$2");
    } else if (valor.length > 7) {
      valor = valor.replace(/^(\d{2})(\d{5})(\d+)/, "$1-$2-$3");
    }

    e.target.value = valor;
  });
});
