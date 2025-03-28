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
            'scrollTop': target.offset().top - 100
        }, 500, 'swing', function () {
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


  // ========================================================================= //
  //  // RESPONSIVE MENU
  // ========================================================================= //



  // ========================================================================= //
  //  Typed Js
  // ========================================================================= //

  var typed = $(".typed");

  $(function () {
    var pageName = window.location.pathname.split('/').pop(); // Get the last part of the URL
    
    // Set strings based on the page name
    var strings = [];
    if (pageName === 'index-eng.html') {
      strings = [" PROGRAMMING.", "GRAPHIC DESIGN.", "ADVERTISING."]; // English strings
    } else {
      strings = [" PROGRAMACIÓN.", "DISEÑO GRÁFICO.", "PUBLICIDAD."]; // Default to Spanish strings
    }
    
    typed.typed({
      strings: strings,
      typeSpeed: 100,
      loop: true,
    });
  });

  function redirectToCorrectIndex() {
    var language = window.navigator.language || window.navigator.userLanguage;
  
    // Extract the current page name from the URL
    var currentPage = window.location.pathname.split('/').pop();
  
    if (language === 'en' && currentPage !== 'index-eng.html') {
      window.location.href = 'index-eng.html';
    } else if (language !== 'en' && currentPage !== 'index.html') {
      window.location.href = 'index.html';
    }
  }
  
  // Call the function when the page is fully loaded
  document.addEventListener('DOMContentLoaded', redirectToCorrectIndex);
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

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });
});





