function toggleNav() {
  var nav = document.getElementById("sidebar");
  var navcont = document.getElementById("sidenavcontent")
  var bodycont = document.getElementById("main")
  var navbutton = document.getElementById("navbtnicon")

  if (nav.style.width == '6em') {
    nav.style.width = '20em';
    nav.style.backgroundColor = '#f7aab3';
    nav.style.boxShadow = '5px 10px 5px #d4abc1';
    nav.style.opacity = 1;

    navbutton.style.color = 'white';
    navcont.style.visibility = 'visible';
    bodycont.style.marginLeft = '24em';
  } else {
    nav.style.width = '6em';
    nav.style.backgroundColor = 'white';
    nav.style.boxShadow = 'none';
    nav.style.opacity = 1;

    navbutton.style.color = '#f7aab3'
    navcont.style.visibility = 'hidden';
    bodycont.style.marginLeft = '10em';
  }
}
