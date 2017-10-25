var navMain = document.querySelector('.site-list');
var navToggle = document.querySelector('.site-list__toggle');

navMain.classList.remove('site-list--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('site-list--closed')) {
    navMain.classList.remove('site-list--closed');
    navMain.classList.add('site-list--opened');
  } else {
    navMain.classList.add('site-list--closed');
    navMain.classList.remove('site-list--opened');
  }
});
