var x = document.getElementsByClassName("minus-btn")[0];
x.setAttribute("disabled", "disabled");

var y = document.getElementsByClassName("minus-btn")[1];
y.setAttribute("disabled", "disabled");

var z = document.getElementsByClassName("minus-btn")[2];
z.setAttribute("disabled", "disabled");

var valueCount;
var price = document.getElementById("price").value;
function priceTotal() {
  var total = valueCount * price;
  document.getElementById("price").value = total;
}
function plus() {
  valueCount = document.getElementById("quantity1").value;
  valueCount++;
  document.getElementById("quantity1").value = valueCount;
  if (valueCount > 1) {
    x.removeAttribute("disabled");
    x.classList.remove("disabled");
  }
  priceTotal();
}
function minus() {
  valueCount = document.getElementById("quantity1").value;
  valueCount--;
  document.getElementById("quantity1").value = valueCount;
  if (valueCount == 1) {
    x.setAttribute("disabled", "disabled");
  }
  priceTotal();
}

function plus1() {
  valueCount = document.getElementById("quantity2").value;
  valueCount++;
  document.getElementById("quantity2").value = valueCount;
  if (valueCount > 1) {
    y.removeAttribute("disabled");
    y.classList.remove("disabled");
  }
  priceTotal();
}
function minus1() {
  valueCount = document.getElementById("quantity2").value;
  valueCount--;
  document.getElementById("quantity2").value = valueCount;
  if (valueCount == 1) {
    y.setAttribute("disabled", "disabled");
  }
  priceTotal();
}
function plus2() {
  valueCount = document.getElementById("quantity3").value;
  valueCount++;
  document.getElementById("quantity3").value = valueCount;
  if (valueCount > 1) {
    z.removeAttribute("disabled");
    z.classList.remove("disabled");
  }
  priceTotal();
}
function minus2() {
  valueCount = document.getElementById("quantity3").value;
  valueCount--;
  document.getElementById("quantity3").value = valueCount;
  if (valueCount == 1) {
    z.setAttribute("disabled", "disabled");
  }
  priceTotal();
}
