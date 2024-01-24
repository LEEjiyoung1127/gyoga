$(document).ready(function(){
    $('.depth2,.depth2_bg,.depth2_bgbk').hide();

    $('.gnb > li').mouseenter(function(){
        $('.depth2,.depth2_bg').stop().slideDown();
        $('.depth2_bgbk').stop().fadeIn();
    });

    $('.gnb > li').mouseleave(function(){
        $('.depth2,.depth2_bg').stop().slideUp();
        $('.depth2_bgbk').stop().fadeOut();
    });

    $('.mgnb_wrap, .mdepth2').hide();

    $('.ham').click(function(){
        $('.mgnb_wrap').fadeIn();
    });

    $('.close').click(function(){
        $('.mgnb_wrap').fadeOut();
    });

    $('.mgnb > li').click(function(){
        $(this).find('.mdepth2').stop().slideDown();
        $(this).siblings().find('.mdepth2').slideUp();
    });
    
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
    console.log(e)
    })

    function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
});