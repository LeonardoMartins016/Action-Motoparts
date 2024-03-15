var navLinks = document.querySelector('.nav-links');
var menu = document.querySelector(".menu");
var body = document.querySelector('body');
var descricao = document.querySelector('.descricao-product');
var produtos = document.querySelector('.products')

menu.addEventListener('click', () =>{
  navLinks.classList.toggle('ativo');
  body.classList.toggle('lock');
  menu.classList.toggle('ativo');
})

produtos.addEventListener('click', () => {
  descricao.classList.toggle('aparece')
})