let tipAmt = 0;
let tipAmtPerPerson = 0;
let totalAmt = 0;
let tipPercent = 0;
let totalAmtPerPerson = 0;

let billAmt = document.querySelector(".bill-input").value;

let numberOfPeople = document.querySelector(".counter-meter").innerHTML;

btnTipElList = document.querySelectorAll(".btn-tip");

btnTipElList.forEach((btnTipEl) => {
  btnTipEl.addEventListener("click", () => {
    document.querySelector(".active-btn")?.classList.remove("active-btn");
    btnTipEl.classList.add("active-btn");
  });
});

function tip5() {
  tipPercent = 0.05;
}
function tip10() {
  tipPercent = 0.1;
}
function tip15() {
  tipPercent = 0.15;
}
function tip25() {
  tipPercent = 0.25;
}
function tip50() {
  tipPercent = 0.5;
}
function tip75() {
  tipPercent = 0.75;
}

function generateBill() {
  billAmt = document.querySelector(".bill-input").value;
  tipAmt = tipPercent * billAmt;

  if (billAmt != 0 && numberOfPeople != 0) {
    totalAmt = parseInt(billAmt) + parseInt(tipAmt);
    totalAmtPerPerson = parseInt(totalAmt) / parseInt(numberOfPeople);
    tipAmtPerPerson = tipAmt / numberOfPeople;
    document.querySelector(".total-amount-right").innerHTML =
      "₹ " + totalAmtPerPerson.toFixed(2);
    document.querySelector(".tip-amount-right").innerHTML =
      "₹ " + tipAmtPerPerson.toFixed(2);

    document.querySelector(".generate").classList.add("disabled");
    document.querySelector(".reset").classList.remove("disabled");
  } else if (billAmt == 0) {
    alert("Bill Amount can not be 0");
  } else {
    alert("Number of person can not be 0");
  }
}

function reset() {
  billAmt = 0;
  numberOfPeople = 0;
  tipPercent = 0;
  document.querySelector(".bill-input").value = billAmt;
  document.querySelector(".counter-meter").innerHTML = numberOfPeople;

  document.querySelector(".total-amount-right").innerHTML = "₹ 0.00";
  document.querySelector(".tip-amount-right").innerHTML = "₹ 0.00";

  document.querySelector(".reset").classList.add("disabled");
  document.querySelector(".generate").classList.remove("disabled");

  btnTipElList.forEach((btnTipEl) => {
    document.querySelector(".active-btn")?.classList.remove("active-btn");
  });
}

function increment() {
  numberOfPeople++;
  document.querySelector(".counter-meter").innerHTML = numberOfPeople;
}

function decrement() {
  if (numberOfPeople > 0) {
    numberOfPeople--;
  }
  document.querySelector(".counter-meter").innerHTML = numberOfPeople;
}

document
  .querySelector(".btn-counter-plus")
  .addEventListener("click", increment);

document
  .querySelector(".btn-counter-minus")
  .addEventListener("click", decrement);

document.querySelector(".btn-tip-5").addEventListener("click", tip5);
document.querySelector(".btn-tip-10").addEventListener("click", tip10);
document.querySelector(".btn-tip-15").addEventListener("click", tip15);
document.querySelector(".btn-tip-25").addEventListener("click", tip25);
document.querySelector(".btn-tip-50").addEventListener("click", tip50);
document.querySelector(".btn-tip-75").addEventListener("click", tip75);

document.querySelector(".btn-generate").addEventListener("click", generateBill);

document.querySelector(".btn-reset").addEventListener("click", reset);

// Creating Active Button State;
