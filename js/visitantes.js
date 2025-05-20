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

const menu = document.getElementById('menu');
const popup = document.getElementById('popup');
const btnfechar = document.getElementById('btnfechar');

menu.addEventListener('click', () => {
  if (popup.style.display === 'none' || popup.style.display === '') {
    // Se o popup está escondido, mostre-o
    popup.style.display = 'flex'; // Ou 'block', dependendo do seu CSS
  } else {
    // Se o popup está visível, esconda-o
    popup.style.display = 'none';
  }
});
btnfechar.addEventListener('click', () => {
    popup.style.display = 'none'; 
})