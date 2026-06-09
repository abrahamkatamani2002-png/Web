/* SEARCH FUNCTION */
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function () {

    let filter = searchInput.value.toLowerCase();

    let cards = document.querySelectorAll(".sport-card");

    cards.forEach(card => {

        let title = card.querySelector("h3").textContent.toLowerCase();

        if(title.includes(filter)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

});
/* REGISTER FORM VALIDATION */

const registerForm = document.getElementById("registerForm");

if(registerForm){

    registerForm.addEventListener("submit", function(e){

        e.preventDefault();

        alert("Registration Successful!");

    });

}

/* BOOKING FORM CAPTCHA */
const bookingForm = document.getElementById("bookingForm");
if (bookingForm) {

    const captchaQuestion = document.getElementById("captchaQuestion");
    let num1 = Math.floor(Math.random() * 10);
    let num2 = Math.floor(Math.random() * 10);
    let correctAnswer = num1 + num2;

    captchaQuestion.textContent = `What is ${num1} + ${num2} ?`;
    bookingForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const userAnswer = document.getElementById("captchaInput").value;
        if (parseInt(userAnswer) === correctAnswer) {
            alert("Booking Successful!");
            bookingForm.reset();
        } else {
            alert("Incorrect CAPTCHA Answer");
       
        }
    });
}

/* FAQ TOGGLE */

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {
    question.addEventListener("click", () => {
        const answer = question.nextElementSibling;
        if(answer.style.display === "block"){
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    });
});

/* VISITOR COUNTER */

document.addEventListener('DOMContentLoaded', function() {
    let visitCount = localStorage.getItem("page_view");
    if (visitCount) {
        visitCount = Number(visitCount) + 1;
    } else {
        visitCount = 1;
    }
    localStorage.setItem("page_view", visitCount);
    const visitorDisplay = document.getElementById("visitorCount");
    if(visitorDisplay){
        visitorDisplay.textContent = visitCount;
    }
});

/* HAMBURGER MENU */

const hamburger = document.getElementById('hamburger');

const navLinks = document.getElementById('navLinks');

if(hamburger && navLinks){

    hamburger.addEventListener('click', () => {

        navLinks.classList.toggle('active');

    });

}

/* SCROLL REVEAL */

function revealSections() {
    const reveals = document.querySelectorAll(".reveal");
    const windowHeight = window.innerHeight;
    
    reveals.forEach(section => {
        const revealTop = section.getBoundingClientRect().top;
        const revealPoint = 100;
        
        if(revealTop < windowHeight - revealPoint){
            section.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealSections);