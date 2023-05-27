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

// Validation des champs
const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const errors = document.querySelectorAll(".error");

    for(let i = 0; i < errors.length; i++) {
        errors[i].style.display = "none";
    }

    const guests = document.getElementById("guests").value;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    // console.log("guests :", guests);
    // console.log("name :", name);
    // console.log("email :", email);
    // console.log("phone :", phone);

    let nameOk = true;
    let emailOk = true;
    let phoneOk = true;

    // Validation du nom
    if(name.length < 3) {
        nameOk = false;
        document.getElementById("nameError").textContent = "Le nom doit contenir au moins 3 caractères";
        document.getElementById("nameError").style.display = "block";
    }
    
    if(name.length > 8) {
        nameOk = false;
        document.getElementById("nameError").textContent = "Le nom ne doit pas contenir plus de 8 caractères";
        document.getElementById("nameError").style.display = "block";
    }

    // Validation de l'email
    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/i;

    if (!regexEmail.test(email)) {
        emailOk = false;
        document.getElementById("emailError").textContent = "L'email est invalide'";
        document.getElementById("emailError").style.display = "block";
    }

    // Validation du téléphone
    const regexPhone = /^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/gm;

    if (!regexPhone.test(phone)) {
        phoneOk = false;
        document.getElementById("phoneError").textContent = "Le numéro de téléphone est invalide";
        document.getElementById("phoneError").style.display = "block";
    }

    // Si tous les champs sont ok => Modale
    if (nameOk && emailOk && phoneOk) {
        bookingSubmitted();
    }
    else {
        document.getElementById("submitError").textContent = "Merci de remplir tous les champs";
        document.getElementById("submitError").style.display = "block";
    }

});

// Modale
function bookingSubmitted() {
    document.getElementById('modal').style.display = 'block';
}

// Écouter l'événement de soumission du formulaire
// form.addEventListener('submit', bookingSubmitted);

// Fermer la fenêtre modale lorsque l'utilisateur clique sur le bouton de fermeture
document.querySelector('.close-modal').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';

    // Réinitialiser les champs du formulaire
    form.reset();
});


// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   // Validation de l'adresse email
//   const emailValue = emailInput.value.trim();
//   if (!validator.isEmail(emailValue)) {
//     showError(emailInput, "Le mail n'est pas valide");
//     return;
//   }

  

//   // Les inputs sont valides, vous pouvez procéder à la soumission du formulaire
//   const data = {
//     email: emailValue,
//     guestsNumber: parseInt(guestsValue),
//   };
//   console.log(data);

//   // Vider les inputs après validation
//   form.reset();

//   // Afficher un message de succès
//   alert("Inscription validée !");
// });

// Fonction de validation du nombre de personnes (inchangée)
// function validateGuestsNumber(number) {
//   const parsedNumber = parseInt(number);
//   return !isNaN(parsedNumber) && parsedNumber > 0;
// }

// // Fonction pour afficher un message d'erreur à côté de l'input (inchangée)
// function showError(input, message) {
//   const container = input.parentElement;
//   const errorSpan = container.querySelector("span");

//   container.classList.add("error");
//   errorSpan.textContent = message;
// }

// // Écouter l'événement de fermeture de la modale (inchangé)
// document.querySelector('.close-modal').addEventListener('click', function() {
//   document.getElementById('modal').style.display = 'none';
// });



