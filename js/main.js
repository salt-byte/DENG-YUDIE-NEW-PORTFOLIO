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

    // ---- Collapsible Case Study Sections ----
    document.querySelectorAll('.case-section').forEach(section => {
        // Start collapsed
        section.classList.add('collapsed');

        // Make the header (num + h4) clickable
        const num = section.querySelector('.case-section-num');
        const content = section.querySelector('.case-section-content');
        const h4 = content.querySelector('h4');

        if (!h4) return;

        // Create clickable header wrapper
        const header = document.createElement('div');
        header.className = 'case-section-header';

        // Add chevron icon
        const chevron = document.createElement('i');
        chevron.className = 'fas fa-chevron-down case-section-chevron';

        // Clone h4 into header
        header.appendChild(h4.cloneNode(true));
        header.appendChild(chevron);

        // Replace original h4 with header
        h4.replaceWith(header);

        // Wrap remaining content in collapsible body
        const body = document.createElement('div');
        body.className = 'case-section-body';

        // Move all children after header into body
        while (header.nextSibling) {
            body.appendChild(header.nextSibling);
        }
        content.appendChild(body);

        // Toggle on click (header or num)
        const toggle = () => {
            section.classList.toggle('collapsed');
        };
        header.addEventListener('click', toggle);
        num.addEventListener('click', toggle);
        num.style.cursor = 'pointer';
    });

    updateActiveNav();
    updateHeader();
});
