import {
  s,
  d,
  loadTiming,
  detectmob
} from '../../app';
import {
  TweenLite
} from 'gsap';

export const html = document.querySelector('html');
export const body = document.querySelector('body');
//set smooth scroll after load
html.classList.remove('no-js');
smoothScroll(0, 0);


export function smoothScroll(s, d) {

  var $window = window;
  var scrollTime = s; // 1.06;
  var scrollDistance = d; //70;
  //console.log(scrollTime+'aie'+scrollDistance);
  if (!detectmob()) {

    html.classList.add('desktop');

    let smooth = function(event) {

      event.preventDefault();
      //console.log(event);
      var delta = event.wheelDelta / 120 || - event.detail / 3;
      var scrollTop = $window.pageYOffset;
      var finalScroll = scrollTop - parseInt(delta * scrollDistance);


      TweenLite.to($window, scrollTime, {
        scrollTo: {
          y: finalScroll,
          autoKill: true
        },
        ease: Power4.Linear,
        overwrite: 5
      });
    };

    var mswEv=(/Firefox/i.test(navigator.userAgent))? "DOMMouseScroll" : "mousewheel";//FF doesn't recognize mousewheel as of FF3.x
    $window.addEventListener(mswEv, smooth,false);


  } 
}



/**
 * Smooth scrolling to page anchor on click
 **/
document.querySelectorAll("a[href*='#']:not([href='#'])").forEach(function (elem) {
  elem.addEventListener('click', function (event) {
    event.preventDefault();
    //console.log(elem);
    if (
      location.hostname == elem.hostname && elem.pathname.replace(/^\//, "") == location.pathname.replace(/^\//, "")
    ) {
      var anchor = elem.hash;
      console.log(anchor);
      //IE8
      anchor = anchor.length ? anchor : document.querySelector("[name=" + elem.hash.slice(1) + "]");
      console.log(anchor);
      if (anchor) {
        // $("html, body").animate({
        //   scrollTop: anchor.offset().top - 50,
        // }, 1200);
        //console.log(anchor);
        console.log(document.getElementById(elem.hash.slice(1)));
        //hjen suis la bg
        anime({
          targets: "html, body",
          scrollTop: (document.getElementById(elem.hash.slice(1)).getBoundingClientRect().top - document.body.scrollTop) - 95,
          duration: 800,
          elasticity: 0,
          easing: 'linear'
        });

      }
    }
  });
});
