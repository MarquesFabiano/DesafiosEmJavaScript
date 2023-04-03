function calcularMedia(numeros) {
    const numerosInseridos = document.getElementById('numeros').value;
    const numerosSeparados = numerosInseridos.split(',');
    const resultado = document.getElementById('media');
  
    let soma = 0;
    for (let i = 0; i < numerosSeparados.length; i++) {
      const numero = parseFloat(numerosSeparados[i]);
      soma += numero;
    }
    const media = soma / numerosSeparados.length;
    resultado.innerHTML = `${media.toFixed(2)}`;
  }
  
  document.getElementById('calcular').addEventListener('click', calcularMedia);
  