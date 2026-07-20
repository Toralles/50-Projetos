
let lista1 = []

for (let i = 1; i <= 5; i++) {
    let entrada1 = prompt('Entrada: ')
    lista1.push(entrada1)
}

document.getElementById('tag-p').innerHTML = lista1

// ------------------------------------------

let lista2 = document.getElementById('tag-ul')

for (let i = 1; i <= 5; i++) {
    let entrada2 = document.createElement('li')
    entrada2.textContent = 'Item ' + i
    lista2.appendChild(entrada2)
}

// ------------------------------------------

let lista3 = document.getElementById('tag-ul');

for (let i = 1; i <= 3; i++) {
    let entrada3 = prompt('Digite o item3 ' + i + ':');
    let item3 = document.createElement('li');
    item3.textContent = entrada3;
    lista3.appendChild(item3);
}

// ------------------------------------------

let frutas4 = ['Abacate', 'banana', 'maça', 'abacaxi', 'kiwi']
let lista4= document.getElementById('tag-ul')

for (let i = 0; i < 5; i++) {
    let entrada4 = document.createElement('li')
    entrada4.appendChild(document.createTextNode(frutas4[i]))
    // entrada4.textContent = 'Item ' + 
    lista4.appendChild(entrada4)
}

// ------------------------------------------

let frutas5 = []

for (let i = 0; i < 5; i++) {
    frutas5.push(prompt('Digite uma fruta:'))
}

let lista5 = document.getElementById('tag-ul')

for (let i = 0; i < frutas5.length; i++) {
    let entrada5 = document.createElement('li')
    entrada5.textContent = frutas5[i]
    lista5.appendChild(entrada5)
}