</script>// Memastikan background berat baru dimuat setelah seluruh dokumen selesai di-render
window.addEventListener('DOMContentLoaded', () => {
    // Ganti URL di bawah dengan gambar background aslimu jika ada
    const bgUrl = "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1600&q=80"; 
    
    // Daftarkan ke body secara instan setelah dokumen siap
    document.body.style.backgroundImage = `
        radial-gradient(at 0% 0%, rgba(41, 74, 97, 0.4) 0px, transparent 50%),
        radial-gradient(at 100% 100%, rgba(139, 92, 43, 0.25) 0px, transparent 50%),
        url('${bgUrl}')`;
