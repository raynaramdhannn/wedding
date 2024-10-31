// Fungsi untuk membuka undangan
function openInvitation() {
    const overlay = document.getElementById('overlay');
    overlay.style.opacity = '0';
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 500);
}

// Music Control
let isPlaying = false;
const audio = document.getElementById('myAudio');
const musicButton = document.getElementById('musicButton');

function toggleMusic() {
    if (isPlaying) {
        audio.pause();
        musicButton.classList.remove('playing');
    } else {
        audio.play();
        musicButton.classList.add('playing');
    }
    isPlaying = !isPlaying;
}

// Play music when opening invitation
function openInvitation() {
    const overlay = document.getElementById('overlay');
    overlay.style.opacity = '0';
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 500);

    // Auto play music when invitation is opened
    audio.play()
        .then(() => {
            isPlaying = true;
            musicButton.classList.add('playing');
        })
        .catch((error) => {
            console.log("Autoplay prevented:", error);
            // Browser might prevent autoplay
            isPlaying = false;
            musicButton.classList.remove('playing');
        });
}

// Handle page visibility change
document.addEventListener("visibilitychange", () => {
    if (document.hidden && isPlaying) {
        audio.pause();
        isPlaying = false;
        musicButton.classList.remove('playing');
    }
});



// Animasi scroll smooth untuk navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Handle form submission
document.getElementById('rsvpForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Di sini Anda bisa menambahkan logika untuk mengirim data form ke server
    alert('Terima kasih atas konfirmasi kehadiran Anda!');
    this.reset();
});

// Animasi fade-in saat scroll
const fadeElements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

fadeElements.forEach(element => {
    observer.observe(element);
});

// Countdown timer (opsional)
function updateCountdown() {
    const weddingDate = new Date('2024-12-15T08:00:00').getTime();
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update elemen countdown jika ada
    const countdownElement = document.querySelector('.countdown');
    if (countdownElement) {
        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
}