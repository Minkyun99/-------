
jQuery(document).ready(function(){
    $('.submenu > li').mouseover(function(){
        $(this).find('.submenulist').stop().slideDown(500)
    }).mouseout(function(){
        $(this).find('.submenulist').stop().slideUp(500)
    })

    
    $('.imgslide div li').last().prependTo('.imgslide div');
    $('.imgslide div').css('left',-800);
    setInterval(function(){
       $('.imgslide div').animate({left:'-='+800},'slow',function(){
           $('.imgslide div li') .first().appendTo('.imgslide div');
           $('.imgslide div').css('left',-800);
       });
    },2000);

    $('.notice li').click(function(){
        $('.modal').addClass('active')        
    })

    $('.modal_close').click(function(){
        $('.modal').removeClass('active')
    })
})
