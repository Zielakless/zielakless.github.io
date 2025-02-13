var index = 0,
    aboutMe = "My name is Chris, also known as \"Zielak\" - a 21yo full-stack developer living in Poland. I'm developing various things as a hobby, like HTML websites, Node.JS apps, Discord bots, iOS jailbreak tweaks, Unity games and many more. I love minimalistic and simple things; if you love too, check out my projects - you might like some!";

typeWrite = () => {
    if(index < aboutMe.length) {
        document.getElementById(`typeWriter`).textContent += aboutMe.charAt(index);

        index++;

        setTimeout(typeWrite, 75);
    }
}

typeWrite();

copyData = (text) => navigator.clipboard.writeText(text);

var backToTopButton = document.getElementById(`backToTop`);

window.onscroll = () => backToTopButton.style.display = (document.documentElement.scrollTop > 1) ? `flex` : `none`;

var firstPlay = true;

musicPlayer = () => {
    var musicPlayer = document.getElementById(`musicPlayer`);

    if(!musicPlayer.paused) {
        musicPlayer.pause();
        musicIcon.className = `fa-solid fa-play`;
    } else if(!firstPlay && musicPlayer.paused) {
        musicPlayer.play();
        musicIcon.className = `fa-solid fa-pause`;
    } else if(firstPlay && musicPlayer.paused) {
        musicPlayer.currentTime = 54;
        musicPlayer.play();
        musicIcon.className = `fa-solid fa-pause`;
    }
}

backToTop = () => document.documentElement.scrollTop = 0;