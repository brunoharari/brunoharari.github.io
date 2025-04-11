/*global $, jQuery, alert*/
$(document).ready(function () {

  'use strict';

  // ========================================================================= //
  //  //SMOOTH SCROLL
  // ========================================================================= //

$(document).on("scroll", onScroll);

// Unified smooth scroll for all navigation links
$('a.smoothScroll, a.internal-link, .nav-link.smoothScroll, a.smooth-scroll, .scroll-down a').on('click', function(e) {
    const href = $(this).attr('href');
    if (href?.startsWith("#")) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function() {
            $(this).removeClass('active');
            if ($(window).width() < 768) {
                $('.nav-menu').slideUp();
            }
        });

        $(this).addClass('active');

        const $target = $(this.hash);
        if ($target.length) {
            $('html, body').stop().animate({
                scrollTop: $target.offset().top - 100
            }, {
                duration: 500,
                easing: 'swing',
                complete: function() {
                    $(document).on("scroll", onScroll);
                }
            });
        }
    }
});


function onScroll(event) {
    if ($('.home').length) {
        const scrollPos = $(document).scrollTop();
        $('nav ul li a[href^="#"]').each(function() {
            const $currLink = $(this);
            const $refElement = $($currLink.attr("href"));
            if ($refElement.length && 
                $refElement.offset().top - 200 <= scrollPos && 
                $refElement.offset().top + $refElement.height() > scrollPos) {
                $('nav ul li a').removeClass('active');
                $currLink.addClass('active');
            } else {
                $currLink.removeClass('active');
            }
        });
    }
}

// Smooth scrolling is now handled by the unified jQuery handler above


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

  
  
  // Call the function when the page is fully loaded

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
$(window).on('load', function () {

  var portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-thumbnail',
    layoutMode: 'fitRows'
  });

  $('#portfolio-flters li').on('click', function () {
    $("#portfolio-flters li").removeClass('filter-active');
    $(this).addClass('filter-active');

    portfolioIsotope.isotope({ filter: $(this).data('filter') });
  });

});
