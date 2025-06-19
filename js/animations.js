// === ANIMATION JAVASCRIPT FILE ===

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

// Create intersection observer
const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add animation class
            entry.target.classList.add('animated');
            
            // Set opacity and transform
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // Animate child elements with stagger effect
            const children = entry.target.querySelectorAll('.skill-item, .project-card, .contact-item');
            children.forEach((child, index) => {
                setTimeout(() => {
                    child.style.opacity = '1';
                    child.style.transform = 'translateY(0)';
                }, index * 100);
            });
        }
    });
}, observerOptions);

// Observe all sections and animatable elements
document.addEventListener('DOMContentLoaded', function() {
    // Animate sections on scroll
    const sectionsToAnimate = document.querySelectorAll('section');
    sectionsToAnimate.forEach(section => {
        // Set initial state
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        // Observe the section
        observer.observe(section);
    });

    // Animate individual elements
    const elementsToAnimate = document.querySelectorAll('.project-card, .skill-item, .contact-item');
    elementsToAnimate.forEach(item => {
        // Set initial state
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        // Observe the element
        observer.observe(item);
    });
});

// Text typing animation
class TypeWriter {
    constructor(element, words, wait = 3000) {
        this.element = element;
        this.words = words;
        this.wait = parseInt(wait, 10);
        this.wordIndex = 0;
        this.txt = '';
        this.isDeleting = false;
        this.type();
    }

    type() {
        // Current index of word
        const current = this.wordIndex % this.words.length;
        // Get full text of current word
        const fullTxt = this.words[current];

        // Check if deleting
        if (this.isDeleting) {
            // Remove character
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            // Add character
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        // Insert txt into element
        this.element.innerHTML = `<span class="txt">${this.txt}</span>`;

        // Initial Type Speed
        let typeSpeed = 150;

        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        // If word is complete
        if (!this.isDeleting && this.txt === fullTxt) {
            // Make pause at end
            typeSpeed = this.wait;
            // Set delete to true
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            // Move to next word
            this.wordIndex++;
            // Pause before start typing
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// Initialize typewriter effect
document.addEventListener('DOMContentLoaded', function() {
    const typeWriterElement = document.querySelector('.hero-subtitle');
    if (typeWriterElement) {
        // Get the original text and create variations
        const words = [
            'Full Stack Web Developer',
            'Frontend Specialist',
            'Backend Engineer',
            'UI/UX Enthusiast'
        ];
        
        // Initialize typewriter
        new TypeWriter(typeWriterElement, words, 2000);
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.transform = `translateY(${rate}px)`;
    }
});

// Smooth reveal animation for skills
function animateSkills() {
    const skillsContainer = document.querySelector('.skills');
    if (skillsContainer) {
        const skills = skillsContainer.querySelectorAll('.skill-item');
        
        // Create observer for skills container
        const skillsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Animate each skill with delay
                    skills.forEach((skill, index) => {
                        setTimeout(() => {
                            skill.style.opacity = '1';
                            skill.style.transform = 'translateY(0) scale(1)';
                        }, index * 150);
                    });
                    
                    // Stop observing after animation
                    skillsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        // Set initial state for skills
        skills.forEach(skill => {
            skill.style.opacity = '0';
            skill.style.transform = 'translateY(20px) scale(0.9)';
            skill.style.transition = 'all 0.6s ease';
        });
        
        skillsObserver.observe(skillsContainer);
    }
}

// Initialize skills animation
document.addEventListener('DOMContentLoaded', animateSkills);

// Project cards hover animation enhancement
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        const image = card.querySelector('.project-image img');
        
        card.addEventListener('mouseenter', function() {
            if (image) {
                image.style.transform = 'scale(1.1)';
                image.style.transition = 'transform 0.3s ease';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            if (image) {
                image.style.transform = 'scale(1)';
            }
        });
    });
});

// Floating animation for hero elements
function createFloatingAnimation() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
        }
        
        .floating {
            animation: float 3s ease-in-out infinite;
        }
        
        .floating:nth-child(2) {
            animation-delay: 0.5s;
        }
        
        .floating:nth-child(3) {
            animation-delay: 1s;
        }
    `;
    document.head.appendChild(style);
}

// Initialize floating animation
createFloatingAnimation();

// Add floating class to hero elements
document.addEventListener('DOMContentLoaded', function() {
    const heroElements = document.querySelectorAll('.hero-title, .hero-subtitle, .hero-description');
    heroElements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('floating');
        }, index * 200);
    });
});

// Scroll progress indicator
function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    
    Object.assign(progressBar.style, {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '0%',
        height: '3px',
        background: 'linear-gradient(90deg, #00d4ff, #0099cc)',
        zIndex: '10000',
        transition: 'width 0.1s ease'
    });
    
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// Initialize scroll progress
createScrollProgress();

// Smooth number counting animation
function animateValue(element, start, end, duration, suffix = '') {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            current = end;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current) + suffix;
    }, 16);
}

// Add number animation to contact items or stats
document.addEventListener('DOMContentLoaded', function() {
    const numberElements = document.querySelectorAll('[data-count]');
    
    const numberObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const endValue = parseInt(target.getAttribute('data-count'));
                const suffix = target.getAttribute('data-suffix') || '';
                
                animateValue(target, 0, endValue, 2000, suffix);
                numberObserver.unobserve(target);
            }
        });
    });
    
    numberElements.forEach(element => {
        numberObserver.observe(element);
    });
});