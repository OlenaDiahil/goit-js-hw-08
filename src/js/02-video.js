import videoPlayer from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new videoPlayer(iframe);

const currentTime = throttle((e) => {
  localStorage.setItem("videoplayer-current-time", e.seconds);
}, 1000)

player.on('timeupdate', currentTime)

const savedTime = () => {
  const saveCurrentTime = localStorage.getItem("videoplayer-current-time");
  if (saveCurrentTime) {
    player.setCurrentTime(saveCurrentTime);
  }
}

document.addEventListener('DOMContentLoaded', savedTime)