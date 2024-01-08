const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

themeToggleButton.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    
    const isLightTheme = body.classList.contains('light-theme');
    themeToggleButton.innerHTML = isLightTheme ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});
