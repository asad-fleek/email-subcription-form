const form = document.querySelector("form");
const emailInput = document.querySelector('input[type="email"]');
const message = document.querySelector("span");

let storedEmails = JSON.parse(localStorage.getItem("emails")) || [];


form.addEventListener("submit", function (e) {
    e.preventDefault(); 
    const email = emailInput.value;

    
    storedEmails.push(email);

    localStorage.setItem("emails", JSON.stringify(storedEmails));

    message.style.display = "block";

    emailInput.value = "";
});