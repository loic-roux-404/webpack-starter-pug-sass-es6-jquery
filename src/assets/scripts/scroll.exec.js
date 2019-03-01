import {smoothScroll} from './smooth-scroll.exec';
import {scrollToTop,s,d,ns,nd,loadTiming} from '../../app.js';





function resize() {
	var result = document.getElementById('result');
	if ("matchMedia" in window) { // Détection
		if (window.matchMedia('(max-width: 1500px)').matches) {
			$('.round-background').css({
				'width': '1700',
				'height': '1700'
			});
		} else {
			$('.round-background').css({
				'width': 'inherit',
				'height': 'inherit'
			});
		}
	}
}
// On lie l'événement resize à la fonction
window.addEventListener('resize', resize, false);




$(window).on('load', function () {


	scrollToTop();
	//$('.preloader-wrap').toggle();

	//document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

}); //window onload

$(document).ready(function () {
	// Enable ScrollMagic only for desktop, disable on touch and mobile devices
	//if (!Modernizr.touch) {
	$('.round-background').offset().top;

	var controller = new ScrollMagic.Controller();


	// parallax effect on caption 
	//PRESENTATION
	var a = new TimelineMax();
	a.fromTo($('.caption'), 1, {
		y: 0,
		opacity: 1
	}, {
		y: -300,
		opacity: 0.3,
		ease: Linear.easeIn
	}, "+=1");
	var scene1 = new ScrollMagic.Scene({
			triggerElement: "#main #presentation",
			triggerHook: 'onLeave',
			offset: -150,
			duration: "100%"
		})
		.addTo(controller)
		.setTween(a);

	var a2 = new TimelineMax();
	a2.fromTo($('#presentation>div'), 1, {
		y: 0
	}, {
		y: 300,
		timeScale: 1.5,
		ease: Sine.easeOut
	}, "+=0.4");


	//CV bottom move parralax effect
	var scene2 = new ScrollMagic.Scene({
			triggerElement: "#main #cv",
			duration: "100%",
			triggerHook: 'onEnter',
			offset: 150
		})
		.setTween(a2)
		.addTo(controller);


	//CV titelemove parralax effect
	var cv_parralax = new TimelineMax();
	cv_parralax.fromTo($('#cv-title'), 1, {
			y: 0,
			autoAlpha: 1
		}, {
			y: 100,
			autoAlpha: 0,
			timeScale: 0.5,
			ease: Sine.easeIn
		}, "=0.1")
		.fromTo($('#parralax-wrapper'), 1, {
			autoAlpha: 1
		}, {
			autoAlpha: 0,
			timeScale: 0.5,
			ease: Expo.easeInOut
		}, "=0.1");

	var cv_title = new ScrollMagic.Scene({
			triggerElement: "#cv .frise",
			duration: "100%",
			triggerHook: 'onEnter',
			offset: 70
		})
		.setTween(cv_parralax)
		.addTo(controller);

	//cv - reduce

	var cv_title2 = new ScrollMagic.Scene({
			triggerElement: "#cv .frise",
			offset: 40
		})
		//.setTween(cv_parralax2)
		.addTo(controller);





	//end sc velocity

	//============CV===========\\
	//
	//intermediate scene for rounded background\\
	//tween
	var twback = new TimelineMax();
	twback.fromTo($('#realisations .round-background'), 1, {
				width: 10,
				height: 10,
				opacity: 0.2
			}, {
				width: 1600,
				height: 1300,
				opacity: 0.5,
				ease: Power4.easeInOut
			},
			"1")
		.fromTo($('#cv'), 1, {
			y: 0
		}, {
			y: 10,
			ease: SlowMo.easeInCubic
		}, "+=0.1");
	//scene
	var intscene = new ScrollMagic.Scene({
			triggerElement: "#main #cv",
			triggerHook: 'onEnter',
			duration: "100%",
			offset: -30
		})
		.setTween(twback)
		.addTo(controller);


	//---tween parralax effect---\\
	var parralax2 = new TimelineMax();
	parralax2.fromTo($('#cv'), 1, {
		opacity: 1
	}, {
		opacity: 0,
		ease: Power3.easeInCubic
	}, "+=1");

	//fromTo($('#realisations #bloc-vid'),1,{bottom:0},{bottom: 100, ease:Power2.easeInCubic},"+=1")


	var parralax2scene = new ScrollMagic.Scene({
			triggerElement: "#main #cv",
			triggerHook: 'onLeave',
			offset: 10, //-100 onENTER
			duration: '100%'
		}) //100% page
		.setTween(parralax2)
		//.setVelocity("main #cv",{bottom: 200},{easing : "ease-in-out"})//auto parallax
		//.setVelocity("main #bloc-vid",{bottom: 100},{easing : "ease-in-out"})//auto parallax
		.addTo(controller);




	//---tween realisations---\\
	var anim = new TimelineMax();
	anim

		.set($('#realisations h1'), {
			letterSpacing: "0.2em",
			color: "#C2C2C2",
			y: -120,
			top: 1
		})
		.to($('#realisations h1'), 1, {
			letterSpacing: "3px",
			color: "#fff",
			y: 0,
			top: 0,
			timeScale: 0.7,
			ease: Elastic.easeInCubic
		}, "+=1.5"); //end tween

	//==============SCENE3============\\
	//

	var scene3 = new ScrollMagic.Scene({
			triggerElement: "#main #realisations",
			triggerHook: 'onEnter',
			offset: -260, //-320px onENTER
			duration: '100%'
		}) //100% page
		.setTween(anim) //anim tween set
		.addTo(controller);


	//==========CSS plugin=====//
	//========scene with css animate==========\\
	var roundBck = TweenMax.set($("#realisations h1"), {
		className: "z-index-rounded"
	});

	var scene3velo = new ScrollMagic.Scene({
			triggerElement: "#realisations",
			offset: -430
		})
		// trigger a class toggle animation
		.setClassToggle(".round-background", "scale-rounded")
		.setTween(roundBck)
		.addTo(controller);


	//=======SCENE 4 pin video bloc=======//
	$i = 0;
	var tw3 = new TimelineMax();
	tw3.fromTo($('video-bloc-1:eq(' + $i + ')'), 1, {
			x: 0,
			y: 0,
			autoAlpha: 0
		}, {
			x: -300,
			y: -300,
			autoAlpha: 1,
			ease: Power4.easeInOut
		}, "-=0.7")
		.set($(".round-background"), {
			borderRadius: '0',
			background: "#4a69bd"
		});



	var scene4 = new ScrollMagic.Scene({
			triggerElement: "#realisations",
			triggerHook: "onCenter",
			offset: 90,
			duration: "100%"
		})
		//.setPin(".round-background")
		.setTween(tw3)
		.addTo(controller);


	//=======SCENE 5 contact=======//
	var tw5 = new TimelineMax();
	tw5.fromTo($('#contact>div>h1'), 1, {
		letterSpacing: '35px',
		autoAlpha: 0.2
	}, {
		letterSpacing: '6px',
		color: '#f5f6fa',
		autoAlpha: 1,
		ease: Power2.easeInOut
	}, "-=0.7");



	var scene5 = new ScrollMagic.Scene({
			triggerElement: "#contact",
			triggerHook: "onCenter",
			offset: 10
		})
		.setTween(tw5)
		.addTo(controller);












}); //document ready









// init controller


// // detect if mobile browser. regex -> http://detectmobilebrowsers.com

// // we'd only like to use iScroll for mobile...
// if (isMobile) {
// 	// configure iScroll
// 	var myScroll = new IScroll('#main',
// 	{
// 					// don't scroll horizontal
// 					scrollX: false,
// 					// but do scroll vertical
// 					scrollY: true,
// 					// show scrollbars
// 					scrollbars: true,
// 					// deactivating -webkit-transform because pin wouldn't work because of a webkit bug: https://code.google.com/p/chromium/issues/detail?id=20574
// 					// if you dont use pinning, keep "useTransform" set to true, as it is far better in terms of performance.
// 					useTransform: false,
// 					// deativate css-transition to force requestAnimationFrame (implicit with probeType 3)
// 					useTransition: false,
// 					// set to highest probing level to get scroll events even during momentum and bounce
// 					// requires inclusion of iscroll-probe.js
// 					probeType: 3,
// 					// pass through clicks inside scroll container
// 					click: true 
// 				}
// 				);

// 	// overwrite scroll position calculation to use child's offset instead of container's scrollTop();
// 	controller.scrollPos(function () {
// 		return -myScroll.y;
// 	});

// 	// thanks to iScroll 5 we now have a real onScroll event (with some performance drawbacks)
// 	myScroll.on("scroll", function () {
// 		controller.update();
// 	});

// 	// add indicators to scrollcontent so they will be moved with it.
// 	//scene.addIndicators({parent: ".scrollContent"});
// } else {
// 	// add indicators (requires plugin)
// 	//scene.addIndicators();
// 	console.log('no mobile');						
// }