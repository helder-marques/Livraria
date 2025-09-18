



function criarLivro(livros, secao) {
    let preco = Math.floor(Math.random() * (100 - 10) + 10).toFixed(2);
    const img = livros.volumeInfo?.imageLinks?.smallThumbnail;
    const titulo = livros.volumeInfo?.title || 'Sem título';
    const autores = livros.volumeInfo?.authors?.join(", ") || 'Autor desconhecido';
    const livroId = livros.id; // Pega o ID único do livro

    if (img) {
        secao.innerHTML += `
            <a href="livro-detalhes.html?id=${livroId}" class="livro-link">
                <div class="livro">
                    <img class="livro-imagem" src="${img}" alt="Capa do livro ${titulo}">
                    <h2 class="livro-titulo">${titulo}</h2>
                    <p>Autor: ${autores}</p>
                    <p>R$${preco}</p>
                </div>
            </a>
        `;
    }
}



