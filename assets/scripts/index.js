var navLinks = document.querySelector('.nav-links');
var menu = document.querySelector(".menu");
var body = document.querySelector('body');

menu.addEventListener('click', () =>{
  navLinks.classList.toggle('ativo');
  body.classList.toggle('lock');
  menu.classList.toggle('ativo');
})