document.addEventListener('DOMContentLoaded', () => {
    // Inicializar Iconos Lucide
    lucide.createIcons();

    // FAQ Accordion logic
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const questionBtn = item.querySelector('.faq-question');
        questionBtn.addEventListener('click', () => {
            // Close all others
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            // Toggle current
            item.classList.toggle('active');
        });
    });

    // Carousel Slider Logic
    const carousel = document.querySelector('.use-cases-carousel');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    if (carousel && prevBtn && nextBtn) {
        // Scroll amount is roughly card width + gap
        const scrollAmount = 380;

        nextBtn.addEventListener('click', () => {
            carousel.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });

        prevBtn.addEventListener('click', () => {
            carousel.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });
    }

    // Scroll Navbar effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(12, 16, 23, 0.95)';
        } else {
            header.style.background = 'rgba(12, 16, 23, 0.8)';
        }
    });
});
