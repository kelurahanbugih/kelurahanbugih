document.addEventListener('DOMContentLoaded', () => {
    console.log('Sistem Informasi Kelurahan Bugih - Loaded');

    // Highlight active link functionality
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Mobile menu toggle implementation
    const hamburger = document.querySelector('.hamburger');
    const navLinksContainer = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinksContainer.classList.toggle('active');
        });
    }

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(n => n.addEventListener('click', () => {
        if(hamburger && navLinksContainer.classList.contains('active')){
             hamburger.classList.remove('active');
             navLinksContainer.classList.remove('active');
        }
    }));
});
