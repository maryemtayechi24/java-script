const nom = document.getElementById("nom");
const prenom = document.getElementById("prenom");
const prix_clavier = document.getElementById("prix_clavier");
const qt_clavier = document.getElementById("qt_clavier");
const prix_scanner = document.getElementById("prix_scanner");
const qt_scanner = document.getElementById("qt_scanner");
const prix_souris = document.getElementById("prix_souris");
const qt_souris = document.getElementById("qt_souris");
const res =document.getElementById("res");
document.getElementById("btn_valider").addEventListener("click", () => {
    document.querySelectorAll(".error").forEach((e) => (e.textContent = ""));
    let test=true
    if (nom.value.trim() === "") {
      test = false;
      nom.parentElement.querySelector(".error").textContent =
        "veuiller introduire votre nom";
    }
    if (prenom.value.trim() === "") {
      test = false;
      prenom.parentElement.querySelector(".error").textContent =
        "veuiller introduire votre prenom";
    }
    if (prix_clavier.value === "" || Number(prix_clavier.value) < 0) {
      test = false;
      console.log( prix_clavier.parentElement)
      prix_clavier.parentElement.querySelector(".error").textContent =
        "veuiller introduire le prix de clavier";
    }

    if (prix_scanner.value === "" || Number(prix_scanner.value) < 0) {
      test = false;
      prix_scanner.parentElement.querySelector(".error").textContent =
        "veuiller introduire le prix de scanner";
    }
    if (prix_souris.value === "" || Number(prix_souris.value) < 0) {
      test = false;
      prix_souris.parentElement.querySelector(".error").textContent =
        "veuiller introduire le prix de souris";
    }
    if (qt_scanner.value === "" || Number(qt_scanner.value) < 0) {
      test = false;
      qt_scanner.parentElement.querySelector(".error").textContent =
        "veuiller introduire la qt de scanner";
    }
    if (qt_souris.value === "" || Number(qt_souris.value) < 0) {
      test = false;
      qt_souris.parentElement.querySelector(".error").textContent =
        "veuiller introduire la qt de souris";
    }
    if (qt_clavier.value === "" || Number(qt_clavier.value) < 0) {
      test = false;
      qt_clavier.parentElement.querySelector(".error").textContent =
        "veuiller introduire la qt de clavier";
    }
    if (test) {
      res.innerHTML = "";
      res.style.display = "table";
      document.getElementById("frm").style.display="none"
      let tot_souris = Number(prix_souris.value) * Number(qt_souris.value);
      let tot_clavier = Number(prix_clavier.value) * Number(qt_clavier.value);
      let tot_scanner = Number(prix_scanner.value) * Number(qt_scanner.value);

      res.innerHTML += `<caption >Facture de Mr/Mme ${nom.value} ${prenom.value}</caption>`;

      res.innerHTML += `<tr>
                        <th>Produit</th>
                        <th>Prix unitaire</th>
                        <th>Quantité</th>
                        <th>Prix</td>
                    </tr>`;
      res.innerHTML += `<tr>
                        <td>Souris</td>
                        <td>${prix_souris.value}</td>
                        <td>${qt_souris.value}</td>
                        <td>${tot_souris}</td>
                     </tr>
                     <tr>
                        <td>scanner</td>
                        <td>${prix_scanner.value}</td>
                        <td>${qt_scanner.value}</td>
                        <td>${tot_scanner}</td>
                     </tr>
                     <tr>
                        <td>clavier</td>
                        <td>${prix_clavier.value}</td>
                        <td>${qt_clavier.value}</td>
                        <td>${tot_clavier}</td>
                     </tr>
                     <tr class="total-row">
                        <th colspan=3 >Total</th>
                        <th>${tot_clavier + tot_scanner + tot_souris}</th>
                     </tr>
                     `;
    }
  });