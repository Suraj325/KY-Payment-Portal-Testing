document.querySelector(".minus-btn").setAttribute("disabled", "disabled");
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
    document.querySelector(".minus-btn").removeAttribute("disabled");
    document.querySelector(".minus-btn").classList.remove("disabled");
  }
  priceTotal();
}
function minus() {
  valueCount = document.getElementById("quantity").value;
  valueCount--;
  document.getElementById("quantity").value = valueCount;
  if (valueCount == 1) {
    document.querySelector(".minus-btn").setAttribute("disabled", "disabled");
  }
  priceTotal();
}
