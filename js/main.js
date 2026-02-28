document.addEventListener('DOMContentLoaded', function () {

    // ── Root Swiper ──────────────────────────────────────────
    const rootSwiper = new Swiper('.root-swiper', {
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 0,
        mousewheel: {
            forceToAxis: true,
            sensitivity: 1,
            releaseOnEdges: true,
        },
        keyboard: true,
        speed: 900,
        pagination: {
            el: '.root-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.next-page',
            prevEl: '.prev-page',
        },
        on: {
            // Clear fly-ins immediately when slide starts changing
            slideChange: function () {
                document.querySelectorAll('.swiper-slide').forEach(s => {
                    s.classList.remove('slide-visible');
                });
                const activeSlide = this.slides[this.activeIndex];
                const chapter = activeSlide ? activeSlide.getAttribute('data-chapter') : null;
                updateChapterColors(chapter);
                updateSidebar(this.activeIndex);
            },
            // Trigger fly-ins AFTER the page-flip transition completes
            transitionEnd: function () {
                const active = this.slides[this.activeIndex];
                if (active) active.classList.add('slide-visible');
            },
            // Fly in slide 0 on first load
            init: function () {
                setTimeout(() => {
                    if (this.slides[0]) this.slides[0].classList.add('slide-visible');
                }, 250);
            }
        }
    });

    // ── Sidebar sync ─────────────────────────────────────────
    function updateSidebar(index) {
        document.querySelectorAll('.chapter-item').forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
    }

    document.querySelectorAll('.chapter-item').forEach((item) => {
        item.addEventListener('click', () => {
            rootSwiper.slideTo(parseInt(item.dataset.slide));
        });
    });

    const gallerySwiperEl = document.querySelector('.gallery-swiper');
    if (gallerySwiperEl) {
        new Swiper('.gallery-swiper', {
            direction: 'horizontal',
            slidesPerView: 1,
            spaceBetween: 0,
            effect: 'fade',
            fadeEffect: { crossFade: true },
            pagination: { el: '.gallery-pagination', clickable: true },
            nested: true,
        });
    }

    // ── Zhipu screenshot strip (above text) ──────────────────
    const zsStripEl = document.querySelector('.zs-strip');
    if (zsStripEl) {
        new Swiper('.zs-strip', {
            direction: 'horizontal',
            slidesPerView: 'auto',
            spaceBetween: 10,
            loop: true,
            speed: 600,
            autoplay: { delay: 2800, disableOnInteraction: false },
            nested: true,
        });
    }

    // ── Zhipu GIF demos (phone mockup) ───────────────────────
    // Click a feature pill → fade in that feature's GIF on phone
    // Click same pill again → toggle off
    const gifOverlay = document.querySelector('.zhipu-gif-overlay');
    if (gifOverlay) {
        let activeFeatureIdx = null;

        const featureCaptions = [
            '01 · Photo to Life',
            '02 · Immersive Companion',
            '03 · Social Matchmaking',
            '04 · Cloud Travel',
            '05 · Roaming Mode',
        ];

        function setCaption(text) {
            const el = document.querySelector('.phone-caption');
            if (!el) return;
            el.style.opacity = '0';
            setTimeout(() => { el.textContent = text; el.style.opacity = '1'; }, 180);
        }

        document.querySelectorAll('.zf-pill').forEach((item, i) => {
            item.addEventListener('click', () => {
                if (activeFeatureIdx === i) {
                    activeFeatureIdx = null;
                    item.classList.remove('active');
                    gifOverlay.classList.remove('visible');
                    setTimeout(() => { gifOverlay.style.display = 'none'; gifOverlay.src = ''; }, 350);
                    setCaption('Click any feature pill to preview →');
                } else {
                    activeFeatureIdx = i;
                    document.querySelectorAll('.zf-pill').forEach(el => el.classList.remove('active'));
                    item.classList.add('active');
                    gifOverlay.src = item.dataset.gif;
                    gifOverlay.style.display = 'block';
                    requestAnimationFrame(() => requestAnimationFrame(() => {
                        gifOverlay.classList.add('visible');
                    }));
                    setCaption(featureCaptions[i]);
                }
            });
        });
    }

    // ── Chapter ambient color shift ───────────────────────────
    const chapterColors = {
        '1': { a: 'rgba(197, 160, 89, 0.10)', b: 'rgba(26, 26, 26, 0.04)' },
        '2': { a: 'rgba(110, 20, 40, 0.09)', b: 'rgba(28, 59, 121, 0.04)' },
        '3': { a: 'rgba(20, 110, 70, 0.09)', b: 'rgba(255, 255, 255, 0.03)' },
        '4': { a: 'rgba(197, 160, 89, 0.09)', b: 'rgba(50, 50, 121, 0.07)' },
        '5': { a: 'rgba(28, 59, 121, 0.10)', b: 'rgba(10, 10, 10, 0.08)' },
        '6': { a: 'rgba(197, 160, 89, 0.12)', b: 'rgba(197, 160, 89, 0.04)' }
    };

    function updateChapterColors(chapter) {
        if (chapter && chapterColors[chapter]) {
            const c = chapterColors[chapter];
            document.documentElement.style.setProperty('--diffuse-1-a', c.a);
            document.documentElement.style.setProperty('--diffuse-1-b', c.b);
        }
    }

    // ── Three.js ripple background ────────────────────────────
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    const canvas = renderer.domElement;
    canvas.id = 'ripple-canvas';
    Object.assign(canvas.style, {
        position: 'fixed', top: '0', left: '0',
        width: '100%', height: '100%',
        zIndex: '-1', pointerEvents: 'none'
    });
    document.body.appendChild(canvas);
    renderer.setSize(window.innerWidth, window.innerHeight);

    const vertexShader = `
        varying vec2 vUv;
        void main() { vUv = uv; gl_Position = vec4(position, 1.0); }
    `;
    const fragmentShader = `
        uniform vec2 uMouse;
        uniform float uTime;
        varying vec2 vUv;
        void main() {
            vec2 uv = vUv;
            vec2 dir = normalize(uv - vec2(0.5));
            float d = length(uv - uMouse);
            float wave = sin(d * 12.0 - uTime * 1.2) * 0.006;
            float mask = smoothstep(0.65, 0.0, d);
            uv += dir * wave * mask;
            vec3 color = vec3(0.04, 0.04, 0.055);
            float noise = fract(sin(dot(uv, vec2(12.9898, 78.233))) * 43758.5453);
            color += noise * 0.012;
            gl_FragColor = vec4(color, 1.0);
        }
    `;

    const material = new THREE.ShaderMaterial({
        uniforms: {
            uMouse: { value: new THREE.Vector2(0.5, 0.5) },
            uTime: { value: 0 }
        },
        vertexShader, fragmentShader, transparent: true
    });

    scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material));

    let mousePos = new THREE.Vector2(0.5, 0.5);
    window.addEventListener('mousemove', e => {
        mousePos.x = e.clientX / window.innerWidth;
        mousePos.y = 1.0 - e.clientY / window.innerHeight;
    });

    (function animate(t) {
        material.uniforms.uTime.value = t * 0.001;
        material.uniforms.uMouse.value.lerp(mousePos, 0.04);
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    })();

    window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // ── Cinematic Mirror stage pills ──────────────────────────
    const cmStageBtns = document.querySelectorAll('.cm-stage-btn');
    const cmCaptionEl = document.querySelector('.cm-caption');
    const cmGifOverlay = document.querySelector('.cm-gif-overlay');
    const cmStageCaptions = ['I · Cinematic Interview', 'II · Film Character Match', 'III · Live Director Mode'];

    cmStageBtns.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            cmStageBtns.forEach(el => el.classList.remove('active'));
            btn.classList.add('active');

            // Check if this stage has a GIF demo
            const gifSrc = btn.dataset.cmGif;
            if (gifSrc && cmGifOverlay) {
                cmGifOverlay.src = gifSrc;
                cmGifOverlay.style.display = 'block';
                requestAnimationFrame(() => requestAnimationFrame(() => {
                    cmGifOverlay.classList.add('visible');
                }));
            } else if (cmGifOverlay) {
                // No GIF — hide overlay, show live iframe
                cmGifOverlay.classList.remove('visible');
                setTimeout(() => { cmGifOverlay.style.display = 'none'; cmGifOverlay.src = ''; }, 350);
            }

            if (cmCaptionEl) {
                cmCaptionEl.style.opacity = '0';
                setTimeout(() => {
                    cmCaptionEl.textContent = cmStageCaptions[i];
                    cmCaptionEl.style.opacity = '1';
                }, 180);
            }
        });
    });

    // Home button — back to live iframe preview
    const cmHomeBtn = document.querySelector('.cm-home-btn');
    if (cmHomeBtn) {
        cmHomeBtn.addEventListener('click', () => {
            cmStageBtns.forEach(el => el.classList.remove('active'));
            if (cmGifOverlay) {
                cmGifOverlay.classList.remove('visible');
                setTimeout(() => { cmGifOverlay.style.display = 'none'; cmGifOverlay.src = ''; }, 350);
            }
            if (cmCaptionEl) {
                cmCaptionEl.style.opacity = '0';
                setTimeout(() => {
                    cmCaptionEl.textContent = 'Live preview — tap a stage to switch view';
                    cmCaptionEl.style.opacity = '1';
                }, 180);
            }
        });
    }

    // Init
    updateChapterColors('1');
    updateSidebar(0);
});
