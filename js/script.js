// Seleciona todos os carrosseis da página
const carousels = document.querySelectorAll('.carousel-container');
const slideIndexes = Array.from(carousels).map(() => 0);

function showSlide(carouselIndex, n) {
    const slides = carousels[carouselIndex].querySelectorAll('.carousel-slide img');
    const dots = carousels[carouselIndex].querySelectorAll('.dot');

    slides.forEach((slide, i) => slide.classList.toggle('active', i === n));
    dots.forEach((dot, i) => dot.classList.toggle('active', i === n));

    slideIndexes[carouselIndex] = n;
}

function moveSlide(carouselIndex, step) {
    const slides = carousels[carouselIndex].querySelectorAll('.carousel-slide img');
    let nextIndex = slideIndexes[carouselIndex] + step;

    if (nextIndex >= slides.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = slides.length - 1;

    showSlide(carouselIndex, nextIndex);
}

function currentSlide(n, carouselIndex = 0) {
    // Se não for passado índice, assume 0 (para o index.html)
    showSlide(carouselIndex, n);
}

function autoSlide(carouselIndex) {
    moveSlide(carouselIndex, 1);
    setTimeout(() => autoSlide(carouselIndex), 8000);
}

// Inicializa todos os carrosseis
carousels.forEach((_, i) => {
    showSlide(i, 0);
    setTimeout(() => autoSlide(i), 5000 + i * 1000);
});
