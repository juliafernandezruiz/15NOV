const menu = document.getElementById("menu");
const navbarCollapse = document.getElementById("navbarNav");

window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
 
    menu.style.borderRadius = scrollY === 0 ? '0' : '900px';

    if (scrollY > 50) { 
        menu.classList.add('scrolled');
    } else {
        menu.classList.remove('scrolled');
    }
});

navbarCollapse.addEventListener('show.bs.collapse', function () {
    menu.style.borderRadius = "30px";
});

navbarCollapse.addEventListener('hide.bs.collapse', function () {
    menu.style.borderRadius = "900px";
});

// scroll indicator
$(window).scroll(function () {
  scrollIndicator();
});

function scrollIndicator() {
  var winScroll = $(document).scrollTop();
  var height = $(document).height() - $(window).height();
  var scrolled = (winScroll / height) * 100;
  $("#bar").width(scrolled + "%");
}


document.addEventListener('DOMContentLoaded', () => {
    const $navbarBurger = document.querySelector('.navbar-burger');
    const $navbarMenu = document.querySelector('#navbarMenu');

    if ($navbarBurger) {
      $navbarBurger.addEventListener('click', () => {
        $navbarBurger.classList.toggle('is-active');
        $navbarMenu.classList.toggle('is-active');
      });
    }
  });
  document.getElementById('contactForm').addEventListener('submit'), function (e) {
    e.preventDefault(); // Prevenir el envío por defecto
    alert('Formulario enviado correctamente. ¡Gracias por tu mensaje!');
    this.reset(); // Reinicia el formulario
  }