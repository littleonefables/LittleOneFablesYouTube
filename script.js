// Get carousel elements
const carousel = document.getElementById('video-carousel');
const videos = document.querySelectorAll('.video');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentIndex = 0; // Track current video index

// Function to update carousel position
function updateCarousel() {
    const offset = -currentIndex * 100; // Calculate translateX based on index
    carousel.style.transform = `translateX(${offset}%)`;
}

// Go to the previous video
prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = videos.length - 1; // Loop to the last video
    }
    updateCarousel();
});

// Go to the next video
nextBtn.addEventListener('click', () => {
    if (currentIndex < videos.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Loop back to the first video
    }
    updateCarousel();
});
