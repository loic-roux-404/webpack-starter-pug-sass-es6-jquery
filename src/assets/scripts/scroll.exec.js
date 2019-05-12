import {
  scrollToTop,
  s,
  d,
  ns,
  nd,
  loadTiming
} from '../../app.js';

import {
  TimelineLite, TweenLite
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
      Object.assign(roundBack, {
        'width': '1700',
        'height': '1700'
      });
    } else {
      Object.assign(roundBack, {
        'width': 'inherit',
        'height': 'inherit'
      });
    }
  }
}
// On lie l'événement resize à la fonction
window.addEventListener('resize', resize, false);

var controller = new ScrollMagic.Controller();

// parallax effect on caption 
//PRESENTATION
var a = new TimelineLite();
a.fromTo(document.getElementsByClassName('caption')[0], 1, {
  y: 0,
  opacity: 1
}, {
    y: -500,
    opacity: 0,
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
a2.fromTo(document.querySelector('#presentation>div'), 1, {
  y: 0
}, {
    y: 500,
    timeScale: 2.5,
    ease: Sine.easeOut
  }, "+=0.4");


//CV bottom move parralax effect
var scene2 = new ScrollMagic.Scene({
  triggerElement: "#main .cv",
  duration: "100%",
  triggerHook: 'onEnter',
  offset: 150
})
  .setTween(a2)
  .addTo(controller);


//CV titelemove parralax effect
var cv_parralax = new TimelineLite();
cv_parralax.fromTo(document.getElementById('cv'), 1, {
  y: 0,
  autoAlpha: 1
}, {
    y: 100,
    autoAlpha: 0,
    timeScale: 0.5,
    ease: Sine.easeIn
  }, "=0.1");

var cv_title = new ScrollMagic.Scene({
  triggerElement: ".cv .frise",
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
twback.fromTo(document.getElementsByClassName('round-background')[0], 1, {
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
  offset: -70
})
  .setTween(twback)
  .addTo(controller);


//---tween parralax effect---\\
var parralax2 = new TimelineLite();
parralax2.fromTo(document.getElementById('wrapper'), 1, {
  opacity: 1,
  zIndex: 2
}, {
    opacity: 0,
    zIndex: - 1,
    ease: Power3.easeInCubic
  }, "+=1");

var parralax2scene = new ScrollMagic.Scene({
  triggerElement: "#main #cv",
  triggerHook: 'onLeave',
  offset: window.innerHeight / 4, //-100 onENTER
  duration: '100%'
})
  .setTween(parralax2)
  .addTo(controller);

//---tween realisations---\\
var anim = new TimelineLite();
anim.set(document.querySelector('#realisations h1 > div'), {
  autoAlpha: 0,
  letterSpacing: "0.2em",
  color: "#dfe6e9",
  y: -270
})
  .to(document.querySelector('#realisations h1 > div'), 1, {
    autoAlpha: 1,
    letterSpacing: "3px",
    color: "#797979",
    y: 0,
    top: 0,
    timeScale: 0.2,
    ease: Elastic.easeInCubic
  }, "+=0.5");


//==============SCENE3============\\
//

var scene3 = new ScrollMagic.Scene({
  triggerElement: "#main #realisations",
  triggerHook: 'onEnter',
  offset: -300, //-320px onENTER
  duration: '100%'
}) //100% page
  .setTween(anim) //anim tween set
  .addTo(controller);


//==========CSS plugin=====//
//========scene with css animate==========\\

let frise = document.getElementsByClassName('frise')[0];

var roundBck = new TimelineLite();
roundBck.set(document.querySelector('#realisations h1 > div'), {
  className: "z-index-rounded"
})
  .set(frise, {
    zIndex: 1,
  }).to(frise, 1, {
    zIndex: -1,
  });

var scene3velo = new ScrollMagic.Scene({
  triggerElement: "#realisations",
  offset: -440
})
  // trigger a class toggle animation
  .setClassToggle(".round-background", "scale-rounded")
  .setTween(roundBck)
  .addTo(controller);


//=======SCENE 4 pin video bloc=======//
var $i = 0;
var tw3 = new TimelineLite();
tw3.fromTo(document.querySelector('.video-bloc-1'), 1, {
  x: 0,
  y: 0,
  autoAlpha: 1
}, {
    x: 0,
    y: 0,
    autoAlpha: 1,
    ease: Power4.Linear
  }, "-=0.7")
  .set(document.querySelector(".round-background"), {
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



//=======SCENE 4 video bloc anime=======//
let temp;
let blocs = document.getElementsByClassName('video-bloc-1');
Array.prototype.forEach.call(blocs, function (el, k) {
  temp = new TimelineLite().fromTo(el, 0.1, {

    x: k % 2 ? 400 * (k / 10) : - 300 * (k / 10),
    y: 200,
    autoAlpha: 0
  }, {
      x: 0,
      y: 0,
      autoAlpha: 1,

      ease: Power1.easeOutExpo
    }, "+=0.7");
  temp.timeScale(1 + (k * k));
  new ScrollMagic.Scene({
    triggerElement: el,
    triggerHook: "onEnter",
    offset: - 1050,
    duration: "100%"
  })
    .setTween(temp)
    .addTo(controller);
});



//=======SCENE 5 contact=======//
var tw5 = new TimelineLite();
tw5.fromTo(document.querySelector('#contact'), 1, {
  letterSpacing: '30px',
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






