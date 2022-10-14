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

  if (event.target === modalReview) {
    modalReview.style.display = "none";
    firstPopup.style.display = "none";
    secondPopup.style.display = "none";
    thirdPopup.style.display = "none";
  }
};

//Carousel Pets//

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    630: {
      slidesPerView: 2,
    },
    830: {
      slidesPerView: 3,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//Testimonials carousel//

const scrollWrapperList = document.querySelector(".testimonials-list-wrapper");
const scrollBarRange = document.querySelector("#testimonials-range");
let scroll = 0;
scrollBarRange.addEventListener("input", () => {
  let newValue = scrollBarRange.value;
  if (window.innerWidth > 1220) {
    scroll = -(newValue * 295.5) + "px";
    scrollWrapperList.style.transform = `translateX(${scroll})`;
  } else {
    scroll = -(newValue * 322) + "px";
    scrollWrapperList.style.transform = `translateX(${scroll})`;
  }
});

//Testimonials popup//

let modalReview = document.querySelector(".popup-testimonials-wrapper");

let openModalReviewFirst = document.querySelector(".first-box");
let openModalReviewSecond = document.querySelector(".second-box");
let openModalReviewThird = document.querySelector(".third-box");

let firstPopup = document.querySelector(".first-popup");
let secondPopup = document.querySelector(".second-popup");
let thirdPopup = document.querySelector(".third-popup");

let CloseReviewFirst = document.querySelector(".cross-popup-first");
let CloseReviewSecond = document.querySelector(".cross-popup-second");
let CloseReviewThird = document.querySelector(".cross-popup-third");

openModalReviewFirst.onclick = function () {
  if (window.innerWidth < 641) {
    modalReview.style.display = "block";
    firstPopup.style.display = "flex";
  }
};
openModalReviewSecond.onclick = function () {
  if (window.innerWidth < 641) {
    modalReview.style.display = "block";
    secondPopup.style.display = "flex";
  }
};
openModalReviewThird.onclick = function () {
  if (window.innerWidth < 641) {
    modalReview.style.display = "block";
    thirdPopup.style.display = "flex";
  }
};

CloseReviewFirst.onclick = function () {
  firstPopup.style.display = "none";
  modalReview.style.display = "none";
};
CloseReviewSecond.onclick = function () {
  secondPopup.style.display = "none";
  modalReview.style.display = "none";
};
CloseReviewThird.onclick = function () {
  thirdPopup.style.display = "none";
  modalReview.style.display = "none";
};
