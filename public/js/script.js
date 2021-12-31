document.addEventListener("DOMContentLoaded", function () {
  var scene = document.querySelector("a-scene");
  var splash = document.querySelector("#splash");
  scene.addEventListener("loaded", function (e) {
    splash.style.display = "none";
  });
});

document.querySelector(".minus-btn").setAttribute("disabled", "disabled");
var valueCount;
var price = document.getElementById("price").value;
function priceTotal() {
  var total = valueCount * price;
  document.getElementById("price").value = total;
}
document.querySelector(".plus-btn").addEventListener("click", function () {
  valueCount = document.getElementById("quantity").value;
  valueCount++;
  document.getElementById("quantity").value = valueCount;
  if (valueCount > 1) {
    document.querySelector(".minus-btn").removeAttribute("disabled");
    document.querySelector(".minus-btn").classList.remove("disabled");
  }
  priceTotal();
});
document.querySelector(".minus-btn").addEventListener("click", function () {
  valueCount = document.getElementById("quantity").value;
  valueCount--;
  document.getElementById("quantity").value = valueCount;
  if (valueCount == 1) {
    document.querySelector(".minus-btn").setAttribute("disabled", "disabled");
  }
  priceTotal();
});
