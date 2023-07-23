function calcularIMC() {
    const alturaInput = document.getElementById('altura');
    const pesoInput = document.getElementById('peso');
    const resultadoDiv = document.getElementById('resultado');

    const alturaEmCm = parseFloat(alturaInput.value);
    const pesoEmKg = parseFloat(pesoInput.value);

    if (isNaN(alturaEmCm) || isNaN(pesoEmKg) || alturaEmCm <= 0 || pesoEmKg <= 0) {
      resultadoDiv.innerHTML = 'Por favor, insira valores válidos para altura e peso.';
      return;
    }

    const alturaEmMetros = alturaEmCm / 100;
    const imc = pesoEmKg / (alturaEmMetros * alturaEmMetros);
    const imcArredondado = imc.toFixed(2);

    let classificacao = '';
    if (imc < 18.5) {
      classificacao = 'Abaixo do peso';
    } else if (imc < 24.9) {
      classificacao = 'Peso normal';
    } else if (imc < 29.9) {
      classificacao = 'Sobrepeso';
    } else if (imc < 34.9) {
      classificacao = 'Obesidade grau I';
    } else if (imc < 39.9) {
      classificacao = 'Obesidade grau II';
    } else {
      classificacao = 'Obesidade grau III';
    }

    resultadoDiv.innerHTML = `Seu IMC é ${imcArredondado} (${classificacao}).`;
  }
