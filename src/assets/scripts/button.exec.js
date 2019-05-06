import {
  smoothScroll,html,body
} from './smooth-scroll.exec.js';

import {
  s,
  d,
  ns,
  nd,
  detectmob
} from '../../app';
//import assign from 'core-js/fn/object/assign';
import assign from 'core-js/modules/es6.object.assign';


//const main = document.querySelector('#main')[0];


let btn6 = document.getElementsByClassName('btn-6');

const followHov = (el, event) => {

  //console.log(event);
  let rect = el.getBoundingClientRect(),
    relX = event.clientX - rect.left,
    relY = event.clientY - rect.top;
  //console.log(rect);
  //console.log('relX js : ' + relX + 'relY js : ' + relY);
  Object.assign(el.querySelector('span').style, {
    top: relY+"px",
    left: relX+"px"
  });


};

[...btn6].forEach(function (bt) {
  bt.onmouseover = function (ev) {
    followHov(ev.currentTarget, ev);
  };
});

[...btn6].forEach(function (bt) {
  bt.onmouseout = function (ev) {
    followHov(ev.currentTarget, ev);
  };
});



const butSettings = {
  height: '100%',//window.innerHeight * 1.2,
  width: '100%',
  duration: 600,
  delay: 30,
  targets: [
    document.querySelectorAll('.desc .container p'),
    document.querySelectorAll('.desc .container a'),
    document.querySelectorAll('.desc .container h4'),
    document.querySelectorAll('.desc .container ul'),
  ]
};

const resize = function () {
  window.addEventListener('resize', setOffset, false);
};
var viewport = null;
const setOffset = function () {
  if (typeof pageYOffset != 'undefined') {
    //most browsers except IE before #9
    viewport = document.querySelector('#realisations').offsetTop - pageYOffset;
    return viewport;
  } else {
    var B = document.body; //IE 'quirks'
    var D = document.documentElement; //IE with doctype
    D = (D.clientHeight) ? D : B;
    viewport = document.querySelector('#realisations').offsetTop - D.scrollTop;
    return viewport;
  }
};

//Lightbox object button
let button = {
  animeTab: [
    anime({
      targets: '.back-desc',
      width: {
        value: [5, butSettings.width],
      },
      height: {
        value: [5, butSettings.height],
      },
      translateX: {
        value: [-220, 0],
        duration: butSettings.duration,
      },
      autoplay: false,
      opacity: {
        value: [0.82, 1],
        duration: butSettings.duration * 1.2,
        delay: butSettings.delay - 50
      },
      easing: 'easeInOutExpo',
      duration: butSettings.duration * 1.1
    }),
    anime({
      targets: butSettings.targets,
      opacity: {
        value: [0, 1],
        duration: butSettings.duration / 1.2,
        easing: 'easeInExpo',
        delay: butSettings.duration + 10
      },
      translateY: {
        value: [170, 0],
        easing: 'easeOutCubic',
        duration: butSettings.duration + 30,
        delay: butSettings.delay * 13.5
      },
      autoplay: false,

    }),
    anime({
      targets: '.close',
      rotate: {
        value: ['-90deg', 0],
        elasticity: 200,
        easing: 'easeInOutCubic',
      },
      opacity: {
        value: [0, 1],
        easing: 'easeInOutExpo',
      },
      autoplay: false,
      delay: butSettings.delay * 2,
      duration: butSettings.duration,
    }),
  ],

  animeClick: function (boolean, click) {
    //console.log("click" + click);
    //console.log('-------');
    var animes = 0;
    this.animeTab.forEach(function (animes) {
      if (click !== 0) {
        return [
          animes.reverse(),
          setTimeout(function () {
            animes.play();
          }, 50)
        ];
      } else {
        return animes.play();
      }
    });
  },


  open: function () {

    var click = 0;
    var vidBloc = document.querySelectorAll('.video-bloc-1');

    Array.prototype.forEach.call(vidBloc, (elem, i) => {

      elem.addEventListener('click', (e) => {

        e.preventDefault();

        Object.assign(document.querySelector('.back-desc').style, {
          top: -setOffset() + 'px',
          left: 0,
          display: 'block'
        });


          html.style.overflowY = 'hidden';
          body.style.overflowY = 'hidden';

          
          smoothScroll(ns, nd);
        

        return [this.animeClick(1, click), click = 1];

      }, false);
    });
  },
  close: function () {

    document.querySelector('.close-wrapper').addEventListener("click", (e) => {

      e.preventDefault();

      setTimeout(function () {
        [...document.querySelectorAll('.desc')].forEach(function (el) {
          //console.log(el);
          el.style.display = "none";
        });
        document.querySelector('.back-desc').style.display = "none";
      }, butSettings.duration);

        html.style.overflowY = 'scroll';
        body.style.overflowY = 'scroll';

        smoothScroll(s, d);
      

      return [this.animeClick(0, null)];

    }, true);
  },


};
//test phase call event listener
button.open();
button.close();
resize();


