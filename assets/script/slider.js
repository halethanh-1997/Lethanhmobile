$(document).ready(function(){
  
    $('.slider-mobile').slick({
        infinite: false,
        slidesToScroll: 1,
        rows :2,
        draggable: true,
        slidesToShow: 5,
        autoplay: true,
        autoplaySpeed: 1000,
        focusOnSelect: true,
        swipeToSlide:true,
       
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa-solid fa-chevron-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa-solid fa-chevron-right' aria-hidden='true'></i></button>",
    });
  });
      
  $(document).ready(function(){
    $('.slider-laptop').slick({
        infinite: false,
        slidesToScroll: 1,
        rows :2,
        draggable: true,
        slidesToShow: 5,
        autoplay: true,
        autoplaySpeed: 1000,
        focusOnSelect: true,
        swipeToSlide:true,
       
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa-solid fa-chevron-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa-solid fa-chevron-right' aria-hidden='true'></i></button>",
    });
  });
      