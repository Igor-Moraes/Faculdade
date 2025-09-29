const slides = document.querySelector('.slides');
const slideImgs = document.querySelectorAll('.slides img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 0;

function mostrarSlide(i) {
  if (i < 0) index = slideImgs.length - 1;
  else if (i >= slideImgs.length) index = 0;
  else index = i;

  slides.style.transform = `translateX(${-index * 100}%)`;
}

prevBtn.addEventListener('click', () => mostrarSlide(index - 1));
nextBtn.addEventListener('click', () => mostrarSlide(index + 1));

// Troca automática a cada 5s
setInterval(() => mostrarSlide(index + 1), 5000);
