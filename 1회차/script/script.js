$(document).ready(function(){
    //**** 마우스오버  ****//
    //서브메뉴 숨기고 시작
    $(".submenuslide").hide();
    // 마우스 오버
    $(".submenu>a").mouseover(function(){
      $(".submenuslide").stop().slideDown(300);
     }).mouseout(function(){
      $(".submenuslide").stop().slideUp(300);
    })
});

$(document).ready(function(){
	$('.img_ul li').last().prependTo('.img_ul');
    $('.img_ul').css('left',-1200);
    setInterval(function(){
       $('.img_ul').animate({left:'-='+1200},'slow',function(){
           $('.img_ul li') .first().appendTo('.img_ul');
           $('.img_ul').css('left',-1200);
       });
    },2000);
});