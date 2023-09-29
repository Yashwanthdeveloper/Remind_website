// Smooth scrolling for navigation menu
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1); // Get the target section's ID
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const targetOffset = targetSection.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({
                    top: targetOffset,
                    behavior: 'smooth'
                });
            }
        });
    });
});
