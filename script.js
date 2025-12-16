// ===== Mobile Menu Toggle =====
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Animate hamburger
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ===== Smooth Scrolling =====
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

// ===== Navbar Background on Scroll =====
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(15, 23, 42, 0.98)';
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.5)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
    }
});

// ===== Typing Effect =====
const typingText = document.querySelector('.typing-text');
const textArray = [
    'Web Developer',
    'UI/UX Designer',
    'Frontend Developer',
    'Creative Designer'
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 150;

function type() {
    const currentText = textArray[textIndex];
    
    if (isDeleting) {
        typingText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingDelay = 100;
    } else {
        typingText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typingDelay = 150;
    }
    
    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        typingDelay = 2000;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % textArray.length;
        typingDelay = 500;
    }
    
    setTimeout(type, typingDelay);
}

// Start typing effect
setTimeout(type, 1000);

// ===== Scroll Reveal Animation =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'all 0.6s ease-out';
    observer.observe(section);
});

// Observe all cards
document.querySelectorAll('.skill-card, .portfolio-card, .contact-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.5s ease-out';
    observer.observe(card);
});

// ===== Form Submission =====
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const formData = new FormData(contactForm);
    
    // Here you would typically send the data to a server
    // For now, we'll just show an alert
    alert('Terima kasih! Pesan Anda telah terkirim. Saya akan segera menghubungi Anda.');
    
    // Reset form
    contactForm.reset();
});

// ===== Active Navigation Link =====
const sections = document.querySelectorAll('section');
const navLinksItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinksItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// ===== Skill Progress Animation =====
const skillBars = document.querySelectorAll('.skill-progress');
const skillSection = document.querySelector('.skills');

const animateSkills = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            skillBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
            animateSkills.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

if (skillSection) {
    animateSkills.observe(skillSection);
}

// ===== Cursor Trail Effect (Optional - for desktop) =====
if (window.innerWidth > 768) {
    document.addEventListener('mousemove', (e) => {
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        trail.style.left = e.pageX + 'px';
        trail.style.top = e.pageY + 'px';
        
        document.body.appendChild(trail);
        
        setTimeout(() => {
            trail.remove();
        }, 1000);
    });
}

// Add cursor trail styles
const style = document.createElement('style');
style.textContent = `
    .cursor-trail {
        position: absolute;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: rgba(99, 102, 241, 0.5);
        pointer-events: none;
        animation: fadeOut 1s ease-out forwards;
        z-index: 9999;
    }
    
    @keyframes fadeOut {
        to {
            opacity: 0;
            transform: scale(2);
        }
    }
    
    .nav-links a.active {
        color: #6366f1;
    }
`;
document.head.appendChild(style);

// ===== Console Message =====
console.log('%c🚀 Website Portfolio', 'color: #6366f1; font-size: 20px; font-weight: bold;');
console.log('%cDibuat dengan ❤️ menggunakan HTML, CSS, dan JavaScript', 'color: #94a3b8; font-size: 12px;');
