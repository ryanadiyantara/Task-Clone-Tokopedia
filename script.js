// Login Signin Button POPUP
let popup = document.getElementById("popup");

function openPopup() {
  popup.classList.add("open-popup");
}

function closePopup() {
  popup.classList.remove("open-popup");
}

// Toggle class active
var btnContainer = document.getElementById("button-color");
var btns = btnContainer.getElementsByClassName("btn");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// Increase Decrease quantity stok
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");

plus.addEventListener(
  "click",
  () => document.getElementById("number").textContent++
);

minus.addEventListener(
  "click",
  () => document.getElementById("number").textContent--
);
