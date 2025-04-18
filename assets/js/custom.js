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

    // Find any PDF links in the publications with d-scholarship.pitt.edu and use them to update title links
    document.querySelectorAll('.view-citation').forEach(item => {
        // Look for PDF links to d-scholarship
        const pdfLink = item.querySelector('a[href*="d-scholarship.pitt.edu"]');

        if (pdfLink) {
            const pdfUrl = pdfLink.getAttribute('href');

            // Extract the base repository URL - for d-scholarship format specifically
            // Format is typically: https://d-scholarship.pitt.edu/ID/version/filename.pdf
            const matches = pdfUrl.match(/(https:\/\/d-scholarship\.pitt\.edu\/\d+)\//);

            if (matches && matches[1]) {
                const baseUrl = matches[1];

                // Find the title link
                const titleLink = item.querySelector('.article-title a');

                if (titleLink) {
                    // Update the title link to point to the repository page
                    titleLink.href = baseUrl;
                    titleLink.target = '_blank';
                    titleLink.rel = 'noopener';
                }
            }
        }
    });
});