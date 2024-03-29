// Import libraries
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// Add Vimeo Player
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

// Add lisener for timeupdate
player.on(
  'timeupdate',
  throttle(function (data) {
    const currentTime = data.seconds;
    localStorage.setItem('videoplayer-current-time', currentTime);
  }, 1000)
);

// Resume video
const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime !== null) {
  player.setCurrentTime(savedTime);
}
