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
        transitionDiv.style.height="200px";

    },1000)
  })

  //l'apparition de notre barre de navigation
  document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.querySelector('.navbar').style.visibility = 'visible';
        document.querySelector('.navbar').style.opacity = 1;
    }, 1800); // Délai de 1000 millisecondes (1 seconde)
});


document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const allItems = document.querySelectorAll('.projets-listes > div');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');

            allItems.forEach(item => {
                if (filter === 'tout') {
                    item.style.display = 'block';
                } else {
                    if (item.classList.contains(filter)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                }
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Fonction pour écrire progressivement le texte lettre par lettre
    function typeText(element, text, speed) {
        let i = 0;
        const typingInterval = setInterval(function() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
            } else {
                clearInterval(typingInterval);
            }
        }, speed);
    }

    // Ciblez l'élément contenant le titre que vous souhaitez écrire
    const headingElement = document.getElementById("typed-heading");

    // Déclenchez l'effet une seconde après le chargement de la page
    setTimeout(function() {
        // Utilisez la fonction typeText pour écrire le texte lettre par lettre
        typeText(headingElement, "Gassama Mohamed", 100); // 100 millisecondes par lettre
    
    }, 2000); // Délai d'une seconde (1000 millisecondes)
});


// JavaScript pour faire apparaître les boutons avec une transition en fondu au scroll
window.addEventListener('scroll', function () {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const scrollY = window.scrollY;

    if (scrollY > 400) { // Par exemple, faites apparaître les boutons après avoir fait défiler de 200 pixels vers le bas
        filterButtons.forEach((button, index) => {
            button.style.right = `${index * 100}px`; // Positionnez les boutons en ligne en ajustant le 'right'
            
            // Augmentez l'opacité pour les faire apparaître progressivement
            button.style.opacity = 1;
        });
    } else {
        filterButtons.forEach(button => {
            button.style.right = '-100%'; // Cachez les boutons en définissant 'right' à -100%
            
            // Réinitialisez l'opacité pour les maintenir invisibles
            button.style.opacity = 0;
        });
    }
});
















