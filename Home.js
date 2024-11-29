document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".carousel-track");
    const images = document.querySelectorAll(".carousel-image");
    const prevButton = document.querySelector(".carousel-control.prev");
    const nextButton = document.querySelector(".carousel-control.next");
    const visibleImages = 4; // Número de imágenes visibles
    const imageWidth = images[0].clientWidth + 23; // Ancho de una imagen + gap (10px)
    let currentIndex = 0;

    // Función para actualizar la posición del carrusel
    const updateCarousel = () => {
        const offset = -currentIndex * imageWidth;
        track.style.transform = `translateX(${offset}px)`;
    };

    // Evento para mover hacia la izquierda
    nextButton.addEventListener("click", () => {
        if (currentIndex < images.length - visibleImages) {
            currentIndex++;
            updateCarousel();
        }
    });

    // Evento para mover hacia la derecha
    prevButton.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    // Actualización responsiva (por si el ancho de las imágenes cambia)
    window.addEventListener("resize", () => {
        updateCarousel();
    });
});
