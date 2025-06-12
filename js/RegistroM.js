const checkboxs = document.querySelectorAll('input[type="checkbox"]:not(#naopossuo)');

const carro = document.getElementById('carro');
const moto = document.getElementById('moto');
const outro = document.getElementById('outro');
//esseaqui é o input (o de baixo)
const outroinput = document.getElementById('outroinput');
//a div containerextra
const divoutroinput = document.getElementById('containeradicional')
const inner = document.getElementById('inner');
const naopossuo = document.getElementById('naopossuo');

checkboxs.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
        if (checkbox.value === 'outro') {
           divoutroinput.classList.toggle('ativo', checkbox.checked);
        } 
    })  
})

naopossuo.addEventListener ('change', function () {
if (naopossuo.checked) {
    checkboxs.forEach (cb => cb.checked = false);
}
});

checkboxs.forEach(cb => {
    cb.addEventListener('change', function () {
        if (cb.checked) {
            naopossuo.checked = false;
        }
    });
});