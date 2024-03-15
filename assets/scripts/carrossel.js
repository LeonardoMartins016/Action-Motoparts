var swiper = new Swiper(".mySwiper", {
  speed: 1000,
  effect: 'slide',
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000, // Intervalo de 5 segundos entre cada slide
    disableOnInteraction: false, // Permitir que o autoplay continue mesmo se o usuário interagir com o carrossel
  },
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true, // Elemento onde as bolinhas serão adicionadas
  },
}
)