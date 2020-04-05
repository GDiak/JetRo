$(function() {
  $(".slider__inner").slick({
    dots: false,
    arrows: true,
    asNavFor: ".slider-nav"
  });
  $(".slider-nav").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: ".slider__inner",
    dots: false,
    arrows: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 4
        }
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 455,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $(".header__menu-btn").on("click", function() {
    $(".header__menu ul").slideToggle();
  });
});
