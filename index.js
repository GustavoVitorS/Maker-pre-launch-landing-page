const validRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const input = document.querySelector("input");
const error = document.querySelector(".email-not-valid");

input.addEventListener("input", checkEmail);

function checkEmail() {
    if (input.value == "") {
        error.style.display = "bloc";
        input.classList.add("email-border-error");
        error.innerHTML = "Ops! Por favor, adicione seu e-mail";
    }
    else if ((input.value !== "") && (!input.value.match(validRegExp))) {
        error.style.display = "block";
        input.classList.add("email-border-error");
        error.innerHTML = "Ops! Isso não parece um endereço de e-mail";
    } 
    else {
        error.style.display = "none";
        input.classList.remove("email-border-error");
    }
}
