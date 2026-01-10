/**
 * Lycée de l'Europe - Modern Professional Components
 * Educational Theme 2026
 */

// ===========================
// INITIALIZATION
// ===========================

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initScrollAnimations();
    initCounters();
    initStickyHeader();
    initSmoothScroll();
    initLazyLoading();
    initCookieBanner();
});

// ===========================
// THEME TOGGLE (DARK/LIGHT MODE)
// ===========================

function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.body.classList.add('dark-mode');
        updateThemeIcon('dark');
    }
}

function toggleTheme() {
    const body = document.body;
    const isDark = body.classList.toggle('dark-mode');
    
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeIcon(isDark ? 'dark' : 'light');
    
    // Smooth transition
    body.style.transition = 'background 0.3s ease, color 0.3s ease';
    setTimeout(() => {
        body.style.transition = '';
    }, 300);
}

function updateThemeIcon(theme) {
    const themeIcon = document.getElementById('theme-icon');
    if (!themeIcon) return;
    
    if (theme === 'dark') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
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
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all elements with animate-on-scroll class
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
    
    // Observe cards for stagger animation
    document.querySelectorAll('.card').forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
}

// ===========================
// ANIMATED COUNTERS
// ===========================

function initCounters() {
    const counters = document.querySelectorAll('.counter, .stat-number[data-target]');
    
    if (counters.length === 0) return;
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                animateCounter(entry.target, target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const duration = 2000; // 2 seconds
    const stepTime = duration / 50;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, stepTime);
}

// ===========================
// STICKY HEADER
// ===========================

function initStickyHeader() {
    const header = document.querySelector('header');
    if (!header) return;
    
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Add scrolled class when scrolled down
        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
}

// ===========================
// SMOOTH SCROLL
// ===========================

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip empty anchors
            if (href === '#' || href === '#!') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ===========================
// LAZY LOADING IMAGES
// ===========================

function initLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// ===========================
// COOKIE CONSENT BANNER
// ===========================

function initCookieBanner() {
    const cookieConsent = localStorage.getItem('cookieConsent');
    
    if (cookieConsent) return;
    
    // Create cookie banner with modern styling
    const banner = document.createElement('div');
    banner.id = 'cookie-banner';
    banner.style.cssText = `
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background: white;
        padding: 1.5rem;
        box-shadow: 0 -4px 6px -1px rgba(0, 0, 0, 0.1);
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        flex-wrap: wrap;
        transform: translateY(100%);
        transition: transform 0.3s ease;
    `;
    
    banner.innerHTML = `
        <div style="flex: 1; min-width: 300px;">
            <p style="margin: 0; color: #1f2937; font-size: 0.95rem;">
                🍪 Nous utilisons des cookies pour améliorer votre expérience. 
                En continuant, vous acceptez notre utilisation des cookies.
            </p>
        </div>
        <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
            <button onclick="acceptCookies()" style="
                background: #1e3a5f;
                color: white;
                border: none;
                padding: 0.75rem 1.5rem;
                border-radius: 8px;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.2s;
            ">
                Accepter
            </button>
            <button onclick="refuseCookies()" style="
                background: #e5e7eb;
                color: #1f2937;
                border: none;
                padding: 0.75rem 1.5rem;
                border-radius: 8px;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.2s;
            ">
                Refuser
            </button>
        </div>
    `;
    
    document.body.appendChild(banner);
    
    // Show banner with animation
    setTimeout(() => {
        banner.style.transform = 'translateY(0)';
    }, 500);
    
    // Apply dark mode styles if active
    if (document.body.classList.contains('dark-mode')) {
        banner.style.background = '#1f2937';
        banner.style.color = '#f9fafb';
    }
}

function acceptCookies() {
    localStorage.setItem('cookieConsent', 'accepted');
    hideCookieBanner();
}

function refuseCookies() {
    localStorage.setItem('cookieConsent', 'refused');
    hideCookieBanner();
}

function hideCookieBanner() {
    const banner = document.getElementById('cookie-banner');
    if (banner) {
        banner.style.transform = 'translateY(100%)';
        setTimeout(() => banner.remove(), 300);
    }
}

// ===========================
// MOBILE NAVIGATION
// ===========================

function initMobileNavigation() {
    const header = document.querySelector('header');
    const aside = document.querySelector('aside');
    
    if (!header || !aside) return;
    
    // Create hamburger menu if not exists
    let hamburger = header.querySelector('.hamburger-menu');
    if (!hamburger) {
        hamburger = document.createElement('button');
        hamburger.className = 'hamburger-menu';
        hamburger.setAttribute('aria-label', 'Menu');
        hamburger.style.cssText = `
            display: none;
            background: none;
            border: none;
            cursor: pointer;
            padding: 0.5rem;
        `;
        hamburger.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
        `;
        header.appendChild(hamburger);
        
        // Show on mobile
        const mediaQuery = window.matchMedia('(max-width: 1024px)');
        const handleMediaChange = (e) => {
            hamburger.style.display = e.matches ? 'block' : 'none';
        };
        mediaQuery.addListener(handleMediaChange);
        handleMediaChange(mediaQuery);
    }
}

// ===========================
// FORM VALIDATION
// ===========================

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[\d\s\-\+\(\)]{10,}$/;
    return re.test(phone);
}

// ===========================
// UTILITIES
// ===========================

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
    };
}

// ===========================
// EXPORT FUNCTIONS (if using modules)
// ===========================

// Make functions available globally
window.toggleTheme = toggleTheme;
window.acceptCookies = acceptCookies;
window.refuseCookies = refuseCookies;
window.validateEmail = validateEmail;
window.validatePhone = validatePhone;
