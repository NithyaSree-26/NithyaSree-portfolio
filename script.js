// NITHYA SREE PORTFOLIO JAVASCRIPT

// ================= MOBILE MENU =================
const menuBtn=document.getElementById("menuBtn");
const navMenu=document.getElementById("navMenu");
menuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});

  /* Close menu after clicking a link */
const navLinks=document.querySelectorAll("#navMenu a");
navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("active");
    });
});

// ================= PROFILE PHOTO POPUP =================
const profilePhoto=document.getElementById("profilePhoto");
const profilePopup=document.getElementById("profilePopup");
const profileClose=document.getElementById("profileClose");
profilePhoto.addEventListener("click", function () {
    profilePopup.classList.add("show");
});
profileClose.addEventListener("click", function () {
    profilePopup.classList.remove("show");
});

  /* Close popup when clicking outside the image */
profilePopup.addEventListener("click", function (event) {
    if (event.target === profilePopup) {
        profilePopup.classList.remove("show");
    }
});

// ================= SCROLL REVEAL =================
const revealElements=document.querySelectorAll(".reveal");
const observer=new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
},{threshold: 0.12});
revealElements.forEach(
    function (element) {
        observer.observe(element);
    }
);

// ================= BACK TO TOP =================
const topBtn=document.getElementById("topBtn");
window.addEventListener("scroll",function () {
    if (window.scrollY > 500) {
        topBtn.style.display="flex";
        topBtn.style.alignItems="center";

            topBtn.style.justifyContent =
                "center";

        }

        else {

            topBtn.style.display =
                "none";

        }

    }

);


topBtn.addEventListener(

    "click",

    function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }

);


// ================= CURRENT YEAR =================

document.getElementById("year").textContent =
    new Date().getFullYear();