document.addEventListener("DOMContentLoaded", function () {
  var scene = document.querySelector("a-scene");
  var splash = document.querySelector("#splash");
  scene.addEventListener("loaded", function (e) {
    splash.style.display = "none";
  });
});

document.querySelectorAll(".minus-btn").setAttribute("disabled", "disabled");
var valueCount;
var price = document.getElementById("price").value;
function priceTotal() {
  var total = valueCount * price;
  document.getElementById("price").value = total;
}
function plus() {
  valueCount = document.getElementById("quantity").value;
  valueCount++;
  document.getElementById("quantity").value = valueCount;
  if (valueCount > 1) {
    document.querySelectorAll(".minus-btn").removeAttribute("disabled");
    document.querySelectorAll(".minus-btn").classList.remove("disabled");
  }
  priceTotal();
}
function minus() {
  valueCount = document.getElementById("quantity").value;
  valueCount--;
  document.getElementById("quantity").value = valueCount;
  if (valueCount == 1) {
    document
      .querySelectorAll(".minus-btn")
      .setAttribute("disabled", "disabled");
  }
  priceTotal();
}
