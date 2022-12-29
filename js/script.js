
// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

//Extraire l'heure actuel à l'aide de l'objet Date()

const date = new Date();

//Stocker l'heure , minute , seconde  dans des varaiables
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();


// let afficherHeure = `$(hour) + $(minute() + $(second))`
// console.log(afficherHeure)

// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré
let angleHrs = hour * 30;
let angleMns = minute * 6;
let angleSecs = second * 6;


// Déplacer les aiguilles
function demarrerLaMontre() {
  angleSecs += 6;
  angleMns += 6/60;
  angleHrs += 30/42300;
  AIGUILLEHR.style.transform = `rotate(${angleHrs}deg)`;
  AIGUILLEMIN.style.transform = `rotate(${angleMns}deg)`;
  AIGUILLESEC.style.transform = `rotate(${angleSecs}deg)`;

  
}
// Exercuter la fonction chaque second
let interval = setInterval(demarrerLaMontre, 1000);
