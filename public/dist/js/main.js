// Открытие и закрытие подменю по клику
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Закрытие подменю по клику за его пределами
window.onclick = function (e) {
  if (!e.target.matches(".dropbtn")) {
    var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains("show")) {
      myDropdown.classList.remove("show");
    }
  }
};

// МОБИЛЬНОЕ МЕНЮ
// Кнопка меню - burger-menu
var menuButton = $(`.menu-button`);
menuButton.on(`click`, function () {
  $(`.navbar__menu-burger`).toggleClass(`navbar__menu-burger--visible`);
});

// Закрытие меню по клику на ссылку
$(".navbar__menu-item").on("click", closeMenu);

function closeMenu() {
  $(".navbar__menu-burger").removeClass("navbar__menu-burger--visible");
}

// Открытие и закрытие подменю по клику
$(".dropbtn").on("click", openMenu);

function openMenu() {
  $(".dropdown-content").toggleClass("dropdown-content--visible");
}

// Закрытие подменю по клику на ссылку
$(".dropdown-content__link").on("click", closeMenu);

function closeMenu() {
  $(".dropdown-content").removeClass("dropdown-content--visible");
}// Закрытие подменю

function closeMenu() {
  $(".navbar__menu-burger").removeClass("navbar__menu-burger--visible");
} // Закрытие меню

// Слайдер
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  slidesPerGroup: 1,
  initialSlide: null,
  loop: true,
  loopedSlides: 0,
  allowTouchMove: false,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  mousewheel: {
    invert: true,
  },
});
