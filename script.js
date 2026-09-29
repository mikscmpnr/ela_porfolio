/* =========================================
   START PAGE AT TOP AFTER REFRESH
========================================= */

if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
}

window.addEventListener("load", function () {
    window.scrollTo(0, 0);
});

/* =========================================
   ELLA'S PORTFOLIO
   INTERACTIONS & ANIMATIONS
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================
       1. NAVIGATION LINKS
    ===================================== */

    const navLinks = document.querySelectorAll(".nav-links a");
    const sections = document.querySelectorAll("main section");


    /* =====================================
       2. SCROLL REVEAL
    ===================================== */

    const revealElements = document.querySelectorAll(
        ".section, .project-card, .card, .timeline-card"
    );

    revealElements.forEach(function (element) {
        element.classList.add("reveal");
    });

    const revealObserver = new IntersectionObserver(
        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach(function (element) {
        revealObserver.observe(element);
    });


    /* =====================================
       3. ACTIVE NAVIGATION
    ===================================== */

    const sectionObserver = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (!entry.isIntersecting) {
                    return;
                }

                const currentID = entry.target.id;

                navLinks.forEach(function (link) {

                    link.classList.remove("active");

                    if (
                        link.getAttribute("href") ===
                        "#" + currentID
                    ) {

                        link.classList.add("active");

                    }

                });

            });

        },
        {
            threshold: 0.45
        }
    );

    sections.forEach(function (section) {

        sectionObserver.observe(section);

    });


    /* =====================================
       4. NAVBAR SCROLL EFFECT
    ===================================== */

    const navbar = document.querySelector(".navbar");

    function updateNavbar() {

        if (window.scrollY > 30) {

            navbar.classList.add("navbar-scrolled");

        } else {

            navbar.classList.remove("navbar-scrolled");

        }

    }

    window.addEventListener("scroll", updateNavbar);

    updateNavbar();


    /* =====================================
       5. PREVENT PLACEHOLDER LINKS
       FROM JUMPING TO TOP
    ===================================== */

    const placeholderLinks =
        document.querySelectorAll('a[href="#"]');

    placeholderLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            event.preventDefault();

        });

    });

});