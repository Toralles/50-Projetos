// Seleciona o elemento <ul> (ou <ol>) do HTML que possui o id "numberList"
let numberList = document.getElementById('numberList')

// Laço que será executado 10 vezes (de 1 até 10)
for (let i = 1; i <= 10; i++) {

    // Cria um novo elemento <li> (item de lista)
    let listItem = document.createElement('li')

    // Define o texto que será exibido dentro do <li>
    // Exemplo: "Item 1", "Item 2", ..., "Item 10"
    listItem.textContent = 'Item ' + i

    // Adiciona o <li> criado como último filho da lista (<ul> ou <ol>)
    numberList.appendChild(listItem)
}