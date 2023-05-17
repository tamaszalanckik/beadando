let playVideo = document.getElementById("pucoloVideo")
playVideo.volume = 0.4;

function videoPlay() {
    playVideo.play();
}

function videoEnd() {
    playVideo.pause();
    playVideo.currentTime = 0;
}

