
  var toDate = new Date('2023-02-14');
  var toDateTime = 999;
  var daysLeft = 999;
  var hoursLeft = 999;
  var minutesLeft = 999;
  var secondsLeft = 999;
  var now = new Date().getTime();


  function init() {
    toDateTime = toDate.getTime();
    console.log(toDate);
    
    getTimeLeft();
    setInterval(() => {
      this.getTimeLeft();
    }, 1000);
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

  init();