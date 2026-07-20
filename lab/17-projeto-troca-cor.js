// Explicação da lógica
// Cria uma lista de cores (colors).
// Sorteia um índice válido dessa lista usando Math.random() e Math.floor().
// Obtém a cor correspondente ao índice sorteado.
// Aplica essa cor como plano de fundo da página (body).

function mudarCorBackground() {

    // Cria um array com as cores disponíveis
    let colors = ['black', 'green', 'blue', 'gray']

    // Gera um índice aleatório entre 0 e o tamanho do array - 1
    let randmColor = colors[Math.floor(Math.random() * colors.length)]

    // Altera a cor de fundo do body para a cor sorteada
    document.body.style.backgroundColor = randmColor

}