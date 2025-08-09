// DOM Elements
const navigation = document.getElementById('navigation');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const contactForm = document.getElementById('contact-form');
const toast = document.getElementById('toast');
const skipLink = document.getElementById('skip-link');

// Performance optimizations and enhanced interactions for FAANG/MAANG impact
let lastScrollY = 0;
let ticking = false;
let scrollDirection = 'down';

// Enhanced scroll performance with RAF
function handleScroll() {
    const currentScrollY = window.scrollY;
    scrollDirection = currentScrollY > lastScrollY ? 'down' : 'up';
    lastScrollY = currentScrollY;
    
    if (!ticking) {
        requestAnimationFrame(() => {
            updateNavigation();
            ticking = false;
        });
        ticking = true;
    }
}

// Update navigation with smooth transitions and blur effects
function updateNavigation() {
    const scrolled = lastScrollY > 50;
    const scrolledUp = scrollDirection === 'up' && lastScrollY > 100;
    
    if (scrolled) {
        navigation.classList.add('scrolled');
        if (scrolledUp) {
            navigation.classList.remove('scrolled-up');
        } else {
            navigation.classList.add('scrolled-up');
        }
    } else {
        navigation.classList.remove('scrolled', 'scrolled-up');
    }
}

// Enhanced intersection observer for better performance
function setupIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                // Add blur effect on scroll
                if (entry.target.classList.contains('project-item') || 
                    entry.target.classList.contains('about-item') ||
                    entry.target.classList.contains('metric-item')) {
                    entry.target.style.backdropFilter = 'blur(12px)';
                    entry.target.style.webkitBackdropFilter = 'blur(12px)';
                }
            }
        });
    }, observerOptions);

    // Observe all elements that need animation
    const animatedElements = document.querySelectorAll('.project-item, .about-item, .metric-item, .contact-item');
    animatedElements.forEach(el => observer.observe(el));
}

// Enhanced metric animations with blur effects
function animateMetrics() {
    const metrics = document.querySelectorAll('.metric-item');
    metrics.forEach((metric, index) => {
        const metricValue = metric.querySelector('.metric-value');
        const finalValue = metricValue.textContent;
        const numericValue = parseInt(finalValue.replace(/[^\d]/g, ''));
        
        if (!isNaN(numericValue)) {
            // Add blur effect during animation
            metric.style.backdropFilter = 'blur(16px)';
            metric.style.webkitBackdropFilter = 'blur(16px)';
            animateNumber(metricValue, 0, numericValue, 2000, index * 200);
        }
    });
}

// Number animation function with enhanced transitions
function animateNumber(element, start, end, duration, delay) {
    setTimeout(() => {
        const startTime = performance.now();
        const originalText = element.textContent;
        const suffix = originalText.replace(/[\d,]/g, '');
        
        function updateNumber(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const current = Math.floor(start + (end - start) * easeOutQuart);
            
            element.textContent = current.toLocaleString() + suffix;
            
            if (progress < 1) {
                requestAnimationFrame(updateNumber);
            } else {
                // Add final blur effect
                const metricItem = element.closest('.metric-item');
                if (metricItem) {
                    metricItem.style.backdropFilter = 'blur(12px)';
                    metricItem.style.webkitBackdropFilter = 'blur(12px)';
                }
            }
        }
        
        requestAnimationFrame(updateNumber);
    }, delay);
}

// Enhanced project interactions with blur effects
function setupProjectInteractions() {
    const projects = document.querySelectorAll('.project-item');
    
    projects.forEach(project => {
        project.addEventListener('mouseenter', () => {
            project.style.transform = 'translateY(-8px) scale(1.02)';
            project.style.backdropFilter = 'blur(16px)';
            project.style.webkitBackdropFilter = 'blur(16px)';
            project.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(255, 255, 255, 0.2)';
        });
        
        project.addEventListener('mouseleave', () => {
            project.style.transform = 'translateY(0) scale(1)';
            project.style.backdropFilter = 'blur(12px)';
            project.style.webkitBackdropFilter = 'blur(12px)';
            project.style.boxShadow = 'none';
        });
    });
}

// Enhanced mobile menu with blur effects
function setupMobileMenu() {
    if (!mobileMenuBtn || !mobileMenu) return;
    
    mobileMenuBtn.addEventListener('click', () => {
        const isActive = mobileMenuBtn.classList.contains('active');
        
        if (isActive) {
            mobileMenuBtn.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
            // Add blur effect when closing
            mobileMenu.style.backdropFilter = 'blur(0px)';
            mobileMenu.style.webkitBackdropFilter = 'blur(0px)';
        } else {
            mobileMenuBtn.classList.add('active');
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
            // Add blur effect when opening
            mobileMenu.style.backdropFilter = 'blur(24px)';
            mobileMenu.style.webkitBackdropFilter = 'blur(24px)';
        }
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            mobileMenuBtn.click();
        }
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target) && mobileMenu.classList.contains('active')) {
            mobileMenuBtn.click();
        }
    });
}

// Enhanced form validation with real-time feedback
function setupFormValidation() {
    const form = document.getElementById('contact-form');
    const inputs = form.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            validateField(input, document.getElementById(`${input.id}-error`));
        });
        
        input.addEventListener('input', () => {
            if (input.classList.contains('error')) {
                validateField(input, document.getElementById(`${input.id}-error`));
            }
        });
    });
}

// Enhanced toast notifications
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const icon = type === 'success' ? '✓' : type === 'error' ? '✗' : 'ℹ';
    
    toast.innerHTML = `
        <div class="toast-content">
            <span class="toast-icon">${icon}</span>
            <span class="toast-message">${message}</span>
        </div>
    `;
    
    toast.className = `toast show toast-${type}`;
    toast.setAttribute('aria-live', 'polite');
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        toast.classList.remove('show');
    }, 5000);
}

// Enhanced smooth scrolling with better performance
function setupSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 100;
                    smoothScrollTo(offsetTop, 1000);
                    closeMobileMenu();
                }
            }
        });
    });
}

// Smooth scroll function with easing
function smoothScrollTo(targetPosition, duration) {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const startTime = performance.now();
    
    function animation(currentTime) {
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        const currentPosition = startPosition + distance * easeOutCubic;
        
        window.scrollTo(0, currentPosition);
        
        if (progress < 1) {
            requestAnimationFrame(animation);
        }
    }
    
    requestAnimationFrame(animation);
}

// Enhanced Intersection Observer for animations
function setupIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.project-item, .about-item, .about-main, .section-header');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(80px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(el);
    });
}

// Enhanced toast notification
function showToast(message, type = 'success') {
    toast.textContent = message;
    toast.className = `toast ${type}`;
    toast.classList.add('show');
    
    // Add success/error styling
    if (type === 'error') {
        toast.style.background = 'var(--destructive)';
        toast.style.color = 'var(--destructive-foreground)';
    } else {
        toast.style.background = 'var(--foreground)';
        toast.style.color = 'var(--background)';
    }
    
    // Announce to screen readers
    toast.setAttribute('aria-live', 'polite');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 4000);
}

// Enhanced form validation
function validateField(field, errorElement) {
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';

    switch (field.type) {
        case 'email':
            if (!value) {
                errorMessage = 'Email is required';
                isValid = false;
            } else if (!isValidEmail(value)) {
                errorMessage = 'Please enter a valid email address';
                isValid = false;
            }
            break;
        case 'text':
            if (!value) {
                errorMessage = 'Name is required';
                isValid = false;
            } else if (value.length < 2) {
                errorMessage = 'Name must be at least 2 characters';
                isValid = false;
            }
            break;
        default:
            if (!value) {
                errorMessage = 'Message is required';
                isValid = false;
            } else if (value.length < 10) {
                errorMessage = 'Message must be at least 10 characters';
                isValid = false;
            }
    }

    if (errorElement) {
        errorElement.textContent = errorMessage;
        errorElement.style.display = isValid ? 'none' : 'block';
    }

    return isValid;
}

// Enhanced contact form submission
async function handleContactSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = formData.get('name').trim();
    const email = formData.get('email').trim();
    const message = formData.get('message').trim();
    
    // Get error elements
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');
    
    // Validate all fields
    const isNameValid = validateField(contactForm.querySelector('#name'), nameError);
    const isEmailValid = validateField(contactForm.querySelector('#email'), emailError);
    const isMessageValid = validateField(contactForm.querySelector('#message'), messageError);
    
    if (!isNameValid || !isEmailValid || !isMessageValid) {
        showToast('Please fix the errors in the form', 'error');
        return;
    }
    
    // Simulate form submission with better UX
    const submitBtn = contactForm.querySelector('.form-submit');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.7';
    
    try {
        // Simulate API call with realistic delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Clear form and errors
        contactForm.reset();
        [nameError, emailError, messageError].forEach(error => {
            if (error) error.textContent = '';
        });
        
        showToast('Message sent! Thank you for reaching out. I\'ll get back to you soon.');
        
        // Add success animation
        submitBtn.style.background = '#10b981';
        setTimeout(() => {
            submitBtn.style.background = 'var(--foreground)';
        }, 2000);
        
    } catch (error) {
        showToast('Error sending message. Please try again or contact me directly via email.', 'error');
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        submitBtn.style.opacity = '1';
    }
}

// Enhanced email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Parallax effect for hero section with improved performance
let parallaxTicking = false;
function handleParallax() {
    if (!parallaxTicking) {
        requestAnimationFrame(() => {
            const scrolled = window.pageYOffset;
            const heroSection = document.querySelector('.hero-section');
            
            if (heroSection && scrolled < window.innerHeight) {
                const rate = scrolled * -0.3;
                heroSection.style.transform = `translateY(${rate}px)`;
            }
            parallaxTicking = false;
        });
        parallaxTicking = true;
    }
}

// Enhanced animations with better timing
function initAnimations() {
    // Hero section animations with staggered timing
    const heroTitleLines = document.querySelectorAll('.hero-title-line');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroStatus = document.querySelector('.hero-status');
    
    // Trigger animations on load with better easing
    setTimeout(() => {
        heroTitleLines.forEach((line, index) => {
            setTimeout(() => {
                line.style.opacity = '1';
                line.style.transform = 'translateY(0)';
                line.style.transition = 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)';
            }, 500 + (index * 300));
        });
        
        setTimeout(() => {
            heroSubtitle.style.opacity = '1';
            heroSubtitle.style.transform = 'translateY(0)';
            heroSubtitle.style.transition = 'all 1s cubic-bezier(0.4, 0, 0.2, 1)';
        }, 1200);
        
        setTimeout(() => {
            heroStatus.style.opacity = '1';
            heroStatus.style.transform = 'translateX(0)';
            heroStatus.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        }, 1600);
    }, 200);
}

// Enhanced project item hover effects
function setupProjectHovers() {
    const projectItems = document.querySelectorAll('.project-item');
    
    projectItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-12px) scale(1.02)';
            item.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0) scale(1)';
            item.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
        });
    });
}

// Enhanced about item hover effects
function setupAboutHovers() {
    const aboutItems = document.querySelectorAll('.about-item');
    
    aboutItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateX(12px)';
            item.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateX(0)';
            item.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
        });
    });
}

// Enhanced image loading with fade-in effect
function handleImageLoad() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', () => {
            img.style.opacity = '1';
            img.style.transform = 'scale(1)';
        });
        
        // Set initial opacity and scale
        img.style.opacity = '0';
        img.style.transform = 'scale(1.05)';
        img.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    });
}

// Enhanced smooth transitions
function addSmoothTransitions() {
    const interactiveElements = document.querySelectorAll('a, button, .project-item, .about-item, .contact-item');
    interactiveElements.forEach(el => {
        el.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
}

// Initialize all enhanced features
function init() {
    setupIntersectionObserver();
    setupProjectInteractions();
    setupFormValidation();
    setupMobileMenu();
    setupSmoothScrolling();
    
    // Animate metrics on page load
    if (document.querySelector('.hero-metrics')) {
        setTimeout(animateMetrics, 1000);
    }
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Add resize listener with debouncing
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            // Handle resize logic here
        }, 250);
    });
    
    // Enhanced loading experience
    document.addEventListener('DOMContentLoaded', () => {
        document.body.classList.add('loaded');
    });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Handle window resize with debouncing
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        if (window.innerWidth >= 768) {
            closeMobileMenu();
        }
    }, 250);
});

// Handle escape key to close mobile menu
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeMobileMenu();
    }
});

// Handle click outside mobile menu to close it
document.addEventListener('click', (e) => {
    if (mobileMenu.classList.contains('active') && 
        !mobileMenu.contains(e.target) && 
        !mobileMenuBtn.contains(e.target)) {
        closeMobileMenu();
    }
});

// Add loading animation for images
handleImageLoad();

// Initialize smooth transitions
addSmoothTransitions();
