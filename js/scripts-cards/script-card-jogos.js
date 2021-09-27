import dataset2 from "../model/dataset2.js";

for (let cards of dataset2 ) {
    const itens2 = document.querySelector('.itens-jogos');
    const card2 = criadordecards(cards);
    itens2.insertAdjacentHTML('beforeend', card2);
};

function criadordecards(cards) {
    return `
        <div class="item">
            <div class="cabecalho-item">
                <span>
                    Projeto ${cards.id}
                </span>
            </div>
            <div class="meio-item">
                <div class="item-img-projeto"><img src="${cards.image}" alt=""></div>  
            </div>
            <div class="bottom-item">
                <p class="description">Descrição</p>
                <p class="text-description">${cards.textodesc}</p>
            </div>
            <div class="botoes-item">
                <a class="interacao-item" href="${cards.endereco}">Ver projeto</a>
                <a class="interacao-item">Copiar link</a>
        </div>`
    };
