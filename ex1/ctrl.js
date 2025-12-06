let nom = document.getElementById("nom");
let prenom = document.getElementById("prenom");
let lieu = document.getElementById("lieu");
let dateN = document.getElementById("dateN");
let sexe = document.getElementsByName("sexe");
let emploie = document.getElementById("emploie");
let phrase = document.getElementById("phrase");
function afficher() {
  document.querySelectorAll(".error").forEach((e) => (e.textContent = ""));

  let ok = true;

  if (nom.value.trim() === "") {
    nom.parentElement.querySelector(".error").textContent =
      "Le nom est obligatoire.";
    ok = false;
  }
  if (prenom.value.trim() === "") {
    prenom.parentElement.querySelector(".error").textContent =
      "Le prénom est obligatoire.";
    ok = false;
  }
  if (!sexe[0].checked && !sexe[1].checked) {
    sexe[0].parentElement.querySelector(".error").textContent =
      "Veuillez sélectionner un sexe.";
    ok = false;
  }
  if (dateN.value === "") {
    dateN.parentElement.querySelector(".error").textContent =
      "Veuillez introduire votre date de naissance.";
    ok = false;
  }

  if(calculAge()<18){
    dateN.parentElement.querySelector(".error").textContent =
    "Votre age doit être > 18 ans.";
  ok = false;
  }
  if (lieu.value === "") {
    lieu.parentElement.querySelector(".error").textContent =
      "Veuillez choisir une ville.";
    ok = false;
  }

  if (ok) {
    let msg = "Mopnsieur ";
    if (sexe[1].checked) msg = "Mme ";
    msg += `${prenom.value} ${nom.value},né(e) le ${dateN.value} à ${lieu.value}.`;
    if (emploie.checked) msg += " Actuellement vous êtes sans emploie!";
    phrase.value = msg;
  }
}
function calculAge(params) {
    let datej=new Date()
    let dn=new Date(dateN.value)
    let age= Math.floor((datej-dn)/(1000*3600*24*365));
    console.log(age)
    return age
}