// Animation du menu
const starters = document.querySelector('.starters');
const dishes = document.querySelector('.dishes');
const desserts = document.querySelector('.desserts');
const drinks = document.querySelector('.drinks');
const menuCategoryContainer = document.querySelector('.menu-category-container');
const menuStarters = document.querySelector('.menu-starters');
const menuDishes = document.querySelector('.menu-dishes');
const menuDesserts = document.querySelector('.menu-desserts');
const menuDrinks = document.querySelector('.menu-drinks');

// Affiche les entrées par défaut
menuStarters.classList.add('active');

function playSlideInAnimation(targetDiv) {
    const activeDiv = menuCategoryContainer.querySelector('.active');
    if (activeDiv === targetDiv) {
        return; // Ne rejoue pas l'animation si on clique sur le même élément
    }

    if (activeDiv) {
        activeDiv.classList.remove('active');
        activeDiv.classList.add('slide-out');
       
        // Cette ligne réinitialise l'état des divs avant d'appliquer les animations
        activeDiv.addEventListener('animationend', () => {
            activeDiv.classList.remove('slide-out');
        }, { once: true });
    }
    targetDiv.classList.add('slide-in', 'active');
}

starters.addEventListener('click', () => {
    playSlideInAnimation(menuStarters);
});

dishes.addEventListener('click', () => {
    playSlideInAnimation(menuDishes);
});

desserts.addEventListener('click', () => {
    playSlideInAnimation(menuDesserts);
});

drinks.addEventListener('click', () => {
    playSlideInAnimation(menuDrinks);
});
  