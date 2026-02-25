document.addEventListener('DOMContentLoaded', function () {
    const track = document.querySelector('.multi-scroll-track');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const totalItems = 8;
    const visibleItems = 5;
    const scrollAmount = 50 / visibleItems; // = 20 (percent)

    let currentIndex = 0;

    function updateTrackPosition() {
    
        const offset = -currentIndex * scrollAmount;
        track.style.transform = `translateX(${offset}%)`;

        
        prevBtn.disabled = currentIndex === 0;
      
        nextBtn.disabled = currentIndex === totalItems - visibleItems;
    }

    nextBtn.addEventListener('click', () => {
        if (currentIndex < totalItems - visibleItems) {
            currentIndex++;
            updateTrackPosition();
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateTrackPosition();
        }
    });

    updateTrackPosition();
});


// ====
document.addEventListener('DOMContentLoaded', function () {
    const track = document.querySelector('.multi-scroll-track1');
    const prevBtn = document.getElementById('prevBtn1');
    const nextBtn = document.getElementById('nextBtn1');
    const totalItems = 8;
    const visibleItems = 5;
    const scrollAmount = 50 / visibleItems; // = 20 (percent)

    let currentIndex = 0;

    function updateTrackPosition() {
        // Apply the transform to the track
        const offset = -currentIndex * scrollAmount;
        track.style.transform = `translateX(${offset}%)`;

        // Disable 'Previous' if at the start
        prevBtn.disabled = currentIndex === 0;
        // Disable 'Next' if the last visible image is the last item
        nextBtn.disabled = currentIndex === totalItems - visibleItems;
    }

    nextBtn.addEventListener('click', () => {
        if (currentIndex < totalItems - visibleItems) {
            currentIndex++;
            updateTrackPosition();
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateTrackPosition();
        }
    });

    // Initialize button state
    updateTrackPosition();
});




