const lyrics = `Dekho Na Kaisi❤️
Ijaazat Mili Hai..
Ek Doosre Mein 🫶
Hifaazat Mili Hai 🫠
Jeene ki Saari
Zaroorat Mili Hai 🌍
Ye Jaam Hi Hai Jaise Hai
Yunhi Hamesha-Hamesha Rahe Jis Tarah
Shaam-O-Subah
Tu`;

const textEl = document.getElementById('lyrics-text');
const playBtn = document.getElementById('playBtn');
const audio = document.getElementById('bgMusic');
let i = 0;

function typeWriter() {
    if (i < lyrics.length) {
        textEl.innerHTML = lyrics.substring(0, i + 1);
        i++;
        setTimeout(typeWriter, 120);
    }
}

playBtn.onclick = () => {
    if (audio.paused) {
        audio.play();
        playBtn.innerHTML = "⏸";
        i = 0; textEl.innerHTML = "";
        typeWriter();
    } else {
        audio.pause();
        playBtn.innerHTML = "▶";
    }
};

// Start automatically or on first click
window.onload = () => {
    // Some browsers block auto-play, so we wait for play button
};
