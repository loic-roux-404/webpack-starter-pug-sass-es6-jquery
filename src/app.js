/*===============Detect Device===========*/
export function detectmob() { 
  if( navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)
  ){
     return true;
   }
  else {
     return false;
   }
 }
/*====================*/


/*====================*/
//============= Styles import
import "./assets/styles/main.scss";
import './assets/styles/bootstrap/custom.scss';
//======= Assets files (image,fonts)
require.context("./assets/fonts", true, /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/);

/*====================*/
/*scrollToTop essential function*/
document.querySelector('.toTopButton').addEventListener("click", scrollToTop, true);

export function scrollToTop() {
  anime({
    targets: "html, body",
    scrollTop: 0,
    duration:800,
    elasticity:0,
    easing:'linear'
  });
}
//loading time    || speed / val || scroll distance || no scroll
var loadTiming = 678, s = 1 / 5, d = 210,         ns = 0,  nd = 0;

export {
  s,
  d,
  ns,
  nd,
  loadTiming
};
//===========End document essentials functions==========
//================================
//===============Personnal scripts
import * as load from './assets/scripts/load.exec.js';
import * as smoothScroll from './assets/scripts/smooth-scroll.exec.js';
import * as scroll from './assets/scripts/scroll.exec.js';
import * as button from './assets/scripts/button.exec.js';
import * as video from './assets/scripts/video.exec.js';
import * as scroll_cv from './assets/scripts/scroll_cv.exec.js';

//================================
//============Set some content when page loaded
document.addEventListener("DOMContentLoaded", function () {

  //load html*/
  setTimeout(function(){
      let elemD = [].slice.call(document.getElementsByTagName('main'))[0], elemF = document.getElementById('footer');
      elemD.classList.remove('wrappers');
      elemD.style.height = 'auto';
      elemF.classList.remove('wrappers');
      elemF.style.height = 'auto';

  },loadTiming*2);

  //=============================
  /*Load video after document ready*/
  require('./assets/scripts/script.exec.js');
  require('./assets/scripts/validate.exec.js');


}, false);





