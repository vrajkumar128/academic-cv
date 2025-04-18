document.addEventListener('DOMContentLoaded', function () {

    // Set document title for homepage
    if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
        document.title = 'Vivek Rajkumar | University of Pittsburgh';
    }

    // Grab the dark/light mode toggle icon
    const themeToggle = document.querySelector('.theme-dropdown .nav-link');

    // Hide the dropdown menu with CSS
    const style = document.createElement('style');

    style.textContent = `
    .theme-dropdown .dropdown-menu {
      display: none !important;
    }
  `;
  
    document.head.appendChild(style);

    // Update the icon to reflect current state
    function updateIcon() {
        const isDark = document.body.classList.contains('dark');
        const icon = themeToggle.querySelector('i');

        if (isDark) {
            // In dark mode, show a sun icon to indicate you can switch to light
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            // In light mode, show a moon icon to indicate you can switch to dark
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }

    // Initialize the icon based on current theme
    updateIcon();

    // Add direct toggle functionality
    themeToggle.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation(); // Prevent Bootstrap dropdown behavior

        // Get current theme
        const isDark = document.body.classList.contains('dark');

        // Toggle theme
        if (isDark) {
            document.body.classList.remove('dark');
            localStorage.setItem('wcTheme', 'light');
        } else {
            document.body.classList.add('dark');
            localStorage.setItem('wcTheme', 'dark');
        }

        // Update the icon
        updateIcon();
    });

    const BPHIL_URL = "https://d-scholarship.pitt.edu/47286/"
    const PUBLICATION_URLS = [BPHIL_URL];

    // Replace publication title links with the hardcoded links from above
    document.querySelectorAll('.view-citation').forEach((publication, publicationIndex) => {
        const titleLink = publication.querySelector('a');
        titleLink.href = PUBLICATION_URLS[publicationIndex];
        titleLink.target = '_blank';
        titleLink.rel = 'noopener';
    });
});