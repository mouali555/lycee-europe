/**
 * Lycée de l'Europe - Reusable Components & Cookie Banner
 * Luxury black & gold theme with glassmorphism
 */

// ===========================
// COOKIE CONSENT BANNER
// ===========================

function initCookieBanner() {
    // Check if user already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    
    if (cookieConsent) {
        return; // User already made a choice, don't show banner
    }

    // Create cookie banner
    const banner = document.createElement('div');
    banner.id = 'cookie-banner';
    banner.className = 'cookie-banner';
    banner.innerHTML = `
        <div class="cookie-content">
            <div class="cookie-icon">
                <i class="fas fa-cookie-bite"></i>
            </div>
            <div class="cookie-text">
                <h3>🍪 Respect de Votre Vie Privée</h3>
                <p>
                    Nous utilisons des cookies pour améliorer votre expérience de navigation, 
                    mémoriser vos préférences et analyser notre trafic. 
                    En acceptant, vous consentez à l'utilisation de tous les cookies.
                </p>
            </div>
            <div class="cookie-actions">
                <button class="cookie-btn cookie-accept" onclick="acceptCookies()">
                    <i class="fas fa-check"></i> Accepter
                </button>
                <button class="cookie-btn cookie-refuse" onclick="refuseCookies()">
                    <i class="fas fa-times"></i> Refuser
                </button>
                <button class="cookie-btn cookie-customize" onclick="customizeCookies()">
                    <i class="fas fa-cog"></i> Personnaliser
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(banner);
    
    // Trigger slide-up animation
    setTimeout(() => {
        banner.classList.add('show');
    }, 500);
}

function acceptCookies() {
    localStorage.setItem('cookieConsent', 'accepted');
    hideCookieBanner();
}

function refuseCookies() {
    localStorage.setItem('cookieConsent', 'refused');
    hideCookieBanner();
}

function customizeCookies() {
    // Simple implementation - for demo purposes
    // In production, this would open a detailed preferences modal
    const essentialOnly = confirm(
        'Souhaitez-vous autoriser uniquement les cookies essentiels ?\n\n' +
        'Cookies essentiels : Requis pour le bon fonctionnement du site\n' +
        'Cookies analytics : Nous aident à améliorer le site\n\n' +
        'Cliquez "OK" pour essentiels uniquement, "Annuler" pour tous les cookies'
    );
    
    if (essentialOnly) {
        localStorage.setItem('cookieConsent', 'essential');
    } else {
        localStorage.setItem('cookieConsent', 'accepted');
    }
    hideCookieBanner();
}

function hideCookieBanner() {
    const banner = document.getElementById('cookie-banner');
    if (banner) {
        banner.classList.remove('show');
        setTimeout(() => {
            banner.remove();
        }, 400);
    }
}

// ===========================
// MOBILE NAVIGATION
// ===========================

function initMobileNavigation() {
    // Always create hamburger menu, CSS will control visibility
    const header = document.querySelector('header');
    if (!header) return;

    // Check if hamburger already exists
    let hamburger = header.querySelector('.hamburger-menu');
    
    if (!hamburger) {
        // Find the first aside with navigation
        const aside = document.querySelector('aside');
        if (!aside) return;

        // Create hamburger menu button
        hamburger = document.createElement('button');
        hamburger.className = 'hamburger-menu';
        hamburger.setAttribute('aria-label', 'Toggle menu');
        hamburger.innerHTML = `
            <span></span>
            <span></span>
            <span></span>
        `;

        // Insert hamburger in header
        header.appendChild(hamburger);

        // Create mobile overlay if not exists
        let overlay = document.querySelector('.mobile-nav-overlay');
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.className = 'mobile-nav-overlay';
            document.body.appendChild(overlay);
        }

        // Toggle navigation
        hamburger.addEventListener('click', () => {
            aside.classList.toggle('mobile-nav-open');
            hamburger.classList.toggle('active');
            overlay.classList.toggle('show');
            document.body.classList.toggle('nav-open');
        });

        // Close on overlay click
        overlay.addEventListener('click', () => {
            aside.classList.remove('mobile-nav-open');
            hamburger.classList.remove('active');
            overlay.classList.remove('show');
            document.body.classList.remove('nav-open');
        });

        // Handle window resize
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                if (window.innerWidth >= 768) {
                    aside.classList.remove('mobile-nav-open');
                    hamburger.classList.remove('active');
                    overlay.classList.remove('show');
                    document.body.classList.remove('nav-open');
                }
            }, 250);
        });
    }
}

// ===========================
// SCROLL ANIMATIONS
// ===========================

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all cards
    document.querySelectorAll('.card').forEach(card => {
        card.classList.add('animate-on-scroll');
        observer.observe(card);
    });

    // Observe menu boxes
    document.querySelectorAll('.menu-box').forEach(box => {
        box.classList.add('animate-on-scroll');
        observer.observe(box);
    });
    
    // Observe fade-in-scroll elements
    document.querySelectorAll('.fade-in-scroll').forEach(el => {
        observer.observe(el);
        // Add 'visible' class when intersecting
        const fadeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    fadeObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);
        fadeObserver.observe(el);
    });
    
    // Observe slide animations
    document.querySelectorAll('.slide-in-left, .slide-in-right').forEach(el => {
        const slideObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    slideObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);
        slideObserver.observe(el);
    });
}

// ===========================
// IMAGE LAZY LOADING ENHANCEMENT
// ===========================

function enhanceImages() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    // Use Intersection Observer for better lazy loading
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.addEventListener('load', () => {
                        img.classList.add('loaded');
                    });
                    
                    // If already loaded
                    if (img.complete) {
                        img.classList.add('loaded');
                    }
                    
                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px 0px',
            threshold: 0.01
        });
        
        images.forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // Fallback for browsers without Intersection Observer
        images.forEach(img => {
            img.addEventListener('load', () => {
                img.classList.add('loaded');
            });
            
            // If already loaded
            if (img.complete) {
                img.classList.add('loaded');
            }
        });
    }
}

// ===========================
// THEME TOGGLE (if not already in page)
// ===========================

function initThemeToggle() {
    // Only init if not already defined
    if (typeof window.toggleTheme !== 'function') {
        window.toggleTheme = function() {
            const body = document.body;
            const themeIcon = document.getElementById('theme-icon');
            const themeButton = document.querySelector('.theme-toggle');
            body.classList.toggle('light-mode');
            
            if (body.classList.contains('light-mode')) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
                themeButton.setAttribute('aria-pressed', 'true');
                themeButton.setAttribute('aria-label', 'Passer au mode sombre');
                localStorage.setItem('theme', 'light');
            } else {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
                themeButton.setAttribute('aria-pressed', 'false');
                themeButton.setAttribute('aria-label', 'Passer au mode clair');
                localStorage.setItem('theme', 'dark');
            }
        };
    }

    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    const themeIcon = document.getElementById('theme-icon');
    const themeButton = document.querySelector('.theme-toggle');
    
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        if (themeIcon) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
        if (themeButton) {
            themeButton.setAttribute('aria-pressed', 'true');
            themeButton.setAttribute('aria-label', 'Passer au mode sombre');
        }
    } else if (themeButton) {
        themeButton.setAttribute('aria-label', 'Passer au mode clair');
    }
}

// ===========================
// LOADING ANIMATION
// ===========================

function showLoadingAnimation() {
    const loader = document.createElement('div');
    loader.className = 'page-loader';
    loader.innerHTML = `
        <div class="loader-content">
            <div class="loader-spinner"></div>
            <div class="loader-text">Lycée de l'Europe</div>
        </div>
    `;
    document.body.appendChild(loader);

    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.classList.add('fade-out');
            setTimeout(() => {
                loader.remove();
            }, 600);
        }, 300);
    });
}

// ===========================
// INITIALIZE ALL COMPONENTS
// ===========================

// Scroll to top button
function initScrollToTop() {
    // Create scroll to top button
    const scrollBtn = document.createElement('button');
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up" aria-hidden="true"></i>';
    scrollBtn.setAttribute('aria-label', 'Retour en haut de la page');
    document.body.appendChild(scrollBtn);
    
    // Show/hide on scroll
    let lastScrollPosition = 0;
    let ticking = false;
    
    window.addEventListener('scroll', () => {
        lastScrollPosition = window.scrollY;
        
        if (!ticking) {
            window.requestAnimationFrame(() => {
                if (lastScrollPosition > 300) {
                    scrollBtn.classList.add('visible');
                } else {
                    scrollBtn.classList.remove('visible');
                }
                ticking = false;
            });
            ticking = true;
        }
    });
    
    // Smooth scroll to top
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Performance monitoring
function logPerformanceMetrics() {
    if ('performance' in window && 'PerformanceObserver' in window) {
        // Log navigation timing
        window.addEventListener('load', () => {
            setTimeout(() => {
                const perfData = performance.getEntriesByType('navigation')[0];
                if (perfData) {
                    console.log('🚀 Performance Metrics:');
                    console.log(`  - DOM Content Loaded: ${Math.round(perfData.domContentLoadedEventEnd - perfData.fetchStart)}ms`);
                    console.log(`  - Page Load Time: ${Math.round(perfData.loadEventEnd - perfData.fetchStart)}ms`);
                    console.log(`  - DNS Lookup: ${Math.round(perfData.domainLookupEnd - perfData.domainLookupStart)}ms`);
                }
            }, 0);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Show loading animation
    showLoadingAnimation();
    
    // Initialize cookie banner
    initCookieBanner();
    
    // Initialize mobile navigation
    initMobileNavigation();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Enhance images
    enhanceImages();
    
    // Initialize theme toggle
    initThemeToggle();
    
    // Initialize scroll to top button
    initScrollToTop();
    
    // Log performance metrics (dev mode)
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        logPerformanceMetrics();
    }
});

// Export functions for use in HTML pages
window.acceptCookies = acceptCookies;
window.refuseCookies = refuseCookies;
window.customizeCookies = customizeCookies;
