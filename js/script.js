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

    // Función para crear la vCard (Tarjeta de contacto VCF) para descargar
    const saveContactBtn = document.getElementById('saveContactBtn');
    if (saveContactBtn) {
        saveContactBtn.addEventListener('click', function() {
            
            // Datos del contacto
            const contact = {
                firstName: "Eugenia",
                lastName: "González",
                organization: "RE/MAX Potencia",
                title: "Agente Inmobiliaria",
                phone: "+5491100000000", // Rellenar con numeración real si estuviera disponible en el link WP. WP usa número oculto por ID (wa.me/message...). Se deja un placeholder o se asume genérico.
                email: "eugenia.gonzalez@remax.com.ar",
                url: "https://www.instagram.com/euge.tuagenteremax/"
            };

            // Construir el archivo VCF
            let vcard = `BEGIN:VCARD
VERSION:3.0
FN:${contact.firstName} ${contact.lastName}
N:${contact.lastName};${contact.firstName};;;
ORG:${contact.organization}
TITLE:${contact.title}
TEL;TYPE=CELL:${contact.phone}
EMAIL;TYPE=WORK,INTERNET:${contact.email}
URL:${contact.url}
END:VCARD`;

            // Crear el Blob
            const blob = new Blob([vcard], { type: "text/vcard" });
            const url = URL.createObjectURL(blob);
            
            // Crear el enlace de descarga oculto y forzar clic
            const a = document.createElement('a');
            a.href = url;
            a.download = "Eugenia_Gonzalez_REMAX.vcf";
            document.body.appendChild(a);
            a.click();
            
            // Limpiar DOM
            setTimeout(() => {
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
            }, 0);
        });
    }

});
