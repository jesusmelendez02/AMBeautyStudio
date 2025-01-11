// Nav
const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");
const navLinks = document.querySelectorAll(".primary-navigation a"); // All links in the nav

navToggle.addEventListener("click", () => {
    const isVisible = nav.getAttribute("data-visible") === "true";

    // Toggle menu visibility and aria-expanded attribute based on current state
    nav.setAttribute("data-visible", !isVisible);
    navToggle.setAttribute("aria-expanded", !isVisible);

    // Add or remove no-scroll class on body to prevent/allow scrolling based on visibility
    document.body.classList.toggle("no-scroll", !isVisible);
});

// Close menu when a navigation link is clicked
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.setAttribute("data-visible", "false");
        navToggle.setAttribute("aria-expanded", "false");
        document.body.classList.remove("no-scroll"); // Allow scrolling again
    });
});


// Accordion

const accordionItems = document.querySelectorAll(".accordion-item")

accordionItems.forEach(accordionItem => {
    accordionItem.addEventListener("click", () => {
        const accordionToggle = accordionItem.querySelector(".accordion-toggle");
        const isVisible = accordionItem.getAttribute("data-visible") === "true";

        // Toggle accorxion visibility and aria-expanded attribute based on current state
        accordionToggle.setAttribute("aria-expanded", !isVisible);
        accordionItem.setAttribute("data-visible", !isVisible);


        // accordionItem.classList.toggle("active");
    });
});