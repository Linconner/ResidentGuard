document.addEventListener('DOMContentLoaded', function() {
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
});
