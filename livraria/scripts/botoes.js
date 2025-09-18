const botoes = document.querySelectorAll(".secao .botao");

botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        const container = botao.closest(".secao").querySelector(".container");
        
        if (container) {
            const scrollAmount = 700; 

            if (botao.classList.contains("direita")) {
                container.scrollBy({
                    left: scrollAmount,
                    behavior: "smooth"
                });
            } else if (botao.classList.contains("esquerda")) {
                container.scrollBy({
                    left: -scrollAmount,
                    behavior: "smooth"
                });
            }
        } else {
            console.error("Erro: O container de livros não foi encontrado na seção.");
        }
    });
});