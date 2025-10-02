// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Typing effect for tagline
const tagline = document.querySelector('.tagline');
const text = "Pemuda Desa Ingin Kaya";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        tagline.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}

setTimeout(typeWriter, 1500);

// Fade-in animation on scroll
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('visible');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// Particle animation for hero section
const particlesContainer = document.querySelector('.particles');

function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.animationDuration = 5 + Math.random() * 10 + 's';
    particle.style.animationDelay = Math.random() * 10 + 's';
    particlesContainer.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 15000);
}

setInterval(createParticle, 300);
