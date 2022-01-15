// Открытие и закрытие выпадающего списка меню по клику
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Закрытие выпадающего списка меню при щелчке за его пределами
window.onclick = function (e) {
  if (!e.target.matches(".dropbtn")) {
    var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains("show")) {
      myDropdown.classList.remove("show");
    }
  }
};

// Мобильное меню
// Открытие и закрытие выпадающего списка меню по клику
// var menuButton = $(`.dropbtn`);
// menuButton.on(`click`, function () {
//   $(`.dropdown-content`).toggleClass(`dropdown-content--visible`);
// });

$(".dropbtn").on("click", openMenu);

function openMenu() {
  $(".dropdown-content").toggleClass("dropdown-content--visible");
}

// Закрытие выпадающего списка меню после клика на ссылку
$(".dropdown-content__link").on("click", closeMenu);

function closeMenu() {
  $(".navbar__menu-burger").removeClass("navbar__menu-burger--visible");
}

// Кнопка меню
var menuButton = $(`.menu-button`);
menuButton.on(`click`, function () {
  $(`.navbar__menu-burger`).toggleClass(`navbar__menu-burger--visible`);
});