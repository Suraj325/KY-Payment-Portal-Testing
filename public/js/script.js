var x = document.getElementsByClassName("minus-btn")[0];
x.setAttribute("disabled", "disabled");

var y = document.getElementsByClassName("minus-btn")[1];
y.setAttribute("disabled", "disabled");

var z = document.getElementsByClassName("minus-btn")[2];
z.setAttribute("disabled", "disabled");

var valueCount;
var price1 = document.getElementById("price1").value;
var price2 = document.getElementById("price2").value;
var price3 = document.getElementById("price3").value;

function priceTotal1() {
  var total = valueCount * price1;
  document.getElementById("price1").value = total;
}

function priceTotal2() {
  var total = valueCount * price2;
  document.getElementById("price2").value = total;
}

function priceTotal3() {
  var total = valueCount * price3;
  document.getElementById("price3").value = total;
}
function plus() {
  valueCount = document.getElementById("quantity1").value;
  valueCount++;
  document.getElementById("quantity1").value = valueCount;
  if (valueCount > 1) {
    x.removeAttribute("disabled");
    x.classList.remove("disabled");
  }
  priceTotal1();
}
function minus() {
  valueCount = document.getElementById("quantity1").value;
  valueCount--;
  document.getElementById("quantity1").value = valueCount;
  if (valueCount == 1) {
    x.setAttribute("disabled", "disabled");
  }
  priceTotal1();
}

function plus1() {
  valueCount = document.getElementById("quantity2").value;
  valueCount++;
  document.getElementById("quantity2").value = valueCount;
  if (valueCount > 1) {
    y.removeAttribute("disabled");
    y.classList.remove("disabled");
  }
  priceTotal2();
}
function minus1() {
  valueCount = document.getElementById("quantity2").value;
  valueCount--;
  document.getElementById("quantity2").value = valueCount;
  if (valueCount == 1) {
    y.setAttribute("disabled", "disabled");
  }
  priceTotal2();
}
function plus2() {
  valueCount = document.getElementById("quantity3").value;
  valueCount++;
  document.getElementById("quantity3").value = valueCount;
  if (valueCount > 1) {
    z.removeAttribute("disabled");
    z.classList.remove("disabled");
  }
  priceTotal3();
}
function minus2() {
  valueCount = document.getElementById("quantity3").value;
  valueCount--;
  document.getElementById("quantity3").value = valueCount;
  if (valueCount == 1) {
    z.setAttribute("disabled", "disabled");
  }
  priceTotal3();
}
