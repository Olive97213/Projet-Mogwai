

// API meteo

let ville = 'Marseille';

// Afficher à l'entrée de la page une température d'une ville par défaut, ici Marseille
// Pour ca on appelle la fonction recevoirTemperature();

recevoirTemperature(ville);

function recevoirTemperature(ville) {


    let appid = '5dd4a3cfb9e347e4e1b4e7fd61fe21dd';

    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=' + appid + '&lang=fr&units=metric';

    let requete = new XMLHttpRequest();

    requete.open('GET', url);
    requete.responseType = 'json';
    requete.send();

    requete.onload = function () {
        console.log(requete);
        if (requete.readyState == XMLHttpRequest.DONE) {
            if (requete.status === 200) {
                let temp = requete.response.main.temp;
                let ville = requete.response.name;
                let icone = requete.response.weather[0].icon;
                let min = requete.response.main.temp_min;
                let max = requete.response.main.temp_max;

                let newDiv = document.createElement('div');
                newDiv.innerHTML = '<p>Min : <span class="text-primary font-weight-bold">' + min + '°C</span>' + '</p> <p>Max : <span class="text-danger font-weight-bold"> ' + max + '°C</span></p>';

                let img = document.createElement('img');
                img.src = 'https://openweathermap.org/img/wn/' + icone + '@2x.png';

                let selectVille = document.querySelector('#ville')
                selectVille.innerHTML = '<h2>' + ville + '</h2>';

                selectVille.append(img);
                selectVille.append(newDiv);

                let selectTemp = document.querySelector('#temperature_label')
                selectTemp.textContent = temp;
            }
            else {
                alert('Un problème est intervenu, merci de ressaisir une nouvelle ville ou revenir plus tard.');
            }
        }

    }
}

let bouton = document.querySelector('#changer');
bouton.addEventListener('click', () => {

    let villeChoisie = ville;

    villeChoisie = prompt('Quelle ville souhaitez-vous choisir ?');
    recevoirTemperature(villeChoisie);
})




// menu burger

const logo = document.querySelector(".logo");
const logoTwo = document.querySelector(".logo-two");
const menuBurger = document.querySelector(".menu-burger");
const imageMeteo = document.querySelector(".image-meteo");
const container = document.querySelector(".container");
const navLinkTwo = document.querySelector(".nav-link-two");
const imageMeteoTwo = document.querySelector(".image-meteo-two");
const textCenter = document.querySelector(".text-center");

// const navLink = document.querySelector(".nav-link");


logoTwo.onclick = function () {
    logoTwo.classList.toggle("active");
}


logoTwo.addEventListener("click", () => {

    menuBurger.classList.toggle("active");
    navLinkTwo.classList.toggle("active");
   
});


imageMeteo.onclick = function () {
    imageMeteo.classList.toggle("active");
}


imageMeteo.addEventListener("click", () => {

container.classList.toggle("active");
textCenter.classList.toggle("active");

   
});


imageMeteoTwo.onclick = function () {
    imageMeteoTwo.classList.toggle("active");
}


imageMeteoTwo.addEventListener("click",() => {
    container.classList.toggle("active");
    textCenter.classList.toggle("active");
});
