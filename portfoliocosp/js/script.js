let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide img');
const dots = document.querySelectorAll('.dot');

function showSlide(n) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === n);
        dots[i].classList.toggle('active', i === n);
    });
    slideIndex = n;
}

function moveSlide(n) {
    let nextIndex = slideIndex + n;
    if (nextIndex >= slides.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = slides.length - 1;
    showSlide(nextIndex);
}

function currentSlide(n) {
    showSlide(n);
}

function autoSlide() {
    moveSlide(1);
    setTimeout(autoSlide, 8000);
}

// Inicializa
showSlide(slideIndex);
setTimeout(autoSlide, 5000);
