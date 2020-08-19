/*sessionStorage.clear();*/
var nav = document.getElementById("sidebar");
var navcont = document.getElementById("sidenavcontent");
var bodycont = document.getElementById("main");
var navbutton = document.getElementById("navbtnicon");

sideNavStatus = sessionStorage.getItem('sideNavStatus');
if (sideNavStatus == null) {
  sideNavStatus = 'on';
}
if (sideNavStatus == 'on') {
  navOn();
} else if (sideNavStatus == 'off') {
  navOff();
} else {
  navOn();
}

function navOn() {
  nav.style.width = '20em';
  nav.style.backgroundColor = '#f7aab3';
  nav.style.boxShadow = '5px 10px 5px #d4abc1';
  nav.style.opacity = 1;

  navbutton.style.color = 'white';
  navcont.style.visibility = 'visible';
  bodycont.style.marginLeft = '24em';

  navbutton.text = '\u{2715}';

  sessionStorage.setItem("sideNavStatus", 'on');
  sideNavStatus = sessionStorage.getItem('sideNavStatus');
}

function navOff() {
  nav.style.width = '6em';
  nav.style.backgroundColor = 'white';
  nav.style.boxShadow = 'none';
  nav.style.opacity = 1;

  navbutton.style.color = '#f7aab3';
  navcont.style.visibility = 'hidden';
  bodycont.style.marginLeft = '10em';

  navbutton.text = '\u{2630}';

  sessionStorage.setItem("sideNavStatus", 'off');
  sideNavStatus = sessionStorage.getItem('sideNavStatus');
}

function loadNavStatus() {
  if (sideNavStatus == 'on') {
    navOff();
  } else if (sideNavStatus == 'off') {
    navOn();
  }
}
