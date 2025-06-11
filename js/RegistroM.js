const checkboxs = document.querySelectorAll('input[type="checkbox"]');

const carro = document.getElementById('carro');
const moto = document.getElementById('moto');
const outro = document.getElementById('outro');
const outroinput = document.getElementById('outroinput');

checkboxs.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
        if (checkbox.value === 'outro') {
            outroinput.classList.toggle('ativo', checkbox.checked);
        } else {
            outroinput.classList.remove('ativo');
        }
    })  
})

