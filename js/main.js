document.addEventListener('DOMContentLoaded', function () {
    // ---- Mobile Nav Toggle ----
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('nav');

    menuToggle.addEventListener('click', function () {
        nav.classList.toggle('active');
        this.classList.toggle('open');
    });

    // Close mobile nav on link click
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            menuToggle.classList.remove('open');
        });
    });

    // ---- Scroll-triggered Reveal Animations ----
    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        },
        { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // ---- Active Nav Link on Scroll ----
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav ul li a');

    function updateActiveNav() {
        const scrollY = window.scrollY + 120;
        let current = '';

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            if (scrollY >= top && scrollY < top + height) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }

    // ---- Header Background on Scroll ----
    const header = document.getElementById('header');
    function updateHeader() {
        if (window.scrollY > 60) {
            header.style.boxShadow = '0 4px 30px rgba(0,0,0,0.4)';
        } else {
            header.style.boxShadow = 'none';
        }
    }

    window.addEventListener('scroll', function () {
        updateActiveNav();
        updateHeader();
    });

    updateActiveNav();
    updateHeader();
});
