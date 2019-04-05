import {
  scrollToTop,
  s,
  d,
  ns,
  nd,
  loadTiming
} from '../../app.js';
import {
  smoothScroll
} from './smooth-scroll.exec';

//import assign from 'core-js/modules/es6.object.assign';


// Wrap every letter in a span
const loadText = document.querySelectorAll('.load-text');

[...loadText].forEach(function (el) {
  el.innerHTML = el.contentText.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");
});



var loadbar = document.getElementsByClassName('preloader-wrap')[0];

function loader() {

  //console.log("bar" + loadbar.offsetTop);
  var offsetLoader = window.pageYOffset;
  //console.log(offsetLoader);

  loadbar.style.top = offsetLoader + "px";
  //console.log(loadbar.style.top);

}


$(window).on('load',function(){

  loader();

  //scrollToTop();
  var loadtext = $('.load-text');

  loadtext.fadeIn(500, "easeOutQuart");

  setTimeout(
    function () {
      $('.loadbar h1').fadeIn(300);
      $('.percentage').fadeIn(200);

    }, 300);

  var width = 100,
    perfData = window.performance.timing, // The PerformanceTiming interface represents timing-related performance information for the given page.
    EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
    time = loadTiming;

  var ID = document.getElementsByClassName("percentage"),
    start = 0,
    end = 24,
    durataion = time;
  animateValue(ID, start, end, durataion);

  function animateValue(id, start, end, duration) {

    var range = end - start,
      current = start,
      increment = end > start ? 1 : -1,
      stepTime = Math.abs(Math.floor(duration / range)),
      obj = id;

    var timer = setInterval(function () {
      current += increment;
      //$(obj).text(current + "%");
      [...obj].forEach(function (el) {
        el.style.width = current + '%';
      });
      //obj.innerHTML = current;
      if (current == end) {
        clearInterval(timer);
        //letter effect

      }
    }, stepTime);
  }

  //======-- Fading Out Loadbar on Finised--======\\
  // ======before end======\\

  //portfolio write style effect and show
  // Wrap every letter in a span

  const ml10 = document.querySelector('.ml10');
  const letters = document.querySelectorAll('.letters');

  setTimeout(function () {

    ml10.classList.add('d-block');
    //letters.each(function(){
    [...letters].forEach(function (el) {
      el.innerHTML = el.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");
    });

    anime.timeline({
        loop: false
      })
      .add({
        targets: '.ml10 .letter',
        rotateY: [-90, 0],
        duration: 3700,
        delay: function (el, i) {
          return 120 * i;
        }
      }).add({
        targets: '.ml10',
        opacity: 0,
        duration: 4000,
        easing: "easeOutExpo",
        delay: 1000
      });

  }, time - 1000);
  // end
  setTimeout(function () {
    $('.preloader-wrap').fadeOut(1050);
    smoothScroll(s, d);
    //document.querySelector('.preloader-wrap').remove();

  }, time*2.7);


});
