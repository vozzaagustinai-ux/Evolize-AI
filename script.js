document.addEventListener('DOMContentLoaded', () => {
    // Inicializar Iconos Lucide
    lucide.createIcons();

    // Intersection Observer para animaciones de scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Si es la línea de tiempo, animar secuencialmente
                if (entry.target.classList.contains('timeline-item')) {
                    entry.target.style.transitionDelay = `${entry.target.dataset.index * 0.2}s`;
                }
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Seleccionar elementos a animar
    const animatedElements = document.querySelectorAll('.phil-card, .case-card, .timeline-item, .section-header');

    // Configurar estado inicial
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';

        if (el.classList.contains('timeline-item')) {
            el.dataset.index = index;
        }

        observer.observe(el);
    });

    // Clase para elementos visibles
    const style = document.createElement('style');
    style.innerHTML = `
        .visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);

    // Navbar scroll effect
    const header = document.querySelector('header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            header.style.transform = currentScroll > lastScroll ? 'translateY(-100%)' : 'translateY(0)';
        } else {
            header.style.transform = 'translateY(0)';
        }

        lastScroll = currentScroll;
    });

    // Smooth scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Interacción CTA Buttons
    const ctaButtons = document.querySelectorAll('.btn-primary');
    ctaButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Animación sutil al hacer click
            btn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                btn.style.transform = '';
            }, 150);
        });
    });

    // Simulación de escritura en la consola (Hero Visual)
    const codePre = document.querySelector('.window-body pre code');
    if (codePre) {
        const originalHtml = codePre.innerHTML;
        codePre.innerHTML = '';

        let i = 0;
        let isTag = false;
        let text = originalHtml;

        // Simular tipeo inicial (simplificado para no romper HTML)
        codePre.style.opacity = '0';
        setTimeout(() => {
            codePre.innerHTML = originalHtml;
            codePre.style.transition = 'opacity 1s ease';
            codePre.style.opacity = '1';
        }, 500);
    }
});
