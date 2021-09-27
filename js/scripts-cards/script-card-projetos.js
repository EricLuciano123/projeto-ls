import dataset from "../model/dataset.js";

for ( let cards of dataset ) {
    const itens = document.querySelector('.itens');
    let card = criadordecards(cards);
    itens.insertAdjacentHTML('beforeend', card);
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
    </div>`
};