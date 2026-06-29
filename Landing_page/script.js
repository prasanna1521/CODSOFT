// ===========================
// Smooth Scrolling
// ===========================

const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// ===========================
// Sticky Navbar Shadow
// ===========================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 4px 15px rgba(0,0,0,0.3)";
    } else {
        header.style.boxShadow = "none";
    }

});

// ===========================
// Scroll Animation
// ===========================

const sections = document.querySelectorAll("section");

const showSection = () => {

    const trigger = window.innerHeight * 0.85;

    sections.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if (top < trigger) {
            section.classList.add("show");
        }

    });

};

window.addEventListener("scroll", showSection);

showSection();

// ===========================
// Button Hover Effect
// ===========================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {

    btn.addEventListener("mouseover", () => {
        btn.style.transform = "scale(1.05)";
    });

    btn.addEventListener("mouseout", () => {
        btn.style.transform = "scale(1)";
    });

});

// ===========================
// Typing Effect
// ===========================

const text = "Python Programmer & Front-End Developer";

const heading = document.querySelector(".home-text h2");

let index = 0;

function typingEffect() {

    if (heading && index < text.length) {

        heading.textContent += text.charAt(index);

        index++;

        setTimeout(typingEffect, 80);

    }

}

if (heading) {

    heading.textContent = "";

    typingEffect();

}