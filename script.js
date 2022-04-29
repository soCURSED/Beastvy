window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("head").style.top = "0";
  } else {
    document.getElementById("head").style.top = "-50px";
  }
}

let txt1 = document.querySelector(".foot-text1");
let txt2 = document.querySelector(".foot-text2");
let txt3 = document.querySelector(".foot-text3");
txt1.style.transition = "1s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
txt2.style.transition = "1s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
txt3.style.transition = "1s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
function mOVER() {
  txt1.style.color = "#900000";
}
function mOUT() {
  txt1.style.color = "black";
}
function mOVER2() {
  txt2.style.color = "#900000";
}
function mOUT2() {
  txt2.style.color = "black";
}
function mOVER3() {
  txt3.style.color = "#900000";
}
function mOUT3() {
  txt3.style.color = "black";
}

const boxes = document.querySelectorAll(".card");

window.addEventListener("scroll", check_animation);

check_animation();

function check_animation() {
  const trigger = (window.innerHeight / 6) * 4;

  boxes.forEach((card) => {
    console.log(card);
    const top = card.getBoundingClientRect().top;

    if (trigger > top) {
      card.classList.add("card_show");
    } else {
      card.classList.remove("card_show");
    }
  });
}
