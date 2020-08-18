function togNav() {
  var nav = document.getElementById("sidebar");
  var navcont = document.getElementById("sidenavcontent")
  if (nav.style.width == '20em') {
    nav.style.width = '6em';
    nav.style.opacity = 1;
    navcont.style.visibility = "hidden";
    document.getElementById("main").style.marginLeft = "0";
  } else {
    nav.style.width = "20em";
    nav.style.opacity = 1;
    navcont.style.visibility = "visible";
    document.getElementById("main").style.marginLeft = "5.5em";
  }
}
