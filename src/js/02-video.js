// Import libraries
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// Add Vimeo Player
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

// Add lisener for timeupdate
player.on('timeupdate', function (data) {
  const currentTime = data.seconds;
  localStorage.setItem('videoplayer-current-time', JSON.stringify(currentTime));
});

// Resume video
const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime !== null) {
  player.setCurrentTime(JSON.parse(savedTime));
}
