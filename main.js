//Barre de navigation

//changement de theme sur notre page
const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

themeToggleButton.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    
    const isLightTheme = body.classList.contains('light-theme');
    themeToggleButton.innerHTML = isLightTheme ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

//effet de transition sur les element de notre page, à part la navbar
document.addEventListener("DOMContentLoaded",function () {
    setTimeout(function(){
        var transitionDiv = document.querySelector(".transition");
        var navbar = document.querySelector(".navbar");

        //Reduire la hauteur de la div .transition à 0
        transitionDiv.style.height="100px";

    },1000)
  })
  document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.querySelector('.navbar').style.visibility = 'visible';
        document.querySelector('.navbar').style.opacity = 1;
    }, 1800); // Délai de 1000 millisecondes (1 seconde)
});




