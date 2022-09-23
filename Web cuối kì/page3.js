//cac function khi loadpage
function loadFunc() {
  showSlides();
  pause.style.display = "block";
  play.style.display = "none";
}
let autoPlay = setInterval(nextSlides, 3000);
var slideIndex = 1;
showSlides(slideIndex);
function nextSlides() {
  showSlides((slideIndex += 1));
}
function prevSlides() {
  showSlides((slideIndex += -1));
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
//chay play
let play = document.querySelector("#play");
play.addEventListener("click", playAuto);
function playAuto() {
  autoPlay = setInterval(nextSlides, 3000);
  pause.style.display = "block";
  play.style.display = "none";
}
//chay pause
let pause = document.querySelector("#pause");
pause.addEventListener("click", pauseAuto);
function pauseAuto() {
  clearInterval(autoPlay);
  pause.style.display = "none";
  play.style.display = "block";
}
