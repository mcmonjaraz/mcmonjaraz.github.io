function overlayOn() {
    document.getElementById("overlay").style.display = "block"
    document.getElementById("textContainer1").style.display = "none";
    document.getElementById("textContainer2").style.display = "none";
    document.getElementById("topnav").style.display = "none";
}

function overlayOff() {
    document.getElementById("textContainer1").style.display = "block"
    document.getElementById("overlay").style.opacity = "0";
    document.getElementById("overlay").style.transition = "1s";
    document.getElementById("background").style.display = "block";
    document.getElementById("topnav").style.display = "block";

    setTimeout(function remove(){
      document.getElementById("overlay").style.display = "none";
    }, 1300);
}


overlay.onclick = function(){
  overlayOff()
};

button1.onclick = function(){
  document.getElementById("textContainer1").style.display = "block";
  document.getElementById("textContainer2").style.display = "none";
};

button2.onclick = function(){
  document.getElementById("textContainer1").style.display = "none";
  document.getElementById("textContainer2").style.display = "block";
};

// Set Overlay for first interaction
overlayOn();
