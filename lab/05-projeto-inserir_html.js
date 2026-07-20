let firstName = prompt('Nome:');
let greeting = 'Olá';
document.getElementById('greeting').innerHTML = greeting + ' ' + firstName

let atributos = ['força', 'destreza', 'constituição', 'inteligência', 'sabedoria', 'carisma'];

document.getElementById('greeting').innerHTML = atributos.join(', ');