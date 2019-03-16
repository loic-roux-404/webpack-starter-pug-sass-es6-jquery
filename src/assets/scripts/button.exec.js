import {
  smoothScroll
} from './smooth-scroll.exec.js';

import {
  s,
  d,
  ns,
  nd
} from '../../app';
//import assign from 'core-js/fn/object/assign';
import assign from 'core-js/modules/es6.object.assign';


const html = document.getElementsByTagName('html')[0];
const body = document.getElementsByTagName('body')[0];
const main = document.querySelector('#main')[0];

Object.assign(...[html, body, main], {
  'overflow': 'hidden'
});


$('.btn-6')
  .on('mouseenter', function (e) {
    var parentOffset = $(this).offset(),
      relX = e.pageX - parentOffset.left,
      relY = e.pageY - parentOffset.top;
    $(this).find('span').css({
      top: relY,
      left: relX
    });
  })
  .on('mouseout', function (e) {
    var parentOffset = $(this).offset(),
      relX = e.pageX - parentOffset.left,
      relY = e.pageY - parentOffset.top;
    $(this).find('span').css({
      top: relY,
      left: relX
    });
  });



const butSettings = {
  height: window.innerHeight * 1.2,
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


// const setOffset = function () {
//   var offset = document.querySelector('#realisations').offsetTop;
//   const viewport = offset - document.getElementsByTagName("html")[0].scrollTop + 6;
//   //console.log('portv = '+ viewport);
//   //console.log("--------");
//   //console.log(document.querySelector('.back-desc').style);
//   console.log(viewport);
//   return viewport;
// };
const resize = function () {
  window.addEventListener('resize', setOffset, false);
};
var viewport = null;
const setOffset = function () {
  if (typeof pageYOffset != 'undefined') {
    //most browsers except IE before #9
    viewport =document.querySelector('#realisations').offsetTop - pageYOffset;
    return viewport;
  } else {
    var B = document.body; //IE 'quirks'
    var D = document.documentElement; //IE with doctype
    D = (D.clientHeight) ? D : B;
    viewport =  document.querySelector('#realisations').offsetTop - D.scrollTop ;
    return viewport;
  }
};

if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {

  const open = function () {
    var vidBloc = document.querySelectorAll('.video-bloc-1');

    Array.prototype.forEach.call(vidBloc, (elem, i) => {
      var querEl = ".desc-" + i;
      elem.addEventListener('click', (e) => {

        e.preventDefault();

        Object.assign(document.querySelector('.back-desc').style, {
          top: - setOffset() + 'px',
          left: 0,
          display: 'block',
          width: butSettings.width,
          height:100+"vh",
          opacity: 1,
          zIndex:98
        });
        console.log(querEl);
        document.querySelector(querEl).style.display = "block";
      });

    });
  };
  const close = function () {
    document.querySelector('.close-wrapper').addEventListener("click", (e) => {

      e.preventDefault();

      setTimeout(function () {
        [...document.querySelectorAll('.desc')].forEach(function (el) {
          //console.log(el);
          el.style.display = "none";
        });
        document.querySelector('.back-desc').style.display = "none";
      }, butSettings.duration * 0.1);

    });
  };

  //safari test phase
  open();
  close();
  resize();

} else {

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
      console.log("click" + click);
      console.log('-------');
      var animes = 0;
      this.animeTab.forEach(function (animes) {
        if (click != 0) {
          return [
            animes.reverse(),
            animes.play(),
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

          return [this.animeClick(1, click), smoothScroll(ns, nd), click = 1];

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
        }, butSettings.duration * 0.2);

        return [this.animeClick(0, null), smoothScroll(s, d)];

      }, true);
    },


  };
  //test phase call event listener
  button.open();
  button.close();
  resize();
}
