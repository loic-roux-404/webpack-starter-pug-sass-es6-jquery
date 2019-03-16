import {
  smoothScroll
} from './smooth-scroll.exec';
import {
  scrollToTop,
  s,
  d,
  ns,
  nd,
  loadTiming
} from '../../app.js';

import {
  TimelineLite
} from 'gsap';
import ScrollMagic from 'scrollmagic';
//require('scrollmagic/scrollmagic/minified/plugins/jquery.ScrollMagic.min.js');
import 'imports-loader?define=>false!scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js';
import assign from 'core-js/modules/es6.object.assign';

const roundBack = document.querySelector('.round-background');
function resize() {
  var result = document.getElementById('result');
  if ("matchMedia" in window) { // Détection
    if (window.matchMedia('(Lite-width: 1500px)').matches) {
      Object.assign(roundBack,{
        'width': '1700',
        'height': '1700'
      });
    } else {
      Object.assign(roundBack,{
        'width': 'inherit',
        'height': 'inherit'
      });
    }
  }
}
// On lie l'événement resize à la fonction
window.addEventListener('resize', resize, false);


 // Enable ScrollMagic only for desktop, disable on touch and mobile devices
  //if (!Modernizr.touch) {
  $('.round-background').offset().top;

  var controller = new ScrollMagic.Controller();


  // parallax effect on caption 
  //PRESENTATION
  var a = new TimelineLite();
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

  var a2 = new TimelineLite();
  a2.fromTo($('#presentation>div'), 1, {
    y: 0
  }, {
    y: 500,
    timeScale: 2.5,
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
  var cv_parralax = new TimelineLite();
  cv_parralax.fromTo($('#cv-title'), 1, {
    y: 0,
    autoAlpha: 1
  }, {
    y: 100,
    autoAlpha: 0,
    timeScale: 0.5,
    ease: Sine.easeIn
  }, "=0.1");

  var cv_title = new ScrollMagic.Scene({
      triggerElement: "#cv .frise",
      duration: "100%",
      triggerHook: 'onEnter',
      offset: 70
    })
    .setTween(cv_parralax)
    .addTo(controller);

  //============CV===========\\
  //
  //intermediate scene for rounded background\\
  //tween
  var twback = new TimelineLite();
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
    "1");
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
  var parralax2 = new TimelineLite();
  parralax2.fromTo($('#wrapper'), 1, {
	opacity: 1,
	zIndex:2
  }, {
	opacity: 0,
	zIndex:- 1,
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
  var anim = new TimelineLite();
  anim.set($('#realisations h1'), {
	  autoAlpha:0,
      letterSpacing: "0.2em",
      color: "#fafafa",
      y: -220
    })
    .to($('#realisations h1'), 1, {
		autoAlpha:1,
      letterSpacing: "3px",
      color: "#797979",
      y: 0,
      top: 0,
      timeScale: 0.7,
      ease: Elastic.easeInCubic
    }, "+=0.5");

  //split tween
  // anim.set($('.site'), {
  // 		rotation:110,
  // 		y: -100,
  // 		x:-100,
  // 		autoAlpha:0
  // 	})
  // 	.to($('.site'), 0.7, {
  // 		rotation:0,
  // 		y: 0,
  // 		x: 0,
  // 		autoAlpha:1,
  // 		ease: Power2.easeInCubic
  // 	}, "+=2.5"); //end tween
  // 	anim.set($('.game'), {
  // 		rotation:110,
  // 		y: -150,
  // 		x:-150,
  // 		autoAlpha:0
  // 	})
  // 	.to($('.game'), 0.7, {
  // 		rotation:0,
  // 		y: 0,
  // 		x: 0,
  // 		autoAlpha:1,
  // 		ease: Power1.easeInCubic
  // 	}, "+=2.5");

  //merge in a timeline

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
  var roundBck = TweenLite.set($("#realisations h1"), {
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
  var $i = 0;
  var tw3 = new TimelineLite();
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
      offset: 10,
      duration: "100%"
    })
    //.setPin(".round-background")
    .setTween(tw3)
    .addTo(controller);


  //=======SCENE 5 contact=======//
  var tw5 = new TimelineLite();
  tw5.fromTo($('#contact>div>h1'), 1, {
    letterSpacing: '35px',
    autoAlpha: 0.1
  }, {
    letterSpacing: '6px',
    color: '#f5f6fa',
    autoAlpha: 1,
    ease: Power2.easeInOut
  }, "-=0.7");



  var scene5 = new ScrollMagic.Scene({
      triggerElement: "#contact",
      triggerHook: "onCenter",
      offset: 50
    })
    .setTween(tw5)
    .addTo(controller);






