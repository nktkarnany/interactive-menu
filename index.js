(function () {
  function classToggle() {
    const navs = document.querySelectorAll('.nav-item');

    navs.forEach(nav => nav.classList.toggle('show'));
  }
  document.querySelector('.toggle').addEventListener('click', classToggle);
})();
