/**
 * Global Luxury Realty - Main JavaScript
 * Handles: Navigation, Mobile Menu, Scroll Animations, Smooth Scroll
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all functionality
  initNavigation();
  initMobileMenu();
  initScrollAnimations();
  initSmoothScroll();
});

/**
 * Navigation - Background change on scroll
 */
function initNavigation() {
  const nav = document.getElementById('main-nav');
  if (!nav) return;

  const handleScroll = () => {
    if (window.scrollY > 50) {
      nav.classList.add('bg-navy-900/95', 'backdrop-blur-md', 'shadow-lg');
      nav.classList.remove('bg-transparent');
    } else {
      nav.classList.remove('bg-navy-900/95', 'backdrop-blur-md', 'shadow-lg');
      nav.classList.add('bg-transparent');
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial check
}

/**
 * Mobile Menu - Toggle functionality
 */
function initMobileMenu() {
  const menuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeButton = document.getElementById('mobile-menu-close');
  const menuLinks = mobileMenu?.querySelectorAll('a');

  if (!menuButton || !mobileMenu) return;

  const openMenu = () => {
    mobileMenu.classList.remove('translate-x-full');
    mobileMenu.classList.add('translate-x-0');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    mobileMenu.classList.add('translate-x-full');
    mobileMenu.classList.remove('translate-x-0');
    document.body.style.overflow = '';
  };

  menuButton.addEventListener('click', openMenu);
  closeButton?.addEventListener('click', closeMenu);

  // Close menu when clicking a link
  menuLinks?.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close menu on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
}

/**
 * Scroll Animations - Intersection Observer for fade-in effects
 */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.fade-in-up');

  if (!animatedElements.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, observerOptions);

  animatedElements.forEach(el => observer.observe(el));
}

/**
 * Smooth Scroll - For anchor links
 */
function initSmoothScroll() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      
      // Skip if it's just "#" or a quiz link placeholder
      if (href === '#' || href === '#buy-quiz' || href === '#sell-quiz') {
        return;
      }

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const navHeight = document.getElementById('main-nav')?.offsetHeight || 0;
        const targetPosition = target.offsetTop - navHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}
