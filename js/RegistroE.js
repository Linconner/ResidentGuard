document.addEventListener('DOMContentLoaded', function () {
    // Elementos do menu
    const botaoicone = document.getElementById('botaoicone');
    const navbar = document.getElementById('navbarmenu');
    const blurOverlay = document.getElementById('blurOverlay');
    const navItems = document.querySelectorAll('.nav-item');

    if (!botaoicone || !navbar || !blurOverlay) {
        console.error("Elementos essenciais não encontrados!");
        return;
    }

    // Marcar item ativo no menu
    document.querySelectorAll('.nav-item').forEach(link => {
        if (link.href === location.href) link.classList.add('active');
    });

    botaoicone.addEventListener('click', function(event) {
        event.stopPropagation();
        navbar.classList.toggle('ativa');
        blurOverlay.classList.toggle('ativo');
    });

    document.addEventListener('click', function(event) {
        const isClickInsideNavbar = navbar.contains(event.target);
        const isClickOnButton = event.target.closest('#botaoicone');
        
        if (!isClickInsideNavbar && !isClickOnButton && navbar.classList.contains('ativa')) {
            navbar.classList.remove('ativa');
            blurOverlay.classList.remove('ativo');
        }
    });

    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            navItems.forEach(navItem => navItem.classList.remove('active'));
            this.classList.add('active');
            
            setTimeout(() => {
                navbar.classList.remove('ativa');
                blurOverlay.classList.remove('ativo');
            }, 300);
        });
    });

    // --- RADIO BUTTON: mostrar campo de placa ---
    const radios = document.querySelectorAll('input[name="tipoAluguel"]');
    const outroInputDiv = document.getElementById('outroopcao');
    const txtplaca = document.getElementById('outro');
    const outraSelectDiv = document.getElementById('outraopcao');

    const areaexterna = document.getElementById('area-externa');
    const comercioitinerante = document.getElementById('comercio-itinerante');
    const outroaluguel = document.getElementById('outro-radio');

    if (!outroInputDiv || !txtplaca || !outraSelectDiv) {
        console.error("Elementos do campo 'outro' ou 'outra' não encontrados!");
        return;
    }

    outroInputDiv.classList.remove('visivel'); // esconder por padrão
    outraSelectDiv.classList.remove('visivel'); // esconder por padrão

    radios.forEach(radio => {
        radio.addEventListener('change', function () {
            if (outroaluguel.checked) {
                outroInputDiv.classList.add('visivel');
                outraSelectDiv.classList.remove('visivel');
            } else if (areaexterna.checked) {
                outraSelectDiv.classList.add('visivel');
                outroInputDiv.classList.remove('visivel');
            } else {
                outraSelectDiv.classList.remove('visivel');
                outroInputDiv.classList.remove('visivel');
            }
        });
    });

    // --- DATA HOJE NO INPUT ---
    const input = document.getElementById('data');

    if (input) {
        const hoje = new Date();
        const ano = hoje.getFullYear();
        const mes = String(hoje.getMonth() + 1).padStart(2, '0');
        const dia = String(hoje.getDate()).padStart(2, '0');
        const dataFormatada = `${ano}-${mes}-${dia}`;

        input.value = dataFormatada;
        input.min = dataFormatada; // 🔒 bloqueia datas passadas
    } else {
        console.error("Input de data não encontrado.");
    }
});
