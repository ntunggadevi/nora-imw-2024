// Nora Tunggadevi
// 3190797
// Prof. Peter Ha
// Interactive Media Web (GDES-3091-501)
// Mar 11,2024

document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("myAudio");
    const next = document.getElementById("next");
    let currentSongIndex = 0;
    const songs = ["music/classical.mp3", "music/rock.mp3", "music/pop.mp3"]; // Add more songs as needed

    next.addEventListener("click", function () {
        currentSongIndex++;
        if (currentSongIndex >= songs.length) {
            currentSongIndex = 0;
        }
        playNextSong();
    });

    function playNextSong() {
        audio.src = songs[currentSongIndex];
        audio.play();
    }
});
