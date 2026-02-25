document.addEventListener('DOMContentLoaded', function () {
    const carouselElement = document.getElementById('flipkartCarousel');

    if (carouselElement) {
        // 1. Force animation restart for the initial slide on page load (with a small delay)
        setTimeout(() => {
            const initialActiveIndicator = carouselElement.querySelector('.carousel-indicators button.active');
            if (initialActiveIndicator) {
                const clone = initialActiveIndicator.cloneNode(true);
                initialActiveIndicator.parentNode.replaceChild(clone, initialActiveIndicator);
                // The clone will automatically get the 'active' class via Bootstrap's internal code 
                // as it was replaced in the same spot, but adding it ensures compatibility.
                clone.classList.add('active');
            }
        }, 100);

        // 2. Listen for the 'slid' event to restart the animation after every slide change
        carouselElement.addEventListener('slid.bs.carousel', function (e) {

            const indicatorsContainer = carouselElement.querySelector('.carousel-indicators');
            // e.to is the index of the new slide (0, 1, 2, etc.)
            const newActiveIndicator = indicatorsContainer.querySelector(`[data-bs-slide-to="${e.to}"]`);

            if (newActiveIndicator) {
                // Cloning and replacing the element is the reliable way to restart CSS animations.
                const newIndicatorClone = newActiveIndicator.cloneNode(true);
                newActiveIndicator.parentNode.replaceChild(newIndicatorClone, newActiveIndicator);
                newIndicatorClone.classList.add('active');
            }
        });
    }
});




//  ============
// ====....[navigation bar scroll to background color apply]
