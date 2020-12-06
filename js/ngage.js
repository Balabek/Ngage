/**
 * Created by KRM on 10/10/16.
 */

$(document).ready(function(){


    // Initiation of the in-phone slider itself
    $('.p_slider').slick({
        autoplay: true,
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        adaptiveHeight: true,
        speed: 1500,
        fade: true,
        cssEase: 'linear'
    });



    // Changing info blocks with a slider's move
    var phoneSlider = $('.p_slider');
    $(phoneSlider).on('beforeChange', function(event, slick, currentSlide, nextSlide){

        var elements = $(".ngage_slide_ttl_and_info");
        $(elements).each(function() {
            $(".ngage_slide_ttl_and_info:not(.hideme)")
                .addClass('hideme');

            /* remove hideme class from current slide index element */
            $(elements)
                .eq(currentSlide)
                .removeClass('hideme');
        });
    });



    // Changing opacity on scroll (Option 1)
    //function opacityChanger() {
    //    var scrollPos = $(document).scrollTop();
    //    var targetOpacity = 1;
    //    scrollPos < 400 ? targetOpacity = '0.45'+ (scrollPos*100)/10 : targetOpacity;
    //    $('.ngagenav').css({
    //        'background-color': 'rgba(0, 0, 0, '+ targetOpacity +')'
    //    });
    //    console.log(scrollPos,targetOpacity);
    //}
    //
    //$(function(){
    //    $(window).scroll(function() {
    //        opacityChanger();
    //    });
    //});


    // Changing opacity on scroll (Option 2)
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.ngagenav').css("background-color", "rgba(0,0,0,1)").css("transition","0.9s ease-in-out ");
        } else {
            $('.ngagenav').css("background-color", "rgba(0,0,0,0.45)").css("transition","0.9s ease-in-out ");
        }
    });



    var collapseToggleButton = $('.navbar-fixed-top .navbar-toggle');
    $(collapseToggleButton).on('click', function(){
        $(this).toggleClass('rotator');
    });




    // Animating the "go-to" anchor scroll
    $('a.anchor').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top -30
        }, 800);

        $('.collapse').removeClass('in');
        $(collapseToggleButton).removeClass('rotator');

    });




});