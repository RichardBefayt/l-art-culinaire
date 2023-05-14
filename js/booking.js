const start = document.querySelector('input[name="date"]');

// Affiche la date du jour
const today = new Date().toISOString().split('T')[0];

// Date de réservation
start.value = today;
start.min = today;

// Calcul de la durée de réservation
const bookingTotal = () => {
    let date = new Date(start.value);
    let diffDays = 1; // La réservation est toujours d'une seule journée

    console.log(diffDays);
};

start.addEventListener('change', () => {
    bookingTotal();
});

// Modale
function bookingSubmitted(event) {
    event.preventDefault();
    document.getElementById('modal').style.display = 'block';

    // Fermer la fenêtre modale lorsque l'utilisateur clique sur le bouton de fermeture
    document.querySelector('.close-modal').addEventListener('click', function() {
        document.getElementById('modal').style.display = 'none';

        // Réinitialiser les champs du formulaire
        form.reset();
    });
}

// Écouter l'événement de soumission du formulaire
const form = document.querySelector('form');
form.addEventListener('submit', bookingSubmitted);