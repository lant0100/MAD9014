var Long = document.querySelector('.long-rect');
var Short = document.querySelector('.short-rect');
var Stopper = false;

document.addEventListener('DOMContentLoaded', function onLoad() {
  Long.addEventListener("mouseover", function one() {
    Short.innerHTML = "Well done mouseover worked! Now take the mouse off this box and go click the right box!!!";
  });

  Long.addEventListener("mouseout", function two() {
    Short.innerHTML = "You've moused out! Almost done go click this box now!!!";
    Stopper = true;
  });

  Short.addEventListener("click", function three() {
    if (Stopper) {
      alert("Well done! Now submit!!");
    }
  });
});