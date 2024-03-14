const carousel = document.getElementById('carousel');
  let isDragging = false;
  let startPosition = 0;
  let currentTranslate = 0;
  let prevTranslate = 0;

  carousel.addEventListener('mousedown', (e) => {
    isDragging = true;
    startPosition = e.pageX - carousel.offsetLeft;
    prevTranslate = currentTranslate;
    carousel.style.transition = 'none';
  });

  carousel.addEventListener('mousemove', (e) => {
    if (isDragging) {
      const currentPosition = e.pageX - carousel.offsetLeft;
      currentTranslate = prevTranslate + currentPosition - startPosition;
      carousel.style.transform = `translateX(${currentTranslate}px)`;
    }
  });

  carousel.addEventListener('mouseup', () => {
    isDragging = false;
    const movedBy = currentTranslate - prevTranslate;
    if (movedBy < -50 && currentTranslate !== 0) {
      currentTranslate += carousel.offsetWidth;
    } else if (movedBy > 50 && currentTranslate !== -carousel.offsetWidth * (carousel.children.length - 1)) {
      currentTranslate -= carousel.offsetWidth;
    }
    carousel.style.transition = 'transform 0.5s ease';
    carousel.style.transform = `translateX(${currentTranslate}px)`;
  });

  carousel.addEventListener('mouseleave', () => {
    isDragging = false;
    const movedBy = currentTranslate - prevTranslate;
    if (movedBy < -50 && currentTranslate !== 0) {
      currentTranslate += carousel.offsetWidth;
    } else if (movedBy > 50 && currentTranslate !== -carousel.offsetWidth * (carousel.children.length - 1)) {
      currentTranslate -= carousel.offsetWidth;
    }
    carousel.style.transition = 'transform 0.5s ease';
    carousel.style.transform = `translateX(${currentTranslate}px)`;
  });