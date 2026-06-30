</script>// Memastikan background berat baru dimuat setelah seluruh dokumen selesai di-render
window.addEventListener('DOMContentLoaded', () => {
    // Ganti URL di bawah dengan gambar background aslimu jika ada
    const bgUrl = "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1600&q=80"; 
    
    // Daftarkan ke body secara instan setelah dokumen siap
    document.body.style.backgroundImage = `
        radial-gradient(at 0% 0%, rgba(41, 74, 97, 0.4) 0px, transparent 50%),
        radial-gradient(at 100% 100%, rgba(139, 92, 43, 0.25) 0px, transparent 50%),
        url('${bgUrl}')`;
const video = document.getElementById('myVideo');
const playBtn = document.getElementById('playBtn');

// Fungsi untuk memutar video dan menyembunyikan tombol
function playVideo() {
    video.play();
    playBtn.classList.add('hidden'); // Menambahkan kelas CSS 'hidden' agar tombol memudar dan hilang
}

// Jalankan fungsi saat tombol play di-klik
playBtn.addEventListener('click', playVideo);

// Opsional: Jika pengguna mengklik area videonya langsung, video juga berputar dan tombol hilang
video.addEventListener('click', () => {
    if (video.paused) {
        playVideo();
    } else {
        video.pause();
        playBtn.classList.remove('hidden'); // Memunculkan tombol kembali jika video di-pause
    }
});
