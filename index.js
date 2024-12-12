// your code goes // Fade-in logic
window.onload = function () {
    const loader = document.getElementById('loader');
    const content = document.getElementById('content');

    setTimeout(() => {
        loader.style.opacity = '0';
        loader.style.transition = 'opacity 1s ease';

        setTimeout(() => {
            loader.style.display = 'none';
            content.style.display = 'block'; // Show the content
            content.style.opacity = '1';
            content.style.transition = 'opacity 1s ease';
        }, 1000); // Wait for fade-out to complete
    }, 2000); // Loader stays visible for 2 seconds
};

// Countdown timer logic
const targetTime = new Date('2025-01-23T00:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetTime - now;

    if (timeLeft <= 0) {
        document.getElementById('countdownTimer').textContent = "00:00:00";
        clearInterval(interval);
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('countdownTimer').textContent =
        `${days}d ${hours.toString().padStart(2, '0')}h ${minutes.toString().padStart(2, '0')}m ${seconds.toString().padStart(2, '0')}s`;
}

updateCountdown();
const interval = setInterval(updateCountdown, 1000);

// Button and arrows logic
const links = [
    "https://open.spotify.com/artist/5NDkkVXbPJ8VG8PCr73Zpo",
    "https://www.youtube.com/@srock303",
    "https://www.instagram.com/inyato.band/",
    "https://soundcloud.com/limewirearchive"
];
const colors = ["green", "red", "purple", "orange"];
const platformNames = ["Spotify", "YouTube", "Instagram", "SoundCloud"];

let currentIndex = 0;

function updateLink(index) {
    const spotifyButton = document.getElementById('spotifyButton');
    spotifyButton.href = links[index];
    spotifyButton.style.backgroundColor = colors[index];
    spotifyButton.textContent = platformNames[index];
}

document.getElementById('leftArrow').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + links.length) % links.length;
    updateLink(currentIndex);
});

document.getElementById('rightArrow').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % links.length;
    updateLink(currentIndex);
});
here
