// 工具函数：判断是否为YouTube iframe
function isYouTubeIframe(iframe) {
    const src = (iframe?.src || '').toLowerCase();
    return src.includes('youtube.com') || src.includes('youtu.be');
}

// 彻底销毁iframe节点，杜绝幽灵声音
function destroyIframe(iframe) {
    if (!iframe) return;
    try {
        // YouTube 先尝试真暂停
        if (isYouTubeIframe(iframe)) {
            iframe.contentWindow?.postMessage(
                JSON.stringify({ event: 'command', func: 'pauseVideo', args: '' }),
                '*'
            );
        }
    } catch (_) {}
    // 直接移除节点，彻底杀掉声音
    iframe.remove();
}

// 确保每个video-item只有一个媒体实例
function ensureOnlyOneMediaPerItem(videoItem) {
    const vids = videoItem.querySelectorAll('video');
    const ifr = videoItem.querySelectorAll('iframe');
    // 保留"最后一个"实例，其余全部移除，避免堆积多个播放器
    vids.forEach((v, i) => { if (i < vids.length - 1) v.remove(); });
    ifr.forEach((f, i) => { if (i < ifr.length - 1) f.remove(); });
}

// 全局"只保留一个播放源"的管理
function pauseOthersExcept(currentItem) {
    document.querySelectorAll('.video-item').forEach(item => {
        if (item === currentItem) return;
        const v = item.querySelector('video');
        const f = item.querySelector('iframe');
        if (v && !v.paused) { v.pause(); v.muted = true; }
        if (f) destroyIframe(f); // 统一销毁 iframe（包括 YT，稍后可重建）
        item.classList.remove('playing');
    });
}

// 节流函数 - 优化滚动性能
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// 防抖函数 - 优化事件处理
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 简化的视频播放函数
function playVideo(video, videoItem) {
    // 先停掉其它所有
    pauseOthersExcept(videoItem);
    ensureOnlyOneMediaPerItem(videoItem);
    
    // Check if video is already loaded
    const existingVideo = videoItem.querySelector('video');
    const existingIframe = videoItem.querySelector('iframe');
    
    if (existingVideo) {
        // 恢复播放位置
        const savedTime = localStorage.getItem(`video_${video.id}_time`);
        if (savedTime && parseFloat(savedTime) > 0) {
            existingVideo.currentTime = parseFloat(savedTime);
        }
        existingVideo.style.display = 'block';
        existingVideo.play().catch(e => console.log('视频播放失败:', e));
        existingVideo.muted = false;
        return;
    }
    
    if (existingIframe) {
        destroyIframe(existingIframe);
    }
    
    // Hide thumbnail and show video container
    const thumbnail = videoItem.querySelector('.video-thumbnail');
    const videoContainer = videoItem.querySelector('.video-container');
    
    // Create video element or iframe
    if (video.videoUrl.includes('youtube.com') || video.videoUrl.includes('youtu.be')) {
        createYouTubeIframe(video, videoContainer);
    } else if (video.videoUrl.includes('bilibili.com')) {
        createBilibiliIframe(video, videoContainer);
    } else {
        createDirectVideo(video, videoContainer);
    }
    
    // Show video container
    if (thumbnail) thumbnail.style.display = 'none';
    if (videoContainer) videoContainer.style.display = 'block';
    
    // Mark as playing
    videoItem.classList.add('playing');
}

// 创建YouTube iframe
function createYouTubeIframe(video, videoContainer) {
    let videoId = '';
    if (video.videoUrl.includes('youtu.be/')) {
        videoId = video.videoUrl.split('youtu.be/')[1].split('?')[0];
    } else if (video.videoUrl.includes('youtube.com/watch?v=')) {
        videoId = video.videoUrl.split('v=')[1].split('&')[0];
    }
    
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${videoId}?enablejsapi=1&autoplay=1&mute=0&loop=1&playlist=${videoId}&controls=1&rel=0&modestbranding=1&origin=${window.location.origin}`;
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    iframe.allow = 'autoplay; encrypted-media';
    iframe.loading = 'lazy';
    
    videoContainer.appendChild(iframe);
}

// 创建Bilibili iframe
function createBilibiliIframe(video, videoContainer) {
    let bvId = '';
    if (video.videoUrl.includes('/video/')) {
        bvId = video.videoUrl.split('/video/')[1].split('/')[0].split('?')[0];
    }
    
    const iframe = document.createElement('iframe');
    iframe.src = `//player.bilibili.com/player.html?bvid=${bvId}&page=1&autoplay=1&as_wide=1&high_quality=1&danmaku=0`;
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    iframe.allow = 'autoplay; encrypted-media';
    iframe.allowFullscreen = true;
    iframe.scrolling = 'no';
    iframe.frameBorder = 'no';
    iframe.loading = 'lazy';
    
    videoContainer.appendChild(iframe);
}

// 创建直接视频元素
function createDirectVideo(video, videoContainer) {
    const videoElement = document.createElement('video');
    videoElement.src = video.videoUrl;
    videoElement.autoplay = true;
    videoElement.muted = true;
    videoElement.loop = true;
    videoElement.playsInline = true;
    videoElement.controls = true;
    videoElement.preload = 'auto';
    videoElement.style.width = '100%';
    videoElement.style.height = '100%';
    videoElement.style.objectFit = 'contain';
    
    // 添加事件监听
    videoElement.addEventListener('canplay', function() {
        const savedTime = sessionStorage.getItem(`video_${video.id}_time`);
        if (savedTime && parseFloat(savedTime) > 0) {
            videoElement.currentTime = parseFloat(savedTime);
        }
    });
    
    videoElement.addEventListener('ended', function() {
        sessionStorage.removeItem(`video_${video.id}_time`);
    });
    
    // 定期保存播放位置
    let saveInterval;
    videoElement.addEventListener('play', function() {
        saveInterval = setInterval(() => {
            if (!videoElement.paused) {
                sessionStorage.setItem(`video_${video.id}_time`, videoElement.currentTime);
            }
        }, 5000);
    });
    
    videoElement.addEventListener('pause', function() {
        if (saveInterval) {
            clearInterval(saveInterval);
        }
    });
    
    // 错误处理
    videoElement.onerror = function() {
        showVideoError(videoContainer, video.videoUrl);
    };
    
    videoContainer.appendChild(videoElement);
}

// 显示视频错误信息
function showVideoError(videoContainer, videoUrl) {
    const errorDiv = document.createElement('div');
    errorDiv.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: center; height: 100%; background: rgba(0,0,0,0.8); color: #ffffff;">
            <div style="text-align: center;">
                <p>视频加载失败</p>
                <p style="font-size: 12px; margin-top: 10px;">请检查链接是否有效或网络连接</p>
                <a href="${videoUrl}" target="_blank" style="color: #a67c52; text-decoration: none; margin-top: 10px; display: inline-block;">在新窗口中打开</a>
            </div>
        </div>
    `;
    videoContainer.appendChild(errorDiv);
}

// 暂停所有视频
function pauseAllVideos() {
    const allVideoItems = document.querySelectorAll('.video-item');
    allVideoItems.forEach(videoItem => {
        const video = videoItem.querySelector('video');
        const iframe = videoItem.querySelector('iframe');
        
        if (video && !video.paused) {
            video.pause();
            video.muted = true;
        }
        
        if (iframe) {
            destroyIframe(iframe);
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // Navigation menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
    
    // Navigation link click events
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
            
            if (window.innerWidth <= 768) {
                nav.classList.remove('active');
            }
        });
    });
    
    // 使用节流优化滚动事件
    const throttledScrollHandler = throttle(function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
            header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.5)';
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
        } else {
            header.style.padding = '20px 0';
            header.style.boxShadow = 'none';
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        }
        
        updateActiveNavLink();
    }, 16); // 约60fps
    
    window.addEventListener('scroll', throttledScrollHandler);
    
    // Update active state of navigation links based on scroll position
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section');
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }
    
    // Load video data with scroll-based playback
    const videoGrid = document.querySelector('.video-grid');
    
    // Create category headers and videos
    const categories = ['AIGC Works', 'Filming Works'];
    let allVideos = [];
    
    // Collect all videos with category info
    categories.forEach(category => {
        const categoryVideos = videosData.filter(video => video.category === category);
        allVideos = allVideos.concat(categoryVideos.map(video => ({...video, categoryName: category})));
    });
    
    // Create video items only if they don't exist
    allVideos.forEach((video, index) => {
        const existingVideoItem = videoGrid.querySelector(`[data-id="${video.id}"]`);
        if (existingVideoItem) {
            return;
        }
        
        // Add category header before first video of each category
        if (index === 0 || video.categoryName !== allVideos[index - 1].categoryName) {
            const existingHeader = Array.from(videoGrid.children).find(child => 
                child.className === 'category-header' && 
                child.textContent.includes(video.categoryName)
            );
            if (!existingHeader) {
                const categoryHeader = document.createElement('div');
                categoryHeader.className = 'category-header';
                
                let categoryDisplayName = video.categoryName;
                if (video.categoryName === 'AIGC Works') {
                    categoryDisplayName = 'AIGC作品 / AIGC Works';
                } else if (video.categoryName === 'Filming Works') {
                    categoryDisplayName = '影视作品 / Filming Works';
                }
                
                categoryHeader.innerHTML = `<h2>${categoryDisplayName}</h2>`;
                videoGrid.appendChild(categoryHeader);
            }
        }
        
        const videoItem = document.createElement('div');
        videoItem.className = 'video-item';
        videoItem.setAttribute('data-id', video.id);
        videoItem.setAttribute('data-category', video.category);
        
        videoItem.innerHTML = `
            <div class="video-thumbnail">
                <img src="${video.thumbnail}" alt="${video.title}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div class="play-button">
                    <i class="fas fa-play"></i>
                </div>
            </div>
            <div class="video-container">
                <!-- Video will be loaded here -->
            </div>
            <div class="video-info-overlay">
                <h3>${video.title}</h3>
                <p>${video.description}</p>
                <div class="video-meta">
                    <span><i class="far fa-calendar-alt"></i> ${video.date}</span>
                    <span><i class="far fa-clock"></i> ${video.duration}</span>
                    <span><i class="far fa-eye"></i> ${video.views}</span>
                </div>
            </div>
        `;
        
        videoGrid.appendChild(videoItem);
        
        // Add click event for play button
        const playButton = videoItem.querySelector('.play-button');
        playButton.addEventListener('click', function(e) {
            e.stopPropagation();
            playVideo(video, videoItem);
        });
        
        // Add click event for thumbnail
        const thumbnail = videoItem.querySelector('.video-thumbnail');
        thumbnail.addEventListener('click', function() {
            playVideo(video, videoItem);
        });
    });
    
    // Setup scroll-based video playback
    setupScrollPlayback();
    
    // Load photo data with categories
    const photoGrid = document.querySelector('.photo-grid');
    
    // Clear existing content
    photoGrid.innerHTML = '';
    
    // Get unique categories
    const photoCategories = [...new Set(photosData.map(photo => photo.category))];
    
    // Process each category
    photoCategories.forEach(category => {
        const categoryHeader = document.createElement('div');
        categoryHeader.className = 'category-header';
        
        let categoryDisplayName = category;
        if (category === 'AIGC海报') {
            categoryDisplayName = 'AIGC海报 / AIGC Posters';
        } else if (category === '风景摄影') {
            categoryDisplayName = '风景摄影 / Landscape Photography';
        } else if (category === 'AI换脸') {
            categoryDisplayName = 'AI换脸 / AI Face Swap';
        } else if (category === 'LoRA训练') {
            categoryDisplayName = 'LoRA训练 / LoRA Training';
        }
        
        categoryHeader.innerHTML = `<h2>${categoryDisplayName}</h2>`;
        photoGrid.appendChild(categoryHeader);
        
        const filteredPhotos = photosData.filter(photo => photo.category === category);
        
        const photosByFolder = {};
        filteredPhotos.forEach(photo => {
            const pathParts = photo.image.split('/');
            const folderPath = pathParts.slice(0, -1).join('/');
            
            if (!photosByFolder[folderPath]) {
                photosByFolder[folderPath] = [];
            }
            photosByFolder[folderPath].push(photo);
        });
        
        Object.keys(photosByFolder).forEach(folderPath => {
            const pathParts = folderPath.split('/');
            const folderName = pathParts[pathParts.length - 1];
            
            if (folderName && folderName !== category && category !== '风景摄影' && category !== 'LoRA训练') {
                const subfolderHeader = document.createElement('div');
                subfolderHeader.className = 'subfolder-header';
                
                let displayName = folderName;
                if (folderName === '清华') {
                    displayName = '清华 / Tsinghua';
                } else if (folderName === '小倩') {
                    displayName = '小倩 / Xiaoqian';
                }
                
                subfolderHeader.innerHTML = `<h3>${displayName}</h3>`;
                photoGrid.appendChild(subfolderHeader);
            }
            
            const categoryPhotos = document.createElement('div');
            categoryPhotos.className = 'category-photos';
            photoGrid.appendChild(categoryPhotos);
            
            photosByFolder[folderPath].forEach(photo => {
                const photoItem = document.createElement('div');
                photoItem.className = 'photo-item animate-ready';
                photoItem.setAttribute('data-id', photo.id);
                photoItem.setAttribute('data-category', photo.category);
                
                const img = document.createElement('img');
                img.src = photo.image;
                img.alt = photo.title;
                img.onerror = function() {
                    this.style.display = 'none';
                    this.parentElement.innerHTML = '<div style="display: flex; align-items: center; justify-content: center; height: 100%; color: #666;">图片加载失败</div>';
                };
                
                img.onload = function() {
                    if (photo.category === 'AIGC海报') {
                        photoItem.classList.add('aigc-poster');
                    } else if (photo.category === '风景摄影') {
                        photoItem.classList.add('landscape-photo');
                        if (photo.image.includes('/竖/')) {
                            photoItem.classList.add('vertical-landscape');
                        }
                    } else if (photo.category === 'LoRA训练') {
                        photoItem.classList.add('lora-training');
                    }
                    
                    if (this.naturalWidth > this.naturalHeight) {
                        photoItem.classList.add('landscape');
                    } else {
                        photoItem.classList.add('portrait');
                    }
                };
                
                photoItem.appendChild(img);
                categoryPhotos.appendChild(photoItem);
                
                photoItem.addEventListener('click', function() {
                    openPhotoModal(photo);
                });
            });
        });
    });
    
    // Setup photo animations after all photos are loaded
    setupPhotoAnimations();
    
    // Function to setup scroll-based playback
    function setupScrollPlayback() {
        const videosSection = document.getElementById('videos');
        let currentPlayingItem = null;
        
        // Intersection Observer for auto-play on scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const element = entry.target;
                
                if (element.classList.contains('category-header')) {
                    return;
                }
                
                const videoItem = element;
                
                if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
                    if (currentPlayingItem && currentPlayingItem !== videoItem) {
                        const prevVideo = currentPlayingItem.querySelector('video');
                        const prevIframe = currentPlayingItem.querySelector('iframe');
                        if (prevVideo) {
                            prevVideo.pause();
                            prevVideo.muted = true;
                        }
                        if (prevIframe) {
                            destroyIframe(prevIframe);
                        }
                        currentPlayingItem.classList.remove('playing');
                    }
                    
                    setTimeout(() => {
                        const videoId = videoItem.getAttribute('data-id');
                        const videoData = videosData.find(v => v.id === parseInt(videoId));
                        if (videoData && entry.isIntersecting) {
                            playVideo(videoData, videoItem);
                            const currentVideo = videoItem.querySelector('video');
                            if (currentVideo) {
                                currentVideo.muted = false;
                            }
                            currentPlayingItem = videoItem;
                        }
                    }, 100);
                    
                } else if (entry.intersectionRatio < 0.2) {
                    const video = videoItem.querySelector('video');
                    const iframe = videoItem.querySelector('iframe');
                    if (video) {
                        video.pause();
                        video.muted = true;
                        const videoId = videoItem.getAttribute('data-id');
                        if (videoId) {
                            localStorage.setItem(`video_${videoId}_time`, video.currentTime);
                        }
                    }
                    if (iframe) {
                        destroyIframe(iframe);
                    }
                    if (currentPlayingItem === videoItem) {
                        videoItem.classList.remove('playing');
                        currentPlayingItem = null;
                    }
                }
            });
        }, {
            threshold: [0.3, 0.6, 0.9],
            rootMargin: '-10% 0px -10% 0px'
        });
        
        const videoItems = document.querySelectorAll('.video-item');
        videoItems.forEach(item => {
            observer.observe(item);
        });
        
        // Keyboard controls
        document.addEventListener('keydown', function(e) {
            if (currentPlayingItem) {
                const video = currentPlayingItem.querySelector('video');
                switch(e.key) {
                    case ' ':
                        e.preventDefault();
                        if (video) {
                            if (video.paused) {
                                video.play();
                            } else {
                                video.pause();
                            }
                        }
                        break;
                    case 'ArrowUp':
                        e.preventDefault();
                        scrollToVideo('prev');
                        break;
                    case 'ArrowDown':
                        e.preventDefault();
                        scrollToVideo('next');
                        break;
                    case 'm':
                    case 'M':
                        e.preventDefault();
                        if (video) {
                            video.muted = !video.muted;
                        }
                        break;
                }
            }
        });
        
        // Touch/swipe controls for mobile
        let startY = 0;
        let startTime = 0;
        
        videosSection.addEventListener('touchstart', function(e) {
            startY = e.touches[0].clientY;
            startTime = Date.now();
        });
        
        videosSection.addEventListener('touchend', function(e) {
            const endY = e.changedTouches[0].clientY;
            const endTime = Date.now();
            const deltaY = startY - endY;
            const deltaTime = endTime - startTime;
            
            if (Math.abs(deltaY) > 50 && deltaTime < 300) {
                if (deltaY > 0) {
                    scrollToVideo('next');
                } else {
                    scrollToVideo('prev');
                }
            }
        });
    }
    
    // Function to scroll to next/previous video
    function scrollToVideo(direction) {
        const allElements = Array.from(document.querySelectorAll('.video-item, .category-header'));
        
        let currentIndex = -1;
        const windowCenter = window.innerHeight / 2;
        
        allElements.forEach((item, index) => {
            const itemRect = item.getBoundingClientRect();
            const itemCenter = itemRect.top + itemRect.height / 2;
            
            if (Math.abs(itemCenter - windowCenter) < window.innerHeight / 3) {
                currentIndex = index;
            }
        });
        
        let targetIndex;
        if (direction === 'next') {
            targetIndex = currentIndex + 1;
            if (targetIndex >= allElements.length) {
                targetIndex = 0;
            }
        } else {
            targetIndex = currentIndex - 1;
            if (targetIndex < 0) {
                targetIndex = allElements.length - 1;
            }
        }
        
        const targetItem = allElements[targetIndex];
        if (targetItem) {
            const targetPosition = targetItem.offsetTop - 100;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }
    
    // Photo modal
    const photoModal = document.getElementById('photo-modal');
    const photoModalClose = photoModal.querySelector('.close-modal');
    const modalPhoto = document.getElementById('modal-photo');
    const modalPhotoTitle = document.getElementById('modal-photo-title');
    const modalPhotoDescription = document.getElementById('modal-photo-description');
    
    function openPhotoModal(photo) {
        modalPhoto.src = photo.image;
        modalPhoto.alt = photo.title;
        modalPhotoTitle.textContent = photo.title;
        modalPhotoDescription.textContent = photo.description;
        photoModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    
    photoModalClose.addEventListener('click', function() {
        closePhotoModal();
    });
    
    function closePhotoModal() {
        photoModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === photoModal) {
            closePhotoModal();
        }
    });
    
    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            if (name && email && subject && message) {
                alert('消息已发送！我们会尽快回复您。');
                contactForm.reset();
            } else {
                alert('请填写所有必填字段。');
            }
        });
    }
    
    // Update active state of navigation links on page initialization
    updateActiveNavLink();
    
    // Setup photo scroll animations function
    function setupPhotoAnimations() {
        const photoItems = document.querySelectorAll('.photo-item');
        photoItems.forEach(item => {
            item.classList.add('animate-ready');
        });
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('animate-ready');
                    entry.target.classList.add('animate-in');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        photoItems.forEach(item => {
            observer.observe(item);
        });
    }
    
    // Add global event listeners to pause videos when user leaves page
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            pauseAllVideos();
        }
    });
    
    // Add escape key to pause all videos
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            pauseAllVideos();
        }
    });
});