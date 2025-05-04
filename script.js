document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Navigation Toggle ---
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when a link is clicked
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            });
        });

        // Close menu when clicking outside of it
        document.addEventListener('click', (event) => {
            // Check if the click is outside the navMenu and hamburger
            if (!navMenu.contains(event.target) && !hamburger.contains(event.target) && navMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    } else {
        console.error("Hamburger or Nav Menu element not found.");
    }


    // --- Intersection Observer for Fade-in Animations ---
    const fadeInElements = document.querySelectorAll('.fade-in');

    if (fadeInElements.length > 0) {
        const observerOptions = {
            root: null, // relative to the viewport
            rootMargin: '0px',
            threshold: 0.1 // trigger when 10% of the element is visible
        };

        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    // Optional: Stop observing once the element is visible
                    // observer.unobserve(entry.target);
                }
                // Optional: Remove 'active' class if element scrolls out of view
                // else {
                //    entry.target.classList.remove('active');
                //}
            });
        };

        const intersectionObserver = new IntersectionObserver(observerCallback, observerOptions);

        fadeInElements.forEach(el => {
            intersectionObserver.observe(el);
        });
    } else {
        console.warn("No elements with class 'fade-in' found for Intersection Observer.");
    }

    // --- Optional: Add active class to nav link based on scroll position ---
    // (More complex, can be added if precise active state highlighting is needed)

});