let slideIndex = 0;

function changeSlide(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  const slides = document.querySelectorAll('.slide');
  if (n >= slides.length) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = slides.length - 1;
  }

  slides.forEach((slide) => {
    slide.style.display = 'none';
  });

  slides[slideIndex].style.display = 'block';
}
