document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const menuList = document.querySelector(".menu-list");

  hamburger.addEventListener("click", function () {
    menuList.classList.toggle("active");
  });


  document.addEventListener("click", function (event) {
    if (
      !menuList.contains(event.target) &&
      !hamburger.contains(event.target)
    ) {
      menuList.classList.remove("active");
    }
  });
});