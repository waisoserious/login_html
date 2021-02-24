// Menu Mobile
document.getElementById("menu_mobile").addEventListener("click", function () {
  document.getElementById("menuhp").style.display = "flex";
});
document.getElementById("closemenu").addEventListener("click", function () {
  document.getElementById("menuhp").style.display = "none";
});

// Login modal
var login = document.getElementById("loginModalBtn");
if (login) {
  login.addEventListener("click", function () {
    document.getElementById("loginModal").style.display = "block";
    document.getElementById("overlay").style.display = "block";
  });
}

var loginz = document.getElementById("loginQu");
if (loginz) {
  loginz.addEventListener("click", function () {
    document.getElementById("loginModal").style.display = "block";
    document.getElementById("overlay").style.display = "block";
  });
}

var closeModalLoginBtn = document.getElementById("closeModalLoginBtn");
if (closeModalLoginBtn) {
  closeModalLoginBtn.addEventListener("click", function () {
    document.getElementById("loginModal").style.display = "none";
    document.getElementById("overlay").style.display = "none";
  });
}

// Toggle Info Promo
function moreInfoPromo(e) {
  var moreInfoContainer = e.parentElement.parentElement.querySelector(
    ".info_promo"
  );
  if (moreInfoContainer) {
    if (moreInfoContainer.style.maxHeight) {
      moreInfoContainer.style.maxHeight = null;
    } else {
      moreInfoContainer.style.maxHeight = moreInfoContainer.scrollHeight + "px";
    }
  }
}

// Togel Countdown
function countList(e) {
  var moreInfoContainer = e.parentElement.parentElement.querySelector(
    ".countdown_list"
  );
  if (moreInfoContainer) {
    if (moreInfoContainer.style.maxHeight) {
      moreInfoContainer.style.maxHeight = null;
    } else {
      moreInfoContainer.style.maxHeight = moreInfoContainer.scrollHeight + "px";
    }
  }
}

// Togel Daftar
function daftarSekarang(e) {
    var moreInfoContainer = e.parentElement.parentElement.querySelector(
      ".daftarss"
    );
    if (moreInfoContainer) {
      if (moreInfoContainer.style.maxHeight) {
        moreInfoContainer.style.maxHeight = null;
      } else {
        moreInfoContainer.style.maxHeight = moreInfoContainer.scrollHeight + "px";
      }
    }
  }

// Toggle Tabbed
const tabClick = ({ target }) => {
  const {
    dataset: { id = "" },
  } = target;
  document
    .querySelectorAll(".tab")
    .forEach((t) => t.classList.remove("selected"));
  target.classList.add("selected");
  document
    .querySelectorAll(".tab-panel")
    .forEach((t) => t.classList.add("hidden"));
  document.querySelector(`#${id}`).classList.remove("hidden");
};

const bindTabs = () => {
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", tabClick);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  bindTabs();
});


  /**
   * Create Countdown to Elements
   *
   * @param {String} eventStart Time to start HH:MM:SS
   * @param {String} eventStop Time to stop HH:MM:SS
   * @param {HTMLElement} elHour
   * @param {HTMLElement} elMin
   * @param {HTMLElement} elSec
   */
  function setCountdown(eventStart, eventStop, elHour1, elHour2, elMin1, elMin2, elSec1, elSec2) {
    setInterval(function () {
      var timeZone = "Asia/Jakarta";
      var eventStartData = eventStart.split(":");
      var eventStopData = eventStop.split(":");

      var now = luxon.DateTime.local().setZone(timeZone);

      var eventStartObj = luxon.DateTime.fromObject({
        hour: parseInt(eventStartData[0]),
        minute: parseInt(eventStartData[1]),
        second: parseInt(eventStartData[2]),
        zone: timeZone,
      });

      var eventStopObj = luxon.DateTime.fromObject({
        hour: parseInt(eventStopData[0]),
        minute: parseInt(eventStopData[1]),
        second: parseInt(eventStopData[2]),
        zone: timeZone,
      });

      if (now.diff(eventStopObj) > 0) {
        eventStopObj = eventStopObj.plus({ days: 1 });
      }

      var diff = now.diff(eventStopObj, ["hours", "minutes", "seconds"]);
      
      if (now.diff(eventStopObj) < 0 && now.diff(eventStartObj) > 0 || now.diff(eventStopObj) > 0 && now.diff(eventStartObj) < 0) {
        elHour1.innerText = 0
        elHour2.innerText = 0
        elMin1.innerText = 0
        elMin2.innerText = 0
        elSec1.innerText = 0
        elSec2.innerText = 0
        return;
      }
      
      diff = diff.toObject();

      var resHour = Math.abs(diff.hours).toString().split("")
      var resMin = Math.abs(diff.minutes).toString().split("")
      var resSec = Math.abs(diff.seconds).toString().split("")
      
      elHour1.innerText = resHour[1] ? resHour[0] : 0
      elHour2.innerText =  resHour[1] ? resHour[1] : resHour[0]
      elMin1.innerText = resMin[1] ? resMin[0] : 0
      elMin2.innerText =  resMin[1] ? resMin[1] : resMin[0]
      elSec1.innerText = resSec[1] ? resSec[0] : 0
      elSec2.innerText = resSec[1] ? resSec[1] : resSec[0]
    }, 1000);
  }

  setCountdown(
    '15:05:00',
    '15:00:00',
    document.getElementById('hour1'),
    document.getElementById('hour2'),
    document.getElementById('min1'),
    document.getElementById('min2'),
    document.getElementById('sec1'),
    document.getElementById('sec2')
  )

  setCountdown(
    '20:05:00',
    '20:00:00',
    document.getElementById('hourx1'),
    document.getElementById('hourx2'),
    document.getElementById('minx1'),
    document.getElementById('minx2'),
    document.getElementById('secx1'),
    document.getElementById('secx2')
  )

  setCountdown(
    '10:05:00',
    '10:00:00',
    document.getElementById('hourz1'),
    document.getElementById('hourz2'),
    document.getElementById('minz1'),
    document.getElementById('minz2'),
    document.getElementById('secz1'),
    document.getElementById('secz2')
  )

  setCountdown(
    '10:05:00',
    '10:00:00',
    document.getElementById('houry1'),
    document.getElementById('houry2'),
    document.getElementById('miny1'),
    document.getElementById('miny2'),
    document.getElementById('secy1'),
    document.getElementById('secy2')
  )

  setCountdown(
    '10:05:00',
    '10:00:00',
    document.getElementById('hourv1'),
    document.getElementById('hourv2'),
    document.getElementById('minv1'),
    document.getElementById('minv2'),
    document.getElementById('secv1'),
    document.getElementById('secv2')
  )

  setCountdown(
    '10:05:00',
    '10:00:00',
    document.getElementById('hourb1'),
    document.getElementById('hourb2'),
    document.getElementById('minb1'),
    document.getElementById('minb2'),
    document.getElementById('secb1'),
    document.getElementById('secb2')
  )