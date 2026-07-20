let nota = prompt("Digite sua nota:")

if (nota > 100) {
	console.log("Inválida");
} else if (nota >= 90) {
	console.log("A");
} else if (nota >= 80) {
	console.log("B");
} else if (nota >= 70) {
	console.log("C");
} else if (nota >= 60) {
	console.log("D");
} else {
	console.log("F");
}


// -----------------------------------


let grade = parseInt(prompt("Digite sua grade:"))

if (grade > 100) {
	console.log("Inválida");
} else if (grade <= 100 && grade >= 90) {
	console.log("A");
} else if (grade <= 89 && grade >= 80) {
	console.log("B");
} else if (grade <= 79 && grade >= 70) {
	console.log("C");
} else if (grade <= 69 && grade >= 60) {
	console.log("D");
} else {
	console.log("Reprovado");
}