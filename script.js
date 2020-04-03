const toggle = document.getElementById('toggle');
const sideNav = document.getElementById('navbar');

//  Toggle Nav
toggle.addEventListener('click', () => {
  sideNav.classList.toggle('show-nav');
  sideNav.classList.toggle('close-nav');
  toggle.classList.toggle('open-button');
});
