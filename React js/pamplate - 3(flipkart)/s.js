// ====....[navigation bar scroll to background color apply]
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    const navbar = document.getElementById("navbar");
    const navbar1 = document.getElementById("navbar1");
    // Define the scroll distance before the color change (e.g., 50 pixels)
    const scrollThreshold = 20;

    if (document.body.scrollTop > scrollThreshold || document.documentElement.scrollTop > scrollThreshold) {
        // User has scrolled down past the threshold
        navbar.classList.add("scrolled");
        navbar1.classList.add("search2");

    } else {
        // User is at the top of the page
        navbar.classList.remove("scrolled");
        navbar1.classList.remove("search2");
    }
}

// ====
