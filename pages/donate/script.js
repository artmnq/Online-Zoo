//Header PopUp//
//Header Popup//
let modal = document.querySelector(".modal-holder");
let openModal = document.querySelector("#burger");
let modalClose = document.querySelector(".modal-close");

openModal.onclick = function () {
  modal.style.display = "block";
};

modalClose.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

//Pick and Feed//

const inputNumber = document.querySelector("#donate-number");
const amountRadio = document.querySelectorAll(".amount-radio");
const amountLabel = document.querySelectorAll(".amount");
const pafLabel = document.querySelectorAll(".paf-label");

inputNumber.oninput = function () {
  if (this.value.length > 4) {
    this.value = this.value.slice(0, 4);
  }
};

pafLabel.forEach((e, index) => {
  e.addEventListener("click", () => {
    inputNumber.value = Number(amountLabel[index].innerText.slice(1, 5));
  });
});

inputNumber.addEventListener("input", () => {
  amountLabel.forEach((el, i) => {
    if (inputNumber.value === amountLabel[i].innerText.slice(1, 5)) {
      amountRadio[i].checked = true;
    } else {
      amountRadio[i].checked = false;
    }
  });
});
