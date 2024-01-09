document.addEventListener('DOMContentLoaded', function () {
  var aboutLink = document.querySelector('.nav-menu a[href="#about-section"]');

  aboutLink.addEventListener('click', function (event) {
    event.preventDefault();

    var targetSection = document.getElementById('about-section');
    var offset = targetSection.offsetTop;

    window.scrollTo({
      top: offset,
      behavior: 'smooth'
    });
  });
});


document.addEventListener('DOMContentLoaded', function () {
  var skillLink = document.querySelector('.nav-menu a[href="#skill-section"]');

  skillLink.addEventListener('click', function (event) {
    event.preventDefault();

    var targetSection = document.getElementById('skill-section');
    var offset = targetSection.offsetTop;

    window.scrollTo({
      top: offset,
      behavior: 'smooth'
    });
  });
});



document.addEventListener('DOMContentLoaded', function () {
  var educatonLink = document.querySelector('.nav-menu a[href="#education-section"]');

  educatonLink.addEventListener('click', function (event) {
    event.preventDefault();

    var targetSection = document.getElementById('education-section');
    var offset = targetSection.offsetTop;

    window.scrollTo({
      top: offset,
      behavior: 'smooth'
    });
  });
});



document.addEventListener('DOMContentLoaded', function () {
  var projectLink = document.querySelector('.nav-menu a[href="#project-section"]');

  projectLink.addEventListener('click', function (event) {
    event.preventDefault();

    var targetSection = document.getElementById('project-section');
    var offset = targetSection.offsetTop;

    window.scrollTo({
      top: offset,
      behavior: 'smooth'
    });
  });
});




document.addEventListener('DOMContentLoaded', function () {
  var designLink = document.querySelector('.nav-menu a[href="#design-section"]');

  designLink.addEventListener('click', function (event) {
    event.preventDefault();

    var targetSection = document.getElementById('design-section');
    var offset = targetSection.offsetTop;

    window.scrollTo({
      top: offset,
      behavior: 'smooth'
    });
  });
});


document.addEventListener('DOMContentLoaded', function () {
  var contactLink = document.querySelector('.nav-menu a[href="#contact-section"]');

  contactLink.addEventListener('click', function (event) {
    event.preventDefault();

    var targetSection = document.getElementById('contact-section');
    var offset = targetSection.offsetTop;

    window.scrollTo({
      top: offset,
      behavior: 'smooth'
    });
  });
});


