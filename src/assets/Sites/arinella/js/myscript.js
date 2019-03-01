$(document).ready(function() {
    $("#lists").accordion({
        collapsible: true,
        active: false,
        header: "button"
    });
    //caroussel index
    $(".flexslider").flexslider({
        animation: "slide",
        controlNav: true,
        animationLoop: true,
        slideshow: true,
        easing: "easeInCubic",
        maxItems: 4,
        animationSpeed: 550,
        slideshowSpeed: 10000,
        useCSS: false,
        touch: true
    });
    //a-propos description button scripts
    $('.under-list button').click(function() {
        if ($('.under-list button').hasClass('a-propos-active-button a-propos-button-background')) {
            $('.under-list button').not(this).removeClass('a-propos-active-button a-propos-button-background');
            $(this).toggleClass('a-propos-active-button a-propos-button-background');
        } else {
            $(this).toggleClass('a-propos-active-button a-propos-button-background');
        }
    });


//===return reservation ====//

$("#dialog-res").dialog({
    title: "Réservation",
    height:160,

    show: {
        effect: "fade",
        duration: 500
    },
    open: function(ev, ui){
     setTimeout($("#dialog-res").dialog("close"),2000);
 },
 close: function(ev, ui){
   /*Do stuff always when closing*/                 
   $('#lightbox').fadeToggle('300');
}
});











});