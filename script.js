const player = document.getElementById('audioPlayer');

function playSong(url) {
  player.src = url;
  player.play();
}
