const tecnologia = document.getElementById("tecnologia");
const arte = document.getElementById("arte");
const educacao = document.getElementById("educacao");
const saude = document.getElementById("saude");

function criarLivro(livros, secao) {
    let preco = Math.floor(Math.random() * (100 - 10) + 10).toFixed(2);
    const img = livros.volumeInfo?.imageLinks?.smallThumbnail;
    const titulo = livros.volumeInfo?.title || 'Sem título';
    const autores = livros.volumeInfo?.authors?.join(", ") || 'Autor desconhecido';
    

    if (img) {
        secao.innerHTML += `
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



async function buscarLivrosPorCategoria(secao, categoria) {
  const endpointDaApi = `https://www.googleapis.com/books/v1/volumes?q=subject:${encodeURIComponent(categoria)}&langRestrict=pt&printType=books&maxResults=20`;
  
  const res = await fetch(endpointDaApi);
  const data = await res.json();

  if (data.items) {
    data.items.forEach(livro => {
      criarLivro(livro, secao);
    });
  } else {
    console.error(`Nenhum livro encontrado para categoria: ${categoria}`);
  }
}

// Chamando as buscas
buscarLivrosPorCategoria(tecnologia, "Tecnologia");
buscarLivrosPorCategoria(arte, "Arte");
buscarLivrosPorCategoria(educacao, "Educação");
buscarLivrosPorCategoria(saude, "Saúde");
