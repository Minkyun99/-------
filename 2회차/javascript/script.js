
jQuery(document).ready(function(){
    $('.submenu > li').mouseover(function(){
        $(this).find('.submenulist').stop().slideDown(500)
    }).mouseout(function(){
        $(this).find('.submenulist').stop().slideUp(500)
    })
})