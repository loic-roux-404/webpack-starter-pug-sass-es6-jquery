import {
  smoothScroll
} from './smooth-scroll.exec.js';
import {
  ns,
  nd,
  d,
  s
} from '../../app';

var menu = anime({
  targets: '.menu-lightbox',

  opacity: {
    value: [0, 1],
    duration: 500
  },
  scale: {
    value: [0, 10.6],
    easing: 'easeInQuint',
    duration: 200,
    delay: 0
  },
  autoplay: false,
  loop: false

});
var menuLi = anime({
  targets: '.navbar li',

  opacity: {
    value: [0, 1],
    duration: 300,
    easing: 'easeInCirc',
  },
  translateX: {
    value: [-50, 0],
    easing: 'easeInCubic',
    duration: 450,

  },
  delay: function (_, i) {
    return i * 70;
  },
  autoplay: false,
  loop: false,

});


/*play pause anime*/
/*toggle function by class*/
let click = 0;

function toggled() {
  var wrap = $('#presentation').offset();
  var viewport2 = wrap.top - $(document).scrollTop();

  document.querySelector('#navbar').style.display = 'block';

  $('.menu-lightbox').css({
    top: -viewport2,
    left: 0,
    display: 'block'
  });
  if (click === 1) {
    //console.log('began');
    menu.reverse();
    menuLi.reverse();
  }

  menu.play();
  menuLi.play();

  $('.navbar-toggler').toggleClass('non-toggled');
  $('.navbar-toggler').toggleClass('toggled');


  smoothScroll(ns, nd);

  $('body').css({
    position: 'relative'
  });
  click = 1;

}

function nonToggled() {
  menu.reverse();
  menuLi.reverse();

  menu.play();
  menuLi.play();

  document.querySelector('#navbar').style.display = 'none';

  $('.navbar-toggler').toggleClass('toggled');
  $('.navbar-toggler').toggleClass('non-toggled');

  smoothScroll(s, d);

  $('body').css({
    position: 'static'
  });

}


/*EVENTS*/

$('.navbar-toggler').on('click', function (e) {
  e.preventDefault();

  if ($(this).hasClass('non-toggled')) {
    toggled();
  } else {
    nonToggled();
  }
});

$('.nav-link').on('click', function (e) {

  e.preventDefault();
  nonToggled();

});
