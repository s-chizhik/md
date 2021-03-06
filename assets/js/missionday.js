function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
  
  function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.countdown_days');
    var hoursSpan = clock.querySelector('.countdown_hours');
    var minutesSpan = clock.querySelector('.countdown_minutes');
    var secondsSpan = clock.querySelector('.countdown_seconds');
  
    function updateClock() {
      var t = getTimeRemaining(endtime);
  
      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
  
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }
  
  var deadline="August 11 2018 10:00:00 GMT+0300"; //for Ukraine
  //var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); // for endless timer
  initializeClock('countdown', deadline);

  document.querySelector(".navigation").addEventListener("click", function(e) {
    // e.preventDefault();
    if (e.target.tagName === "A") {
      document.querySelectorAll(".navigation a").forEach(function(element){
        element.classList.remove("active");
      });
      e.target.classList.add("active");
    }
  })

  document.getElementById(document.documentElement.lang).classList.add("active");

  (function() {
    'use strict';
  
    var section = document.querySelectorAll("section");
    var sections = {};
    var i = 0;
  
    Array.prototype.forEach.call(section, function(e) {
      sections[e.id] = e.offsetTop;
    });
  
    window.onscroll = function() {
      var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
  
      for (i in sections) {
        if (sections[i] <= scrollPosition) {
          document.querySelector('.navigation .active').classList.remove('active');
          document.querySelector('a[href="#' + i + '"]').classList.add('active');
        }
      }
    };
  })();