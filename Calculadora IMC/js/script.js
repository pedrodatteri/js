const calcular = document.getElementById('calcular');

function imc() {
    const nome = document.getElementById('nome').value;
    const altura = parseFloat(document.getElementById('altura').value.replace(',', '.'));
    const peso = parseFloat(document.getElementById('peso').value.replace(',', '.'));

    const resultado = document.getElementById('resultado');

    if (nome !== '' && !isNaN(altura) && !isNaN(peso)) {
        const valorIMC = (peso / (altura * altura)).toFixed(2); 

        let classificação ="";

        if (valorIMC < 18.5) {
            classificação = "abaixo do peso.";
        } else if (valorIMC < 25) {
            classificação = 'com peso ideal!';
        } else if ( valorIMC < 30 ) {
            classificação = 'levemente acima do peso';
        } else if (valorIMC < 35) {
            classificação ='com obesidade grau 1';
        } else if (valorIMC < 40) {
            classificação = 'com obesidade grau 2';
        } else {
            classificação = 'com obesidade grau 3, cuidado!';
        }

        resultado.textContent = `${nome}, seu IMC é ${valorIMC}, você está ${classificação}`;
    } else {
        resultado.textContent = 'Não pode ter campos vazios ou valores inválidos!';
    }
}

calcular.addEventListener("click", imc);

console.log