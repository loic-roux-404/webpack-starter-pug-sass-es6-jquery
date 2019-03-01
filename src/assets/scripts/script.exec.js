// var bootstrapButton = $.fn.button.noConflict() ;// return $.fn.button to previously assigned value
// $.fn.bootstrapBtn = bootstrapButton ;
$.fn.parallax = function ( resistance, mouse ) 
{
	$el = $( this );
	TweenLite.to( $el, 0.25, 
	{
		x : -(( mouse.clientX - (window.innerWidth/2) ) / resistance ),
		y : -(( mouse.clientY - (window.innerHeight/2) ) / resistance )
	});

};

$(document).ready(function(){

	$('html').removeClass("no-js");
	$('html').addClass("js");


	if (window.matchMedia("(max-width: 576px)").matches) {
		$('.js .dropdown-menu').dropdown('toggle');
	}
	if (window.matchMedia("(min-width: 768px)").matches) {
		$('.js .navbar-nav li.dropdown').on('hover', function() {
			$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(300);
		}, function() {
			$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(300);
		});
	}



	$('.parralax-wrapper ').mousemove( function( e ) {
		$( '.parralax-wrapper img:eq(0)').parallax( -46, e );
		$( '.parralax-wrapper img:eq(1)' ).parallax( 49 , e );
		$( '.parralax-wrapper img:eq(2)' ).parallax( 45, e );
		$( '.parralax-wrapper img:eq(3)' ).parallax( -37, e );
		$( '.parralax-wrapper img:eq(4)' ).parallax( 65, e );
		$( '.portfolio' ).parallax( -46, e );
	});



	var menu = anime({
		targets:'.menu-lightbox',

		opacity:{
			value:[0,1],
			duration:500
		},
		scale:{
			value:[0,10.6],
			easing:'easeInQuint',
			duration:200,
			delay:0
		},
		autoplay:false,
		loop:false

	});
	var menuLi =anime({
		targets:'.navbar li',

		opacity:{
			value:[0,1],
			duration:900,
			easing:'easeInCirc',
		},
		translateX:{
			value:[-50,0],
			easing:'easeInCubic',
		},
		delay:function(_, i) {
			return i * 100;
		},
		autoplay:false,
		loop:false
	});


	/*play pause anime*/

	/*toggle function by class*/
	function toggled() {


		var wrap = $('#presentation').offset();
		var viewport2 = wrap.top - $(document).scrollTop();

		$('.menu-lightbox').css({
			top:-viewport2,
			left:0,
			display:'block'
		});
		menu.restart();
		menu.play();	
		menuLi.restart();
		menuLi.play();

		$('.collapse').collapse('show');

		$('.navbar-toggler').toggleClass('non-toggled');
		$('.navbar-toggler').toggleClass('toggled');
		$('.navbar-toggler').css({
			'z-index':'88'
		});
		$('.navbar-toggler').toggleClass('active-croix');

		smoothScroll(ns,nd);

		$('body').css({
			position:'relative'
		});

	}

	function nonToggled(){

		menu.play();
		menu.reverse();
		menuLi.play();
		menuLi.reverse();

		$('.collapse').collapse('hide');

		$('.navbar-toggler').toggleClass('toggled');
		$('.navbar-toggler').toggleClass('non-toggled');
		$('.navbar-toggler').css({
			'z-index':'1'
		});
		$('.navbar-toggler').toggleClass('active-croix');

		smoothScroll(s,d);

		$('body').css({
			position:'static'
		});


	}

		//$(window).resize(function(){
			//if (Modernizr.mq('(max-width: 768px)')) {

				/*EVENTS*/

				$('.navbar-toggler').on('click',function(e){
					e.preventDefault();

					if($(this).hasClass('non-toggled')){
						toggled();
					}
					else{
						nonToggled();
					}


				});

				

				$('.nav-link').on('click',function(e){

					e.preventDefault();
					nonToggled();

				});

				

			});