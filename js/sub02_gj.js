$(document).ready(function(){
  $('.ctl_photo li:nth-child(n+2)').hide();

  $('.ctl_tab li').click(function(){
      $(this).addClass('on').siblings().removeClass('on');

     var number = $(this).index();
      $('.ctl_photo li').eq(number).fadeIn().siblings().fadeOut();
  });

  $('.cut_photo li:nth-child(n+2)').hide();

  $('.cut_tab li').click(function(){
      $(this).addClass('on').siblings().removeClass('on');

     var number = $(this).index();
      $('.cut_photo li').eq(number).fadeIn().siblings().fadeOut();
  });
});
   