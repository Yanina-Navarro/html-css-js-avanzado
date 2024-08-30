const scrollnav = () => {

    if (window.innerHeight * 0.8 < window.scrollY) {
        document.querySelector("nav").classList.add("scrollNav")
    } else {
        document.querySelector("nav").classList.remove("scrollNav")
    }
}

const scrollnavsecciones = () => {

    if (window.innerHeight * 0.4 < window.scrollY) {
        document.querySelector("nav").classList.add("scrollNav")
    } else {
        document.querySelector("nav").classList.remove("scrollNav")
    }
}

/*VIDEO*/

const video = document.querySelector('video');
const botonplay = document.querySelector('.botonvideoplay');
const botonpausa = document.querySelector('.botonvideopausa');
const timereproduccion = document.querySelector('.timevideo');

botonplay.addEventListener('click', () => {
    video.play();
});

botonpausa.addEventListener('click', () => {
    video.pause();
});

video.addEventListener('timeupdate', () => {
    let minutes = Math.floor(video.currentTime / 60);
    let seconds = Math.floor(video.currentTime % 60);
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    timereproduccion.textContent = `Duración Video ${minutes}:${seconds}`;
});
