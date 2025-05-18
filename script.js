// Check SSL status when page loads
document.addEventListener('DOMContentLoaded', checkSSLStatus);

function checkSSLStatus() {
    const sslStatus = document.getElementById('sslStatus');
    const sslText = document.getElementById('sslText');
    const isSecure = window.location.protocol === 'https:';

    if (isSecure) {
        sslText.textContent = 'SSL is active! 🟢';
        sslStatus.style.backgroundColor = '#e8f5e9';
    } else {
        sslText.textContent = 'SSL is not active! 🔴';
        sslStatus.style.backgroundColor = '#ffebee';
    }
}

// Add smooth scrolling for navigation
const navLinks = document.querySelectorAll('a[href^="#"]');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Add animation for steps when they come into view
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

const steps = document.querySelectorAll('.step');
steps.forEach(step => observer.observe(step));
