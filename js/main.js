document.addEventListener('DOMContentLoaded', function () {
    // ---- Root Swiper (Narrative Book) ----
    const rootSwiper = new Swiper('.root-swiper', {
        direction: 'horizontal',
        slidesPerView: 1,
        spaceBetween: 0,
        mousewheel: {
            forceToAxis: true,
            sensitivity: 1,
            releaseOnEdges: true,
        },
        keyboard: true,
        speed: 1200,
        effect: 'creative',
        creativeEffect: {
            prev: {
                shadow: true,
                translate: ['-20%', 0, -1],
                rotate: [0, 0, -5],
            },
            next: {
                translate: ['100%', 0, 0],
            },
        },
        pagination: {
            el: '.root-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.next-page',
            prevEl: '.prev-page',
        },
        on: {
            slideChange: function () {
                const activeSlide = this.slides[this.activeIndex];
                const chapter = activeSlide.getAttribute('data-chapter');
                updateChapterColors(chapter);
                const firstSection = activeSlide.querySelector('section');
                if (firstSection) updateNav(firstSection.id);
            }
        }
    });

    // ---- Nested Swipers (for media cycling within pages) ----
    const gallerySwiperEl = document.querySelector('.gallery-swiper');
    if (gallerySwiperEl) {
        new Swiper('.gallery-swiper', {
            direction: 'horizontal',
            slidesPerView: 1,
            spaceBetween: 20,
            effect: 'fade',
            fadeEffect: { crossFade: true },
            pagination: {
                el: '.gallery-pagination',
                clickable: true,
            },
            autoplay: {
                delay: 4000,
                disableOnInteraction: true,
            },
            nested: true,
        });
    }

    const zhipuSwiperEl = document.querySelector('.zhipu-swiper');
    if (zhipuSwiperEl) {
        new Swiper('.zhipu-swiper', {
            direction: 'horizontal',
            slidesPerView: 1,
            spaceBetween: 20,
            effect: 'fade',
            fadeEffect: { crossFade: true },
            pagination: {
                el: '.zhipu-pagination',
                clickable: true,
            },
            autoplay: {
                delay: 3500,
                disableOnInteraction: true,
            },
            nested: true,
        });
    }


    // ---- Chapter-based Shifting ----
    const chapterColors = {
        '1': { a: 'rgba(197, 160, 89, 0.12)', b: 'rgba(26, 26, 26, 0.05)' },  // Origins (Gold/Warm)
        '2': { a: 'rgba(121, 28, 45, 0.1)', b: 'rgba(28, 59, 121, 0.05)' },    // AIGC (Artistic)
        '3': { a: 'rgba(28, 121, 80, 0.1)', b: 'rgba(255, 255, 255, 0.05)' },  // Zhipu (Life/Green)
        '4': { a: 'rgba(197, 160, 89, 0.1)', b: 'rgba(50, 50, 121, 0.08)' },   // Independent (Tech/Gold)
        '5': { a: 'rgba(28, 59, 121, 0.12)', b: 'rgba(15, 15, 15, 0.1)' }      // USC (Deep/Trust)
    };

    function updateChapterColors(chapter) {
        if (chapter && chapterColors[chapter]) {
            const colors = chapterColors[chapter];
            document.documentElement.style.setProperty('--diffuse-1-a', colors.a);
            document.documentElement.style.setProperty('--diffuse-1-b', colors.b);
        }
    }

    // ---- Navigation Sync ----
    const navLinks = document.querySelectorAll('nav ul li a');
    function updateNav(sectionId) {
        if (!sectionId) return;
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + sectionId) {
                link.classList.add('active');
            }
        });
    }

    // Handle nav link clicks to jump to spreads
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const slides = document.querySelectorAll('.swiper-slide');
            let foundIndex = -1;
            slides.forEach((slide, index) => {
                if (slide.querySelector(`section#${targetId}`)) {
                    foundIndex = index;
                }
            });
            if (foundIndex > -1) {
                rootSwiper.slideTo(foundIndex);
            }
        });
    });

    // ---- Three.js Liquid Displacement (Water Ripple) ----
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

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
            vec2 direction = normalize(uv - vec2(0.5));
            float distance = length(uv - uMouse);
            float wave = sin(distance * 12.0 - uTime * 1.2) * 0.007;
            float mask = smoothstep(0.7, 0.0, distance);
            uv += direction * wave * mask;
            
            // Adjust to darker, subtle atmospheric color
            vec3 color = vec3(0.06, 0.06, 0.07); 
            float noise = fract(sin(dot(uv ,vec2(12.9898,78.233))) * 43758.5453);
            color += noise * 0.015;
            gl_FragColor = vec4(color, 1.0);
        }
    `;

    const material = new THREE.ShaderMaterial({
        uniforms: {
            uMouse: { value: new THREE.Vector2(0.5, 0.5) },
            uTime: { value: 0 }
        },
        vertexShader,
        fragmentShader,
        transparent: true
    });

    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
    scene.add(mesh);

    let mousePosition = new THREE.Vector2(0.5, 0.5);
    window.addEventListener('mousemove', (e) => {
        mousePosition.x = e.clientX / window.innerWidth;
        mousePosition.y = 1.0 - (e.clientY / window.innerHeight);
    });

    function animate(time) {
        material.uniforms.uTime.value = time * 0.001;
        material.uniforms.uMouse.value.lerp(mousePosition, 0.04);
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Initialize first chapter
    updateChapterColors('1');
});

