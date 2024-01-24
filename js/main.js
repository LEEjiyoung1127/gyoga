$(document).ready(function(){
    //메인비주얼
    const mainvisual = new Swiper('.mainvisual',{
        effect: "fade",
        speed: 1500,
        loop: true,
        
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },

        pagination: {
        el: ".swiper-pagination",
        },

        fadeEffect : {
        crossFade : true
        },
    });


    //숫자 카운트
    gsap.registerPlugin(ScrollTrigger);
    const numbers = document.querySelectorAll('.count');
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".count",
            start: 'top 80%',
            end: 'bottom bottom',
            markers: false,
            toggleActions: 'start pause restart resume',
        },
    });

    gsap.utils.toArray('.count').forEach(function (el) {
    var target = { val: 0 }; //시작값
    tl.to(target, {
        val: el.getAttribute('data-number'), //값을 가지고 옴
        duration: 1, //도달하는 시간
        onUpdate: function () {
            el.innerText = target.val.toFixed(0); //1이 될 시에는 소수점까지 표현
        },
    });
    });

    tl.play();

    /* gsap.registerPlugin(ScrollTrigger);


    gsap.from(".count", {
        textContent: "0",
        duration: 1,
        ease: "power1.inOut",
        modifiers: {
            textContent: value => formatNumber(value, 0)
        },
        scrollTrigger: {
            trigger: ".count",
            start: "top center",
            end: "+=100",
            toggleActions: "play none restart reverse",
            markers: false
        }
    });


    function formatNumber(value, decimals) {
        let s = (+value).toLocaleString('en-US').split(".");
        return decimals ? s[0] + "." + ((s[1] || "") + "00000000").substr(0, decimals) : s[0];
    } */


    //prd 가로 슬라이드
    let sections = gsap.utils.toArray(".prd_list");

    gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: "#product",
            pin: true,
            scrub: 1.5,
            //snap: 1 / (sections.length - 1),
            start: "top 10%",
            end: "+=4000",
            markers: false,
            // end: document.querySelector("#parallax__cont").offsetWidth,
        }
    });


    //prd bg
    let bg = gsap.timeline({
    scrollTrigger: {
        start: 0,
        end: "max",
        scrub: true
    }
    });

    let txtbg = gsap.timeline({
    scrollTrigger: {
        start: "top 20%",
        end: "bottom 70%",
        scrub: true,
        markers: false
    }
    });

    txtbg.to(".menu_txt", {"--bg-color": "#fff"})
    .to(".menu_txt", {"--bg-color": "#d9d9d9"});


    bg.to("#product", {"--bg-color": "#fff"})
    .to("#product", {"--bg-color": "#d9d9d9"});

  //map tab
    $('.map_site > li:nth-child(n+2),.map_add > li:nth-child(n+2)').hide();

    $('.map_tit li').click(function(){
        $(this).addClass('on');
        $(this).siblings().removeClass('on');

       var indexNum = $(this).index();
        $('.map_site > li').eq(indexNum).fadeIn().siblings().fadeOut();
        $('.map_add > li').eq(indexNum).fadeIn().siblings().fadeOut();
    });
});