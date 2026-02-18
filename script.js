const fullLyrics = `Dekho Na Kaisi❤️ Ijaazat Mili Hai..
Ek Doosre Mein 🫶 Hifaazat Mili Hai 🫠
Jeene ki Saari Zaroorat Mili Hai 🌍
Ye Jaam Hi Hai Jaise Hai
Yunhi Hamesha-Hamesha Rahe Jis Tarah
Shaam-O-Subah Tu Mera
Tere Bina Kya Mera Do Jism Jaan💗
Ek Hai Na Hona Kabhi Tu Juda
Teri Meri Kahaani🫶 Hai Baarishon Ka Paani
Banke Jo Ishq Barse Teri Meri Kahaani🫶🏻`;

const lyricsText = document.getElementById('lyrics-text');
const audio = document.getElementById('bgMusic');
const playBtn = document.getElementById('playBtn');
let index = 0;

// Typewriter Function
function typeWriter() {
    if (index < fullLyrics.length) {
        lyricsText.innerHTML = fullLyrics.substring(0, index + 1);
        index++;
        setTimeout(typeWriter, 110); // Typing speed
    }
}

// Start/Stop Logic
playBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playBtn.innerHTML = "⏸";
        lyricsText.innerHTML = "";
        index = 0;
        typeWriter();
    } else {
        audio.pause();
        playBtn.innerHTML = "▶";
    }
});

// Floating Hearts Generator
setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.body.appendChild(heart);
    
    setTimeout(() => { heart.remove(); }, 4000);
}, 450);
