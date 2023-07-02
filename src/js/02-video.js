const throttle = require('lodash.throttle');
import Player from '@vimeo/player';
const vimeoPlayer = document.querySelector('iframe')
const player = new Player(vimeoPlayer);

const onPlay = throttle(function(data) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(data.seconds));
    
}, 1000);

player.on('timeupdate', onPlay);
const counter = JSON.parse(localStorage.getItem("videoplayer-current-time")) ?? 0;
player.setCurrentTime(counter);
