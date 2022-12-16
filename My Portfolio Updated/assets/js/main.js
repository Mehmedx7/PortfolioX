/*=============== Active Link =============== */
const navlink = document.querySelectorAll('.nav__link');

function activeLink() {
  navlink.forEach((a) => a.classList.remove('active-link'));
  this.classList.add('active-link');
}
navlink.forEach((a) => a.addEventListener('click', activeLink));




/*=============== Mixitup Filter =============== */
let mixerProjects = mixitup('.projects__container', {
  selectors: {
    target: '.project__item',
  },
  animation: {
    duration: 300,
  },
});



/*=============== Testimonials Swiper =============== */
var testiSwiper = new Swiper(".testimonial__container", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

