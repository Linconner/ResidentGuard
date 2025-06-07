document.addEventListener('DOMContentLoaded', function() {
  const botaoicone = document.getElementById('botaoicone');
  const navbar = document.getElementById('navbarmenu');
  const blurOverlay = document.getElementById('blurOverlay');
  const navItems = document.querySelectorAll('.nav-item');
  const txtplaca = document.getElementById('placaautomovel');
  const labelplaca = document.getElementById('labelplaca');
   
  //mudando label + fznd o txtbox aparecer
  const radios = document.querySelectorAll('input[type="radio"]');
  radios.forEach(radio => {
    radio.addEventListener('change', function () {
      const moto = document.getElementById('moto');
      const bicicleta = document.getElementById('bicicleta');
      const carro = document.getElementById('carro');
  
      if (moto.checked) {
        txtplaca.classList.add('visible');
        labelplaca.textContent = 'Placa da Moto:';
      } else if (bicicleta.checked) {
        txtplaca.classList.add('visible');
        labelplaca.textContent = 'Placa da Bicicleta:';
      } else if (carro.checked) {
        txtplaca.classList.add('visible');
        labelplaca.textContent = 'Placa do Carro:';
      } else {
        txtplaca.classList.remove('visible');
      }
    });
  });


  // Verifica se os elementos existem
  if (!botaoicone || !navbar || !blurOverlay) {
    console.error("Elementos essenciais não encontrados!");
    return;
  }

  // Set active nav item based on current URL by checking if href is included in full URL
  document.querySelectorAll('.nav-item').forEach(link => {
    if (link.href === location.href) link.classList.add('active');
  });
  
  

  // Abrir/fechar menu dropdown
  botaoicone.addEventListener('click', function(event) {
    event.stopPropagation();
    navbar.classList.toggle('ativa');
    blurOverlay.classList.toggle('ativo');
    
  });

  // Fechar menu ao clicar fora
  document.addEventListener('click', function(event) {
    const isClickInsideNavbar = navbar.contains(event.target);
    const isClickOnButton = event.target.closest('#botaoicone');
    
    if (!isClickInsideNavbar && !isClickOnButton && navbar.classList.contains('ativa')) {
      navbar.classList.remove('ativa');
      blurOverlay.classList.remove('ativo');
      botaoicone.classList.remove('aberto');
    }
  });

  // Navegação entre itens
  navItems.forEach(item => {
    item.addEventListener('click', function(e) {
      // e.preventDefault();  // Removed to allow navigation
      navItems.forEach(navItem => navItem.classList.remove('active'));
      this.classList.add('active');

      // Navigate to the href of the clicked item
      window.location.href = this.href;
      
      // Fecha o menu após seleção
      setTimeout(() => {
        navbar.classList.remove('ativa');
        blurOverlay.classList.remove('ativo');
        botaoicone.classList.remove('aberto');
      }, 300);
    });
  });

});
