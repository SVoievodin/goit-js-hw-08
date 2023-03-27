import Player from '@vimeo/player';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);
// localStorage.setItem("videoplayer-current-time", timeupdate);

player.on('play', function (timeupdate) {
    console.log(timeupdate)
    console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
    console.log('title:', title);
});
console.log(player)