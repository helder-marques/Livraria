const inputPesquisa = document.getElementById("campo-pesquisa");
const btPesquisa = document.getElementById("btn-pesquisar");
const livroSelecionado=document.getElementById("livro-pesquisado");

btPesquisa.addEventListener("click",async (e)=>{
    e.preventDefault();
    const termoDeBusca = inputPesquisa.value; 
    const endpointDaApi = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(termoDeBusca)}&langRestrict=pt&printType=books&maxResults=20`;
    if(inputPesquisa.value){
   try {
        const res = await fetch(endpointDaApi);
        const data = await res.json();
        
        if (data.items && data.items.length > 0) {
            const livro = data.items[0];

            const img = livro.volumeInfo?.imageLinks?.smallThumbnail;
            const titulo = livro.volumeInfo?.title || 'Sem título';
            const autores = livro.volumeInfo?.authors?.join(", ") || 'Autor desconhecido';
            const descricao = livro.volumeInfo?.description || 'Descrição não disponível';
            
            livroSelecionado.innerHTML = `
                <div class="livro-selecionado">
                    <img src="${img}" alt="Capa do livro ${titulo}">
                    <h2>${titulo}</h2>
                    <p>Autor: ${autores}</p>
                    <p>${descricao}</p>
                </div>
            `;
        } else {
            livroSelecionado.innerHTML = "<p>Nenhum livro encontrado. Tente um termo de busca diferente.</p>";
        }
    } catch (error) {
        console.error("Ocorreu um erro na busca:", error);
        livroSelecionado.innerHTML = "<p>Ocorreu um erro na busca. Por favor, tente novamente mais tarde.</p>";
    }}
    else{
        livroSelecionado.innerHTML=''
    }
})