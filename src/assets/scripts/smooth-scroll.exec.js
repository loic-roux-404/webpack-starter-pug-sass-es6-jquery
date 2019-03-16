import {
  s,
  d,
  loadTiming,
  detectmob
} from '../../app';
import {
  TweenLite
} from 'gsap';
//import assign from 'core-js/fn/object/assign';
//import assign from 'core-js/modules/es6.object.assign';
const html = document.getElementsByTagName('html')[0];
 const body =  document.getElementsByTagName('body')[0];
//set smooth scroll after load
smoothScroll(0, 0);


// document.querySelector('html').Object.assign(function(){


 


export function smoothScroll(s, d) {

  var $window = $(window);
  var scrollTime = s; // 1.06;
  var scrollDistance = d; //70;
  //console.log(scrollTime+'aie'+scrollDistance);

  if (detectmob() != true) {

    $window.on("mousewheel DOMMouseScroll", function (event) {

      event.preventDefault();

      var delta = event.originalEvent.wheelDelta / 120 || -event.originalEvent.detail / 3;
      var scrollTop = $window.scrollTop();
      var finalScroll = scrollTop - parseInt(delta * scrollDistance);


      TweenLite.to($window, scrollTime, {
        scrollTo: {
          y: finalScroll,
          autoKill: true
        },
        ease: Power4.Linear,
        overwrite: 5
      });
    });
  } else {
      html.style.overflow = "auto";
      body.style.overflow = "auto";
  }
}




/**
 * Smooth scrolling to page anchor on click
 **/
document.querySelectorAll("a[href*='#']:not([href='#'])").forEach(function (elem) {
  elem.addEventListener('click', function () {
    console.log(elem);
    if (
      location.hostname == elem.hostname && elem.pathname.replace(/^\//, "") == location.pathname.replace(/^\//, "")
    ) {
      var anchor = $(this.hash);
      anchor = anchor.length ? anchor : document.querySelector("[name=" + this.hash.slice(1) + "]");
      if (anchor.length) {
        $("html, body").animate({
          scrollTop: anchor.offset().top - 50,
        }, 1200);

        //fix navbar
        //var nav = document.querySelectorAll('nav a');
        // console.log(nav.querySelector(a)[0]);
        // if (this === nav.querySelector(a)[0] || nav.querySelector(a)[1] || nav.querySelector(a)[2]) {
        //   $('.navbar').css({
        //     'padding-top': 60
        //   });
        //   console.log('succès');
        // }

      }
    }
  });



  // let nav = document.querySelector('nav');
  // let navA = nav.querySelectorAll('a');

  // for (var el in navA) {
  //   el.addEventListener('click', fixA(), true);
  // }

  // function fixA(e) {
  //   e.preventDefault();
  //   Object.assign(nav, {
  //     paddingTop: 60
  //   });
  // }
  //console.log(nav);
});
