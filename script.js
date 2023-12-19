var audio = new Audio("birthday.mp3");

function playSong() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
        audio.currentTime = 0; // Reset the audio to the beginning
    }
}
