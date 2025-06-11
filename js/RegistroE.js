document.addEventListener('DOMContentLoaded', function () {

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
