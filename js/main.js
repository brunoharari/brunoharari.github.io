/*global $, jQuery, alert*/
$(document).ready(function () {

  'use strict';

  // ========================================================================= //
  //  //SMOOTH SCROLL
  // ========================================================================= //


  $(document).on("scroll", onScroll);

$('a.internal-link').on('click', function (e) {
    var href = $(this).attr('href');
    if (href.startsWith("#")) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
            if ($(window).width() < 768) {
                $('.nav-menu').slideUp();
            }
        });

        $(this).addClass('active');

        var target = this.hash,
            menu = target;

        target = $(target);
        $('html, body').stop().animate({
            'scrollTop': target.offset().top - 80
        }, 500, 'swing', function () {
            window.location.hash = target.selector;
            $(document).on("scroll", onScroll);
        });
    }
});

function onScroll(event) {
    if ($('.home').length) {
        var scrollPos = $(document).scrollTop();
        $('nav ul li a[href^="#"]').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            // Resto del código de manipulación aquí
        });
    }
}


 

  // ========================================================================= //
  //  //NAVBAR SHOW - HIDE
  // ========================================================================= //


  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 200) {
      $("#main-nav, #main-nav-subpage").slideDown(200);
      $("#main-nav-subpage").removeClass('subpage-nav');
    } else {
      $("#main-nav").slideUp(200);
      $("#main-nav-subpage").hide();
      $("#main-nav-subpage").addClass('subpage-nav');
    }
  });

  // ========================================================================= //
  //  // RESPONSIVE MENU
  // ========================================================================= //

  $('.responsive').on('click', function (e) {
    $('.nav-menu').slideToggle();
  });

  // ========================================================================= //
  //  Typed Js
  // ========================================================================= //

  var typed = $(".typed");

  $(function () {
    typed.typed({
      strings: [" PROGRAMACIÓN.", "DISEÑO GRÁFICO.", "PUBLICIDAD."],
      typeSpeed: 100,
      loop: true,
    });
  });


  // ========================================================================= //
  //  Owl Carousel Services
  // ========================================================================= //


  $('.services-carousel').owlCarousel({
    autoplay: true,
    loop: true,
    margin: 0,
    dots: true,
    nav: false,
    responsiveClass: true,
    responsive: { 0: { items: 1 }, 768: { items: 2 }, 900: { items: 4 } }
  });

  // ========================================================================= //
  //  magnificPopup
  // ========================================================================= //

  var magnifPopup = function () {
    $('.popup-img').magnificPopup({
      type: 'image',
      removalDelay: 300,
      mainClass: 'mfp-with-zoom',
      gallery: {
        enabled: true
      },
      zoom: {
        enabled: true, // By default it's false, so don't forget to enable it

        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function

        // The "opener" function should return the element from which popup will be zoomed in
        // and to which popup will be scaled down
        // By defailt it looks for an image tag:
        opener: function (openerElement) {
          // openerElement is the element on which popup was initialized, in this case its <a> tag
          // you don't need to add "opener" option if this code matches your needs, it's defailt one.
          return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
      }
    });
  };


  // Call the functions
  magnifPopup();

});

// ========================================================================= //
//  Porfolio isotope and filter
// ========================================================================= //
$(window).load(function () {

  var portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-thumbnail',
    layoutMode: 'fitRows'
  });

  $('#portfolio-flters li').on('click', function () {
    $("#portfolio-flters li").removeClass('filter-active');
    $(this).addClass('filter-active');

    portfolioIsotope.isotope({ filter: $(this).data('filter') });
  });

})

// ========================================================================= //
//  Contacto Formulario
// ========================================================================= //

$("#mobile_code").intlTelInput({
	initialCountry: "auto",
	separateDialCode: true,
  geoIpLookup: callback => {
    fetch("https://ipapi.co/json")
      .then(res => res.json())
      .then(data => callback(data.country_code))
      .catch(() => callback("us"));
  },
	// utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.4/js/utils.js"
});
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact-form");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const myPhone = "+5492944297078"

    const projectType = document.getElementById("project-type").value;
    const message = document.getElementById("message").value;
    const firstName = document.getElementById("first-name").value;
    
    const phone = document.getElementById("#mobile_code");
    const iti = window.intlTelInput(phone)
    const number = iti.getNumber();
    console.log(number)

    // Crear el enlace de envío a WhatsApp con el mensaje predeterminado
    const whatsappMessage = `Hola, soy ${firstName}. Estoy interesado en un proyecto de tipo ${projectType}. Mi mensaje es: ${message}, mi telefono es ${phone}`;
    const whatsappLink = `https://wa.me/${myPhone}?text=${encodeURIComponent(whatsappMessage)}`;

    // Abrir enlace de WhatsApp
    window.open(whatsappLink);

    alert("Formulario enviado con éxito! Te contactaremos en breve.");
    contactForm.reset();
  });
});
