var backToTopButton = document.getElementById(`backToTop`);

window.onscroll = () => backToTopButton.style.display = (document.documentElement.scrollTop > 1) ? `flex` : `none`;

function musicPlayer() {
    var musicPlayer = document.getElementById(`musicPlayer`);

    if(!musicPlayer.paused) {
        musicPlayer.pause();
        musicIcon.className = "fa-solid fa-play";
    } else {
        musicPlayer.play();
        musicIcon.className = "fa-solid fa-pause";
    }
}

backToTop = () => document.documentElement.scrollTop = 0;