document.addEventListener('DOMContentLoaded', function() {
    
    // Iniciar Animaciones AOS
    AOS.init({
        once: true,       // whether animation should happen only once - while scrolling down
        offset: 100,      // offset (in px) from the original trigger point
        duration: 800,    // values from 0 to 3000, with step 50ms
        easing: 'ease-out-cubic', // default easing for AOS animations
    });

    // Navbar Scroll Effect
    const navbar = document.getElementById('mainNav');
    
    const onScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', onScroll);
    // Ejecutar una vez por si ya está scrolleado al cargar
    onScroll();

    // Close mobile menu on click nav-link
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.getElementById('navbarNav');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                // Instancia de bootstrap collapse
                const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
            }
        });
    });

    // Funcionalidad de la Tarjeta Digital (Imagen)
    const downloadCardBtn = document.getElementById('downloadCardBtn');
    const shareCardBtn = document.getElementById('shareCardBtn');
    const shareStatus = document.getElementById('shareStatus');

    if (downloadCardBtn) {
        downloadCardBtn.addEventListener('click', function() {
            window.open('tarjeta.jpeg', '_blank');
        });
    }

    if (shareCardBtn) {
        shareCardBtn.addEventListener('click', async function() {
            const shareData = {
                title: 'Eugenia González | RE/MAX Potencia',
                text: 'Te comparto mi tarjeta digital para que estemos en contacto.',
                url: window.location.href
            };

            if (navigator.share) {
                try {
                    await navigator.share(shareData);
                } catch (err) {
                    console.log('Error al compartir:', err);
                }
            } else {
                // Fallback: copiar link al portapapeles
                try {
                    await navigator.clipboard.writeText(window.location.href);
                    if (shareStatus) {
                        shareStatus.classList.remove('d-none');
                        setTimeout(() => {
                            shareStatus.classList.add('d-none');
                        }, 3000);
                    }
                } catch (err) {
                    console.error('Error al copiar:', err);
                }
            }
        });
    }

    // Zoom de la tarjeta al hacer clic en la imagen
    const tarjetaWrapper = document.querySelector('.tarjeta-wrapper');
    if (tarjetaWrapper) {
        tarjetaWrapper.addEventListener('click', function() {
            window.open('tarjeta.jpeg', '_blank');
        });
    }

});
