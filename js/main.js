/* ============================================
   FAKECC S.A.C. - SCRIPT PRINCIPAL
   Slider, Modal, Menú Móvil, Formulario
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    initSlider();
    initNavigation();
    initModal();
    initForm();
    initScrollAnimations();
    // NOTA: los proyectos los renderiza projects.js (renderProjects).
    // Se eliminó la función duplicada loadProjects() que existía en el
    // proyecto anterior para evitar renderizar la galería dos veces.
});

/* ============================================
   SLIDER HERO
   ============================================ */

let currentSlide = 0;
let slides = [];
let totalSlides = 0;
let autoSlideInterval;

function initSlider() {
    slides = document.querySelectorAll('.slider__item');
    totalSlides = slides.length;

    const sliderContainer = document.getElementById('sliderContainer');
    const prevBtn = document.getElementById('sliderPrev');
    const nextBtn = document.getElementById('sliderNext');
    const dotsContainer = document.getElementById('sliderDots');

    if (!sliderContainer || totalSlides === 0) return;

    // Crear dots
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('button');
        dot.className = `slider__dot ${i === 0 ? 'active' : ''}`;
        dot.setAttribute('aria-label', `Ir a diapositiva ${i + 1}`);
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }

    // Event listeners
    prevBtn.addEventListener('click', () => changeSlide(-1));
    nextBtn.addEventListener('click', () => changeSlide(1));

    // Auto slide (cambiar 6000 para ajustar velocidad en milisegundos)
    startAutoSlide();
    sliderContainer.addEventListener('mouseenter', stopAutoSlide);
    sliderContainer.addEventListener('mouseleave', startAutoSlide);

    // Teclado
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') changeSlide(-1);
        if (e.key === 'ArrowRight') changeSlide(1);
    });

    updateSlider();
}

function changeSlide(direction) {
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    updateSlider();
    resetAutoSlide();
}

function goToSlide(index) {
    currentSlide = index;
    updateSlider();
    resetAutoSlide();
}

function updateSlider() {
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentSlide);
    });

    document.querySelectorAll('.slider__dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
    }, 6000);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

function resetAutoSlide() {
    stopAutoSlide();
    startAutoSlide();
}

/* ============================================
   NAVEGACIÓN MÓVIL
   ============================================ */

function initNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav__link');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            navMenu.classList.remove('active');

            // Scroll suave
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
}

/* ============================================
   MODAL TABS - NOSOTROS
   ============================================ */

function initModal() {
    const btnNosotros = document.getElementById('btnNosotros');
    const modal = document.getElementById('modalNosotros');
    const closeModal = document.getElementById('closeModal');
    const tabBtns = document.querySelectorAll('.modal__tab-btn');

    btnNosotros.addEventListener('click', () => {
        modal.classList.add('active');
    });

    closeModal.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    // Cerrar con tecla Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
        }
    });

    // Tab switching
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabName = btn.getAttribute('data-tab');

            // Remover activos
            document.querySelectorAll('.modal__tab-btn').forEach(b => {
                b.classList.remove('active');
            });
            document.querySelectorAll('.modal__tab-pane').forEach(pane => {
                pane.classList.remove('active');
            });

            // Agregar activos
            btn.classList.add('active');
            document.getElementById(tabName).classList.add('active');
        });
    });
}

/* ============================================
   FORMULARIO CONTACTO
   ============================================ */

function initForm() {
    const form = document.getElementById('contactForm');

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const formData = new FormData(form);
            const data = Object.fromEntries(formData);

            // Validación
            if (!data.nombre || !data.email || !data.mensaje) {
                showNotification('Por favor completa los campos requeridos', 'error');
                return;
            }

            // Enviar con Formspree
            const formspreeEndpoint = 'https://formspree.io/f/YOUR_FORM_ID'; // REEMPLAZA CON TU ID

            try {
                const response = await fetch(formspreeEndpoint, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                });

                if (response.ok) {
                    showNotification('¡Mensaje enviado exitosamente! Te contactaremos pronto.', 'success');
                    form.reset();
                } else {
                    showNotification('Error al enviar. Intenta nuevamente.', 'error');
                }
            } catch (error) {
                console.log('Error:', error);
                showNotification('Error de conexión. Intenta después.', 'error');
            }
        });
    }
}

function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 25px;
        background: ${type === 'success' ? '#2E7D32' : '#C62828'};
        color: white;
        border-radius: 4px;
        z-index: 300;
        animation: slideInUp 0.3s ease;
    `;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 4000);
}

/* ============================================
   SCROLL ANIMACIONES
   ============================================ */

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 0.6s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.service__card, .project__card, .cert__item, .stats__item').forEach(el => {
        observer.observe(el);
    });
}

console.log('FAKECC S.A.C. - Script cargado correctamente');
