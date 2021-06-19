window.onscroll = function() {scrollFunction()};

var header = document.getElementById("heading");

var sticky = header.offsetTop;

function scrollFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}