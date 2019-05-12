import {
  scrollToTop,
  s,
  d,
  ns,
  nd,
  loadTiming,
  detectmob
} from '../../app.js';

import fade from 'fade';



// Wrap every letter in a span
const loadText = document.querySelectorAll('.load-text');

[...loadText].forEach(function (el) {
  el.innerHTML = el.contentText.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");
});



var loadbar = document.getElementsByClassName('preloader-wrap')[0];
var offsetLoader = window.pageYOffset;
loadbar.style.top = offsetLoader + "px";

//define blocks to fade
let loadtext = loadbar.querySelector('.text-wrapper');
let bartitle = document.querySelector('.loadbar h1');
let barpercent = document.getElementsByClassName('percentage');

fade.in(bartitle, 100, function () {
  bartitle.style.display = "block";
});

[...barpercent].forEach(function (elem) {
  fade.in(elem, 100, function () {
    elem.style.display = "block";
  });
});

setTimeout(
  function () {
    fade.in(loadtext, 200);
  }, 400);

var width = 100,
  perfData = window.performance.timing, // The PerformanceTiming interface represents timing-related performance information for the given page.
  EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
  time = loadTiming * 1.5;

var ID = document.getElementsByClassName("percentage"),
  start = 0,
  end = 23,
  durataion = time;
if (!detectmob()) {
  animateValue(ID, start, end, durataion);
} else {
  animateValue(ID, 0, 20, 1000);
}
function animateValue(id, start, end, duration) {

  var range = end - start,
    current = start,
    increment = end > start ? 1 : -1,
    stepTime = Math.abs(Math.floor(duration / range)),
    obj = id;

  var timer = setInterval(function () {
    current += increment;
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



//};

document.addEventListener('DOMContentLoaded', function () {


  setTimeout(function () {
    fade.out(loadbar, 1000, function (elt = loadbar) {
      elt.style.display = 'none'; // set display to none after fade out
    });
  }, loadTiming * 3);

}, true);