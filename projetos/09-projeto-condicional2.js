// Tem idade + tem título = Pode votar
// Tem idade + não tem título = Precisa de título
// Não tem idade + tem ou não tem título = Não pode votar

let idade = Number(prompt('Digite sua idade:'))

let titulo = prompt('Título (s/n):')
let idadeMinima = 16

if (idade >= idadeMinima && titulo == 's') {
	console.log('Pode votar!!!!');
} else if (idade >= idadeMinima && titulo == 'n') {
	console.log('Não tem título...');
} else if (idade <= idadeMinima && titulo == 's' || titulo == 'n') {
	console.log('Não pode votar xxxxxxx');
}

console.log(idade)
console.log(typeof idade)