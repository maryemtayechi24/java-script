const xInput = document.getElementById("x");
const yInput = document.getElementById("y");
const op = document.getElementById("op");
const res = document.getElementById("res");


 function calculer() {
    document.querySelectorAll(".error").forEach(e => e.textContent="")
    const xVal = xInput.value.trim();
    const yVal =yInput.value.trim();
    let error = false;

    if (xVal === "") {
        
        xInput.parentElement.querySelector('.error').textContent= "Veuillez entrer un nombre !";
        console.log(xInput.parentElement.querySelector('.error').textContent)
        error = true;
    }
    if (yVal === "") {
        yInput.parentElement.querySelector('.error').textContent=  "Veuillez entrer un nombre !";
        error = true;
    }
    if (op.value === "/" && yVal === 0) {
            op.parentElement.querySelector('.error').textContent=  "Division par zéro impossible !";
            error = true;
        }
    if(error==false)
        { let result;
          x=parseInt(xVal)
          y=parseInt(yVal)
         
            switch (op.value) {
                case "+":
                    result = x + y;
                    break;
                case "-":
                    result = x - y;
                    break;
                case "*":
                    result = x * y;
                    break;
                case "/":
                    result = x / y;
                    break;
            }           
            res.textContent = "Résultat : " + result;
    }
 }
function init(){
    document.querySelectorAll(".error").forEach(e => e.textContent="")
    res.textContent = "";
}