/*navbar animation concept*/
const navItems = document.querySelectorAll(".nav-item");

let currentVisibleSection = null; // Track the currently visible section

const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
};

const observe = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const targetId = entry.target.id;

            if (currentVisibleSection !== targetId) {
                currentVisibleSection = targetId;

                navItems.forEach(item => {
                    item.classList.remove("currentclick");
                });

                const correspondingNavItem = document.querySelector(`.nav-item a[href="#${targetId}"]`);
                if (correspondingNavItem) {
                    correspondingNavItem.closest(".nav-item").classList.add("currentclick");
                }
            }
        }
    });
}, observerOptions);

// Observe each section
document.querySelectorAll("div[id^='section']").forEach(section => {
    observe.observe(section);
});






/*carousel concept*/
$(document).ready(function() {
    $('.carousel').carousel({
        padding: 200
    });
    autoplay();

    function autoplay() {
        $('.carousel').carousel('next');
        setTimeout(autoplay, 3500);
    }
});





/*popup concept*/
function show() {
    const container = document.querySelector(".works-container");
    var main = document.getElementById("main");
    if (!container.classList.contains("active")) {
        container.classList.add("active");
        document.body.style.overflow = 'hidden';
    }
}

function cancel() {
    const container = document.querySelector(".works-container");
    document.body.style.overflow = 'auto';
    container.classList.remove("active");
    container.classList.remove("active2");
    container.classList.remove("active3");
}


function show2() {
    const container = document.querySelector(".works-container");
    var main = document.getElementById("main");
    if (!container.classList.contains("active2")) {
        container.classList.add("active2");
        document.body.style.overflow = 'hidden';
    }
}

function show3() {
    const container = document.querySelector(".works-container");
    var main = document.getElementById("main");
    if (!container.classList.contains("active3")) {
        container.classList.add("active3");
        document.body.style.overflow = 'hidden';
    }
}



window.addEventListener('scroll', function() {

    const navbar = document.querySelector('.navbar-container');
    const home = document.querySelector('.cercle');
    const firstsection = document.querySelector('.first_vue');
    const navbarHeight = navbar.offsetHeight;
    const scrollPosition = window.scrollY;

    if (scrollPosition >= navbarHeight) {
        navbar.classList.add('sticky');
        firstsection.classList.add('under-navbar');
        home.classList.add('ssticky');
    } else {
        navbar.classList.remove('sticky');
        home.classList.remove('ssticky');
        firstsection.classList.remove('under-navbar');
    }
});




document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-item a");

    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();

            const targetId = link.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offsetTop = targetSection.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
});





const backToTopButton = document.getElementById('back-to-top-btn');

backToTopButton.addEventListener('click', () => {
    const navItems = document.querySelectorAll(".nav-item");
    navItems.forEach(item => {

        item.classList.remove("currentclick");


    });

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});



const catalogue = document.querySelectorAll('.catalogue');

catalogue.forEach(element => {
    element.addEventListener('click', () => {
        window.open(element.src, '_blank');
    });
});






const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            animateNumbers(entry.target);
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const animatedelements = document.querySelectorAll('.hidden');
animatedelements.forEach((el) => observer.observe(el));

function animateNumbers(target) {
    let valueDisplays = target.querySelectorAll(".num");
    let duration = 2500; // Set a constant animation duration (1 second)

    valueDisplays.forEach((valueDisplay) => {
        let startValue = 0;
        let endValue = parseInt(valueDisplay.getAttribute("data-val"));
        let startTime;

        function step(timestamp) {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);
            const currentValue = Math.floor(percentage * endValue);

            valueDisplay.textContent = currentValue;

            if (currentValue < endValue) {
                requestAnimationFrame(step);
            }
        }

        requestAnimationFrame(step);
    });
}