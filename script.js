const video = document.getElementById('player');
const playBtn = document.getElementById('playBtn');

// Fungsi untuk memutar video dan menyembunyikan tombol overlay di tengah
function startVideo() {
    video.play();
    playBtn.classList.add('hidden');
}

// Deteksi klik pada tombol play besar di tengah
playBtn.addEventListener('click', startVideo);

// Memunculkan tombol kembali jika user menekan pause lewat kontrol bawaan HP
video.addEventListener('pause', () => {
    playBtn.classList.remove('hidden');
});

// Menyembunyikan tombol jika user menekan play lewat kontrol bawaan HP
video.addEventListener('play', () => {
    playBtn.classList.add('hidden');
});
