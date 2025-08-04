/**
 * FOMUS PARURE - Premium Mobile UI/UX JavaScript
 * Enhanced mobile interactions and user experience
 */

class PremiumMobileUX {
    constructor() {
        this.init();
    }

    init() {
        this.setupEnhancedNavigation();
        this.setupTouchGestures();
        this.setupSmoothScrolling();
        this.setupProgressiveLoading();
        this.setupHapticFeedback();
        this.setupAccessibilityEnhancements();
        this.setupPerformanceOptimizations();
    }

    // Enhanced Mobile Navigation
    setupEnhancedNavigation() {
        const navToggle = document.getElementById('nav-toggle');
        const navMenu = document.querySelector('.nav__menu');
        const navLinks = document.querySelectorAll('.nav__link');

        if (!navToggle || !navMenu) return;

        // Enhanced hamburger animation
        navToggle.addEventListener('click', () => {
            const isActive = navToggle.classList.contains('active');
            
            if (isActive) {
                this.closeNavigation(navToggle, navMenu);
            } else {
                this.openNavigation(navToggle, navMenu);
            }
        });

        // Close navigation when clicking outside
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
                this.closeNavigation(navToggle, navMenu);
            }
        });

        // Close navigation when pressing Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navToggle.classList.contains('active')) {
                this.closeNavigation(navToggle, navMenu);
            }
        });

        // Enhanced link animations
        navLinks.forEach(link => {
            link.addEventListener('touchstart', this.handleTouchStart.bind(this));
            link.addEventListener('touchend', this.handleTouchEnd.bind(this));
        });
    }

    openNavigation(toggle, menu) {
        toggle.classList.add('active');
        menu.classList.add('active');
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = 'hidden';
        
        // Animate menu items
        const links = menu.querySelectorAll('.nav__link');
        links.forEach((link, index) => {
            link.style.animation = `fadeInSlideUp 0.5s ease forwards ${index * 0.1}s`;
        });

        // Add ARIA attributes
        toggle.setAttribute('aria-expanded', 'true');
        menu.setAttribute('aria-hidden', 'false');
    }

    closeNavigation(toggle, menu) {
        toggle.classList.remove('active');
        menu.classList.remove('active');
        
        // Restore body scroll
        document.body.style.overflow = '';
        
        // Remove animations
        const links = menu.querySelectorAll('.nav__link');
        links.forEach(link => {
            link.style.animation = '';
        });

        // Update ARIA attributes
        toggle.setAttribute('aria-expanded', 'false');
        menu.setAttribute('aria-hidden', 'true');
    }

    // Touch Gesture Enhancements
    setupTouchGestures() {
        let startY = 0;
        let currentY = 0;
        let rafId = null;

        // Pull-to-refresh simulation (visual feedback only)
        document.addEventListener('touchstart', (e) => {
            startY = e.touches[0].clientY;
        }, { passive: true });

        document.addEventListener('touchmove', (e) => {
            currentY = e.touches[0].clientY;
            const diff = currentY - startY;

            if (diff > 0 && window.scrollY === 0) {
                // Visual feedback for pull gesture
                if (rafId) cancelAnimationFrame(rafId);
                rafId = requestAnimationFrame(() => {
                    this.showPullFeedback(Math.min(diff / 3, 50));
                });
            }
        }, { passive: true });

        document.addEventListener('touchend', () => {
            if (rafId) {
                cancelAnimationFrame(rafId);
                rafId = null;
            }
            this.hidePullFeedback();
        }, { passive: true });

        // Swipe gestures for collection galleries
        this.setupSwipeGestures();
    }

    setupSwipeGestures() {
        const galleries = document.querySelectorAll('.collection-gallery');
        
        galleries.forEach(gallery => {
            let startX = 0;
            let scrollLeft = 0;

            gallery.addEventListener('touchstart', (e) => {
                startX = e.touches[0].pageX;
                scrollLeft = gallery.scrollLeft;
            }, { passive: true });

            gallery.addEventListener('touchmove', (e) => {
                if (!startX) return;
                
                const x = e.touches[0].pageX;
                const walk = (x - startX) * 2;
                gallery.scrollLeft = scrollLeft - walk;
            }, { passive: true });

            gallery.addEventListener('touchend', () => {
                startX = 0;
            }, { passive: true });
        });
    }

    showPullFeedback(offset) {
        let indicator = document.getElementById('pull-indicator');
        if (!indicator) {
            indicator = document.createElement('div');
            indicator.id = 'pull-indicator';
            indicator.textContent = '↓ Pull to refresh';
            indicator.style.cssText = `
                position: fixed;
                top: ${offset}px;
                left: 50%;
                transform: translateX(-50%);
                background: rgba(39, 174, 96, 0.9);
                color: white;
                padding: 8px 16px;
                border-radius: 20px;
                font-size: 14px;
                font-weight: 500;
                z-index: 1000;
                transition: all 0.3s ease;
                backdrop-filter: blur(10px);
            `;
            document.body.appendChild(indicator);
        } else {
            indicator.style.top = `${offset}px`;
            indicator.style.opacity = Math.min(offset / 50, 1);
        }
    }

    hidePullFeedback() {
        const indicator = document.getElementById('pull-indicator');
        if (indicator) {
            indicator.style.opacity = '0';
            setTimeout(() => {
                if (indicator.parentNode) {
                    indicator.parentNode.removeChild(indicator);
                }
            }, 300);
        }
    }

    // Smooth Scrolling Enhancement
    setupSmoothScrolling() {
        // Enhanced smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                
                if (target) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = target.offsetTop - headerHeight - 20;
                    
                    this.smoothScrollTo(targetPosition, 800);
                }
            });
        });

        // Parallax effect for hero sections (subtle on mobile)
        if (window.innerWidth <= 768) {
            this.setupParallaxEffect();
        }
    }

    smoothScrollTo(targetPosition, duration) {
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;

        const animation = (currentTime) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = this.easeInOutQuart(timeElapsed, startPosition, distance, duration);
            
            window.scrollTo(0, run);
            
            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        };

        requestAnimationFrame(animation);
    }

    easeInOutQuart(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t * t + b;
        t -= 2;
        return -c / 2 * (t * t * t * t - 2) + b;
    }

    setupParallaxEffect() {
        const heroImages = document.querySelectorAll('.hero__image-wrapper img');
        
        window.addEventListener('scroll', () => {
            if (window.innerWidth <= 768) {
                const scrolled = window.pageYOffset;
                const rate = scrolled * -0.2;
                
                heroImages.forEach(img => {
                    img.style.transform = `translateY(${rate}px)`;
                });
            }
        }, { passive: true });
    }

    // Progressive Loading
    setupProgressiveLoading() {
        // Intersection Observer for lazy loading
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    this.loadImage(img);
                    imageObserver.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px'
        });

        // Observe all images
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });

        // Progressive enhancement for cards
        this.setupCardAnimations();
    }

    loadImage(img) {
        img.style.filter = 'blur(10px)';
        
        const fullImg = new Image();
        fullImg.onload = () => {
            img.src = fullImg.src;
            img.style.filter = 'blur(0)';
            img.style.transition = 'filter 0.5s ease';
        };
        
        fullImg.src = img.dataset.src;
    }

    setupCardAnimations() {
        const cards = document.querySelectorAll('.feature, .product-card, .testimonial');
        
        const cardObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                    cardObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });

        cards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            cardObserver.observe(card);
        });
    }

    // Haptic Feedback Simulation
    setupHapticFeedback() {
        const interactiveElements = document.querySelectorAll(
            '.btn, .nav__link, .language-option, .collection-gallery__item'
        );

        interactiveElements.forEach(element => {
            element.addEventListener('touchstart', () => {
                // Visual haptic feedback
                element.style.transform = 'scale(0.98)';
                
                // Actual haptic feedback if supported
                if ('vibrate' in navigator) {
                    navigator.vibrate(10); // 10ms vibration
                }
            }, { passive: true });

            element.addEventListener('touchend', () => {
                element.style.transform = '';
            }, { passive: true });
        });
    }

    // Accessibility Enhancements
    setupAccessibilityEnhancements() {
        // Enhanced focus management
        this.setupFocusManagement();
        
        // Voice over announcements
        this.setupVoiceOverAnnouncements();
        
        // Reduced motion preferences
        this.respectReducedMotion();
    }

    setupFocusManagement() {
        // Skip to content link
        this.createSkipLink();
        
        // Focus trap for mobile menu
        this.setupFocusTrap();
    }

    createSkipLink() {
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.textContent = 'Skip to main content';
        skipLink.className = 'skip-link';
        skipLink.style.cssText = `
            position: absolute;
            top: -40px;
            left: 6px;
            background: #27ae60;
            color: white;
            padding: 8px;
            text-decoration: none;
            border-radius: 4px;
            z-index: 1000;
            transition: top 0.3s;
        `;
        
        skipLink.addEventListener('focus', () => {
            skipLink.style.top = '6px';
        });
        
        skipLink.addEventListener('blur', () => {
            skipLink.style.top = '-40px';
        });
        
        document.body.insertBefore(skipLink, document.body.firstChild);
    }

    setupFocusTrap() {
        const navMenu = document.querySelector('.nav__menu');
        if (!navMenu) return;

        const focusableElements = navMenu.querySelectorAll(
            'a, button, [tabindex]:not([tabindex="-1"])'
        );

        if (focusableElements.length === 0) return;

        const firstFocusable = focusableElements[0];
        const lastFocusable = focusableElements[focusableElements.length - 1];

        navMenu.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                if (e.shiftKey) {
                    if (document.activeElement === firstFocusable) {
                        e.preventDefault();
                        lastFocusable.focus();
                    }
                } else {
                    if (document.activeElement === lastFocusable) {
                        e.preventDefault();
                        firstFocusable.focus();
                    }
                }
            }
        });
    }

    setupVoiceOverAnnouncements() {
        // Create announcement container
        const announcer = document.createElement('div');
        announcer.setAttribute('aria-live', 'polite');
        announcer.setAttribute('aria-atomic', 'true');
        announcer.style.cssText = `
            position: absolute;
            left: -10000px;
            width: 1px;
            height: 1px;
            overflow: hidden;
        `;
        document.body.appendChild(announcer);

        // Announce page changes
        this.announcer = announcer;
    }

    announce(message) {
        if (this.announcer) {
            this.announcer.textContent = message;
        }
    }

    respectReducedMotion() {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            document.documentElement.classList.add('reduced-motion');
        }
    }

    // Performance Optimizations
    setupPerformanceOptimizations() {
        // Debounced scroll handler
        this.setupDebouncedScrollHandler();
        
        // Image optimization
        this.optimizeImages();
        
        // Memory cleanup
        this.setupMemoryCleanup();
    }

    setupDebouncedScrollHandler() {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    this.onScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
    }

    onScroll() {
        const scrollY = window.pageYOffset;
        
        // Header hide/show on scroll
        const header = document.querySelector('.header');
        if (header) {
            if (scrollY > 100) {
                header.classList.add('header--hidden');
            } else {
                header.classList.remove('header--hidden');
            }
        }

        // Progress indicator
        this.updateProgressIndicator();
    }

    updateProgressIndicator() {
        let progressBar = document.getElementById('scroll-progress');
        
        if (!progressBar) {
            progressBar = document.createElement('div');
            progressBar.id = 'scroll-progress';
            progressBar.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 0%;
                height: 3px;
                background: linear-gradient(90deg, #27ae60, #2ecc71);
                z-index: 1000;
                transition: width 0.1s ease;
            `;
            document.body.appendChild(progressBar);
        }

        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollProgress = (window.pageYOffset / scrollHeight) * 100;
        progressBar.style.width = `${Math.min(scrollProgress, 100)}%`;
    }

    optimizeImages() {
        // Convert regular img tags to lazy loading if not already set
        document.querySelectorAll('img:not([loading])').forEach(img => {
            img.loading = 'lazy';
            img.decoding = 'async';
        });
    }

    setupMemoryCleanup() {
        // Clean up event listeners when page is hidden
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.cleanupResources();
            }
        });

        // Cleanup on beforeunload
        window.addEventListener('beforeunload', () => {
            this.cleanupResources();
        });
    }

    cleanupResources() {
        // Cancel any pending animations
        if (this.rafId) {
            cancelAnimationFrame(this.rafId);
        }

        // Clear timeouts and intervals
        // (Add specific cleanup as needed)
    }

    // Touch event handlers
    handleTouchStart(e) {
        e.target.classList.add('touching');
    }

    handleTouchEnd(e) {
        e.target.classList.remove('touching');
    }
}

// CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInSlideUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .touching {
        transform: scale(0.98) !important;
        transition: transform 0.1s ease !important;
    }

    .header--hidden {
        transform: translateY(-100%);
        transition: transform 0.3s ease;
    }

    .reduced-motion * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }

    .skip-link:focus {
        top: 6px !important;
    }
`;
document.head.appendChild(style);

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new PremiumMobileUX();
    });
} else {
    new PremiumMobileUX();
}

// Export for potential external use
window.PremiumMobileUX = PremiumMobileUX;