//tooltip jquery ui title bubble
$( function() {
	$( document ).tooltip({
		position: {
			my: "bottom-10",
			at: "top",
			using: function( position, feedback ) {
				$( this ).css( position );
				$( "<div>" )
				.addClass( "arrow" )
				.addClass( feedback.vertical )
				.addClass( feedback.horizontal )
			}
		}
	});
} );


//fix overflow lag when hover .contact
$( ".contact" )
.mouseover(function() {
	$('body').css({
		'overflow':'hidden'
	});
})
.mouseout(function() {
	$('body').css({
		'overflow':'visible'
	});

});
//HIDE div created by jquery-ui tooltip
$( function() {
	$('.ui-helper-hidden-accessible').css({
		'display':'none'
	});
});


/*onscroll fixed nav*/
$("document").ready(function($){
    var nav = $('nav');
    var li = $('nav li');
    var mobileLogo = $('#home-logo');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 52) {
            nav.addClass("fixed");
            nav.addClass("white-menu");
            /*link effect*/
            li.addClass("cl-effect-change");
            li.removeClass("cl-effect-17");
            /*mobile - logo change*/
            mobileLogo.addClass("color-logo");

            /*margin contact*/
            $('.contact').css({
            	'margin':'9.5px'
            });
        } else {
            nav.removeClass("fixed");
            nav.removeClass("white-menu");
            /*link effect*/
            li.removeClass("cl-effect-change");
            li.addClass("cl-effect-17");

            mobileLogo.removeClass("color-logo");
            /*margin contact*/
            $('.contact').css({
            	'margin-top':'12px'
            });
        }
    });
});
/*end*/
/*autosize textarea*/
$(document).ready(function(){  
    $('textarea').focus(function(){  
       $(this).animate({"height":"130px",}, "fast");  
       $('#variable-bloc').animate({"height":"53em",},"fast")
   });  
    $('textarea').blur(function(){  
       $(this).animate({"height": "40px",}, "fast" );  
       $('#variable-bloc').animate({"height":"42em",},"fast")
   });
});


//caroussel services
$(document).ready(function() {
    $("#diapo").flexslider({
        animation : "slide",
        controlNav : true,
        animationLoop : true,
        slideshow : true,
        easing:"easeOutBounce",
        maxItems : 3,
        animationSpeed:690,
        useCSS: false
    });
});


/* raccourci a utiliser avec de evenements jquery
$('#slider').flexslider("play") //Play slideshow
$('#slider').flexslider("pause") //Pause slideshow
$('#slider').flexslider("stop") //Stop slideshow
$('#slider').flexslider("next") //Go to next slide
$('#slider').flexslider("prev")*/













