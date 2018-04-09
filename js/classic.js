/*global $, window*/

$(function () {
   
    
    
    "use strict";
    
    $("html").niceScroll();
    
    var myHeadr = $(".header"),
        mySlider = $(".bxslider");
    
    //adjust header height
    
    myHeadr.height($(window).height());
    
    //adjust bxslider li items center
    
    $(window).resize(function () {
       
        myHeadr.height($(window).height());
        mySlider.each(function () {
        
            $(this).css("paddingTop", ($(window).height() - $(".bxslider li").height()) / 2);
        
        });
        
    });
    
    //adjust active class with color green
    
    $(".links li a").on("click", function () {
       
        $(this).parent().addClass("active").siblings().removeClass("active");
        
    });
    
    //adjust bxslider li items center
    
    mySlider.each(function () {
        
        $(this).css("paddingTop", ($(window).height() - $(".bxslider li").height()) / 2);
        
    });
    
    //trigger the bxslider
    
    mySlider.bxSlider({
        
        pager: false
        
    });
    
    //smooth scroll to div
    
    $(".links li a").click(function () {
        
        $("html, body").animate({
          
            scrollTop: $('#' + $(this).data('value')).offset().top
           
        }, 2000);
        
    });
    
    //our auto slider 
    
    (function autoSlider() {
        
        
        $('.slider .active').each(function () {
            
            if (!$(this).is(':last-child')) {
               
                $(this).delay(3000).fadeOut(1000, function () {
                   
                    $(this).removeClass('active').next().addClass('active').fadeIn();
                   
                    autoSlider();
                   
                });
            } else {
                
                $(this).delay(3000).fadeOut(1000, function () {
                    
                    $(this).removeClass('active');
                    
                    $('.slider div').eq(0).addClass('active').fadeIn();
                    
                    autoSlider();
                    
                });
            }
            
        });
        
    }());
    
    // trigger mixitup
    
    $('#mixer').mixItUp();
    
    // trigger nice scroll
    
    
    
});
















