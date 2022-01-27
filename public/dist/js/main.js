// Открытие и закрытие подменю в шапке по клику
// function myFunction() {
//   document.getElementById("first").classList.toggle("show");
// }

// Закрытие подменю по клику за его пределами
// window.onclick = function (e) {
//   if (!e.target.matches(".dropbtn")) {
//     var myDropdown = document.getElementById("first");
//     if (myDropdown.classList.contains("show")) {
//       myDropdown.classList.remove("show");
//     }
//   }
// };

// Открытие и закрытие выпадающего списка меню по клику
const dropdowns = document.querySelectorAll(`.dropdown`);

dropdowns.forEach((dropdown) => {
  const btn = dropdown.querySelector(`.dropbtn`);
  dropdown.querySelector(`.dropdown-content`).classList.remove(`show`);

  // Клик по кнопке
  btn.addEventListener(`click`, (evt) => {
    // Список кликнутой кнопки в переменную
    const itemOpen = dropdown.querySelector(`.dropdown-content`);

    // Если у списка есть класс .show, то скрываем/показываем список
    if (itemOpen.matches(`.show`)) {
      navBarHide();
      itemOpen.classList.remove(`show`);
    } else {
      navBarHide();
      itemOpen.classList.add(`show`);
    }
  });
});

// Закрытие выпадающего списка меню, если щёлкнуть за его пределами
window.onclick = function (e) {
  if (!e.target.matches(".dropbtn")) {
    navBarHide();
  }
};

function navBarHide() {
  dropdowns.forEach((el) => {
    el.querySelector(`.dropdown-content`).classList.remove(`show`);
  });
}


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
  spaceBetween: 30,
  loop: true,
  initialSlide: 0,

  breakpoints: {
    1920: {
      slidesPerView: 4
    },
    1440: {
      slidesPerView: 4
    },
    1200: {
      slidesPerView: 4
    },
    1024: {
      slidesPerView: 4
    },
    768: {
      slidesPerView: 2
    },
    425: {
      slidesPerView: 1
    },
    375: {
      slidesPerView: 1
    },
    320: {
      slidesPerView: 1
    }
  },

  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  mousewheel: {
    invert: true,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});