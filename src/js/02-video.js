import Player from '@vimeo/player';
var throttle = require('lodash.throttle');


const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(function (seconds) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(seconds));
    console.log(seconds);
}, 1000));

const savedTime = localStorage.getItem('videoplayer-current-time');
const parsedTime = JSON.parse(savedTime);
// console.log(parsedTime.seconds);

player.setCurrentTime(parsedTime.seconds).then(function (seconds) {
}).catch(function (error) {
    switch (error.name) {
        case 'RangeError':
            break;

        default:
            break;
    }
});



//*Теж працює________________________
// window.addEventListener('beforeunload', function () {
//     player.getCurrentTime().then(function (seconds) {
//         localStorage.setItem('videoplayer-current-time', seconds);
//     });
// });

// player.ready().then(function () {
//     const savedTime = localStorage.getItem('videoplayer-current-time');
//     if (savedTime !== null) {
//         player.setCurrentTime(savedTime);
//     }
// });

