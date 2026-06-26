document.addEventListener('DOMContentLoaded', () => {
    const carruselContainers = document.querySelectorAll('.carrusel-container');

    carruselContainers.forEach((container) => {
        const carrusel = container.querySelector('.carrusel');
        const btnPrev = container.querySelector('.btn-prev');
        const btnNext = container.querySelector('.btn-next');

        if (!carrusel || !btnPrev || !btnNext) {
            return;
        }

        let currentIndex = 0;
        const slideCount = carrusel.children.length;

        function updateCarrusel() {
            carrusel.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        btnNext.addEventListener('click', () => {
            currentIndex += 1;
            if (currentIndex >= slideCount) {
                currentIndex = 0;
            }
            updateCarrusel();
        });

        btnPrev.addEventListener('click', () => {
            currentIndex -= 1;
            if (currentIndex < 0) {
                currentIndex = slideCount - 1;
            }
            updateCarrusel();
        });
    });
});
