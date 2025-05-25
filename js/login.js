
  const modoSwitch = document.getElementById('modoSwitch');
  const textobolinha = document.getElementById('textobolinha');

  modoSwitch.addEventListener('change', () => {
    if (modoSwitch.checked) {
      textobolinha.textContent = 'PORTEIRO';
      textobolinha.style.fontSize = '12px';
      
    } else {
      textobolinha.textContent = 'ADM';
      textobolinha.style.fontSize = '16.7px';
    }
  });

