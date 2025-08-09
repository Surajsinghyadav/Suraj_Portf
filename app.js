document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const mobileMenu = document.getElementById('mobile-menu');
  const navMenu = document.querySelector('.nav-menu');

  mobileMenu.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Close mobile menu when clicking on a link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Scroll Spy for Active Navigation
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  function updateActiveLink() {
    const scrollPos = window.scrollY + 100;

    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        navLinks.forEach(link => link.classList.remove('active'));
        const targetLink = document.querySelector(`.nav-link[href="#${section.id}"]`);
        if (targetLink) {
          targetLink.classList.add('active');
        }
      }
    });
  }

  // Initialize active link
  updateActiveLink();

  // Add scroll effect to navbar and update active link
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
      navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }

    // Update active navigation link
    updateActiveLink();
  });

  // Add this to your existing JavaScript file

// Timeline Animation Observer (Updated)
  const timelineObserverOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
  };

  const timelineObserver = new IntersectionObserver(function(entries) {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Add staggered animation delay
        setTimeout(() => {
          entry.target.classList.add('animate');
        }, index * 200);
      }
    });
  }, timelineObserverOptions);

// Observe timeline items with animation
  document.querySelectorAll('.timeline-item').forEach((item, index) => {
    // Add initial animation delay based on position
    item.style.transitionDelay = `${index * 0.2}s`;
    timelineObserver.observe(item);
  });


  // Observe timeline items
  document.querySelectorAll('.timeline-item').forEach(item => {
    timelineObserver.observe(item);
  });

  // Animate other elements on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe skill cards and project cards for animation
  document.querySelectorAll('.skill-card, .project-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  // Contact form success message
  const contactForm = document.querySelector('.contact-form');

  // Check if form submission was successful (for Formspree)
  if (window.location.hash === '#success') {
    alert('Thank you for your message! I will get back to you soon.');
    // Remove the hash from URL
    window.history.replaceState(null, null, window.location.pathname);
  }
});
