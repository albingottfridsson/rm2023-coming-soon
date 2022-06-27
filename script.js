
  // Countdown
  var toDate = new Date(2023, 0, 11, 11, 11);
  var toDateTime = 999;
  var daysLeft = 999;
  var hoursLeft = 999;
  var minutesLeft = 999;
  var secondsLeft = 999;
  var now = new Date().getTime();

  // Video player
  var videoElement;
  var soundStateButton;
  var videoStateButton;
  var muteSymbol;
  var unmuteSymbol;
  var playSymbol;
  var pauseSymbol;
  var soundState;
  var videoState;


  function init() {
    // Init time
    toDateTime = toDate.getTime();
    getTimeLeft();
    setInterval(() => {
      this.getTimeLeft();
    }, 1000);

    // Init video player
    initVideoControls();
  }

  function getTimeLeft() {
    now = new Date().getTime();
    var timeleft = this.toDateTime - this.now;
        
    daysLeft = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    hoursLeft = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutesLeft = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    secondsLeft = Math.floor((timeleft % (1000 * 60)) / 1000);

    document.querySelector('#days').innerHTML = daysLeft;
    document.querySelector('#hours').innerHTML = hoursLeft;
    document.querySelector('#minutes').innerHTML = minutesLeft;
    document.querySelector('#seconds').innerHTML = secondsLeft;
  }

  function initVideoControls() {
    videoElement = document.querySelector('#video');
    videoStateButton = document.querySelector('.video-state-button');
    soundStateButton = document.querySelector('.sound-state-button');
    muteSymbol = document.querySelector('.sound-state-button > .mute');
    unmuteSymbol = document.querySelector('.sound-state-button > .unmute');
    playSymbol = document.querySelector('.video-state-button > .play');
    pauseSymbol = document.querySelector('.video-state-button > .pause');

    // Hide mute and play
    playSymbol.classList.add('d-none');
    unmuteSymbol.classList.add('d-none');

    soundState = "muted";
    videoState = "playing";

    soundStateButton.addEventListener('click', toggleSoundState);
    videoStateButton.addEventListener('click', toggleVideoState);
  }

  function toggleSoundState() {
    soundState = soundState === 'muted' ? 'unmuted' : 'muted';

    console.log("toggling sound..." + soundState);

    if(soundState === 'unmuted') {
      videoElement.muted = false;
      unmuteSymbol.classList.remove('d-none');
      muteSymbol.classList.add('d-none');
    } else if (soundState === 'muted') {
      videoElement.muted = true;
      unmuteSymbol.classList.add('d-none');
      muteSymbol.classList.remove('d-none');
    } else {
      console.log("SHIIIIIT");
    }
  }

  function toggleVideoState() {

    videoState = videoState === 'playing' ? 'paused' : 'playing';

    console.log("Toggling video to " + videoState);

    if(videoState === 'playing') {
      videoElement.play();
      pauseSymbol.classList.remove('d-none');
      playSymbol.classList.add('d-none');
    } else if (videoState === 'paused') {
      videoElement.pause();
      pauseSymbol.classList.add('d-none');
      playSymbol.classList.remove('d-none');
    } else {
      console.log("SHIIIIIT");
    }
  }

  init();