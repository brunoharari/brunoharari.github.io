/*global $, jQuery, alert*/
$(document).ready(function () {
  'use strict';

  // ========================================================================= //
  //  Smooth Scroll
  // ========================================================================= //
  $(document).on("scroll", onScroll);

  $('a.smoothScroll, a.internal-link, .nav-link.smoothScroll, a.smooth-scroll, .scroll-down a').on('click', function (e) {
    const href = $(this).attr('href');
    if (href?.startsWith("#")) {
      e.preventDefault();
      $(document).off("scroll");

      $('a').removeClass('active');
      if ($(window).width() < 768) {
        $('.nav-menu').slideUp();
      }

      $(this).addClass('active');

      const $target = $(this.hash);
      if ($target.length) {
        $('html, body').stop().animate({
          scrollTop: $target.offset().top - 100
        }, {
          duration: 500,
          easing: 'swing',
          complete: function () {
            $(document).on("scroll", onScroll);
          }
        });
      }
    }
  });

  function onScroll(event) {
    if ($('.home').length) {
      const scrollPos = $(document).scrollTop();
      $('nav ul li a[href^="#"]').each(function () {
        const $currLink = $(this);
        const $refElement = $($currLink.attr("href"));
        if (
          $refElement.length &&
          $refElement.offset().top - 200 <= scrollPos &&
          $refElement.offset().top + $refElement.height() > scrollPos
        ) {
          $('nav ul li a').removeClass('active');
          $currLink.addClass('active');
        } else {
          $currLink.removeClass('active');
        }
      });
    }
  }

  // ========================================================================= //
  //  Typed.js
  // ========================================================================= //
  var typed = $(".typed");

  if (typed.length) {
    var pageName = window.location.pathname.split('/').pop();
    var strings = (pageName === 'index-eng.html')
      ? [" PROGRAMMING.", "GRAPHIC DESIGN.", "ADVERTISING."]
      : [" PROGRAMACIÓN.", "DISEÑO GRÁFICO.", "PUBLICIDAD."];

    typed.typed({
      strings: strings,
      typeSpeed: 100,
      loop: true,
    });
  }

  // ========================================================================= //
  //  Owl Carousel
  // ========================================================================= //
  $('.services-carousel').owlCarousel({
    autoplay: true,
    loop: true,
    margin: 0,
    dots: true,
    nav: false,
    responsiveClass: true,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      900: { items: 4 }
    }
  });

  // ========================================================================= //
  //  Magnific Popup
  // ========================================================================= //
  const projects = [
    {
      id: "1",
      image: "images/portfolio/1.jpg",
      title: "Cómo ser un superhéroe en la vida real. ",
      description: "Diseño del Libro del Influencer Español, Fran Pascual.",
      category: "Mockups"
    },
    {
      id: "2",
      image: "images/portfolio/2.jpg",
      title: "Diseño de Producto",
      description: "Creación de producto y diseño para la marca del influencer Español Fran Pascual.",
      category: "Mockups"
    },
    {
      id: "3",
      image: "images/portfolio/3.jpg",
      title: "Diseño de Producto",
      description: "Creación de producto y diseño para la marca del influencer Español Fran Pascual.",
      category: "Mockups"
    },
    {
      id: "4",
      image: "images/portfolio/4.jpg",
      title: "Diseño de Logotipo: MVA",
      description: "Creación de un logotipo para la marca de la inmobiliaria MVA.",
      category: "Marcas"
    },
    {
      id: "5",
      image: "images/portfolio/5.jpg",
      title: "Diseño de Logotipo: Octopus",
      description: "Creación de un logotipo para la marca Octopus.",
      category: "Marcas"
    },
    {
      id: "6",
      image: "images/portfolio/6.png",
      title: "Página Web: Patagonia Alquileres",
      description: "Creación de una Página Web para Patagonia Alquileres, en el cual se muestra la información de la inmobiliaria y sus propiedades.",
      category: "Páginas Web"
    },
    {
      id: "7",
      image: "images/portfolio/7.png",
      title: "Página Web: OIS Influsion Spiral",
      description: "Creación de una Página Web para OIS Infusion Spiral, Tienda de Florida, Estados Unidos.",
      category: "Páginas Web"
    },
    {
      id: "8",
      image: "images/portfolio/8.png",
      title: "Página Web: Destino VLA",
      description: "Creación de una Página Web para Destino VLA, un programa de turismo de la patagonia",
      category: "Páginas Web"
    },
    {
      id: "9",
      image: "images/portfolio/9.png",
      title: "Página Web: Productora Ruta 40",
      description: "Creación de una Página Web para la Productora Ruta 40.",
      category: "Páginas Web"
    },
    {
      id: "10",
      image: "images/portfolio/10.png",
      title: "Página Web: Estudio Posse de Leonardis",
      description: "Creación de una Página Web para el Estudio de Abogados.",
      category: "Páginas Web"
    },
    {
      id: "11",
      image: "images/portfolio/11.png",
      title: "Página Web: Creativistas",
      description: "Creación de una Página Web para la Productora Audiovisual Creativistas.",
      category: "Páginas Web"
    },
    {
      id: "12",
      image: "images/portfolio/12.png",
      title: "Página Web: EcoAustral",
      description: "Creación de una Página Web para la venta de productos solares y gestor interno de productos.",
      category: "Páginas Web"
    }
  ];
  
  
  var magnifPopup = function () {
    $('.popup-img').magnificPopup({
      type: 'inline',
      removalDelay: 300,
      mainClass: 'mfp-with-zoom',
      gallery: {
        enabled: true
      },
      callbacks: {
        elementParse: function (item) {
          const project = projects.find(p => p.image === item.src);
          if (project) {
            item.src = `<div class="white-popup">
              <img src="${project.image}" class="img-fluid mb-3"/>
              <h1 class="project-title">${project.title}</h1>
              <p>${project.description}</p>
              <p class="project-category">Categoría: ${project.category}</p>
            </div>`;
            item.type = 'inline';
          }
        }
      }
    });
  };
  magnifPopup();
});

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
