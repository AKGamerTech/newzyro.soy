document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("background-music");
    const playButton = document.getElementById("play-button");
    const pauseButton = document.getElementById("pause-button");
    const stopButton = document.getElementById("stop-button");
    const muteButton = document.getElementById("mute-button"); 
    // Play button
    playButton.addEventListener("click", () => {
        audio.play();
    });

    // Pause button
    pauseButton.addEventListener("click", () => {
        audio.pause();
    });

    // Stop button
    stopButton.addEventListener("click", () => {
        audio.pause();
        audio.currentTime = 0; // Reset to the beginning
    });

    // Mute button
    muteButton.addEventListener("click", () => {
        audio.muted = !audio.muted; // Toggle mute
        muteButton.textContent = audio.muted ? "Unmute" : "Mute";
    });
});