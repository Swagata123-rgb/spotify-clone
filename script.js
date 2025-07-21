

const playBtn = document.querySelectorAll('.playercontrolicon')[2];
let isPlaying = false;

playBtn.addEventListener('click', () => {
    isPlaying = !isPlaying;
    playBtn.src = isPlaying ? './assets/pause_icon.png' : './assets/player_icon3.png';
});


