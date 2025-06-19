// Seleciona todos os carrosseis da página
const carrosseis = document.querySelectorAll('.mini-carousel');

carrosseis.forEach(carrossel => {
  const track = carrossel.querySelector('.carousel-track');
  const prevBtn = carrossel.querySelector('.mini-btn.prev');
  const nextBtn = carrossel.querySelector('.mini-btn.next');
  const slides = track.querySelectorAll('img');
  let currentIndex = 0;

  function updateCarousel() {
    const slideWidth = slides[0].clientWidth;
    const newTransform = -currentIndex * slideWidth;
    track.style.transform = `translateX(${newTransform}px)`;
  }

  prevBtn.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = slides.length - 1;
    }
    updateCarousel();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= slides.length) {
      currentIndex = 0;
    }
    updateCarousel();
  });

  window.addEventListener('resize', updateCarousel);
  updateCarousel();
});