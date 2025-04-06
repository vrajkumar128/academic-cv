document.addEventListener('DOMContentLoaded', function () {
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
});