$(document).ready(function(){
    const cp = new Swiper('.cp',{
        speed: 1500,
        loop: false,
        slidesPerView: 1,
        spaceBetween: 10,
        scrollbar: {
          el: ".swiper-scrollbar",
          hide: false,
        },

        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },

        breakpoints: {
            900: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
        },
    });

    $('.popup_spec').hide();

    $('.more').click(function(){
      $('.popup_spec').fadeIn();
    })

    $('.close').click(function(){
      $('.popup_spec').fadeOut();
    })
});