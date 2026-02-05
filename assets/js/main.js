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

    // TODO: Mobile menu toggle implementation
});
