/**
 * main.js — Fiasco UI Portfolio Scripts
 * Lightweight, accessible, no heavy animations
 */

document.addEventListener('DOMContentLoaded', () => {

  // ===== 1. REAL-TIME WIB CLOCK =====
  const navClock = document.getElementById('nav-clock');
  function updateClock() {
    if (!navClock) return;
    try {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('id-ID', {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      });
      navClock.innerHTML = `${timeStr} <sup>WIB</sup>`;
    } catch {
      // Fallback if Intl timeZone fails
      const now = new Date();
      const h = String(now.getHours()).padStart(2, '0');
      const m = String(now.getMinutes()).padStart(2, '0');
      navClock.innerHTML = `${h}:${m} <sup>WIB</sup>`;
    }
  }
  updateClock();
  setInterval(updateClock, 1000);

  // ===== 2. HEADER SCROLL SHADOW =====
  const header = document.getElementById('site-header');
  function handleHeaderScroll() {
    if (!header) return;
    if (window.scrollY > 20) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  }
  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  handleHeaderScroll();

  // ===== 3. MOBILE MENU TOGGLE =====
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.classList.toggle('is-active');
      mobileMenu.classList.toggle('is-open', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
      mobileMenu.setAttribute('aria-hidden', String(!isOpen));
    });

    // Close menu when clicking any mobile link
    const mobileLinks = mobileMenu.querySelectorAll('.mobile-nav-link');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('is-active');
        mobileMenu.classList.remove('is-open');
        hamburger.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
      });
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!header.contains(e.target) && mobileMenu.classList.contains('is-open')) {
        hamburger.classList.remove('is-active');
        mobileMenu.classList.remove('is-open');
        hamburger.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
      }
    });
  }

  // ===== 4. ACTIVE NAVIGATION LINK ON SCROLL =====
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function updateActiveNavLink() {
    const scrollPos = window.scrollY + 120;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }
  window.addEventListener('scroll', updateActiveNavLink, { passive: true });

  // ===== 5. PORTFOLIO FILTER CHIPS =====
  const filterButtons = document.querySelectorAll('.filter-bar button');
  const workCards = document.querySelectorAll('.work-card');

  if (filterButtons.length && workCards.length) {
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;

        // Update aria-pressed
        filterButtons.forEach(b => b.setAttribute('aria-pressed', 'false'));
        btn.setAttribute('aria-pressed', 'true');

        // Filter cards
        workCards.forEach(card => {
          const category = card.dataset.category;
          if (filter === 'all' || category === filter) {
            card.classList.remove('is-hidden');
          } else {
            card.classList.add('is-hidden');
          }
        });
      });
    });
  }

  // ===== 6. CONTACT FORM VALIDATION & FEEDBACK =====
  const contactForm = document.getElementById('contact-form');
  const formSuccess = document.getElementById('form-success');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const subjectInput = document.getElementById('subject');
      const messageInput = document.getElementById('message');

      const nameError = document.getElementById('name-error');
      const emailError = document.getElementById('email-error');
      const subjectError = document.getElementById('subject-error');
      const messageError = document.getElementById('message-error');

      let isValid = true;

      // Clear errors
      [nameError, emailError, subjectError, messageError].forEach(el => {
        if (el) el.textContent = '';
      });
      [nameInput, emailInput, subjectInput, messageInput].forEach(el => {
        if (el) el.removeAttribute('aria-invalid');
      });

      // Name validation
      if (!nameInput.value.trim()) {
        nameError.textContent = 'Nama wajib diisi.';
        nameInput.setAttribute('aria-invalid', 'true');
        isValid = false;
      }

      // Email validation
      const emailVal = emailInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailVal) {
        emailError.textContent = 'Email wajib diisi.';
        emailInput.setAttribute('aria-invalid', 'true');
        isValid = false;
      } else if (!emailRegex.test(emailVal)) {
        emailError.textContent = 'Format email tidak valid.';
        emailInput.setAttribute('aria-invalid', 'true');
        isValid = false;
      }

      // Subject validation
      if (!subjectInput.value.trim()) {
        subjectError.textContent = 'Subject wajib diisi.';
        subjectInput.setAttribute('aria-invalid', 'true');
        isValid = false;
      }

      // Message validation
      if (!messageInput.value.trim()) {
        messageError.textContent = 'Pesan tidak boleh kosong.';
        messageInput.setAttribute('aria-invalid', 'true');
        isValid = false;
      }

      if (isValid) {
        if (formSuccess) {
          formSuccess.hidden = false;
          setTimeout(() => {
            formSuccess.hidden = true;
          }, 6000);
        }
        contactForm.reset();
      }
    });
  }

});

