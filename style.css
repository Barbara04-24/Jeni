/* RESET & FONTS STYLES */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

html {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

body {
    background-color: #0b0e14;
    /* Efek Gradasi Nebula Galaksi Ringan (Tanpa Gambar Berat) */
    background-image: 
        radial-gradient(at 10% 20%, rgba(31, 58, 86, 0.6) 0px, transparent 40%),
        radial-gradient(at 85% 15%, rgba(143, 101, 49, 0.4) 0px, transparent 45%),
        radial-gradient(at 50% 80%, rgba(90, 45, 115, 0.35) 0px, transparent 50%),
        linear-gradient(145deg, #0f1722 0%, #05080c 100%);
    background-size: cover;
    background-attachment: fixed;
    height: 100vh;
    color: #fff;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}

/* DEKORASI TABURAN BINTANG GLOWING DI BACKGROUND */
body::before {
    content: "• .  * .  •  . * . • .  * • .  * .  •  . * . • .  *";
    position: fixed;
    top: -10%;
    left: 0;
    width: 100%;
    height: 120%;
    font-size: 14px;
    letter-spacing: 40px;
    word-wrap: break-word;
    color: rgba(255, 255, 255, 0.15);
    text-shadow: 
        0 0 10px rgba(255, 255, 255, 0.5),
        200px 300px 15px rgba(204, 164, 100, 0.2);
    z-index: -1;
    pointer-events: none;
}

/* BINGKAI CONTAINER (RESPONSIVE EMULATOR & DVH LOCK) */
.phone-container {
    position: relative;
    width: 100%;
    max-width: 450px; 
    height: 100vh;
    height: 100dvh; /* Mengunci tinggi dinamis layar HP asli */
    background-color: #000;
    overflow: hidden;
    box-shadow: 0 20px 40px rgba(0,0,0,0.8);
    border-radius: 12px;
    will-change: transform;
    transform: translateZ(0); /* Akselerasi Hardware GPU */
}

/* VIDEO BACKGROUND */
.video-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}

.video-background video {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* IKON PLAY TOMBOL TENGAH */
.center-play-btn {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70px;
    height: 70px;
    background: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 28px;
    cursor: pointer;
    z-index: 5;
    transition: opacity 0.3s ease, transform 0.3s ease;
}

/* KELAS TAMBAHAN UNTUK JAVASCRIPT HIDE */
.center-play-btn.hidden {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.5);
    pointer-events: none;
}

/* LAYER OVERLAY INTERFASE KONTEN */
.overlay-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    background: linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 20%, transparent 70%, rgba(0,0,0,0.5) 100%);
}

/* HEADER LIVE */
.live-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.left-header {
    background: rgba(229, 9, 20, 0.6);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    padding: 6px 14px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    gap: 8px;
}

.badge-live { font-weight: 700; font-size: 13px; }
.streamer-name { font-size: 13px; font-weight: 500; }

.right-header {
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    padding: 6px 14px;
    border-radius: 20px;
}

.viewer-count { font-size: 13px; font-weight: 600; }
.viewer-count .text-light { font-weight: 300; color: #ccc; }

/* LIKES BADGE */
.likes-counter {
    position: absolute;
    top: 85px;
    right: 20px;
    background: rgba(0, 0, 0, 0.4);
    padding: 4px 12px;
    border-radius: 15px;
    font-size: 12px;
    font-weight: 600;
}

/* TOMBOL AKSI KANAN */
.right-actions {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.action-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
}

.action-icon {
    width: 48px;
    height: 48px;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
}

.action-item span { font-size: 12px; }

/* NOTIFIKASI POP-UP BANNER MAGENTA */
.popup-notification {
    background: linear-gradient(135deg, #d300ff 0%, #a000c8 100%);
    border-radius: 24px;
    padding: 18px;
    width: 100%;
    box-shadow: 0 10px 25px rgba(0,0,0,0.3);
    margin-bottom: 10px;
    position: relative;
}

.popup-header { display: flex; justify-content: space-between; font-weight: 700; font-size: 15px; margin-bottom: 6px; }
.popup-time { font-weight: 400; font-size: 12px; opacity: 0.8; }
.popup-body { font-size: 13px; line-height: 1.4; margin-bottom: 12px; font-weight: 500; }

.popup-buttons { display: flex; gap: 10px; }
.popup-buttons button { flex: 1; padding: 8px 0; border-radius: 20px; border: none; font-weight: 700; font-size: 12px; }
.btn-like { background: #fff; color: #a000c8; }
.btn-reply { background: rgba(255, 255, 255, 0.2); color: #fff; }

.location-badge {
    position: absolute; left: 0; bottom: -24px; background: #8e2de2; padding: 2px 10px; border-radius: 10px; font-size: 11px;
}

/* INPUT CHAT BAWAH */
.bottom-bar { width: 100%; margin-top: 20px; }
.comment-input-container {
    display: flex; align-items: center; background: rgba(0, 0, 0, 0.4); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);
    border-radius: 25px; padding: 6px 6px 6px 15px; border: 1px solid rgba(255, 255, 255, 0.1);
}
.emoji-icon { font-size: 18px; margin-right: 10px; }
.comment-input-container input { flex: 1; background: transparent; border: none; outline: none; color: #fff; font-size: 13px; }
.btn-send { background: #ff4757; color: #fff; border: none; padding: 8px 18px; border-radius: 20px; font-size: 13px; font-weight: 600; }

/* MEDIA QUERIES KHUSUS SAAT DIBUKA DI LAYAR HP (SAFE AREA ACTIVATED) */
@media (max-width: 768px) {
    .phone-container {
        max-width: 100%;
        height: 100dvh;
        border-radius: 0;
    }
    .overlay-content {
        padding-top: calc(15px + env(safe-area-inset-top)); /* Pas Poni Layar */
        padding-bottom: calc(15px + env(safe-area-inset-bottom)); /* Pas Dagu Layar */
        padding-left: 15px;
        padding-right: 15px;
    }
    .right-actions { right: 15px; }
}
