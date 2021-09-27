function alternaprojeto() {
  let projetos = document.querySelector('.projetos');
  projetos.setAttribute('style', 'Display: none;');
  let jogos = document.querySelector('.jogos');
  jogos.setAttribute('style','Display: block')
};

function alternarjogo() {
  let projetos = document.querySelector('.projetos');
  projetos.setAttribute('style', 'Display: block;');
  let jogos = document.querySelector('.jogos');
  jogos.setAttribute('style','Display: none')
};
