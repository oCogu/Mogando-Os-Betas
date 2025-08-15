const carouselImages = document.getElementById('carousel-images');
        const totalImages = carouselImages.children.length;
        let index = 0;

        document.querySelector('.btn.left').addEventListener('click', () => {
            index = (index - 1 + totalImages) % totalImages;
            updateCarousel();
        });

        document.querySelector('.btn.right').addEventListener('click', () => {
            index = (index + 1) % totalImages;
            updateCarousel();
        });

        function updateCarousel() {
            carouselImages.style.transform = `translateX(-${index * 500}px)`;
        }

        // Auto-play a cada 3 segundos
        setInterval(() => {
            index = (index + 1) % totalImages;
            updateCarousel();
        }, 3000);