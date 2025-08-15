// Project Portfolio Script - Book Reader Experience

class ProjectPortfolio {
    constructor() {
        this.currentProject = null;
        this.bookmarks = JSON.parse(localStorage.getItem('projectBookmarks')) || [];
        this.init();
    }

    init() {
        this.setupPageTransitions();
        this.setupReadingProgress();
        this.setupBookmarks();
        this.setupAnimations();
        this.setupSmoothScrolling();
    }

    // Page Transition Effects
    setupPageTransitions() {
        const transitionOverlay = document.getElementById('page-transition');
        
        // Show transition when navigating to project pages
        document.querySelectorAll('a[href*="projects/"]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.showPageTransition(link.href);
            });
        });

        // Show transition when navigating away
        window.addEventListener('beforeunload', () => {
            this.showPageTransition();
        });
    }

    showPageTransition(targetUrl = null) {
        const transitionOverlay = document.getElementById('page-transition');
        transitionOverlay.classList.add('active');

        if (targetUrl) {
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 800);
        }
    }

    // Reading Progress Tracking
    setupReadingProgress() {
        const progressBar = document.getElementById('reading-progress');
        const progressText = document.getElementById('progress-percentage');
        
        if (!progressBar || !progressText) return;

        let totalHeight = document.body.scrollHeight - window.innerHeight;
        let progress = 0;

        const updateProgress = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            progress = (scrollTop / totalHeight) * 100;
            
            progressBar.style.width = `${progress}%`;
            progressText.textContent = `${Math.round(progress)}%`;
        };

        // Update on scroll
        window.addEventListener('scroll', () => {
            requestAnimationFrame(updateProgress);
        });

        // Update on resize
        window.addEventListener('resize', () => {
            totalHeight = document.body.scrollHeight - window.innerHeight;
            updateProgress();
        });

        // Initial progress
        updateProgress();
    }

    // Bookmark System
    setupBookmarks() {
        // Setup bookmark buttons
        document.querySelectorAll('.btn-bookmark').forEach(button => {
            button.addEventListener('click', (e) => {
                const projectId = button.dataset.project;
                this.toggleBookmark(projectId, button);
            });
        });

        // Update bookmark display
        this.updateBookmarksDisplay();
    }

    toggleBookmark(projectId, button) {
        const projectIndex = this.bookmarks.findIndex(b => b.id === projectId);
        
        if (projectIndex === -1) {
            // Add bookmark
            const project = this.getProjectInfo(projectId);
            if (project) {
                this.bookmarks.push(project);
                button.classList.add('bookmarked');
                button.textContent = '🔖 Bookmarked';
                this.showNotification('Project added to library! 📚');
            }
        } else {
            // Remove bookmark
            this.bookmarks.splice(projectIndex, 1);
            button.classList.remove('bookmarked');
            button.textContent = '🔖 Bookmark';
            this.showNotification('Project removed from library');
        }

        // Save to localStorage
        localStorage.setItem('projectBookmarks', JSON.stringify(this.bookmarks));
        
        // Update display
        this.updateBookmarksDisplay();
    }

    getProjectInfo(projectId) {
        const projectElement = document.getElementById(projectId);
        if (!projectElement) return null;

        const title = projectElement.querySelector('.story-title')?.textContent || 'Unknown Project';
        const category = projectElement.querySelector('.story-category')?.textContent || 'Project';
        const year = projectElement.querySelector('.story-year')?.textContent || '2024';

        return {
            id: projectId,
            title: title,
            category: category,
            year: year,
            timestamp: new Date().toISOString()
        };
    }

    updateBookmarksDisplay() {
        const container = document.getElementById('bookmarks-container');
        if (!container) return;

        if (this.bookmarks.length === 0) {
            container.innerHTML = `
                <div class="empty-bookmarks">
                    <p>No bookmarks yet. Start reading projects to build your library!</p>
                </div>
            `;
            return;
        }

        const bookmarksHTML = this.bookmarks.map(bookmark => `
            <div class="bookmark-item">
                <div class="bookmark-content">
                    <h4>${bookmark.title}</h4>
                    <p class="bookmark-meta">${bookmark.category} • ${bookmark.year}</p>
                    <div class="bookmark-actions">
                        <a href="#${bookmark.id}" class="btn-secondary">Read Again</a>
                        <button class="btn-remove" onclick="portfolio.removeBookmark('${bookmark.id}')">Remove</button>
                    </div>
                </div>
            </div>
        `).join('');

        container.innerHTML = bookmarksHTML;
    }

    removeBookmark(projectId) {
        this.bookmarks = this.bookmarks.filter(b => b.id !== projectId);
        localStorage.setItem('projectBookmarks', JSON.stringify(this.bookmarks));
        this.updateBookmarksDisplay();
        
        // Update bookmark button state
        const button = document.querySelector(`[data-project="${projectId}"]`);
        if (button) {
            button.classList.remove('bookmarked');
            button.textContent = '🔖 Bookmark';
        }
    }

    // Animation System
    setupAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, observerOptions);

        // Observe all elements with animate-on-scroll class
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });
    }

    // Smooth Scrolling for Table of Contents
    setupSmoothScrolling() {
        document.querySelectorAll('.toc-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 100; // Account for fixed header
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });

                    // Update active TOC link
                    document.querySelectorAll('.toc-link').forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                }
            });
        });
    }

    // Notification System
    showNotification(message, type = 'success') {
        // Remove existing notifications
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-message">${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;

        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#10b981' : '#ef4444'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 300px;
        `;

        // Add to page
        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Setup close button
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        });

        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.transform = 'translateX(100%)';
                setTimeout(() => notification.remove(), 300);
            }
        }, 5000);
    }

    // Utility Methods
    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Keyboard Navigation
    setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            // Ctrl/Cmd + K to focus search
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                // Focus search if exists
                const searchInput = document.querySelector('.search-input');
                if (searchInput) searchInput.focus();
            }

            // Escape to close modals/overlays
            if (e.key === 'Escape') {
                const transitionOverlay = document.getElementById('page-transition');
                if (transitionOverlay.classList.contains('active')) {
                    transitionOverlay.classList.remove('active');
                }
            }
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.portfolio = new ProjectPortfolio();
});

// Add some additional utility functions
window.addEventListener('load', () => {
    // Hide page transition after page load
    const transitionOverlay = document.getElementById('page-transition');
    if (transitionOverlay) {
        setTimeout(() => {
            transitionOverlay.classList.remove('active');
        }, 500);
    }

    // Add scroll to top button
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '↑';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: #6366f1;
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 20px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
    `;

    document.body.appendChild(scrollToTopBtn);

    // Show/hide scroll to top button
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.visibility = 'visible';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.visibility = 'hidden';
        }
    });

    // Scroll to top functionality
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ProjectPortfolio;
}
