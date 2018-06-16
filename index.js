(function () {
  function classToggle() {
    const navs = document.querySelectorAll('.nav-toggle');

    navs.forEach(nav => nav.classList.toggle('show'));
  }
  document.querySelector('.toggle').addEventListener('click', classToggle);
})();
