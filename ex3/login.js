const invite = document.getElementById("invite");
const admin = document.getElementById("admin");
const login = document.getElementById("login");
const pw = document.getElementById("pw");

document.getElementById("btn_login").addEventListener("click", () => {
  document.querySelectorAll(".error").forEach((e) => (e.textContent = ""));
  test = true;
  if (!invite.checked && !admin.checked) {
    test = false;
    invite.parentElement.querySelector(".error").textContent =
      "Veuillez choisir votre mode";
  }
  if (login.value === "") {
    test = false;
    login.parentElement.querySelector(".error").textContent =
      "Veuillez introduire votre login";
  }
  if (pw.value === "") {
    test = false;
    pw.parentElement.querySelector(".error").textContent =
      "Veuillez introduire votre password";
  }
  if (invite.checked && (login.value != "user" || pw.value != "user")) {
    test = false;
    login.parentElement.querySelector(".error").textContent =
      "Veuillez vérifier vos cordonnées";
  }
  if (admin.checked && (login.value != "admin" || pw.value != "admin")) {
    test = false;
    login.parentElement.querySelector(".error").textContent =
      "Veuillez vérifier vos cordonnées";
  }
  if (test && admin.checked) alert("admin connected");
  if (test && invite.checked) alert("invité connected");
});

