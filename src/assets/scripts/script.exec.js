import {
  smoothScroll
} from './smooth-scroll.exec.js';
import {
  ns,
  nd,
  d,
  s,
  mobileBool
} from '../../app';
import assign from 'core-js/modules/es6.object.assign';

var menu = anime({
  targets: '.menu-lightbox',
  opacity: {
    value: [0, 1],
    duration: 400
  },
  scale: {
    value: [0, 13.6],
    easing: 'easeInQuint',
    duration: 450,
    delay: 0
  },
  autoplay: false,
  loop: false

});
var menuLi = anime({
  targets: '.navbar li',
  opacity: {
    value: [0, 1],
    duration: 200,
    
  },
  scale:{
    value: [0.5, 1],
    duration: 300,
    elasticity: function(target, index, totalTargets) {
      // Elasticity multiplied by every div index, in descending order
      return 220 + ((totalTargets - index) * 110);
    },
    delay: function (_, i) {
      return i * 100;
    },
  },
  translateX: {
    value: [-120, 0],
    duration: 500,
  },
  delay: function (_, i) {
    return i * 70;
  },
  easing: 'easeInCubic',
  autoplay: false,
  loop: false,

});


/*play pause anime*/
/*toggle function by class*/
let clicked = true, nbclick=0,
  navToggler = document.getElementsByClassName('navbar-toggler')[0],
  htmlEl = document.querySelector('html');

function toggled(el) {

  htmlEl.classList.toggle('overflow-y-hidden');
  let offT = el.getBoundingClientRect().top - document.body.scrollTop;
  let offL = el.getBoundingClientRect().left - document.body.scrollLeft;


  Object.assign([].slice.call(document.getElementsByClassName('menu-lightbox'))[0].style, {
    top: - offT + "px",
    left: - offL + "px",
    display: 'block'
  });

  document.querySelector('#navbar').classList.toggle('d-block');
  navToggler.classList.toggle('toggled');
  navToggler.classList.toggle('non-toggled');

  if(nbclick  === 0){
    menu.play();
    menuLi.play();
    nbclick = 1;
  }else{
    menu.reverse();
    menuLi.reverse();
    menu.play();
    menuLi.play();
  }

  if (clicked) {
    document.body.style.position = 'relative';
    if(!mobileBool){ smoothScroll(ns,nd);}else{smoothScroll(s,d);}
  } else {
    document.body.style.position = 'static';
    if(!mobileBool){  smoothScroll(s,d);}else{smoothScroll(s,d);}
  }

  clicked = !clicked;
}




/*EVENTS*/
document.querySelector('.navbar-toggler').onclick = (e) => {
  e.preventDefault();
  
  
  toggled(e.target);
};

document.querySelectorAll('.nav-link').forEach(function (elem) {
  elem.onclick = (e) => {
    e.preventDefault();
    toggled(e.target);

  };
});


// let clicked = false;
// document.querySelector('.navbar-toggler').addEventListener('click', function (e) {
//   e.preventDefault();

//   if (clicked === false) {
//     toggled(e.target);
//   } else {
//     nonToggled();
//   }
// });

// document.querySelectorAll('.nav-link').forEach(function (elem) {
//   elem.addEventListener('click', function (e) {

//     e.preventDefault();
//     nonToggled();

//   });
// });