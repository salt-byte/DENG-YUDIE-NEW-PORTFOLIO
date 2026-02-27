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
    // ---- Three.js Liquid Displacement (Water Ripple) ----
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    // Create base canvas for Three.js
    const canvas = renderer.domElement;
    canvas.id = 'ripple-canvas';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '-1';
    canvas.style.pointerEvents = 'none';
    document.body.appendChild(canvas);

    renderer.setSize(window.innerWidth, window.innerHeight);

    // Shader for liquid distortion
    const vertexShader = `
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = vec4(position, 1.0);
        }
    `;

    const fragmentShader = `
        uniform vec2 uMouse;
        uniform float uTime;
        varying vec2 vUv;

        void main() {
            vec2 uv = vUv;
            
            // Subtle water ripple distortion logic
            vec2 direction = normalize(uv - vec2(0.5));
            float distance = length(uv - uMouse);
            
            float wave = sin(distance * 15.0 - uTime * 1.5) * 0.008;
            float mask = smoothstep(0.6, 0.0, distance);
            
            uv += direction * wave * mask;
            
            // Background color (ink black)
            vec3 color = vec3(0.04, 0.04, 0.06); 
            
            // Add subtle noise/grain
            float noise = fract(sin(dot(uv ,vec2(12.9898,78.233))) * 43758.5453);
            color += noise * 0.02;
            
            gl_FragColor = vec4(color, 1.0);
        }
    `;

    const geometry = new THREE.PlaneGeometry(2, 2);
    const material = new THREE.ShaderMaterial({
        uniforms: {
            uMouse: { value: new THREE.Vector2(0.5, 0.5) },
            uTime: { value: 0 }
        },
        vertexShader,
        fragmentShader,
        transparent: true
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    let mousePosition = new THREE.Vector2(0.5, 0.5);
    window.addEventListener('mousemove', (e) => {
        mousePosition.x = e.clientX / window.innerWidth;
        mousePosition.y = 1.0 - (e.clientY / window.innerHeight);
    });

    function animate(time) {
        material.uniforms.uTime.value = time * 0.001;
        material.uniforms.uMouse.value.lerp(mousePosition, 0.05);
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
});

