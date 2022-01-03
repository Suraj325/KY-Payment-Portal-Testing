document.addEventListener("DOMContentLoaded", function () {
  var scene = document.querySelector("a-scene");
  var splash = document.querySelector("#splash");
  scene.addEventListener("loaded", function (e) {
    splash.style.display = "none";
  });
});

document.querySelector(".minus-btn1").setAttribute("disabled", "disabled");
document.querySelector(".minus-btn2").setAttribute("disabled", "disabled");
document.querySelector(".minus-btn3").setAttribute("disabled", "disabled");

var valueCount;
var price = document.getElementById("price").value;
function priceTotal() {
  var total = valueCount * price;
  document.getElementById("price").value = total;
}
//btn1
function plus() {
  valueCount = document.getElementById("quantity").value;
  valueCount++;
  document.getElementById("quantity").value = valueCount;
  if (valueCount > 1) {
    document.querySelector(".minus-btn1").removeAttribute("disabled");
    document.querySelector(".minus-btn1").classList.remove("disabled");
  }
  priceTotal();
}
function minus() {
  valueCount = document.getElementById("quantity").value;
  valueCount--;
  document.getElementById("quantity").value = valueCount;
  if (valueCount == 1) {
    document.querySelector(".minus-btn1").setAttribute("disabled", "disabled");
  }
  priceTotal();
}
//btn2
function plus() {
  valueCount = document.getElementById("quantity").value;
  valueCount++;
  document.getElementById("quantity").value = valueCount;
  if (valueCount > 1) {
    document.querySelector(".minus-btn2").removeAttribute("disabled");
    document.querySelector(".minus-btn2").classList.remove("disabled");
  }
  priceTotal();
}
function minus() {
  valueCount = document.getElementById("quantity").value;
  valueCount--;
  document.getElementById("quantity").value = valueCount;
  if (valueCount == 1) {
    document.querySelector(".minus-btn2").setAttribute("disabled", "disabled");
  }
  priceTotal();
}
//btn3
function plus() {
  valueCount = document.getElementById("quantity").value;
  valueCount++;
  document.getElementById("quantity").value = valueCount;
  if (valueCount > 1) {
    document.querySelector(".minus-btn3").removeAttribute("disabled");
    document.querySelector(".minus-btn3").classList.remove("disabled");
  }
  priceTotal();
}
function minus() {
  valueCount = document.getElementById("quantity").value;
  valueCount--;
  document.getElementById("quantity").value = valueCount;
  if (valueCount == 1) {
    document.querySelector(".minus-btn3").setAttribute("disabled", "disabled");
  }
  priceTotal();
}
