const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

themeToggleButton.addEventListener('click', () => {
    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        themeToggleButton.innerHTML = '<i class="fas fa-moon"></i>'; // Icône pour le thème sombre
    } else {
        body.classList.add('light-theme');
        themeToggleButton.innerHTML = '<i class="fas fa-sun"></i>'; // Icône pour le thème clair
    }
});
