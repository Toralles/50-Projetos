// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

// // Com arrays
// let frutas = ["Maçã", "Banana", "Kiwi", "Uva"];
// for (let i = 0; i < 4; i++) {
//     console.log(frutas[i])
// }

// // Nunca coloque o número manualmente (como acima)
// // .length significa quantidade de elementos.
// for (let i = 0; i < frutas.length; i++) {
//   console.log(frutas[i]);
// }

// // Lista com prompt
let nomes = []

for (let i = 0; i < 3; i++) {
    let nome = prompt('Digite um nome')
    nomes.push(nome)
}

for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i])
}

let nomes = []
for (let i = 1; i < nomes.length; i++) {
    let nome = prompt('Digite nomes: ' + i)
    nomes.push(nome)
}
console.log(nomes);

