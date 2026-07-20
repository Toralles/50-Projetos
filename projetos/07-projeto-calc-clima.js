let celcius = 0; // Armazena a temperatura em Celsius
let fahrenheit = 0; // Armazena a temperatura em Fahrenheit

celcius = parseFloat(prompt('Digite a temperatura em °C:')); // Lê a temperatura informada pelo usuário
fahrenheit = celcius * 1.8 + 32; // Converte Celsius para Fahrenheit
alert('A temperatura em Fahrenheit é: ' + fahrenheit.toFixed(2) + '°F'); // Exibe o resultado em um alerta
document.getElementById('get').innerHTML = fahrenheit.toFixed(2) + '°F'; // Exibe o resultado na página