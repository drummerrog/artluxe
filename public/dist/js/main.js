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
