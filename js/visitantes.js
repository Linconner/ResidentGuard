const radios = document.querySelectorAll('input[type="radio"]');
const container = document.getElementById('txtplaca');

radios.forEach(radio => {
    radio.addEventListener('change', () => {
    //verificação de valor
    if (
        radio.value === 'moto' ||
        radio.value === 'carro' 
    ) {
        container.style.display = 'block';
        container.style.height = 'auto';
    } else {
        container.style.display = 'none';
        container.style.height = '0'
    }
});
});