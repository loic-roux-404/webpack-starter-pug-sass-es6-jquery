import {
  s,
  d,
  loadTiming
} from '../../app';
import {
  TweenMax
} from 'gsap';


//set smooth scroll after load
setTimeout(function () {
    smoothScroll(s, d);
  },
  loadTiming
);
export function smoothScroll(s, d) {

  var $window = $(window);
  var scrollTime = s; // 1.06;
  var scrollDistance = d; //70;
  //console.log(scrollTime+'aie'+scrollDistance);

  $window.on("mousewheel DOMMouseScroll", function (event) {

    event.preventDefault();

    var delta = event.originalEvent.wheelDelta / 120 || -event.originalEvent.detail / 3;
    var scrollTop = $window.scrollTop();
    var finalScroll = scrollTop - parseInt(delta * scrollDistance);


    TweenMax.to($window, scrollTime, {
      scrollTo: {
        y: finalScroll,
        autoKill: true
      },
      ease: Expo.easeOut,
      overwrite: 5
    });
  });
}





$(function () {

  /**
   * Smooth scrolling to page anchor on click
   **/
  $("a[href*='#']:not([href='#'])").click(function () {
    if (
      location.hostname == this.hostname && this.pathname.replace(/^\//, "") == location.pathname.replace(/^\//, "")
    ) {
      var anchor = $(this.hash);
      anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) + "]");
      if (anchor.length) {
        $("html, body").animate({
          scrollTop: anchor.offset().top - 250
        }, 1500);
      }
    }
  });
});
